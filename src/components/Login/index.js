import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import {
  LoginContainer,
  FormContainer,
  FormLogo,
  LabelContainer,
  InputContainer,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
    togglePassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = () => {
    this.setState(prevState => ({togglePassword: !prevState.togglePassword}))
  }

  renderUsernameField = isDarkTheme => {
    const {username} = this.state

    return (
      <>
        <LabelContainer htmlFor="username" isDarkTheme={isDarkTheme}>
          USERNAME
        </LabelContainer>
        <InputContainer
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = isDarkTheme => {
    const {password, togglePassword} = this.state

    return (
      <>
        <LabelContainer htmlFor="password" isDarkTheme={isDarkTheme}>
          PASSWORD
        </LabelContainer>
        <InputContainer
          type={togglePassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderCheckboxField = isDarkTheme => (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        id="myCheckbox"
        onClick={this.onTogglePassword}
      />
      <CheckboxLabel htmlFor="myCheckbox" isDarkTheme={isDarkTheme}>
        Show Password
      </CheckboxLabel>
    </CheckboxContainer>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const loginLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                onSubmit={this.onSubmitForm}
                isDarkTheme={isDarkTheme}
              >
                <FormLogo src={loginLogo} alt="website logo" />
                {this.renderUsernameField(isDarkTheme)}
                {this.renderPasswordField(isDarkTheme)}
                {this.renderCheckboxField(isDarkTheme)}
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
