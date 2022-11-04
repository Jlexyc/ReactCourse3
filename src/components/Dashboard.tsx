import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { searchMovies } from '../rdx/movies/thunks';
import { selectMoviesList } from '../rdx/movies/selectors';
import { useAppDispatch } from '../rdx/hooks';

import { MovieCard } from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { getLocalisedString } from '../services/localisationService';

import { updateThemeAction } from '../rdx/app/actions';

interface DashboardStyles {
  searchField: React.CSSProperties,
}

const styles: DashboardStyles = {
  searchField: {
    width: '500px',
  }
};

const defaultSearchValue = localStorage.getItem('searchString') || '';

export const Dashboard = () => {
  const [searchString, setSearchString] = useState<string>(defaultSearchValue);
  const navigate = useNavigate();
  const movies = useSelector(selectMoviesList);
  const dispatch = useAppDispatch();

  const onSearchTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  }, []);

  const search = useCallback(() => {
    localStorage.setItem('searchString', searchString);
    dispatch(searchMovies(searchString));
  }, [searchString]);

  const showCast = useCallback((movieId: string) => {
    navigate('cast/' + movieId);
  }, []);

  const switchToUA = useCallback(() => {
    localStorage.setItem('userLocale', 'ua');
    navigate(0);
  }, [navigate]);

  const switchToEN = useCallback(() => {
    localStorage.setItem('userLocale', 'en');
    navigate(0);
  }, [navigate]);

  const switchToDark = useCallback(() => {
    dispatch(updateThemeAction('dark'));
  }, [dispatch]);

  const switchTolight = useCallback(() => {
    dispatch(updateThemeAction('light'));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className='LanguageSelect'>
        <Button variant="text" onClick={switchToUA}>UA</Button>
        <Button variant="text" onClick={switchToEN}>EN</Button>
        <Button variant="text" onClick={switchToDark}>Dark</Button>
        <Button variant="text" onClick={switchTolight}>Light</Button>
      </div>
      <div className='Dashboard'>
        <TextField 
          variant="standard" 
          label="Search by title" 
          value={searchString}
          onChange={onSearchTextChange}
          sx={styles.searchField}
        />
        <Button onClick={search} variant="contained">{getLocalisedString('searchButtonTitle')}</Button>
      </div>
      {movies.map((movieElement) => <MovieCard key={movieElement.id} movie={movieElement} onPress={showCast} />)}
    </React.Fragment>
  );
};
