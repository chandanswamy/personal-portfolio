import React, { Component } from 'react'
import PortFolioContext from '../../context/PortfolioContext'
import Header from '../Header'
import Footer from '../Footer'


import { HomeRoute, HomeContent } from './style'

export class Home extends Component {

  componentDidMount(){
    document.title=`Chandan Swamy`
  }

  render() {
    
    return(
    <PortFolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
            <Header />
            <HomeRoute darkTheme={isDarkTheme}>
              <HomeContent className='home-route-content'>
                  Web development is an empowering journey where creativity meets technology.
                  It's accessible to all, fosters collaboration, and constantly evolves. Embrace
                  the challenges, learn, collaborate, and make a meaningful impact on the digital world.
                  Join the inspiring web development community!
              </HomeContent>  
            </HomeRoute>
            <Footer />    
            </>      
          )          
        }}
      </PortFolioContext.Consumer>
    )
  }
}

export default Home