import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";

import { Box, TextField, Button, Typography } from '@mui/material';

import { hideFormModal } from '../../rdx/app/actions';
import { addTodoItem, editTodoItem } from '../../rdx/todoList/actions';
import { selectTodoData } from '../../rdx/todoList/selector';

const styles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '300px',
    maxWidth: '300px',
  }
}
export const TodoElementsDetails = () => {
  const { itemId } = useParams()
  console.log('itemId: ', itemId);
  const todoData = useSelector(selectTodoData);
  const navigate = useNavigate();

  const element = useMemo(() => {
    if (!itemId) {
      return null;
    }
    return todoData.find(e => e.id === itemId)
  }, [todoData, itemId]);
  
  const [description, setDescription] = useState(element ? element.description : '');
  const [when, setWhen] = useState(element ? element.when : '');
  const [priority, setPriority] = useState(element ? element.priority : '');

  useEffect(() => {
    if (element) {
      setDescription(element.description);
      setWhen(element.when);
      setPriority(element.priority);
    } else {
      setDescription('');
      setWhen('');
      setPriority('');
    }
  }, [element]);

  const dispatch = useDispatch();

  const onCloseClick = useCallback(() => {
    navigate('/app')
  }, []);

  const onDescriptionChange = useCallback((event) => {
    setDescription(event.target.value);
  }, [])

  const onWhenChange = useCallback((event) => {
    setWhen(event.target.value);
  }, [])

  const onPriorityChange = useCallback((event) => {
    if (event.target.value.length === 0) {
      setPriority('');
    }

    const number = parseInt(event.target.value);
    if (isNaN(number) || number < 0 || number > 2) {
      return;
    }

    setPriority(number);
  }, [])

  const onButtonClick = useCallback(() => {
    if (element) {
      dispatch(editTodoItem({
        ...element,
        description,
        when,
        priority,
      }))
    } else {
      dispatch(addTodoItem({
        description,
        when,
        priority,
      }));
    }
    dispatch(hideFormModal());
  }, [element, dispatch, description, when, priority]);

  return (
    <Box sx={styles.box}>
      <TextField id="standard-basic" margin="dense" fullWidth label="Description" variant="standard" onChange={onDescriptionChange} value={description}/>
      <TextField id="standard-basic" margin="dense" fullWidth label="When" variant="standard" onChange={onWhenChange} value={when} />
      <TextField id="standard-basic" margin="dense" fullWidth label="Priority" variant="standard" onChange={onPriorityChange} value={priority} />
      {element ? <Typography variant="caption" component="div">{element.longDescription}</Typography> : null}
      <Button onClick={onButtonClick} size="small">Save</Button>
      <Button onClick={onCloseClick} size="small">Close</Button>

    </Box>
  )
}
