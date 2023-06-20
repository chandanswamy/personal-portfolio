import React, { Component } from 'react'
import PortFolioContext from '../../context/PortfolioContext'

import { HomeRoute, HomeContent } from './style'

export class Home extends Component {
  render() {
    
    return(
    <PortFolioContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
            <HomeRoute darkTheme={isDarkTheme}>
              <HomeContent className='home-route-content'>
                  Web development is an empowering journey where creativity meets technology.
                  It's accessible to all, fosters collaboration, and constantly evolves. Embrace
                  the challenges, learn, collaborate, and make a meaningful impact on the digital world.
                  Join the inspiring web development community!
              </HomeContent>  
            </HomeRoute>      
            </>      
          )          
        }}
      </PortFolioContext.Consumer>
    )
  }
}

export default Home