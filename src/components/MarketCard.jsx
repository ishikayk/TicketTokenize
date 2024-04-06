import React from 'react';
import "./MarketCard.css" 
import { 
  Typography,  
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';

const MarketCard = ({ eventname, type, user, location, cost}) =>{
    return(
        <Card sx={{ minWidth: 275, border: '1px solid red', backgroundColor: '#474B4f'}} className={`${type}-card`} elevation={24}>
            <CardActionArea disableRipple>
                <CardContent sx={{ borderRadius: '60px' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                        {location}
                    </Typography>
                    <Typography variant="h2" component="div">
                        {eventname}
                    </Typography>
                    <Typography variant="h5" sx={{  }} color="text.secondary">
                        {user}
                    </Typography>
                    <Typography variant="body2">
                        {cost}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default MarketCard;