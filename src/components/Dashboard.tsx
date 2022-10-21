import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { searchMovies } from '../rdx/movies/thunks';
import { selectMoviesList } from '../rdx/movies/selectors';
import { useAppDispatch } from '../rdx/hooks';

import { MovieCard } from './MovieCard';

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

  const movies = useSelector(selectMoviesList);
  const dispatch = useAppDispatch();

  const onSearchTextChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  }, []);

  const search = useCallback(() => {
    localStorage.setItem('searchString', searchString);
    dispatch(searchMovies(searchString));
  }, [searchString]);

  return (
    <React.Fragment>
      <div>
        <TextField 
          variant="standard" 
          label="Search by title" 
          value={searchString}
          onChange={onSearchTextChange}
          sx={styles.searchField}
        />
        <Button onClick={search} variant="contained">Search</Button>
      </div>
      {movies.map((movieElement) => <MovieCard key={movieElement.id} movie={movieElement} />)}
    </React.Fragment>
  );
};
