import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: fixed;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (max-width: 576px) {
    padding: 20px 20px;
  }
`

export const HeaderLogo = styled.img`
  height: 30px;
  width: 135px;
`

export const HeaderControlSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const HeaderThemeButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const HeaderProfileIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderLogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  background-color: transparent;
  border: 1.5px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  border-radius: 2px;
  padding: 4px 18px;
  outline: none;
  cursor: pointer;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const HeaderSmLogoutButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const PopupLogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 576px) {
    width: 300px;
    height: 150px;
    margin-left: -23%;
    border-radius: 8px;
  }
`

export const PopupAlertText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#00306e')};
`

export const PopupButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const PopupCloseButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  background-color: transparent;
  border: 1px solid #616e7c;
  border-radius: 2px;
  padding: 8px 15px;
  margin-right: 20px;
  outline: none;
  cursor: pointer;
`
export const PopupLogoutButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 2px;
  padding: 8px 15px;
  outline: none;
  cursor: pointer;
`
export const MenuPopupSmContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  min-height: 100vh;
  width: 220%;
  margin-left: -115px;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (max-width: 767px) {
    width: 210%;
    margin-left: -200px;
    margin-right: -10px;
    margin-top: -10px;
    margin-bottom: -10px;
  }
  @media screen and (max-width: 576px) {
    width: 220%;
    margin-left: -115px;
    margin-right: -10px;
    margin-top: -10px;
    margin-bottom: -10px;
  }
`

export const MenuControlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0px;
  @media screen and (max-width: 767px) {
    margin-top: 35%;
  }
  @media screen and (max-width: 576px) {
    margin-top: 55%;
  }
`
export const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  background-color: ${props => props.bgColor};
  padding-left: 35%;
  @media screen and (max-width: 767px) {
    padding-left: 40%;
  }
`
export const MenuText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => props.fontWeight};
  padding-left: 10px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};
`
export const MenuCloseButton = styled.button`
  margin-left: auto;
  border: none;
  background-color: transparent;
  margin-top: 30px;
  margin-right: 30px;
`
