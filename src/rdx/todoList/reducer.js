import { v4 as uuidv4 } from 'uuid';
import { REMOVE_TODO_ITEM, ADD_TODO_ITEM, EDIT_TODO_ITEM } from './actions';

const initialState = {
  data: [
    {
      id: uuidv4(),
      description: 'Buy Milk',
      when: 'Tomorrow',
      priority: 1,
      done: false,
    },
    {
      id: uuidv4(),
      description: 'Sell ETH',
      when: 'Next week',
      priority: 2,
      done: false,
    },
    {
      id: uuidv4(),
      description: 'Visit a doctor',
      when: 'Today',
      priority: 3,
      done: false,
    },
  ]
}

export const reducer = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        ...state,
        data: [...state.data, action.item],
      }
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        data: state.data.filter(e => e.id !== action.itemId),
      }
    case EDIT_TODO_ITEM: 
      return {
        ...state,
        data: state.data.map(element => {
          if (element.id === action.item.id) {
            return action.item;
          } else {
            return element;
          }
        })
      }
    default:
      return state;
  }
}