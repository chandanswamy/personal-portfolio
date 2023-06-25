import React, { Component } from 'react'
import {ContactRoute, ContactSection, ErrorMessage, ContactMe, FormGroup, FormControl, FormLabel, Textarea, SubmitButton, ContactSectionImage, ContactSectionForm, Loader} from './style'

import Footer from '../Footer'
import Header from '../Header'
import emailjs from '@emailjs/browser'

import PortfolioContext from '../../context/PortfolioContext'

import './index.css'

class Contact extends Component{ 

  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  state = {name: '', email: '', message: '', isSubmit: false, ErrorMessage:false, nameError: false, emailError: false, messageError: false}

  handleNameChange(event) {
	  this.setState({name: event.target.value})
  }
  handleEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  handleMessageChange(event) {
	  this.setState({message: event.target.value})
  }

  handleSubmit= (e) => {
    e.preventDefault();

    const {name, email, message} = this.state
    if (name === "" || email === '' || message === ""){
      this.setState({showError: true})
    }else{
      emailjs.sendForm('service_5k2q9aa', 'template_s2asd04', this.form.current, 'MzgKsgHjnijxD7v2M')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      this.setState({isSubmit: true, showError: false})

      this.resetForm()
    }    
  }

  onFocusNameElement = (event) => {
    this.setState({ nameError: event.target.value === "" });
  }

  onFocusEmailElement = (event) => {
    this.setState({ emailError: event.target.value === "" });
  }
  
  onFocusMessageElement = (event) => {
    this.setState({ messageError: event.target.value === "" });
  }

  resetForm = () => {
    setTimeout(() => {this.setState({isSubmit: false, name: '', email: '', message: ''})}, 3000)
  }

  renderLoader = () => {
    const {isSubmit} = this.state
    const isActive = isSubmit ? 'active' : null
    return(
      <div className={`loader ${isActive}`}>
        <div className={`check ${isActive}`}>
          <span className="check-one"></span>
          <span className="check-two"></span>
        </div>
      </div>
    )
  }

  render(){
    return(
    <PortfolioContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {name, email, message, isSubmit, nameError, emailError, messageError, showError} = this.state
        return(
          <>
            <Header />
            <ContactRoute darkmode={isDarkTheme}>
                <ContactSection darkmode={isDarkTheme}>
                  <ContactSectionForm>
                    <ContactMe darkmode={isDarkTheme}>Contact Me</ContactMe>
                    <form ref={this.form} id="contact-form" onSubmit={this.handleSubmit} className='contact-forum'>
                      <FormGroup >
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <FormControl onBlur={this.onFocusNameElement} name="name" darkmode={isDarkTheme} type="text" id="name" value={name} onChange={this.handleNameChange.bind(this)} />
                        {nameError ? (<ErrorMessage>Required *</ErrorMessage>) : null}
                      </FormGroup>
                      <FormGroup>
                        <FormLabel htmlFor="exampleInputEmail1">Email address</FormLabel>
                        <FormControl onBlur={this.onFocusEmailElement} name="email" darkmode={isDarkTheme} type="email" id="email" aria-describedby="emailHelp" value={email} onChange={this.handleEmailChange.bind(this)} />
                        {emailError ? (<ErrorMessage>Required *</ErrorMessage>) : null}
                      </FormGroup>
                      <FormGroup>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea onBlur={this.onFocusMessageElement} name="message" darkmode={isDarkTheme} rows="5" id="message" value={message} onChange={this.handleMessageChange.bind(this)} />
                        {messageError ? (<ErrorMessage>Required *</ErrorMessage>) : null}
                      </FormGroup>
                      <SubmitButton type="submit">Submit</SubmitButton>
                      {showError ? (<ErrorMessage>All Sections Required *</ErrorMessage>) : null}
                      <Loader>{isSubmit ? this.renderLoader() : null}</Loader> 
                    </form>
                  </ContactSectionForm>
                  <ContactSectionImage src="https://res.cloudinary.com/chandanswamy/image/upload/v1687120064/12084798_20943953-removebg-preview_ecgy7r.png" alt="contact us" />
              </ContactSection>            
            </ContactRoute>
            <Footer />
          </>
        )
      }}
    </PortfolioContext.Consumer>
    )
  }
}

export default Contact