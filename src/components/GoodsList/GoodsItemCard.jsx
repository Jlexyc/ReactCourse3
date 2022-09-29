import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Grid, Typography, Button, CircularProgress, TextField } from '@mui/material';

import { deleteItemThunk, editItemThunk } from '../../rdx/goods/thunks'
import { selectIsItemRemoving, selectIsItemUpdating } from '../../rdx/goods/selectors' 
import './GoodsItemCard.css'

export class GoodsItemCardClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemEditing: false,
      editItem: {},
    }
  }

  static getDerivedStateFromProps(props, state) {
    return { editItem: props.item };
  }

  shouldComponentUpdate() {
    return Math.random() > 0.5;
  }

  onItemChange = () => {

  }

  onEditItem = () => {
    this.setState({
      isItemEditing: !this.state.isItemEditing,
    })
  }

  onItemRemove = () => {
    this.props.deleteItemAction(this.props.item.id);
  }

  render() {
    const { item, index, isCurrentItemRemoving, isItemUpdating } = this.props;
    const { isItemEditing, editItem } = this.state;
    return (
      <div >
        <Grid className='elementRow' container p={1} m={1}>
          <Grid item md={1}>
            {index+1}
          </Grid>
          <Grid item md={2}>
            {isItemEditing ? (
              <TextField 
                id="standard-basic" 
                margin="dense" 
                fullWidth 
                name='title' 
                label="Title" 
                variant="standard" 
                onChange={this.onItemChange} 
                value={editItem.title} 
              /> ) : <Typography variant="Caption" >{item.title}</Typography>}
          </Grid>
          <Grid item md={2} m={1}>
            {isItemEditing ? (
              <TextField 
                id="standard-basic"
                margin="dense" 
                fullWidth 
                name='description' 
                label="Description" 
                variant="standard" 
                onChange={this.onItemChange} 
                value={editItem.description}
              />
            ) : <Typography variant="Caption" >{item.description}</Typography>}
          </Grid>
          <Grid item md={2} m={1}>
            {isItemEditing ? (
              <TextField 
                id="standard-basic" 
                margin="dense" 
                fullWidth 
                name='weight' 
                label="Weight" 
                variant="standard" 
                onChange={this.onItemChange} 
                value={editItem.weight} 
              />
            ) : <Typography variant="Caption" >{item.weight}</Typography>}
          </Grid>
          <Grid item md={2} m={1}>
            {isItemEditing ? (
              <TextField 
                id="standard-basic" 
                margin="dense" 
                fullWidth 
                name='category' 
                label="Category" 
                variant="standard" 
                onChange={this.onItemChange} 
                value={editItem.category} 
              />
            ) : <Typography variant="Caption" >{item.category}</Typography>}
          </Grid>
          <Grid item md={1} className='buttonGridItem'>
            {isItemUpdating ? <CircularProgress color="success" size={24} /> : <Button onClick={this.onEditItem} size="small" variant='contained'>{isItemEditing ? 'Done' : 'Edit'}</Button>}
          </Grid>
          <Grid item md={1} className='buttonGridItem'>
            {isCurrentItemRemoving ? <CircularProgress color="success" size={24} /> : <Button onClick={this.onItemRemove} size="small" variant='contained'>Remove</Button>}
          </Grid>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isItemUpdating: selectIsItemUpdating(state)[props.item.id],
    isCurrentItemRemoving: selectIsItemRemoving(state)[props.item.id],
  }
}

const mapDispatchToProps = {
  deleteItemAction: deleteItemThunk,
}

export const GoodsItemCard = connect(mapStateToProps, mapDispatchToProps)(GoodsItemCardClass);

export const GoodsItemCard2 = ({ item, index, }) => {
  const dispatch = useDispatch();
  const isCurrentItemRemoving = useSelector(selectIsItemRemoving)[item.id];
  const isItemUpdating = useSelector(selectIsItemUpdating)[item.id];
  
  const [isItemEditing, setIsItemEditing] = useState(false);

  const [editItem, setEditItem] = useState(item || {});

  useEffect(() => {
    setEditItem(item);
  }, [item])
  
  const onItemChange = useCallback((event) => {
    setEditItem({
      ...editItem,
      [event.target.name]: event.target.value,
    })
  }, [editItem]);


  const onItemRemove = useCallback(() => {
    dispatch(deleteItemThunk(item.id));
  }, [item, dispatch]);

  const onSaveItem = useCallback(() => {
    dispatch(editItemThunk({
      ...editItem,
    }))
  }, [editItem, dispatch]);

  const onEditItem = useCallback(() => {
    if (isItemEditing) {
      onSaveItem();
    }
    setIsItemEditing(!isItemEditing)
  }, [isItemEditing, onSaveItem]);

  return (
    <div >
      <Grid className='elementRow' container p={1} m={1}>
        <Grid item md={1}>
          {index+1}
        </Grid>
        <Grid item md={2}>
          {isItemEditing ? (
            <TextField 
              id="standard-basic" 
              margin="dense" 
              fullWidth 
              name='title' 
              label="Title" 
              variant="standard" 
              onChange={onItemChange} 
              value={editItem.title} 
            /> ) : <Typography variant="Caption" >{editItem.title}</Typography>}
        </Grid>
        <Grid item md={2} m={1}>
          {isItemEditing ? (
            <TextField 
              id="standard-basic"
              margin="dense" 
              fullWidth 
              name='description' 
              label="Description" 
              variant="standard" 
              onChange={onItemChange} 
              value={editItem.description}
            />
          ) : <Typography variant="Caption" >{editItem.description}</Typography>}
        </Grid>
        <Grid item md={2} m={1}>
          {isItemEditing ? (
            <TextField 
              id="standard-basic" 
              margin="dense" 
              fullWidth 
              name='weight' 
              label="Weight" 
              variant="standard" 
              onChange={onItemChange} 
              value={editItem.weight} 
            />
          ) : <Typography variant="Caption" >{editItem.weight}</Typography>}
        </Grid>
        <Grid item md={2} m={1}>
          {isItemEditing ? (
            <TextField 
              id="standard-basic" 
              margin="dense" 
              fullWidth 
              name='category' 
              label="Category" 
              variant="standard" 
              onChange={onItemChange} 
              value={editItem.category} 
            />
          ) : <Typography variant="Caption" >{editItem.category}</Typography>}
        </Grid>
        <Grid item md={1} className='buttonGridItem'>
          {isItemUpdating ? <CircularProgress color="success" size={24} /> : <Button onClick={onEditItem} size="small" variant='contained'>{isItemEditing ? 'Done' : 'Edit'}</Button>}
        </Grid>
        <Grid item md={1} className='buttonGridItem'>
          {isCurrentItemRemoving ? <CircularProgress color="success" size={24} /> : <Button onClick={onItemRemove} size="small" variant='contained'>Remove</Button>}
        </Grid>
      </Grid>
    </div>
  )
}
