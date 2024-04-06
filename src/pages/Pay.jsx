import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const Pay = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: "5em" }}>
      <Card sx={{ width: '40%', height: '87vh', marginLeft: '20px', marginRight: '20px'}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="700"
            image="src/assets/concert.jpg"
        />
      </Card>
      <div style={{display: 'flex', flexFlow:'column', textAlign: 'left'}}>
        <div>
            <Typography variant="h5" >sold by: username</Typography>
            <Typography variant="h1">Concert Title</Typography>
        </div>
      <Card sx={{backgroundColor: 'black', width: '155%'}}>
        <CardContent sx={{display: 'flex', alignItems: 'flex-start'}}>
            <div style={{display: 'flex', flexFlow: 'column'}}>
                <Typography variant="h7" sx={{color:"gray"}}>Price set</Typography>
                <Typography variant="h3" sx={{color: "green"}}>0.36 SOL</Typography>
            </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default Pay;
