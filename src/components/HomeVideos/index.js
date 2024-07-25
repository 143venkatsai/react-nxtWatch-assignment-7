import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeSearchVideoContainer,
  HomeVideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureMessage,
  FailureButton,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosMessage,
  NoVideosButton,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class HomeVideos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    homeVideos: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickRetryButton = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        id: video.id,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeVideos = isDarkTheme => {
    const {homeVideos} = this.state
    const showVideosLength = homeVideos.length > 0

    return showVideosLength ? (
      <HomeVideosContainer isDarkTheme={isDarkTheme}>
        {homeVideos.map(eachVideo => (
          <HomeVideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </HomeVideosContainer>
    ) : (
      <NoVideosContainer isDarkTheme={isDarkTheme}>
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NoVideosHeading isDarkTheme={isDarkTheme}>
          No Search results found
        </NoVideosHeading>
        <NoVideosMessage>
          Try different key words or remove search filters
        </NoVideosMessage>
        <NoVideosButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </NoVideosButton>
      </NoVideosContainer>
    )
  }

  renderLoadingView = isDarkTheme => {
    const loadingColor = isDarkTheme ? '#ffffff' : '#181818'
    return (
      <LoadingContainer data-testid="loader" isDarkTheme={isDarkTheme}>
        <Loader type="ThreeDots" color={loadingColor} height="50" width="50" />
      </LoadingContainer>
    )
  }

  renderFailureView = isDarkTheme => {
    const failureImage = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer isDarkTheme={isDarkTheme}>
        <FailureImage src={failureImage} alt="failure view" />
        <FailureHeading isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureMessage isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request.
        </FailureMessage>
        <FailureMessage isDarkTheme={isDarkTheme}>
          Please try again.
        </FailureMessage>
        <FailureButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </FailureButton>
      </FailureContainer>
    )
  }

  renderHomeVideosStatus = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  onClickSearchButton = () => {
    this.getHomeVideos()
  }

  renderSearchInput = isDarkTheme => {
    const {searchInput} = this.state
    const iconColor = isDarkTheme ? '#7e858e' : ' #212121'
    return (
      <SearchContainer>
        <SearchInput
          type="search"
          isDarkTheme={isDarkTheme}
          value={searchInput}
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onEnterSearchInput}
          data-testid="searchButton"
        />
        <SearchButton
          type="button"
          onClick={this.onClickSearchButton}
          isDarkTheme={isDarkTheme}
        >
          <BsSearch color={iconColor} />
        </SearchButton>
      </SearchContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeSearchVideoContainer isDarkTheme={isDarkTheme}>
              {this.renderSearchInput(isDarkTheme)}
              {this.renderHomeVideosStatus(isDarkTheme)}
            </HomeSearchVideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeVideos
