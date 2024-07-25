import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10vh;
  @media screen and (max-width: 576px) {
    padding-top: 9vh;
  }
`

export const TrendingTopSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 30px;
  margin-bottom: 0px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
`
export const TrendingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#d7dfe9')};
`

export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#212121')};
  margin-left: 12px;
`
export const TrendingVideosContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 30px 30px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 576px) {
    padding: 30px 0px;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 83vw;
  background-color: ${props => (props.isDarkTheme ? '#181818' : " '#f9f9f9'")};
  @media screen and (max-width: 767px) {
    min-height: 100vh;
    width: 100vw;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
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
export const Videos = styled.div`
  margin-left: 17%;
  @media screen and (max-width: 767px) {
    margin-left: 0%;
  }
`
