import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedItem,
  SavedCardThumbnailImage,
  SavedCardDetails,
  SavedCardTitle,
  SavedCardName,
  SavedCardViewsContainer,
  SavedCardViews,
  SavedCardPublished,
  SavedCardSmContainer,
  SavedCardProfileImage,
  SavedCardSmDetails,
  SavedCardSmTitle,
  SavedCardSmViewsContainer,
  SavedCardSmName,
  SavedCardSmViews,
  SavedCardSmPublished,
} from './styledComponents'

const SavedVideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    title,
    name,
    id,
    viewCount,
    publishedAt,
    profileImageUrl,
  } = videoDetails

  const dateFormat = formatDistanceToNow(new Date(publishedAt))
  const dateList = dateFormat.split(' ')
  const formattedDate = dateList[1]

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <SavedItem>
            <Link to={`/videos/${id}`} className="trend-link">
              <SavedCardThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <SavedCardDetails>
                <SavedCardTitle isDarkTheme={isDarkTheme}>
                  {title}
                </SavedCardTitle>
                <SavedCardName>{name}</SavedCardName>
                <SavedCardViewsContainer>
                  <SavedCardViews>{viewCount} Views</SavedCardViews>
                  <BsDot color="#475569" />
                  <SavedCardPublished>
                    {formattedDate} years ago
                  </SavedCardPublished>
                </SavedCardViewsContainer>
              </SavedCardDetails>
              <SavedCardSmContainer>
                <SavedCardProfileImage src={profileImageUrl} alt="profile" />
                <SavedCardSmDetails>
                  <SavedCardSmTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </SavedCardSmTitle>
                  <SavedCardSmViewsContainer>
                    <SavedCardSmName>{name}</SavedCardSmName>
                    <BsDot color="#475569" />
                    <SavedCardSmViews>{viewCount} Views</SavedCardSmViews>
                    <BsDot color="#475569" />
                    <SavedCardSmPublished>
                      {formattedDate} years ago
                    </SavedCardSmPublished>
                  </SavedCardSmViewsContainer>
                </SavedCardSmDetails>
              </SavedCardSmContainer>
            </Link>
          </SavedItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoCard
