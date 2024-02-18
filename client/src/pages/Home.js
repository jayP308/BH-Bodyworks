import React from "react";
import Header from "../components/Header_1.js";
import Sheet from "@mui/joy/Sheet/Sheet";
import logoImage from "../assets/images/video_full.gif";
import { Typography } from "@mui/joy";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Footer from '../components/Footer';
import dividerImg from '../assets/images/divider.png';
import logoOne from "../assets/images/updated-logo4.png";
import { CssVarsProvider } from "@mui/joy";
import { useMediaQuery } from 'usehooks-ts'
import Services from "../pages/Services.js"
import sampleContact from "../assets/images/Instagram-post.png"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Mathias Sather',
    
    descriptions: '"Bethany was the best!"',
  },
  {
    label: 'Pedro Tanure',
    
    descriptions: '"This place is excellent. I had a 25-minute session with Bethany and really enjoyed it. Highly recommend it!"'
    },
  {
    label: 'Karl Boardman',
    
    descriptions: '"Bethany is great. Going weekly has helped my lower back pain majorly"'
  },
  {
    label: 'Dave M.',
   
    descriptions: '"When it comes to health and wellness, I believe StretchLab Embarcadero is absolutely essential. Bethany is amazing! Her knowledge of kinesiology is top notch. I really appreciate her guidance through the stretches. And after the session, I felt a significant improvement in mobility and well-being. Also want to acknowledge Mike. the awesome general manager. Big thanks to him for his help with everything!"',
  },
  {
    label: 'Brandon Reich',
    
    descriptions: '"Bethany is the best - I came in incredibly inflexible and generally not well versed in stretching. I feel like a new person!"',
  },
];

