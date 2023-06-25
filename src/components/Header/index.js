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
        <NavBar darktheme={isDarkTheme}>
            <NavBarDivOne>
                <LockIcon darktheme={isDarkTheme} />
                <NavBarLogo darktheme={isDarkTheme} src="https://res.cloudinary.com/chandanswamy/image/upload/v1687093264/cslogo_xbwerl.png" alt="portfolio logo" />
                <NavBarLink to="/">
                  <Heading darktheme={isDarkTheme} >_CHANDANSWAMY_</Heading>
                </NavBarLink>
            </NavBarDivOne>
            <NavBarMobileDiv>
              <MobileMenuNavBar />
            </NavBarMobileDiv>
            <NavBarDesktopDiv>
              <NavBarLink to="/profile">
                  <NavItem darktheme={isDarkTheme} >Profile</NavItem>
              </NavBarLink>
              <NavBarLink to="/about">
                  <NavItem darktheme={isDarkTheme} >About</NavItem>
              </NavBarLink>
              <NavBarLink to="/contact">
                  <NavItem darktheme={isDarkTheme} >Contact</NavItem>
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