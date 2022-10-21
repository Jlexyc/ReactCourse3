import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Box } from '@mui/material';

import { MovieModel } from '../services/models';

export interface MovieCardPropsType {
  movie: MovieModel;
}

export const MovieCard = ({ movie }: MovieCardPropsType) => {
  return (
    <Card sx={{ 
      minWidth: 275, 
      backgroundColor: 
      '#F0F0F0', 
      margin: '20px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      height: '200',
      width: '100%',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {movie.year}
          </Typography>
          <Typography variant="h5" component="div">
            {movie.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        height={200}
        image={movie.image?.url}
        sx={{ objectFit: "contain", width: 150 }}
      />
    </Card>
  );
};