const Home = () => {
    const matches = useMediaQuery('(max-width: 480px)')

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
    return (
    <div id="Home">
      <Header/>
      {matches ? (
        <>
            <div style={{ display: 'block', justifyContent: "center", alignItems: "center", margin: 'auto',}}>
           
                <Sheet
                    sx={{
                    width: "100%",
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                }}
                >
                  
                </Sheet>
            </div>
            
            <hr id="type-of-massages" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
           
            <div
             style={{
              display: 'block',
              width: "100%",
              margin: 'auto',
              mx: 'auto', // margin left & right
              background: 'transparent',
             

            }}
            >

              <Box sx={{ 
                  width: "100%",
                  flexGrow: 1, 
                  margin: 'auto',
                  marginTop: "40px",
                  marginBottom: "40px",
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderRadius: '20px',
                  borderColor: 'rgba(170, 75, 110, 0.75)',
                  borderWidth: "5px",
                  color: "rgb(144, 238, 144)"
                  }}>
                    
                  <Paper
                      square
                      elevation={0}
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      margin: 'auto',
                      borderRadius: '20px',
                      backgroundColor: "transparent",
                      borderColor: 'rgba(170, 75, 110, 0.75)',
                      borderWidth: "5px",
                      justifyContent: 'center',
                      padding: '10px'
                      }}
                  >
                    <Typography style={{fontFamily: 'monospace', fontSize: '15px',}}>{images.label}</Typography>
                  </Paper>
                  
                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={15000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            
                              <Box
                              style={{
                                  margin: 'auto',
                                  height: 550,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                                  textAlign: "center",
                                  fontFamily: 'monospace',
                                  fontSize: '20px',
                                  padding: '5px',
                                  fontStyle: "italic"
                              }}
                              ><span
                                style={{
                                  display: "block",
                                  padding: "20px",
                                  fontSize: '35px',
                                  fontStyle: 'normal',
                                  marginBottom: "75px"
                                }}
                              >{step.label}</span>
                               
                                {step.descriptions}
                              
                              </Box>
                          ) : null}
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>
                  
                      <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{
                        borderRadius: '20px',
                      backgroundColor: "transparent",
                      borderColor: 'rgba(170, 75, 110, 0.75)',
                      borderWidth: "5px",
                      }}
                      
                      nextButton={
                      <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                          style={{color: "rgb(144, 238, 144)"}}
                      >
                          Next
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                          ) : (
                          <KeyboardArrowRight />
                          )}
                      </Button>
                      }
                      backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: "rgb(144, 238, 144)"}}>
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                          ) : (
                          <KeyboardArrowLeft />
                          )}
                          Back
                      </Button>
                      }
                  />
              </Box>
             
            </div>
            <hr id="services" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <CssVarsProvider>
            <main>
              <Sheet
                  sx={{
                    width: "100%",
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                    textAlign: 'center',
                    backgroundColor: "rgba(0, 0, 128, 0.8)",
                    borderRadius: '20px',
                    borderColor: 'transparent',
                    borderWidth: "5px"
                  }}
                  variant="outlined"
                >
                  <h1 style={{ fontWeight: "10px", fontSize: "45px", color: "rgb(144, 238, 144)", fontFamily: "courier"}}>Services & Appointments</h1>
                  <hr style={{width: '65%', border: 'double', color: 'rgba(170, 75, 110, 0.75)', margin: "auto", marginBottom: '15px'}}/>
                  <Services/>
                  <Box sx={{ 
                    width: "100%",
                    flexGrow: 1, 
                    margin: 'auto',
                    marginTop: "50px",
                    marginBottom: "50px",
                    marginRight: '50px',
                    borderRadius: '20px',
                    backgroundColor: "white",
                    borderWidth: "5px",
                    }}>
                      <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0U4cG8B6jPetIXO0a3fVjyLKMVU4nZCtmkfNizouttjEw9KaRJCRj_1se_Jrek8ptoMY7tnkdo?gv=true" style={{border: "0"}} width="100%" height="600" frameborder="0"></iframe>
                  </Box>
                  
                  
                  
                </Sheet>
            </main>
            </CssVarsProvider>
            <hr id="social-media" style={{width: '65%', border: 'double', color: 'green', margin: "auto"}}/>
            <Sheet
                sx={{
                  width: "100%",
                  mx: 'auto', // margin left & right
                  my: 2, // margin top & bottom
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 'sm',
                  boxShadow: 'md',
                  textAlign: 'center',
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderRadius: '20px',
                  borderColor: 'transparent',
                  borderWidth: "5px"
                }}
                variant="outlined"
              > 
              <h1 style={{ fontWeight: "10px", fontSize: "45px", color: "rgb(144, 238, 144)", fontFamily: "courier"}}>Contact Information</h1>
              
              </Sheet>
              <div style={{ display: 'flex', margin: 'auto', textAlign: 'center', width: '100%'}}>
                <a href='https://www.instagram.com/bfitbstrong_/' >
                  <img src={sampleContact} alt="pink intagram logo" style={{ width: '100%', height: '500px', marginTop: '10px', borderRadius: '20px', borderColor: 'transparent', borderWidth: "5px"}}/>
                </a>
            </div>
            <Typography style={{padding: "12px", color: "rgb(144, 238, 144)", textAlign: "center"}}>Made by Junnel R. Padilla ©</Typography>
            <Footer/>
            </>
      ) : (
        <>
            <div id="home" style={{ display: 'block', justifyContent: "center", alignItems: "center", margin: 'auto',}}>
                <Sheet
                    style={{
                    width: "50%",
                    margin: "auto",
                    mx: 'auto', // margin left & right
                    my: 3, // margin top & bottom
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'transparent',
                }}
                >
                   
                </Sheet>
            </div>
            
            <hr id="type-of-massages" style={{width: '65%', border: 'double', color: "rgba(170, 75, 110, 0.75)", margin: "auto"}}/>
            <Sheet
                sx={{
                  width: 800,
                  mx: 'auto', // margin left & right
                  my: 2, // margin top & bottom
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: '20px',
                  boxShadow: 'md',
                  textAlign: 'center',
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderColor: 'transparent',
                }}
                variant="outlined"
              > 
              <h1 style={{ fontWeight: "10px", fontSize: "45px", color: "rgb(144, 238, 144)", fontFamily: "courier" }}>Reviews</h1>
                
              </Sheet>
            <div
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
              <Typography style={{fontFamily: 'monospace', fontSize: '20px'}}></Typography>
              <Box sx={{ 
                  width: "80%",
                  flexGrow: 1, 
                  margin: 'auto',
                  marginTop: "40px",
                  marginBottom: "40px",
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderRadius: '20px',
                  borderColor: 'rgba(170, 75, 110, 0.75)',
                  borderWidth: "5px",
                  color: "rgb(144, 238, 144)"
                  }}>
                    
                  <Paper
                      square
                      elevation={0}
                      style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 50,
                      margin: 'auto',
                      borderRadius: '20px',
                      backgroundColor: "transparent",
                      borderColor: 'rgba(170, 75, 110, 0.75)',
                      borderWidth: "5px",
                      justifyContent: 'center',
                      padding: '10px'
                      }}
                  >
                    <Typography style={{fontFamily: 'monospace', fontSize: '15px',}}>{images.label}</Typography>
                  </Paper>
                  
                      <AutoPlaySwipeableViews
                      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                      index={activeStep}
                      interval={15000}
                      onChangeIndex={handleStepChange}
                      enableMouseEvents
                      >
                      {images.map((step, index) => (
                          <div key={step.label}>
                          {Math.abs(activeStep - index) <= 2 ? (
                            
                              <Box
                              style={{
                                  margin: 'auto',
                                  height: 465,
                                  display: 'block',
                                  maxWidth: 800,
                                  overflow: 'hidden',
                                  width: '100%',
                                  textAlign: "center",
                                  fontFamily: 'monospace',
                                  fontSize: '20px',
                                  padding: '5px',
                                  fontStyle: "italic"
                              }}
                              ><span
                                style={{
                                  display: "block",
                                  padding: "20px",
                                  fontSize: '50px',
                                  fontStyle: 'normal',
                                  marginBottom: "75px"
                                }}
                              >{step.label}</span>
                               
                                {step.descriptions}
                              
                              </Box>
                          ) : null}
                          </div>
                      ))}
                      </AutoPlaySwipeableViews>
                  
                      <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      style={{
                        borderRadius: '20px',
                      backgroundColor: "transparent",
                      borderColor: 'rgba(170, 75, 110, 0.75)',
                      borderWidth: "5px",
                      }}
                      
                      nextButton={
                      <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                          style={{color: "rgb(144, 238, 144)"}}
                      >
                          Next
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowLeft />
                          ) : (
                          <KeyboardArrowRight />
                          )}
                      </Button>
                      }
                      backButton={
                      <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{color: "rgb(144, 238, 144)"}}>
                          {theme.direction === 'rtl' ? (
                          <KeyboardArrowRight />
                          ) : (
                          <KeyboardArrowLeft />
                          )}
                          Back
                      </Button>
                      }
                  />
              </Box>

              
            </div>
            <hr id="services" style={{width: '65%', border: 'double', color: 'rgba(170, 75, 110, 0.75)', margin: "auto"}}/>
            <CssVarsProvider>
            <main>
              <Sheet
                sx={{
                  width: "93%",
                  mx: 'auto', // margin left & right
                  my: 4, // margin top & bottom
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 'sm',
                  boxShadow: 'md',
                  textAlign: 'center',
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderRadius: '20px',
                  borderColor: 'transparent',
                  borderWidth: "5px"
                }}
                variant="outlined"
              >
                <h1 style={{ fontWeight: "10px", fontSize: "45px", color: "rgb(144, 238, 144)", fontFamily: "courier"}}>Services & Appointments</h1>
                <hr style={{width: '65%', border: 'double', color: 'rgba(170, 75, 110, 0.75)', margin: "auto", marginBottom: '15px'}}/>
                <Services/>
              </Sheet>
            </main>
            </CssVarsProvider>
            
            <hr id="social-media" style={{width: '65%', border: 'double', color: 'rgba(170, 75, 110, 0.75)', margin: "auto"}}/>
            <Sheet
                sx={{
                  width: 800,
                  mx: 'auto', // margin left & right
                  my: 2, // margin top & bottom
                  py: 3, // padding top & bottom
                  px: 2, // padding left & right
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  borderRadius: 'sm',
                  boxShadow: 'md',
                  textAlign: 'center',
                  backgroundColor: "rgba(0, 0, 128, 0.8)",
                  borderRadius: '20px',
                  borderColor: 'transparent',
                  borderWidth: "5px"
                }}
                variant="outlined"
              > <h1 style={{ fontWeight: "10px", fontSize: "45px", color: "rgb(144, 238, 144)", fontFamily: "courier"}}>Contact Information</h1>
              
              </Sheet>
            <Footer/>
            </>
            )}
        </div>
    )
}

export default Home;