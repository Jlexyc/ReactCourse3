import React, { useCallback, useContext } from 'react';
import { Card, CardContent, Typography, CardActions, Button, CardMedia, Box } from '@mui/material';
import { ThemeContext } from '../App';
import { MovieModel } from '../services/models';
import { getLocalisedString } from '../services/localisationService';

export interface MovieCardPropsType {
  movie: MovieModel;
  onPress: (movieId: string) => void;
}

export const MovieCard = ({ movie, onPress }: MovieCardPropsType) => {

  const theme = useContext(ThemeContext);

  const onMoviePressed = useCallback(() => {
    const movieIdComponents = movie.id.split('/');
    if (movieIdComponents && movieIdComponents.length) {
      onPress(movieIdComponents[movieIdComponents.length - 2]);
    }
  }, [movie.id]);

  return (
    <Card sx={{ 
      minWidth: 275, 
      backgroundColor: 
      theme === 'dark' ? '#A0A0A0' : '#FAFAFA',
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
          <Button size="small" onClick={onMoviePressed}>{getLocalisedString('movieCardActionTitle')}</Button>
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

