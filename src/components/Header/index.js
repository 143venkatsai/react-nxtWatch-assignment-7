import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoClose} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {IoMdMenu} from 'react-icons/io'
// import {AiFillHome} from 'react-icons/ai'
// import {HiFire} from 'react-icons/hi'
// import {SiYoutubegaming} from 'react-icons/si'
// import {MdPlaylistAdd, MdClose} from 'react-icons/md'

import 'reactjs-popup/dist/index.css'

import ThemeContext from '../../context/ThemeContext'

import {
  HeaderContainer,
  HeaderLogo,
  HeaderControlSection,
  HeaderThemeButton,
  HeaderProfileIcon,
  HeaderLogoutButton,
  HeaderMenuButton,
  HeaderSmLogoutButton,
  PopupLogoutContainer,
  PopupAlertText,
  PopupButtonContainer,
  PopupCloseButton,
  PopupLogoutButton,
  MenuPopupSmContainer,
  MenuCloseButton,
  MenuControlContainer,
  MenuItem,
  MenuText,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme, activeTab, changeTab} = value
      const imageLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const mode = isDarkTheme ? (
        <FiSun size={30} color="#ffffff" />
      ) : (
        <FaMoon size={30} />
      )

      const onClickChangeTheme = () => {
        onChangeTheme()
      }

      const iconColor = isDarkTheme ? '#ffffff' : '#000000'

      const onClickLogoutButton = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

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
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <HeaderLogo src={imageLogo} alt="website logo" />
          </Link>
          <HeaderControlSection>
            <HeaderThemeButton
              type="button"
              onClick={onClickChangeTheme}
              data-testid="theme"
            >
              {mode}
            </HeaderThemeButton>
            <HeaderProfileIcon
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <HeaderLogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </HeaderLogoutButton>
              }
            >
              {close => (
                <PopupLogoutContainer isDarkTheme={isDarkTheme}>
                  <PopupAlertText isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </PopupAlertText>
                  <PopupButtonContainer>
                    <PopupCloseButton type="button" onClick={() => close()}>
                      Cancel
                    </PopupCloseButton>
                    <PopupLogoutButton
                      type="button"
                      onClick={onClickLogoutButton}
                    >
                      Confirm
                    </PopupLogoutButton>
                  </PopupButtonContainer>
                </PopupLogoutContainer>
              )}
            </Popup>
            {/* MENU POPUP FUNCTIONALITY */}
            <Popup
              modal
              trigger={
                <HeaderMenuButton type="button">
                  <IoMdMenu size={40} color={iconColor} />
                </HeaderMenuButton>
              }
            >
              {close => (
                <MenuPopupSmContainer isDarkTheme={isDarkTheme}>
                  <MenuCloseButton>
                    <IoClose
                      size={35}
                      color={iconColor}
                      onClick={() => close()}
                    />
                  </MenuCloseButton>
                  <MenuControlContainer>
                    <MenuItem
                      key="home"
                      bgColor={activeTab === 'Home' ? activeBgColor : 'none'}
                      onClick={onClickChangeTabHome}
                    >
                      <Link to="/" className="nav-link">
                        <AiFillHome
                          size={25}
                          color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText
                          isDarkTheme={isDarkTheme}
                          fontWeight={activeTab === 'Home' ? 'bold' : 'normal'}
                        >
                          Home
                        </MenuText>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="trending"
                      bgColor={
                        activeTab === 'Trending' ? activeBgColor : 'none'
                      }
                      onClick={onClickChangeTabTrending}
                    >
                      <Link to="/trending" className="nav-link">
                        <HiFire
                          size={25}
                          color={
                            activeTab === 'Trending' ? '#ff0b37' : '#909090'
                          }
                        />
                        <MenuText
                          isDarkTheme={isDarkTheme}
                          fontWeight={
                            activeTab === 'Trending' ? 'bold' : 'normal'
                          }
                        >
                          Trending
                        </MenuText>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="gaming"
                      bgColor={activeTab === 'Gaming' ? activeBgColor : 'none'}
                      onClick={onClickChangeTabGaming}
                    >
                      <Link to="/gaming" className="nav-link">
                        <SiYoutubegaming
                          size={25}
                          color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText
                          isDarkTheme={isDarkTheme}
                          fontWeight={
                            activeTab === 'Gaming' ? 'bold' : 'normal'
                          }
                        >
                          Gaming
                        </MenuText>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      key="saved"
                      bgColor={activeTab === 'Saved' ? activeBgColor : 'none'}
                      onClick={onClickChangeTabSaved}
                    >
                      <Link to="/saved-videos" className="nav-link">
                        <MdPlaylistAdd
                          size={25}
                          color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                        />
                        <MenuText
                          isDarkTheme={isDarkTheme}
                          fontWeight={activeTab === 'Saved' ? 'bold' : 'normal'}
                        >
                          Saved videos
                        </MenuText>
                      </Link>
                    </MenuItem>
                  </MenuControlContainer>
                </MenuPopupSmContainer>
              )}
            </Popup>
            {/* MENU POPUP FUNCTIONALITY */}

            <Popup
              modal
              trigger={
                <HeaderSmLogoutButton type="button">
                  <FiLogOut size={30} color={iconColor} />
                </HeaderSmLogoutButton>
              }
            >
              {close => (
                <PopupLogoutContainer isDarkTheme={isDarkTheme}>
                  <PopupAlertText isDarkTheme={isDarkTheme}>
                    Are you sure, you want to logout
                  </PopupAlertText>
                  <PopupButtonContainer>
                    <PopupCloseButton type="button" onClick={() => close()}>
                      Cancel
                    </PopupCloseButton>
                    <PopupLogoutButton
                      type="button"
                      onClick={onClickLogoutButton}
                    >
                      Confirm
                    </PopupLogoutButton>
                  </PopupButtonContainer>
                </PopupLogoutContainer>
              )}
            </Popup>
          </HeaderControlSection>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
