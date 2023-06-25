import React, {Component} from 'react';
import Cookies from 'js-cookie';
import { withRouter } from '../../utils/withRouter';

import PortfolioContext from '../../context/PortfolioContext'

import { Loader, LoginRoute, LoginPageImageContainer, DesktopLoginImage, MobileLoginImage,  LoginContainer, Title, FormGroup, Label, Input, SubmitButton, SignupLink, ErrorMessage } from './style.js'

import './index.css'

class LoginPage extends Component{
  state = {username: 'guestuser', password: 'guest@#@112', usernameError: false, passwordError: false, loginCredentialsError: false, errorMsg: '', isSubmit: false}

  onEnterUsername = (event) => {
    this.setState({username: event.target.value})
  }

  onEnterPassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleUsername = (event) => {
    this.setState({usernameError: event.target.value === ''})
  }

  handlePassword = (event) => {
    this.setState({passwordError: event.target.value === ''})
  }

  onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    this.props.navigate("/", { replace: true })
  }

  renderLoader = () => {
    const {isSubmit} = this.state
    const isActive = isSubmit ? 'active' : null
    return(
      <div className={`loader ${isActive}`}>
        
      </div>
    )
  }

  loginSubmit = async (event) => {
    event.preventDefault();
    this.setState({isSubmit: true})

    const {username, password} = this.state
    if (username === '' || password === ''){
      this.setState({loginCredentialsError: true, isSubmit: false})
    }else{
      const userDetails = {username, password}
      const url = 'https://gcs-deploy-node.onrender.com/login/'
      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, options)
      const data = await response.json()
      const errorMessage = data.error
      const jwtToken = data.jwtToken
      if (response.ok === true) {
        this.onSubmitSuccess(jwtToken)
        this.setState({loginCredentialsError: true, errorMsg: errorMessage, isSubmit: false})
      } else {
        this.setState({loginCredentialsError: true, errorMsg: errorMessage, isSubmit: false})
      }
    }


    
    
  }


  render(){
    return(      
      <PortfolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000' : '#fff'
          const textColor = isDarkTheme ? '#fff' : '#000'
          const boxShadow = isDarkTheme ? '0px 0px 10px rgba(217, 215, 215, .5)' : '0px 0px 10px rgba(0, 0, 0, 0.21)'
          const {usernameError, passwordError, username, password, loginCredentialsError, errorMsg, isSubmit} = this.state

          return(
            <LoginRoute bgColor={bgColor}>
              <LoginPageImageContainer>
                <DesktopLoginImage src="https://res.cloudinary.com/chandanswamy/image/upload/v1687359529/desktop-login-pic_c1c0a0.png" alt="desktop login" />
                <MobileLoginImage src="https://res.cloudinary.com/chandanswamy/image/upload/v1687359528/mobile-login-pic_tuisco.png" alt="mobile image" />
              </LoginPageImageContainer>
              <LoginContainer boxShadow={boxShadow} bgColor={bgColor}>
                <Title textColor={textColor}>Sign In</Title>
                <form onSubmit={this.loginSubmit}>
                  <FormGroup>
                    <Label textColor={textColor} htmlFor="username">Username</Label>
                    <Input textColor={textColor} onBlur={this.handleUsername} onChange={this.onEnterUsername} value={username} type="text" id="username" placeholder="Enter your username" />
                    {usernameError ? (<ErrorMessage>Required *</ErrorMessage>) : null}
                  </FormGroup>
                  <FormGroup>
                    <Label textColor={textColor} htmlFor="password">Password</Label>
                    <Input textColor={textColor} onBlur={this.handlePassword} onChange={this.onEnterPassword} value={password} type="password" id="password" placeholder="Enter your password" />
                    {passwordError ? (<ErrorMessage>Required *</ErrorMessage>) : null}
                  </FormGroup>
                  <FormGroup>
                    <SubmitButton textColor={textColor} type="submit">Sign In</SubmitButton>
                    {loginCredentialsError ? (<ErrorMessage>{errorMsg}</ErrorMessage>) : null }
                    <Loader>{isSubmit ? this.renderLoader() : null}</Loader>
                  </FormGroup>
                  <SignupLink to="/sign-up">Don't have an account? Sign up</SignupLink>
                </form>
              </LoginContainer>
            </LoginRoute>
          )
        }}
        
      </PortfolioContext.Consumer>
    )
  }
}

export default withRouter(LoginPage);
