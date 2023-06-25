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

import Cookies from 'js-cookie';

import { Link } from 'react-router-dom';
import {Menu, MenuIcon} from './style';

import PortFolioContext from '../../context/PortfolioContext';

import './index.css'

const styles = {
  button: {
    outline: 'none',
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
      }

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
              width: '200px',
              maxHeight: '25%',
              top:'70px',
              right:'5px',
              zIndex:'10000',
              position: 'fixed',
              borderRadius: '4px',
              backgroundColor: isDarkTheme ? '#262626' : '#FAF9F6',
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <List sx={{color: isDarkTheme ? '#fff' : '#000'}}>
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
