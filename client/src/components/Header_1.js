import React from 'react';
import Box from '@mui/joy/Box';
import { Button } from "@material-ui/core";
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logoImage from "../assets/images/massage-image.jpg"
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts'


/**
 * Design credit: https://flutter.dev/
 */

const Header = () => {
  const matches = useMediaQuery('(max-width: 480px)')

  return (
    <>
      {matches ? (
        <>
          <Sheet
          variant="solid"
          invertedColors
          sx={{
            flexGrow: 1,
            display: 'flex',
            p: { xs: '36px', md: '70px' },
            pt: { xs: '24px', md: '60px' },
            borderRadius: 'lg',
            overflow: 'hidden',
            '& button': { borderRadius: 'xl' },
            height: "600px",
            backgroundColor: "rgba(0, 0, 128, 0.8)"
          }}
        >
            
          <Box sx={{ zIndex: 1, position: 'relative', textAlign: "center"}}>
            <Typography level="h2">Bethany Hernandez (Cert # 91433)</Typography>
            <Typography sx={{ mt: 0.5, mb: 2, width: "100%", fontStyle:'oblique'}}>
                (Certified Massage Therapist)
            </Typography>
            <br/>
            <Typography sx={{ mb: 1, width: "100%",}}>
                Get out of your head and into your body
            </Typography>
            <br/>
            <Typography sx={{ mb: 2, width: "100%",}}>
                I help you become aware of your body and leverage the mind body connection to live a happier healthy lifestyle.
            </Typography>
            <br/>
            <Typography sx={{  mb: 2, width: "100%",}}>
                Your body is your main tool to navigate your life and your environment. Let me help you learn how to use it optimally.
            </Typography>
            <br/>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                maxWidth: 'max-content',
                '& > *': { flexGrow: 1, fontWeight: 'lg' },
              }}
            >
              <Button href="#services" style={{color: "White", border:'solid', borderColor: 'rgba(170, 75, 110, 0.75)',}}>Services & Appointments</Button>
              
              
              <Button href="#social-media" style={{color: "White", border:'solid', borderColor: 'rgba(170, 75, 110, 0.75)',}}>Contact Information</Button>
              
            </Box>
          </Box>
         
          </Sheet>
          <Box
            component="img"
            alt=""
            img src={logoImage}
            sx={{ display: "inline-block" ,width:'100%', margin: "auto", borderRadius: "20px"}}
          />
        </>
        ) : (
      <>
        <Sheet
          variant="solid"
          invertedColors
          sx={{
            flexGrow: 1,
            display: 'flex',
            p: { xs: '36px', md: '70px' },
            pt: { xs: '24px', md: '60px' },
            borderRadius: 'lg',
            overflow: 'hidden',
            '& button': { borderRadius: 'xl' },
            height: "500px",
            backgroundColor: "rgba(0, 0, 128, 0.8)"
          }}
        >
            
          <Box sx={{ zIndex: 1, position: 'relative',}}>
            <Typography level="h2">Bethany Hernandez (Cert # 91433)</Typography>
            <Typography sx={{ mt: 0.5, mb: 2, width: "50%", fontStyle:'oblique'}}>
                (Certified Massage Therapist)
            </Typography>
            <br/>
            <Typography sx={{ mb: 1, width: "50%",}}>
                Get out of your head and into your body
            </Typography>
            <br/>
            <Typography sx={{ mb: 2, width: "50%",}}>
                I help you become aware of your body and leverage the mind body connection to live a happier healthy lifestyle.
            </Typography>
            <br/>
            <Typography sx={{  mb: 2, width: "50%",}}>
                Your body is your main tool to navigate your life and your environment. Let me help you learn how to use it optimally.
            </Typography>
            <br/>
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                flexWrap: 'wrap',
                maxWidth: 'max-content',
                '& > *': { flexGrow: 1, fontWeight: 'lg' },
              }}
            >
              <Button href="#services" style={{color: "White", border:'solid', borderColor: 'rgba(170, 75, 110, 0.75)',}}>Services & Appointments</Button>
              
              
              <Button href="#social-media" style={{color: "White", border:'solid', borderColor: 'rgba(170, 75, 110, 0.75)',}}>Contact Information</Button>
              
            </Box>
          </Box>
          <Box
            component="img"
            alt=""
            img src={logoImage}
            sx={{ position: 'absolute',width:'30%', height: '100%', top: 1, right: 1, margin: "auto",}}
          />
          </Sheet>
        </>
      )};
    </>
  );
}

export default Header;