import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { MovieModel } from '../services/models';
import { findMovies } from '../services/imdbService';

interface DashboardStyles {
  searchField: React.CSSProperties,
}

const styles: DashboardStyles = {
  searchField: {
    width: '500px',
  }
};

export const Dashboard = () => {
  const [movies, setMovies] = useState<Array<MovieModel>>([]);

  return (
    <React.Fragment>
      <TextField variant="standard" label="Search  by title" sx={styles.searchField}/>
      {movies.map((movieElement) => {
        return <div key={movieElement.id}>
          <p>
            {movieElement.title}
          </p>
          <p>
            {movieElement.runningTimeInMinutes}
          </p>
          <p>
            {movieElement.year}
          </p>
        </div>
      })}
    </React.Fragment>
  );
};