import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import copy from "copy-to-clipboard";

import PortfolioContext from '../../context/PortfolioContext'

import {CopyLinkIcon} from './style'



export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return(
    <PortfolioContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            const bgColor = isDarkTheme ? '#000' : '#fff'
            const textColor = isDarkTheme ? '#fff' : '#000'
            const copyProfileLink = () => {
                const text = "https://chandanswamyportfolio.onrender.com/";
                copy(text);
                alert("Hi there! Link Successfully Copied");
                handleClose();
            }
            const style = {
                position: 'relative',
                top: '50%',
                left: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxWidth: '400px',
                backgroundColor: bgColor,
                borderRadius: '4px',
                backdropFilter: 'blur(4px)',
                boxShadow: '6px 12px 36px 12px rgba(31, 38, 135, 0.37)',
                p: 4,
              };
            return (
              <>
                <Button onClick={handleOpen} sx={{
                  color: textColor,
                  border: 'none',
                  height: '100%',
                  width: '100%',
                  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif`,
                  fontWeight: 500,
                  '@media screen and (max-width: 768px)': { fontSize: '16px' , letterSpacing: '0px'},
                  fontSize: '22px',
                  letterSpacing: '2px',
                  backgroundColor: 'transparent',
                  padding: '0px',
                  flexGrow: 1
                }}>
                  Share Profile
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Button sx={{ backgroundColor: bgColor,   height: '64px', width: '42px', border: `1px solid ${textColor}`, borderRadius: '48%', marginRight: '8px'}} onClick={copyProfileLink}>
                      <CopyLinkIcon className='link-icon' />
                    </Button>
                    <Typography id="modal-modal-description" sx={{ color: textColor, margin: '14px', fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif`, fontWeight: 'bold', fontSize: '18px' }}>
                      Copy Portfolio Link
                    </Typography>
                  </Box>
                </Modal>
              </>              
            )            
        }}
    </PortfolioContext.Consumer>
    )
}