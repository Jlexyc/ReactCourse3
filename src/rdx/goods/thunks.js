import { requestGoods, createItem } from '../../services/goodsService'
import { 
  getGoodsListRequest, 
  getGoodsListSuccess, 
  getGoodsListFailed,
  createItemRequest,
  createItemFailed,
  createItemSuccess,
} from './actions';

export const fetchGoodsThunk = () => {
  return async (dispatch, getState) => {
    dispatch(getGoodsListRequest());
    const response = await requestGoods();
    if (response.success) {
      dispatch(getGoodsListSuccess(response.response.goods));
    } else {
      dispatch(getGoodsListFailed(response.error));
    }
  }
}

export const createItemThunk = (item) => {
  return async (dispatch, getState) => {
    dispatch(createItemRequest());
    const response = await createItem(item);
    if (response.success) {
      dispatch(createItemSuccess(response.response));
    } else {
      dispatch(createItemFailed(response.error));
    }
  }
}