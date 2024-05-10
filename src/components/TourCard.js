import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { Paper, Grid, Typography, Box, Rating } from '@mui/material';
import {AccessTime } from "@mui/icons-material"
const TourCard = () => {
  return (
    <Grid item xs={3}>
        <Paper elevation={5}>
          <img src={"data:image/jpeg;base64,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"} alt='sunset' className='img'></img>
        <Box paddingX={1}>
        <Typography variant='subtitle1' component="h2">
          Immerse Into the Falls
        </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: 'flex',
            alignitems: 'center',
          }}>
            <AccessTime sx={{width: 12.5}} />
            <Typography variant='body2' component="p" marginLeft={0.5}>
              5 hours
            </Typography>
        </Box>
        <Box 
         paddingX={1}
         sx={{
           display: 'flex',
           alignitems: 'center'}}
           marginTop={3}
           >
            <Rating name="read-only" value={4.5} precision={0.25} size='small'readOnly />
          <Typography 
          variant='body2' 
          component="p" 
          marginLeft={0.5}
          >
            4.5
          </Typography>
          <Typography 
          variant='body3' 
          component="body3" 
          marginLeft={1.5}
          >
            (655 reviews)
          </Typography>
        </Box>
        <Box 
        paddingX={1}
         sx={{
          display: 'flex',
          alignitems: 'center'}}
          marginTop={0}
          >
        <Typography 
          variant='h6' 
          component="h3" 
          marginTop={0}
          >
            From $147
          </Typography>
        </Box>
        
        </Paper>
    </Grid>
  )
}

export default TourCard
