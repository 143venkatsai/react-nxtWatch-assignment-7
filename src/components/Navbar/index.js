import {Link, Redirect} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {
  NavbarContainer,
  NavbarControlContainer,
  NavbarItem,
  ItemText,
  NavbarContactSection,
  ContactText,
  NavbarLogoSection,
  NavbarWebsiteImage,
  NavbarMessage,
} from './styledComponents'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const activeBgColor = isDarkTheme ? '#424242' : '#e2e8f0'

      const onClickChangeTabHome = () => {
        changeTab('Home')
      }

      const onClickChangeTabTrending = () => {
        changeTab('Trending')
      }

      const onClickChangeTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickChangeTabSaved = () => {
        changeTab('Saved')
      }

      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <NavbarControlContainer>
            <NavbarItem
              key="home"
              bgColor={activeTab === 'Home' ? activeBgColor : 'none'}
              onClick={onClickChangeTabHome}
            >
              <Link to="/" className="nav-link">
                <AiFillHome
                  size={20}
                  color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                />
                <ItemText
                  isDarkTheme={isDarkTheme}
                  fontWeight={activeTab === 'Home' ? 'bold' : 'normal'}
                >
                  Home
                </ItemText>
              </Link>
            </NavbarItem>
            <NavbarItem
              key="trending"
              bgColor={activeTab === 'Trending' ? activeBgColor : 'none'}
              onClick={onClickChangeTabTrending}
            >
              <Link to="/trending" className="nav-link">
                <HiFire
                  size={20}
                  color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                />
                <ItemText
                  isDarkTheme={isDarkTheme}
                  fontWeight={activeTab === 'Trending' ? 'bold' : 'normal'}
                >
                  Trending
                </ItemText>
              </Link>
            </NavbarItem>
            <NavbarItem
              key="gaming"
              bgColor={activeTab === 'Gaming' ? activeBgColor : 'none'}
              onClick={onClickChangeTabGaming}
            >
              <Link to="/gaming" className="nav-link">
                <SiYoutubegaming
                  size={20}
                  color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                />
                <ItemText
                  isDarkTheme={isDarkTheme}
                  fontWeight={activeTab === 'Gaming' ? 'bold' : 'normal'}
                >
                  Gaming
                </ItemText>
              </Link>
            </NavbarItem>
            <NavbarItem
              key="saved"
              bgColor={activeTab === 'Saved' ? activeBgColor : 'none'}
              onClick={onClickChangeTabSaved}
            >
              <Link to="/saved-videos" className="nav-link">
                <MdPlaylistAdd
                  size={20}
                  color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                />
                <ItemText
                  isDarkTheme={isDarkTheme}
                  fontWeight={activeTab === 'Saved' ? 'bold' : 'normal'}
                >
                  Saved videos
                </ItemText>
              </Link>
            </NavbarItem>
          </NavbarControlContainer>
          <NavbarContactSection>
            <ContactText isDarkTheme={isDarkTheme}>CONTACT US</ContactText>
            <NavbarLogoSection>
              <NavbarWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <NavbarWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <NavbarWebsiteImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </NavbarLogoSection>
            <NavbarMessage isDarkTheme={isDarkTheme}>
              Enjoy! now to see your channels and recommendations!
            </NavbarMessage>
          </NavbarContactSection>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
