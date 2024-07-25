import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import GameVideoCard from '../GameVideoCard'
import Navbar from '../Navbar'

import {
  GamingContainer,
  GamingLgContainer,
  GamingTopSection,
  GameImageContainer,
  GameHeading,
  GamingVideosContainer,
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
  inProgress: 'In_PROGRESS',
  failure: 'FAILURE',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const gamingApIUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingApIUrl, options)
    if (response.ok) {
      const data = await response.json()
      const UpdatedData = data.videos.map(video => ({
        id: video.id,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      this.setState({
        gamingVideos: UpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
      console.log('Failure')
    }
  }

  onClickRetryButton = () => {
    this.getGamingVideos()
  }

  renderGamingView = isDarkTheme => {
    const {gamingVideos} = this.state
    return (
      <GamingContainer>
        <GamingTopSection isDarkTheme={isDarkTheme}>
          <GameImageContainer isDarkTheme={isDarkTheme}>
            <SiYoutubegaming color="#ff0000" size={30} />
          </GameImageContainer>
          <GameHeading isDarkTheme={isDarkTheme}>Gaming</GameHeading>
        </GamingTopSection>
        <GamingVideosContainer isDarkTheme={isDarkTheme} data-testid="gaming">
          {gamingVideos.map(eachVideo => (
            <GameVideoCard videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </GamingVideosContainer>
      </GamingContainer>
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

  renderGamingStatus = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingView(isDarkTheme)
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
              <GamingLgContainer>
                <Navbar />
                <Videos>{this.renderGamingStatus(isDarkTheme)}</Videos>
              </GamingLgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
