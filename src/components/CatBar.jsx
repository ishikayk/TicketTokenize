import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
  Tooltip
} from "@mui/material";


const CatBar = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Box sx={{backgroundColor: '#4d4d4d', borderRadius: '10px', width: '70%'}}>
        <Button sx={{color: 'inherit', borderRadius: '10px' }}>All</Button>
        <Button sx={{color: 'inherit', borderRadius: '10px' }}>Concerts</Button>
        <Button sx={{color: 'inherit', borderRadius: '10px' }}>Sports</Button>
        <Button sx={{color: 'inherit', borderRadius: '10px' }}>Shows</Button>
      </Box>
    </div>
  );
};

export default CatBar;