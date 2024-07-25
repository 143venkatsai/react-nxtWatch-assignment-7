import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'

import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import Navbar from '../Navbar'

import './index.css'

import {
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureMessage,
  FailureButton,
  VideoItemContainer,
  VideoTitle,
  VideoViewsLikesContainer,
  VideoViewsContainer,
  VideoViews,
  VideoPublished,
  VideoLikesDislikesContainer,
  VideoLikesSection,
  VideoLikesText,
  VideoDislikesSection,
  VideoDislikesText,
  VideoSaveSection,
  VideoSaveText,
  HorizontalLine,
  VideoProfileContainer,
  VideoProfileImage,
  VideoNameContainer,
  VideoChannelName,
  VideoSubscribers,
  VideoDescription,
  //   VideoDescriptionSm,
  VideoItemLgContainer,
  VideosItem,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
  failure: 'FAIlure',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  onClickRetryButton = () => {
    this.getVideoItemDetails()
  }

  getFetchedData = data => ({
    name: data.channel.name,
    profileImageUrl: data.channel.profile_image_url,
    subscriberCount: data.channel.subscriber_count,
    description: data.description,
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    videoUrl: data.video_url,
    viewCount: data.view_count,
  })

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.getFetchedData(data.video_details)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideoItemView = (isDarkTheme, addVideo) => {
    const {videoDetails, isLiked, isDisLiked, isSaved} = this.state

    const {
      videoUrl,
      viewCount,
      publishedAt,
      profileImageUrl,
      title,
      name,
      description,
      subscriberCount,
    } = videoDetails

    const dateFormat = formatDistanceToNow(new Date(publishedAt))
    const dateList = dateFormat.split(' ')
    const formattedDate = dateList[1]

    const onClickSaveVideo = () => {
      addVideo(videoDetails)
      this.setState(prevState => ({isSaved: !prevState.isSaved}))
    }

    const liked = isLiked ? '#2563eb' : '#64748b'
    const disLiked = isDisLiked ? '#2563eb' : '#64748b'
    const saved = isSaved ? '#2563eb' : '#64748b'
    const saveText = isSaved ? 'Saved' : 'Save'

    const onClickLike = () => {
      this.setState(prevState => ({
        isLiked: !prevState.isLiked,
        isDisLiked: false,
      }))
    }

    const onClickDislike = () => {
      this.setState(prevState => ({
        isDisLiked: !prevState.isDisLiked,
        isLiked: false,
      }))
    }

    return (
      <VideoItemContainer
        isDarkTheme={isDarkTheme}
        data-testid="videoItemDetails"
      >
        <ReactPlayer url={videoUrl} className="react-player" />
        <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
        <VideoViewsLikesContainer>
          <VideoViewsContainer>
            <VideoViews isDarkTheme={isDarkTheme}>{viewCount} Views</VideoViews>
            <BsDot color="#475569" />
            <VideoPublished isDarkTheme={isDarkTheme}>
              {formattedDate} years ago
            </VideoPublished>
          </VideoViewsContainer>
          <VideoLikesDislikesContainer>
            <VideoLikesSection onClick={onClickLike}>
              <BiLike size={20} color={liked} />
              <VideoLikesText isDarkTheme={isDarkTheme} liked={liked}>
                Like
              </VideoLikesText>
            </VideoLikesSection>
            <VideoDislikesSection onClick={onClickDislike}>
              <BiDislike size={20} color={disLiked} />
              <VideoDislikesText isDarkTheme={isDarkTheme} disLiked={disLiked}>
                Dislike
              </VideoDislikesText>
            </VideoDislikesSection>
            <VideoSaveSection onClick={onClickSaveVideo}>
              <MdPlaylistAdd size={20} color={saved} />
              <VideoSaveText isDarkTheme={isDarkTheme} saved={saved}>
                {saveText}
              </VideoSaveText>
            </VideoSaveSection>
          </VideoLikesDislikesContainer>
        </VideoViewsLikesContainer>
        <HorizontalLine />
        <VideoProfileContainer>
          <VideoProfileImage src={profileImageUrl} alt="channel logo" />
          <VideoNameContainer>
            <VideoChannelName isDarkTheme={isDarkTheme}>
              {name}
            </VideoChannelName>
            <VideoSubscribers isDarkTheme={isDarkTheme}>
              {subscriberCount} subscribers
            </VideoSubscribers>
            <VideoDescription isDarkTheme={isDarkTheme}>
              {description}
            </VideoDescription>
          </VideoNameContainer>
        </VideoProfileContainer>
        {/* <VideoDescriptionSm isDarkTheme={isDarkTheme}>
          {description}
        </VideoDescriptionSm> */}
      </VideoItemContainer>
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
          We are having some trouble to complete your request. <br />
          Please try again.
        </FailureMessage>
        <FailureButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </FailureButton>
      </FailureContainer>
    )
  }

  renderVideoItemStatus = (isDarkTheme, addVideo) => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemView(isDarkTheme, addVideo)
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
          const {isDarkTheme, addVideo} = value

          return (
            <>
              <Header />
              <VideoItemLgContainer>
                <Navbar />
                <VideosItem>
                  {this.renderVideoItemStatus(isDarkTheme, addVideo)}
                </VideosItem>
              </VideoItemLgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
