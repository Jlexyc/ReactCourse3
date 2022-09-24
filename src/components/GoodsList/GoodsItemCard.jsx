import React from 'react';
import { Grid, Typography } from '@mui/material';

export const GoodsItemCard = ({ item }) => {
  return (
    <Grid item md={2}>
      <Grid>
        <Typography variant="Caption" >{item.title}</Typography>
      </Grid>
      <Grid>
        <Typography variant="Caption" >{item.description}</Typography>
      </Grid>
      <Grid>
        <Typography variant="Caption" >{item.weight}</Typography>
      </Grid>
      <Grid>
        <Typography variant="Caption" >{item.category}</Typography>
      </Grid>
    </Grid>
  )
}