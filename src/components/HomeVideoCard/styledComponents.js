import styled from 'styled-components'

export const HomeVideoItem = styled.li`
  list-style-type: none;
  margin-left: 20px;
  margin-right: 20px;
  width: 29%;
  height: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 30%;
    margin-right: 120px;
    height: 380px;
  }
  @media screen and (max-width: 576px) {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    height: 350px;
    display: flex;
    flex-direction: column;
  }
`
export const HomeThumbnailImage = styled.img`
  height: 220px;
  width: 380px;
  @media screen and (max-width: 767px) {
    height: 200px;
    width: 350px;
  }
  @media screen and (max-width: 576px) {
    height: 230px;
    width: 100%;
  }
`

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const VideoProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-top: 10px;
  align-self: flex-start;
  @media screen and (max-width: 567px) {
    margin-left: 10px;
    height: 40px;
    width: 40px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#0f0f0f')};
  margin-bottom: 0px;
  line-height: 22px;
  margin-top: 10px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ChannelViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-right: 5px;
`
export const VideoPublished = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-left: 5px;
`

export const ChannelNameViewContainerSm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 578px) {
    display: none;
  }
`
export const ChannelNameSm = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 577px) {
    display: none;
  }
`
