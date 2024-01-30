import * as React from 'react';
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

export default function BasicCard() {
  const matches = useMediaQuery('(max-width: 480px)')
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
        
        </Card>

        </div>
      </>
    ) : (
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
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
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
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
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
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
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
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
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
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
    
    </Card>

    </div>
    </>
    )};
  </>
  );
}