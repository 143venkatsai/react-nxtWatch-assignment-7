import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeVideoItem,
  HomeThumbnailImage,
  VideoContainer,
  VideoProfileImage,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ChannelViewsContainer,
  ViewCount,
  VideoPublished,
  ChannelNameViewContainerSm,
  ChannelNameSm,
} from './styledComponents'

import './index.css'

const HomeVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    name,
    id,
    viewCount,
    publishedAt,
  } = videoDetails

  const dateFormat = formatDistanceToNow(new Date(publishedAt))
  const dateList = dateFormat.split(' ')
  const formattedDate = dateList[1]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeVideoItem>
            <Link to={`/videos/${id}`} className="home-link">
              <HomeThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoContainer>
                <VideoProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetails>
                  <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
                  <ChannelNameViewContainerSm>
                    <ChannelNameSm>{name}</ChannelNameSm>
                    <BsDot color="#475569" />
                    <ViewCount>{viewCount} views</ViewCount>
                    <BsDot color="#475569" />
                    <VideoPublished>{formattedDate} years ago</VideoPublished>
                  </ChannelNameViewContainerSm>
                  <ChannelName>{name}</ChannelName>
                  <ChannelViewsContainer>
                    <ViewCount>{viewCount} views </ViewCount>
                    <BsDot color="#475569" />
                    <VideoPublished>{formattedDate} years ago</VideoPublished>
                  </ChannelViewsContainer>
                </VideoDetails>
              </VideoContainer>
            </Link>
          </HomeVideoItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeVideoCard
