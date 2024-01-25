import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@material-ui/core';
import instaLogo from '../assets/images/instagram-logo.png';
import { useMediaQuery } from 'usehooks-ts';
import sampleContact from "../assets/images/sample-contact-2.png"

const Footer = () => {
  const matches = useMediaQuery('(max-width: 480px)');
  return (
    <Box>
      {matches ? (
        <>
        <BottomNavigation style={{display: 'block', background: 'transparent', height: '150px', margin: 'auto', textAlign: 'center', padding: '15px'}}>
            <div style={{ display: 'flex', margin: 'auto', textAlign: 'center', width: '10%'}}>
                <a href='https://www.instagram.com/nghi_yo_massage/' >
                  <img src={instaLogo} alt="pink intagram logo" style={{ width: '100%', marginTop: '10px',border: 'double', borderColor: 'rgba(170, 75, 110, 0.75)', borderWidth: "5px"}}/>
                </a>
            </div>
            <Typography style={{padding: "12px"}}>Made by Junnel R. Padilla ©</Typography>
          </BottomNavigation>
        </>
      ) : (
        <>
        <BottomNavigation style={{display: 'block', background: 'transparent', height: '150px', margin: 'auto', textAlign: 'center', padding: '15px'}}>
          
            <div style={{ display: 'flex', margin: 'auto', textAlign: 'center', width: '50%'}}>
                <a href='https://www.instagram.com/strawburberry_shortcake___/' >
                  <img src={sampleContact} alt="pink intagram logo" style={{ width: '100%', marginTop: '10px', borderRadius: '20px', borderColor: 'transparent', borderWidth: "5px"}}/>
                </a>
            </div>
            <Typography style={{padding: "12px", color: "rgb(144, 238, 144)"}}>Made by Junnel R. Padilla ©</Typography>
          </BottomNavigation>
        </>
      )}
    </Box>
  );
}

export default Footer;