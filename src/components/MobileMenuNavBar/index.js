import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Home from '@mui/icons-material/Home'
import TelegramIcon from '@mui/icons-material/Telegram';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Avatar from '@mui/material/Avatar';

import Cookies from 'js-cookie';

import { Link } from 'react-router-dom';
import {Menu, MenuIcon} from './style';

import PortFolioContext from '../../context/PortfolioContext';

import './index.css'

const styles = {
  button: {
    outline: 'none',
    height: '32px',
    width: '64px',
  },
};

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        bottom: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const loggingOut = () => {
        Cookies.remove("jwt_token")
      }

  return(
  <PortFolioContext.Consumer>
    {value => {
        const{isDarkTheme, changeTheme} = value;
        
        
        const onChangeTheme = () => {
          changeTheme()
        }

        const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
        const anchor = isSmallScreen ? 'bottom' : 'right';
      
        const list = (anchor) => (
          <Box
            sx={{
              backgroundColor: isDarkTheme ? '#262626' : '#FAF9F6',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List sx={{color: isDarkTheme ? '#fff' : '#000'}}>
                <ListItem key="Home" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} component={Link} to={"/"} >
                      <ListItemIcon>
                        <Home sx={{color: isDarkTheme ? '#fff' : '#000'}} />
                      </ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Profile" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} component={Link} to={"/profile"} >
                      <div className='image-container'>
                      <Avatar sx={{width: '24px', height: '24px'}} src="https://res.cloudinary.com/chandanswamy/image/upload/v1686863084/image-100x100_yf3ghp.png" alt="profile" />
                      </div>
                    <ListItemText primary={"Profile"} />
                  </ListItemButton>
                </ListItem>
                <ListItem key="About" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} component={Link} to={"/about"} >
                      <ListItemIcon>
                        <InfoOutlinedIcon sx={{color: isDarkTheme ? '#fff' : '#000'}} />
                      </ListItemIcon>
                    <ListItemText primary={'About'} />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Contact" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} component={Link} to={"/contact"} >
                      <ListItemIcon>
                        <TelegramIcon sx={{color: isDarkTheme ? '#fff' : '#000'}} />
                      </ListItemIcon>
                    <ListItemText primary={'Contact'} />
                  </ListItemButton>
                </ListItem>
                <ListItem key="DarkTheme" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} onClick={onChangeTheme} >
                      <ListItemIcon>
                      {isDarkTheme ? <LightModeIcon sx={{color: isDarkTheme ? '#fff' : '#000'}} /> : <DarkModeIcon sx={{color: isDarkTheme ? '#fff' : '#000'}} />}
                      </ListItemIcon>
                    <ListItemText primary={isDarkTheme ? 'Light Mode' : 'Dark Mode'} />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Login" disablePadding>
                  <ListItemButton sx={{'&:focus': {backgroundColor: isDarkTheme ? '#000000' : '#ffffff'}}} onClick={loggingOut} component={Link} to={"/login"} >
                      <ListItemIcon>
                        <LogoutIcon sx={{color: isDarkTheme ? '#fff' : '#000'}} />
                      </ListItemIcon>
                    <ListItemText primary={'Logout'} />
                  </ListItemButton>
                </ListItem>
            </List>
          </Box> 
        );

        return (
          <Menu>
            <React.Fragment key={anchor} >
              <Button sx={{...styles.button, border: isDarkTheme ? '1px solid #fff' : '1px solid #000'}} onClick={toggleDrawer(anchor, true)} className='nav-bar-menu-button'>
                <MenuIcon darkTheme={isDarkTheme}/>
              </Button>
              <SwipeableDrawer
                sx={{height: '55%'}}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          </Menu>
        );        
    }}
  </PortFolioContext.Consumer>
  )
}
