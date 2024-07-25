import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : " '#f9f9f9'")};
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100vh;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  margin-top: 20px;
  min-height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const FailureImage = styled.img`
  height: 250px;
  width: 290px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 15px;
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  color: #64748b;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const FailureButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 4px;
  margin-top: 15px;
  padding: 9px 27px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  padding-top: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    padding: 0px;
    min-height: 90vh;
  }
`
export const VideoItemLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10vh;
  @media screen and (max-width: 576px) {
    padding-top: 9vh;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#0f0f0f')};
  @media screen and (max-width: 767px) {
    padding: 0px 15px;
  }
`

export const VideoViewsLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const VideoViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding-bottom: -10px;
  }
`
export const VideoViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 5px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
export const VideoPublished = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
export const VideoLikesDislikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    padding-top: 0px;
  }
`
export const VideoLikesSection = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideoLikesText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  color: ${props => props.liked};
`
export const VideoDislikesSection = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideoDislikesText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  color: ${props => props.disLiked};
`
export const VideoSaveSection = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const VideoSaveText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  color: ${props => props.saved};
`
export const HorizontalLine = styled.hr`
  width: 100%;
  background-color: #616e7c;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 95%;
  }
  @media screen and (max-width: 576px) {
    padding-right: 10px;
    padding-left: 10px;
    width: 93%;
  }
`
export const VideoProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 767px) {
    padding: 0px 15px;
  }
`
export const VideoProfileImage = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`
export const VideoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const VideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#0f0f0f')};
`
export const VideoSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 10px;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#0f0f0f')};
  //   @media screen and (max-width: 576px) {
  //     display: none;
  //   }
`
// export const VideoDescriptionSm = styled.p`
//   font-family: 'Roboto';
//   font-size: 14px;
//   padding: 0px 15px;
//   color: ${props => (props.isDarkTheme ? '#ebebeb' : '#0f0f0f')};
//   @media screen and (min-width: 578px) {
//     display: none;
//   }
// `
export const VideosItem = styled.div`
  margin-left: 17%;
  width: 100vw;
  @media screen and (max-width: 767px) {
    margin-left: 0%;
  }
`
