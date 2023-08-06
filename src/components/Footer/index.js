import React from 'react'

import {FooterBar, FooterDetails, FooterIcons, FooterSocialMediaButton} from './style'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PortFolioContext from '../../context/PortfolioContext';

const socialMediaIconsList = [
  {
    iconName: <WhatsAppIcon sx={{fontSize: '22px'}}/>,
    iconLink: 'https://wa.me/+919491558919/',
    color: '#25D366'
  },
  {
    iconName: <InstagramIcon sx={{fontSize: '22px'}} />,
    iconLink: 'https://www.instagram.com/_chandanswamy_/',
    color: '#E4405F'
  },
  {
    iconName: <GitHubIcon sx={{fontSize: '22px'}} />,
    iconLink: 'https://github.com/chandanswamy',
    color: '#690694'
  },
  {
    iconName: <LinkedInIcon sx={{fontSize: '22px'}} />,
    iconLink: 'https://www.linkedin.com/in/chandanswamy/',
    color: '#0A66C2'
  }
];

const Footer = () => {

  const navigateToSocialAcc = (socialMediaLink) => {
    window.open(socialMediaLink)
  }

  return(
  <PortFolioContext.Consumer>
    {value => {
      const {isDarkTheme} = value;
      return (
        <FooterBar darktheme={isDarkTheme}>
            <FooterDetails darktheme={isDarkTheme}>Copyright © ChandanSwamy. Made With React.Js, Node.Js </FooterDetails>
            <FooterIcons>
              {socialMediaIconsList.map((socialMedia, index) => (
                <FooterSocialMediaButton onClick={() => navigateToSocialAcc(socialMedia.iconLink)} iconColor={socialMedia.color} key={index}>{socialMedia.iconName}</FooterSocialMediaButton>
              ))} 
            </FooterIcons>
        </FooterBar>
      )
    }}
  </PortFolioContext.Consumer>
  )
}

export default Footer