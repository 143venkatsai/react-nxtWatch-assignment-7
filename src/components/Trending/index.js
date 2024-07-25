import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import TrendingVideoCard from '../TrendingVideoCard'
import Navbar from '../Navbar'

import {
  TrendingContainer,
  TrendingLgContainer,
  TrendingTopSection,
  TrendingImageContainer,
  TrendingHeading,
  TrendingVideosContainer,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureMessage,
  FailureButton,
  Videos,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingApiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(video => ({
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetryButton = () => {
    this.getTrendingVideos()
  }

  renderTrendingVideos = isDarkTheme => {
    const {trendingVideos} = this.state

    return (
      <TrendingContainer>
        <TrendingTopSection isDarkTheme={isDarkTheme}>
          <TrendingImageContainer isDarkTheme={isDarkTheme}>
            <HiFire color="#ff0000" size={30} />
          </TrendingImageContainer>
          <TrendingHeading isDarkTheme={isDarkTheme}>Trending</TrendingHeading>
        </TrendingTopSection>
        <TrendingVideosContainer
          isDarkTheme={isDarkTheme}
          data-testid="trending"
        >
          {trendingVideos.map(eachVideo => (
            <TrendingVideoCard videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </TrendingVideosContainer>
      </TrendingContainer>
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

  renderTrendingStatus = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideos(isDarkTheme)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <TrendingLgContainer>
                <Navbar />
                <Videos> {this.renderTrendingStatus(isDarkTheme)}</Videos>
              </TrendingLgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
