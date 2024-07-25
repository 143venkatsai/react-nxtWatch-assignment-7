import {Component} from 'react'
import {IoClose} from 'react-icons/io5'

import Navbar from '../Navbar'
import Header from '../Header'
import HomeVideos from '../HomeVideos'

import {
  HomeContainer,
  HomeBannerContainer,
  BannerLeftSection,
  BannerImage,
  BannerMessage,
  BannerButton,
  BannerCloseButton,
  HomeLgContainer,
  Videos,
} from './styledComponents'

class Home extends Component {
  state = {toggleBanner: false}

  onCloseBanner = () => {
    this.setState(prevState => ({toggleBanner: !prevState.toggleBanner}))
  }

  renderBannerSection = () => {
    const {toggleBanner} = this.state
    return (
      <HomeBannerContainer toggleBanner={toggleBanner} data-testid="banner">
        <BannerLeftSection>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerMessage>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerMessage>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerLeftSection>
        <BannerCloseButton
          type="button"
          onClick={this.onCloseBanner}
          data-testid="close"
        >
          <IoClose size={25} />
        </BannerCloseButton>
      </HomeBannerContainer>
    )
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeLgContainer>
          <Navbar />
          <Videos data-testis="home">
            {this.renderBannerSection()}
            <HomeVideos />
          </Videos>
        </HomeLgContainer>
      </HomeContainer>
    )
  }
}
export default Home
