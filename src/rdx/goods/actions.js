export const GET_GOODS_LIST_REQUEST = 'GET_GOODS_LIST_REQUEST';
export const GET_GOODS_LIST_SUCCESS = 'GET_GOODS_LIST_SUCCESS';
export const GET_GOODS_LIST_FAILED = 'GET_GOODS_LIST_FAILED';

export const CREATE_ITEM_REQUEST = 'CREATE_ITEM_LIST_REQUEST';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_LIST_SUCCESS';
export const CREATE_ITEM_FAILED = 'CREATE_ITEM_LIST_FAILED';

export const createItemFailed = error => ({
  type: CREATE_ITEM_FAILED,
  error: error,
})

export const createItemRequest = () => ({
  type: CREATE_ITEM_REQUEST
})

export const createItemSuccess = (item) => ({
  type: CREATE_ITEM_SUCCESS,
  item,
});

export const getGoodsListFailed = error => ({
  type: GET_GOODS_LIST_FAILED,
  error: error,
})

export const getGoodsListRequest = () => ({
  type: GET_GOODS_LIST_REQUEST
})

export const getGoodsListSuccess = (list) => ({
  type: GET_GOODS_LIST_SUCCESS,
  list,
});
