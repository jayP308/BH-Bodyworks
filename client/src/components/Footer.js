import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Typography } from '@material-ui/core';
import instaLogo from '../assets/images/instagram-logo.png';
import { useMediaQuery } from 'usehooks-ts';
import sampleContact from "../assets/images/Instagram-post.png"

const Footer = () => {
  const matches = useMediaQuery('(max-width: 480px)');
  return (
    <Box>
      {matches ? (
        <>
        </>
      ) : (
        <>
        <BottomNavigation style={{display: 'block', background: 'transparent', height: '150px', margin: 'auto', textAlign: 'center', padding: '15px'}}>
            <div style={{ display: 'flex', margin: 'auto', textAlign: 'center', width: '50%'}}>
                
                  <img src={sampleContact} alt="pink intagram logo" style={{ width: '100%', marginTop: '10px', borderRadius: '20px', borderColor: 'transparent', borderWidth: "5px"}}/>
                
            </div>
            <Typography style={{padding: "12px", color: "rgb(144, 238, 144)"}}>Made by Junnel R. Padilla ©</Typography>
          </BottomNavigation>
        </>
      )}
    </Box>
  );
}

export default Footer;