import styled from 'styled-components'

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    width: 200px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (max-width: 576px) {
    width: 150px;
    margin-left: 15px;
    margin-right: 15px;
  }
`
export const GameThumbnailImg = styled.img`
  height: 300px;
  width: 200px;
  @media screen and (max-width: 767px) {
    width: 220px;
    height: 320px;
  }
  @media screen and (max-width: 576px) {
    height: 220px;
    width: 150px;
  }
`
export const GameName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const GameViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #64748b;
  margin-top: 8px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
