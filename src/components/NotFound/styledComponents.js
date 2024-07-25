import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 90vh;
  margin-left: 17%;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-left: 0%;
  }
`

export const NotFoundLgContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10vh;
`

export const NotFoundImage = styled.img`
  height: 350px;
  width: 350px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  margin-bottom: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const NotFoundMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #64748b;
  margin-top: 0px;
`
