import { 
  GET_GOODS_LIST_REQUEST, 
  GET_GOODS_LIST_SUCCESS, 
  GET_GOODS_LIST_FAILED,
  CREATE_ITEM_FAILED,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_REQUEST,
} from './actions';

const initialState = {
  data: [],
  isDataLoading: false,
  isDataAdding: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM_REQUEST:
      return {
        ...state,
        error: null,
        isDataAdding: true,
      }
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isDataAdding: false,
        data: [...state.data, action.item],
      }
    case CREATE_ITEM_FAILED:
      return {
        ...state,
        isDataAdding: false,
        error: action.error,
      }
    case GET_GOODS_LIST_FAILED:
      return {
        ...state,
        data: [],
        error: action.error,
        isDataLoading: false,
      }
    case GET_GOODS_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isDataLoading: true,
      }
    case GET_GOODS_LIST_SUCCESS:
      return {
        ...state,
        data: action.list,
        isDataLoading: false,
      }
    default:
      return state;
  }
}