import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  GameItem,
  GameThumbnailImg,
  GameName,
  GameViews,
} from './styledComponents'

import './index.css'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {thumbnailUrl, title, id, viewCount} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GameItem>
            <Link to={`/videos/${id}`} className="game-link">
              <GameThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <GameName isDarkTheme={isDarkTheme}>{title}</GameName>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </Link>
          </GameItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameVideoCard
