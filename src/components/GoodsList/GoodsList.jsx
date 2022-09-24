import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { GoodsItemCard } from './GoodsItemCard';
import { fetchGoodsThunk } from '../../rdx/goods/thunks';
import { selectAllGoods, selectIsDataLoading, selectGoodsError } from '../../rdx/goods/selectors';

export const GoodsList = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);
  const isDataLoading = useSelector(selectIsDataLoading);
  const goodsError = useSelector(selectGoodsError);

  useEffect(() => {
    dispatch(fetchGoodsThunk());
  }, [dispatch]);

  if (goodsError) {
    return <Typography variant="H1" >{goodsError}</Typography>
  }
  if (isDataLoading) {
    return <CircularProgress color="success" />
  }
  return (
    <Grid container spacing={2}>
      {goods.map((item) => <GoodsItemCard item={item} key={item.id} />)}
    </Grid>
  )
}