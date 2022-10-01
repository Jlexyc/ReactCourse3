import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, TextField } from '@mui/material';

import { setFilterAction } from '@/rdx/goods/actions';
import { fetchGoodsThunk } from '@/rdx/goods/thunks';
import { selectGoodsToDisplay, selectIsDataLoading } from '@/rdx/goods/selectors';
import { useDebounce } from '@/components/hooks/useDebounce';

import { GoodsItemCard } from './GoodsItemCard';

export const GoodsList = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectGoodsToDisplay);
  const isDataLoading = useSelector(selectIsDataLoading);
  const debounce = useDebounce();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchGoodsThunk());
  }, [dispatch]);

  const onFilterChange = useCallback((event) => {
    setFilter(event.target.value);
    debounce(() => {
      dispatch(setFilterAction(event.target.value));
    });
  }, []);

  // if (goodsError) {
  //   return <Typography variant="H1" >{goodsError}</Typography>
  // }
  if (isDataLoading) {
    return <CircularProgress color="success" />;
  }
  return (
    <>
      <TextField 
        id="standard-basic"
        margin="dense" 
        fullWidth 
        name='description' 
        label="Filter by name" 
        variant="standard" 
        onChange={onFilterChange} 
        value={filter}
      />
      {goods.map((item, index) => <GoodsItemCard item={item} key={item.id} index={index} />)}
    </>
  );
};