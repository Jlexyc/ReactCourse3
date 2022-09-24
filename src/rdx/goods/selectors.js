export const selectAllGoods = state => state.goods.data;
export const selectIsDataLoading = state => state.goods.isDataLoading;
export const selectIsDataAdding = state => state.goods.isDataAdding;
export const selectGoodsError = state => state.goods.error;