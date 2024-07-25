import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingItem,
  TrendingCardThumbnailImage,
  TrendingCardDetails,
  TrendingCardTitle,
  TrendingCardName,
  TrendingCardViewsContainer,
  TrendingCardViews,
  TrendingCardPublished,
  TrendingCardSmContainer,
  TrendingCardProfileImage,
  TrendingCardSmDetails,
  TrendingCardSmTitle,
  TrendingCardSmViewsContainer,
  TrendingCardSmName,
  TrendingCardSmViews,
  TrendingCardSmPublished,
} from './styledComponents'

import './index.css'

const TrendingVideoCard = props => {
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
          <TrendingItem>
            <Link to={`/videos/${id}`} className="trend-link">
              <TrendingCardThumbnailImage src={thumbnailUrl} alt="thumbnail" />
              <TrendingCardDetails>
                <TrendingCardTitle isDarkTheme={isDarkTheme}>
                  {title}
                </TrendingCardTitle>
                <TrendingCardName>{name}</TrendingCardName>
                <TrendingCardViewsContainer>
                  <TrendingCardViews>{viewCount} Views</TrendingCardViews>
                  <BsDot color="#475569" />
                  <TrendingCardPublished>
                    {formattedDate} years ago
                  </TrendingCardPublished>
                </TrendingCardViewsContainer>
              </TrendingCardDetails>
              <TrendingCardSmContainer>
                <TrendingCardProfileImage src={profileImageUrl} alt="profile" />
                <TrendingCardSmDetails>
                  <TrendingCardSmTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </TrendingCardSmTitle>
                  <TrendingCardSmViewsContainer>
                    <TrendingCardSmName>{name}</TrendingCardSmName>
                    <BsDot color="#475569" />
                    <TrendingCardSmViews>{viewCount} Views</TrendingCardSmViews>
                    <BsDot color="#475569" />
                    <TrendingCardSmPublished>
                      {formattedDate} years ago
                    </TrendingCardSmPublished>
                  </TrendingCardSmViewsContainer>
                </TrendingCardSmDetails>
              </TrendingCardSmContainer>
            </Link>
          </TrendingItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideoCard
