import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundMessage,
  NotFoundLgContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundLgContainer>
            <Navbar />
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundMessage>
                We are sorry, the page you requested could not be found
              </NotFoundMessage>
            </NotFoundContainer>
          </NotFoundLgContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
