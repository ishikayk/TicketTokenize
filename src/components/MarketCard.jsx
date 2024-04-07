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
        <Card sx={{ minWidth: 275, backgroundColor: '#474B4f'}} className={`${eventname}-card`} elevation={24}>
            <CardActionArea href={``} disableRipple>
                
            </CardActionArea>
        </Card>
    );
}

export default MarketCard;