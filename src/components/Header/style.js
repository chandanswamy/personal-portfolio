import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {CgCodeSlash} from 'react-icons/cg';


export const NavBar = styled.nav`    
        height: 45px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #CCCCCC;
        background-color: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
        position: sticky;
        top: 0;
        width: 100%;
        z-index: 9999;
        @media screen and (min-width: 768px) {
                height: 64px;
                padding-left: 32px;
                padding-right: 32px;
        }
`

export const NavBarDivOne = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
`

export const NavigationLink = styled.a`
        text-decoration: none;
`

export const Heading = styled.h1`
        margin: 0px;
        font-size: 16px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: bolder;
        color: ${(props) => props.darktheme ? '#fff' : "#000"};
        @media screen and (min-width: 768px) {
                font-size: 18px;
        }
`

export const LockIcon = styled(CgCodeSlash)`
        font-size: 22px;
        color: ${(props) => props.darktheme ? '#fff' : "#000"};
        @media screen and (min-width: 768px) {
                order: 1;
        }
` 

export const NavBarLink = styled(Link)`
        text-decoration: none;
`

export const NavBarLogo = styled.img`
        display: none;        
        @media screen and (min-width: 768px) {
                height: 45px;
                width: 45px;
                border-radius: 50px;
                background-color: ${(props) => props.darktheme ? '#fff' : "#000"};
                display: block;
                margin-left: 6px;
                margin-right: 6px;
        }
`

export const NavBarMobileDiv = styled.div`
        @media screen and (min-width: 768px) {
                display: none;
        }

`

export const NavBarDesktopDiv =styled.div`
        display: none;
        
        @media screen and (min-width: 768px) {
                display: block;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                flex-grow: 1;
        }
`

export const NavItem = styled.button`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  color: ${(props) => (props.darktheme ? '#fff' : '#000')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.darktheme ? '#fff' : '#000')};
  border-radius: 2px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 1s;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    background: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
    z-index: -1;
    transition: 1s;
    content: '';
  }

  &::before {
    height: 50px;
    width: 80px;
  }

  &::after {
    width: 90px;
    height: 40px;
  }

  &.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &:hover::before {
    width: 0px;
    background: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
  }

  &:hover::after {
    height: 0px;
    background: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
  }

  &:hover {
    background: ${(props) => (props.darktheme ? '#262626' : '#FAF9F6')};
  }
`;