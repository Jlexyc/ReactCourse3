import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Typography, Button, CardContent, CardActions, Card, Box } from '@mui/material';

import { getColorFromPriority } from '../../utils/elementsUtils';

import './TodoElement.css';

const styles = {
  boxStyles: {
    width: '200px',
    height: '240px',
    margin: '10px',
  },
  typographyExtraStyle: {
    mb: 1.5
  },
  cardContent: {
    height: '150px',
  }
}

export const TodoElement = ({ element, onEditElement = () => {}, onRemoveElement = () => {} }) => {
  const additionalCardStyle = useMemo(() => {
    return [styles.boxStyles, { bgcolor: getColorFromPriority(element.priority) }]
  }, [element.priority])

  const onRemoveClick = useCallback(() => {
    onRemoveElement(element.id)
  }, [element.id, onRemoveElement])

  const onEditClick = useCallback(() => {
    onEditElement(element.id)
  }, [element.id, onEditElement])

  return (
    <Box>
      <Card sx={additionalCardStyle}>
        <CardContent sx={styles.cardContent}>
          <Typography variant="h5" component="div">{element.description}</Typography>
          <Typography sx={styles.typographyExtraStyle} color="text.secondary">{element.when}</Typography>
          <Typography sx={styles.typographyExtraStyle} color="text.secondary">{element.done ? "DONE" : "PENDING"}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onRemoveClick} variant="contained">Remove</Button>
          <Button onClick={onEditClick} variant="contained">Edit</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

TodoElement.propTypes = {
  element: PropTypes.shape({
    description: PropTypes.string,
    when: PropTypes.string,
    priority: PropTypes.number,
    done: PropTypes.bool,
  }),
  onEditElement: PropTypes.func,
  onRemoveElement: PropTypes.func,
}
