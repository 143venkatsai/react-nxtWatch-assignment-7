import {Component} from 'react'
import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import Navbar from '../Navbar'
import SavedVideoCard from '../SavedVideoCard'
import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosLgContainer,
  Videos,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosMessage,
  SavedContainer,
  SavedTopSection,
  SavedImageContainer,
  SavedHeading,
  SavedVideosContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideos = (isDarkTheme, savedVideos) => {
    const savedVideosLength = savedVideos.length > 0
    return savedVideosLength ? (
      <SavedContainer>
        <SavedTopSection isDarkTheme={isDarkTheme}>
          <SavedImageContainer isDarkTheme={isDarkTheme}>
            <HiFire color="#ff0000" size={30} />
          </SavedImageContainer>
          <SavedHeading isDarkTheme={isDarkTheme}>Saved Videos</SavedHeading>
        </SavedTopSection>
        <SavedVideosContainer
          isDarkTheme={isDarkTheme}
          data-testid="savedVideos"
        >
          {savedVideos.map(eachVideo => (
            <SavedVideoCard videoDetails={eachVideo} key={eachVideo.id} />
          ))}
        </SavedVideosContainer>
      </SavedContainer>
    ) : (
      <NoSavedVideosContainer isDarkTheme={isDarkTheme}>
        <NoSavedVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <NoSavedVideosHeading isDarkTheme={isDarkTheme}>
          No saved Videos found
        </NoSavedVideosHeading>
        <NoSavedVideosMessage>
          You can save your videos while watching them
        </NoSavedVideosMessage>
      </NoSavedVideosContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value

          return (
            <>
              <Header />
              <SavedVideosLgContainer>
                <Navbar />
                <Videos data-testid="savedVideos">
                  {this.renderSavedVideos(isDarkTheme, savedVideos)}
                </Videos>
              </SavedVideosLgContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
