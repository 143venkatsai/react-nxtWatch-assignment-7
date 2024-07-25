import styled from 'styled-components'

export const SavedVideosLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10vh;
`
export const Videos = styled.div`
  margin-left: 17%;
  @media screen and (max-width: 767px) {
    margin-left: 0%;
  }
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 90vh;
  width: 83vw;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const NoSavedVideosImage = styled.img`
  height: 300px;
  width: 400px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 15px;
`
export const NoSavedVideosMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const SavedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 83vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`

export const SavedTopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 0px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`
export const SavedImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
`
export const SavedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#212121')};
  margin-left: 12px;
`

export const SavedVideosContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 30px 30px;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 576px) {
    padding: 30px 0px;
  }
`
