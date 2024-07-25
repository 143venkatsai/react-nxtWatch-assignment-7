import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 17%;
  flex-shrink: 0;
  position: fixed;
  height: 90vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavbarControlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
`
export const NavbarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`
export const ItemText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => props.fontWeight};
  padding-left: 10px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#383838')};
`

export const NavbarContactSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`

export const ContactText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
export const NavbarLogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`
export const NavbarWebsiteImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const NavbarMessage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  padding-bottom: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`
