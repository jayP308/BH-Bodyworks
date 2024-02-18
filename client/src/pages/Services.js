import React, { useState, useRef } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import oneOnOneVideo from "../assets/images/oneonone.png"
import neuroVideo from "../assets/images/Neuromuscular.png"
import deepTissue from "../assets/images/Deep-tissue.png"
import cupping from "../assets/images/Cupping.png"
import mobilityTraining from "../assets/images/mobility-training.png"
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts'
import Box from '@mui/material/Box';

export default function BasicCard() {
  const matches = useMediaQuery('(max-width: 480px)')


  const massageDescriptionRef = useRef(null);
  const scheduleViewRef = useRef(null);

  const [isTypographyVisible, setTypographyVisible] = useState(false);
  const [isTypographyVisible1, setTypographyVisible1] = useState(false);
  const [isTypographyVisible2, setTypographyVisible2] = useState(false);
  const [isTypographyVisible3, setTypographyVisible3] = useState(false);
  const [isTypographyVisible4, setTypographyVisible4] = useState(false);
  const [isBackToServices, setBackToServices] = useState(false)

  const [isScheduleVisible, setScheduleVisible] = useState(false);

  const handleTopOfPage = () => {
    window.history.replaceState(null, null, '/bh-bodyworks');
    const servicesElement = document.getElementById('Home');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
    setTypographyVisible(false);
    setTypographyVisible1(false);
    setTypographyVisible2(false);
    setTypographyVisible3(false);
    setTypographyVisible4(false);
    setScheduleVisible(false);
  }

  const handleToggleServices = () => {
    setTypographyVisible(false);
    setTypographyVisible1(false);
    setTypographyVisible2(false);
    setTypographyVisible3(false);
    setTypographyVisible4(false);
    setScheduleVisible(false);
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  const handleToggleSchedule = () => {
    setScheduleVisible(true);
    const scheduleElement = document.getElementById('schedule-view');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleToggleTypography1 = () => {
    setTypographyVisible(false);
    setTypographyVisible1(true);
    setTypographyVisible2(false);
    setTypographyVisible3(false);
    setTypographyVisible4(false);
    setScheduleVisible(false);
    if (massageDescriptionRef.current) {
      massageDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleTypography2 = () => {
    setTypographyVisible(false);
    setTypographyVisible1(false);
    setTypographyVisible2(true);
    setTypographyVisible3(false);
    setTypographyVisible4(false);
    setScheduleVisible(false);
    if (massageDescriptionRef.current) {
      massageDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const handleToggleTypography3 = () => {
    setTypographyVisible(false);
    setTypographyVisible1(false);
    setTypographyVisible2(false);
    setTypographyVisible3(true);
    setTypographyVisible4(false);
    setScheduleVisible(false);
    if (massageDescriptionRef.current) {
      massageDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleTypography4 = () => {
    setTypographyVisible(false);
    setTypographyVisible1(false);
    setTypographyVisible2(false);
    setTypographyVisible3(false);
    setTypographyVisible4(true);
    setScheduleVisible(false);
    if (massageDescriptionRef.current) {
      massageDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleTypography = () => {
    setTypographyVisible(true);
    setTypographyVisible1(false);
    setTypographyVisible2(false);
    setTypographyVisible3(false);
    setTypographyVisible4(false);
    setScheduleVisible(false);
    if (massageDescriptionRef.current) {
      massageDescriptionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };

  return (
    <>
    {matches ? (
      <>
        <div style={{
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',  // Allow items to wrap to the next line
        margin: "auto",
        marginTop: '20px',
        gap: 10,
          }}>
        <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
          <div>
            <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>One on One Assisted Stretching</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={oneOnOneVideo}
             
              loading="lazy"
              alt=""
            />
          </AspectRatio>
      
        </Card>


        <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
          <div>
            <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Neuromuscular Therapy</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={neuroVideo}
              
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </Card>

        <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
          <div>
            <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Deep Tissue Massage</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={deepTissue}
              
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          
        </Card>

        <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
          <div>
            <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Cupping</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={cupping}
              
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          
        </Card>

        <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
          <div>
            <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Mobility Training</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
              src={mobilityTraining}
              
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <Typography onClick={handleToggleTypography}>Hello</Typography>
        </Card>

        </div>
      </>
    ) : (
    <>
    <Button onClick={handleTopOfPage} sx={{width: "25%", margin: "auto"}}>Back To Home</Button>
    <div style={{
        display: "flex",
        justifyContent: 'center',
        flexWrap: 'wrap',  // Allow items to wrap to the next line
        margin: "auto",
        marginTop: '20px',
        gap: 10,
        }}
      >
        
    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>One on One Assisted Stretching</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={oneOnOneVideo}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Button href="#massage-description" onClick={handleToggleTypography}>Read More</Button>
  
    </Card>


    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Neuromuscular Therapy</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={neuroVideo}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Button href="#massage-description" onClick={handleToggleTypography1}>Read More</Button>
    </Card>

    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Deep Tissue Massage</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={deepTissue}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Button href="#massage-description" onClick={handleToggleTypography2}>Read More</Button>
    </Card>

    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Cupping</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={cupping}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Button href="#massage-description" onClick={handleToggleTypography3} disabled>Read More</Button>
    </Card>

    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>Mobility Training</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={mobilityTraining}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Button href="#massage-description" onClick={handleToggleTypography4} disabled>Read More</Button>
    </Card>

    
    <Card ref={massageDescriptionRef} sx={{ width: "80%", backgroundColor: "transparent",}}>
      {isTypographyVisible && (
        <>
        <AspectRatio minHeight="90px" maxHeight="475px" width="">
        <img
          src={oneOnOneVideo}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography style={{fontSize: "30px", color: "white", fontStyle: "bold", color: "rgb(144, 238, 144)", fontStyle: "bold"}}>Price: $90 / 60 min</Typography>
      <Button onClick={handleToggleSchedule} style={{width: "25%", margin: "auto"}}>Book Now</Button>
      <br></br>
      <div style={{width: "75%", margin: "auto"}}>
        <Typography sx={{ fontFamily: "san-serif", color: "white", fontSize: "30px"}}>Feeling tight and don't want to stretch on your own?</Typography>
        <br></br>
        <Typography sx={{color: "white", fontSize: "25px"}}>Come get assisted stretching!</Typography>
        <Typography sx={{color: "white", fontSize: "25px"}}>I stretch each muscle group head to toe, finding any imbalances and working towards better flexibility and movement goals!</Typography>
      </div>
      </>
      )}

      {isTypographyVisible1 && (
        <>
        <AspectRatio minHeight="90px" maxHeight="475px" width="">
        <img
          src={neuroVideo}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography style={{fontSize: "30px", color: "white", fontStyle: "bold", color: "rgb(144, 238, 144)"}}>Price: $150 / 90 min</Typography>
      <Button onClick={handleToggleSchedule} style={{width: "25%", margin: "auto"}}>Book Now</Button>
      <br></br>
      <div style={{width: "75%", margin: "auto"}}>
        <Typography sx={{ fontFamily: "san-serif", color: "white", fontSize: "30px", fontStyle: "bold"}}>Do you have shooting pain or a dull ache somewhere in your muscles?</Typography>
        <br></br>
        <Typography sx={{color: "white", fontSize: "25px"}}>NMT is for you!</Typography>
        <Typography sx={{color: "white", fontSize: "25px"}}>Provides a variety of assessments that gives a base plan to ensure we are breaking down the culprits causing your pain! Usually requires multiple sessions to see max results.</Typography>
      </div>
      </>
      )}

      {isTypographyVisible2 && (
        <>
        <AspectRatio minHeight="90px" maxHeight="475px" width="">
        <img
          src={deepTissue}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Typography style={{fontSize: "30px", color: "white", fontStyle: "bold", color: "rgb(144, 238, 144)"}}>Prices:</Typography>
      <Typography style={{fontSize: "30px", color: "white", fontStyle: "bold", color: "rgb(144, 238, 144)"}}>$125 / 60 min</Typography>
      <Typography style={{fontSize: "30px", color: "white", fontStyle: "bold", color: "rgb(144, 238, 144)"}}>$150 / 90 min</Typography>
      <Button onClick={handleToggleSchedule} style={{width: "25%", margin: "auto"}}>Book Now</Button>
      <br></br>
      <div style={{width: "75%", margin: "auto"}}>
        <Typography sx={{ fontFamily: "san-serif", color: "white", fontSize: "30px", fontStyle: "bold"}}>I come to you in the comfort of own home!</Typography>
        <br></br>
        <Typography sx={{color: "white", fontSize: "25px"}}>I bring my own table and supplies!</Typography>
        <Typography sx={{color: "white", fontSize: "25px"}}>Utilizing a wide variety of soft tissue techniques to ensure a relaxing and effective massage</Typography>
      </div>
      </>
      )}
    </Card>
    </div>
    {isScheduleVisible && (
      <>
      
      <Card id="schedule-view">
        <>
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
        
        </>
      
        <Button onClick={handleToggleServices} sx={{width: "25%", margin: "auto"}}>Back To Services</Button>
      </Card>
      </>
    )}
    </>
    )}
  </>
  );
}