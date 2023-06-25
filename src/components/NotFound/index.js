import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

import { useNavigate } from 'react-router-dom'

import PortfolioContext from '../../context/PortfolioContext'


import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideosImage,
  NotFoundVideosHeading,
  NotFoundVideosNote,
  HomeButton
} from './style'

const NotFound = () => {

  const navigate = useNavigate();   

  return(
  <PortfolioContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#000' : '#fff'
      const headingColor = isDarkTheme ? '#fff' : '#000'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'         

      const goBackToHome = () => {
        navigate('/', { replace: true });
      }

      const notFoundImageUrl = 'https://res.cloudinary.com/chandanswamy/image/upload/v1687196029/404_error_lost_in_space-bro__1_-removebg-preview_fgdeyr.png'

      return (
        <>
          <Header />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideosImage src={notFoundImageUrl} alt="not found" />
              <NotFoundVideosHeading headingColor={headingColor}>
                PAGE NOT FOUND!
              </NotFoundVideosHeading>
              <NotFoundVideosNote noteColor={noteColor}>
                We kindly request you to double-check the URL or try navigating back to our homepage to explore our website further.
              </NotFoundVideosNote>
              <HomeButton onClick={goBackToHome}>Go Back To Home</HomeButton>
            </NotFoundVideosView>
          </NotFoundContainer>
          <Footer />
        </>
      )
    }}
  </PortfolioContext.Consumer>
  )
}

export default NotFound