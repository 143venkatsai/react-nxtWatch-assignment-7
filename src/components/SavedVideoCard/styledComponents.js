import styled from 'styled-components'

export const SavedItem = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-bottom: 40px;
  text-decoration: none;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
export const SavedCardThumbnailImage = styled.img`
  height: 200px;
  width: 300px;
  @media screen and (max-width: 767px) {
    width: 350px;
  }
  @media screen and (max-width: 576px) {
    height: 250px;
    width: 100%;
  }
`
export const SavedCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const SavedCardTitle = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 8px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#000000')};
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const SavedCardName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const SavedCardViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const SavedCardViews = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-right: 5px;
`

export const SavedCardPublished = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-left: 5px;
`
export const SavedCardSmContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  @media screen and (min-width: 578px) {
    display: none;
  }
`
export const SavedCardProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 10px;
`
export const SavedCardSmDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const SavedCardSmTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 0px;
  line-height: 25px;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#000000')};
`
export const SavedCardSmViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
`

export const SavedCardSmName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-right: 5px;
`
export const SavedCardSmViews = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-left: 5px;
  margin-right: 5px;
`
export const SavedCardSmPublished = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #64748b;
  margin-left: 5px;
`
