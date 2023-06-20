import React from 'react'
import { NavBar, NavBarDivOne, NavBarLink, Heading, NavBarLogo, NavBarMobileDiv, LockIcon, NavBarDesktopDiv, NavItem } from './style'

import MobileMenuNavBar from '../MobileMenuNavBar'
import DesktopMenuNavBar from '../DesktopMenuNavBar';

import PortFolioContext from '../../context/PortfolioContext';

const Header = () => {
  return(
  <PortFolioContext.Consumer>
    {value => {
      const {isDarkTheme} = value;
      return (
        <NavBar darkTheme={isDarkTheme}>
            <NavBarDivOne>
                <LockIcon darkTheme={isDarkTheme} />
                <NavBarLogo darkTheme={isDarkTheme} src="https://res.cloudinary.com/chandanswamy/image/upload/v1687093264/cslogo_xbwerl.png" alt="portfolio logo" />
                <NavBarLink to="/">
                  <Heading darkTheme={isDarkTheme} >_CHANDANSWAMY_</Heading>
                </NavBarLink>
            </NavBarDivOne>
            <NavBarMobileDiv>
              <MobileMenuNavBar />
            </NavBarMobileDiv>
            <NavBarDesktopDiv>
              <NavBarLink to="/profile">
                  <NavItem darkTheme={isDarkTheme} >Profile</NavItem>
              </NavBarLink>
              <NavBarLink to="/about">
                  <NavItem darkTheme={isDarkTheme} >About</NavItem>
              </NavBarLink>
              <NavBarLink to="/contact">
                  <NavItem darkTheme={isDarkTheme} >Contact</NavItem>
              </NavBarLink>
              <DesktopMenuNavBar />
            </NavBarDesktopDiv>
        </NavBar>
      )
    }}
  </PortFolioContext.Consumer>
  )
}

export default Header