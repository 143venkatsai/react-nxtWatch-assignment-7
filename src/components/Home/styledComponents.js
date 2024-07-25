import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeBannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 220px;
  width: 82vw;
  padding: 30px 40px;
  display: ${props => (props.toggleBanner ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const BannerLeftSection = styled.div`
  align-items: center;
`

export const BannerImage = styled.img`
  height: 40px;
  width: 150px;
`

export const BannerMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #0f0f0f;
`

export const BannerButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: #0f0f0f;
  background-color: transparent;
  border: 1.5px solid #0f0f0f;
  padding: 8px 15px;
  margin-top: 20px;
`
export const BannerCloseButton = styled.button`
  align-self: flex-start;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const HomeLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 10vh;
  @media screen and (max-width: 576px) {
    margin-top: 9vh;
  }
`
export const Videos = styled.div`
  margin-left: 17%;
  @media screen and (max-width: 767px) {
    margin-left: 0%;
  }
`
