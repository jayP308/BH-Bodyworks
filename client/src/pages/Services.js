import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Header from '../components/Header_1';
import cuppingVideo from "../assets/images/cupping.gif"

export default function BasicCard() {
  return (
    <>
    <div style={{
          display: 'flex',
          justifyContent: 'center',  // Center the items horizontally
          alignItems: 'center',      // Center the items vertically
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
          src={cuppingVideo}
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography sx={{color: "rgb(144, 238, 144)"}} level="body-xs">Price:</Typography>
          <Typography sx={{color: "rgb(144, 238, 144)"}} fontSize="lg" fontWeight="lg">
            TBD
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Book Now!
        </Button>
      </CardContent>
    </Card>
    <Card sx={{ width: 320, backgroundColor: "rgba(170, 75, 110, 0.75)",}}>
      <div>
        <Typography level="title-lg" sx={{color: "rgb(144, 238, 144)"}}>One on One Assisted Stretching</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography sx={{color: "rgb(144, 238, 144)"}} level="body-xs">Price:</Typography>
          <Typography sx={{color: "rgb(144, 238, 144)"}} fontSize="lg" fontWeight="lg">
            TBD
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Book Now!
        </Button>
      </CardContent>
    </Card>

    </div>
    </>
  );
}