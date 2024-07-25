import styled from 'styled-components'

export const HomeSearchVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const HomeVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 0px;
  margin-top: 0px;
  padding-top: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 577px and max-width:767px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 18px;
  @media screen and (max-width: 576px) {
    margin-right: 18px;
  }
`

export const SearchInput = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  border: 1px solid #7e858e;
  padding: 6px 15px;
  outline: none;
  width: 30%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  @media screen and (max-width: 767px) {
    width: 60%;
    padding: 8px 15px;
  }
  @media screen and (max-width: 576px) {
    width: 90%;
    padding: 8px 15px;
  }
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid #7e858e;
  padding: 7.6px 25px;
  outline: none;
  cursor: pointer;
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#f9f9f9')};
  @media screen and (max-width: 767px) {
    padding: 10px 25px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px 25px;
  }
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 83vw;
  background-color: ${props => (props.isDarkTheme ? '#181818' : " '#f9f9f9'")};
  @media screen and (max-width: 767px) {
    min-height: 70vh;
    width: 100vw;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const FailureImage = styled.img`
  height: 250px;
  width: 290px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 15px;
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
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
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  margin-top: 40px;
  @media screen and (max-width: 767px) {
    min-height: 90vh;
  }
`
export const NoVideosImage = styled.img`
  height: 250px;
  width: 290px;
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
export const NoVideosMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-top: 15px;
  margin-bottom: 15px;
`
export const NoVideosButton = styled.button`
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
