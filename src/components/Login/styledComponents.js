import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
  box-shadow: ${props =>
    props.isDarkTheme ? 'none' : '4px 4px 16px 0px #cbd5e1'};
  width: 30%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const FormLogo = styled.img`
  height: 40px;
  width: 150px;
  align-self: center;
  margin-bottom: 25px;
`
export const LabelContainer = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#7e858e')};
  padding-bottom: 5px;
  padding-top: 20px;
`
export const InputContainer = styled.input`
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  background-color: transparent;
  width: 100%;
  padding: 8px 15px;
  border: 1px solid #cbd5e1;
  border-radius: 2px;
  outline: none;
`
export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`
export const CheckboxInput = styled.input`
  height: 15px;
  width: 15px;
`
export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 5px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#000000')};
`

export const LoginButton = styled.button`
    font-family:"Roboto";
    font-size:14px;
    font-weight:500;
    color:#ffffff;
    background-color:#3b82f6;
    border:none;
    border-radius:8px;
    padding:9px 20px;
    margin-top:20px;
    width:100%
    outline:none;
    cursor: pointer;
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ff0000;
  margin-top: 3px;
`
