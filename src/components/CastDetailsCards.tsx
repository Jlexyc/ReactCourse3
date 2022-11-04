import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { CastModel } from '../services/models';

import { getLocalisedString } from '../services/localisationService';

interface TopCastDetailsCardProps {
  castModel: CastModel;
}

export const CastDetailsCard = ({ castModel }: TopCastDetailsCardProps) => {
  return (
    <Card sx={{ 
      minWidth: 275, 
      backgroundColor: 
      '#F0F0F0', 
      margin: '20px', 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      minHeight: '100',
      width: '100%',
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {castModel.category}
          </Typography>
          <Typography variant="h5" component="div">
            {castModel.name}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button size="small">{getLocalisedString('castDetailsActionTitle')}</Button>
      </CardActions>
    </Card>
  );
};
