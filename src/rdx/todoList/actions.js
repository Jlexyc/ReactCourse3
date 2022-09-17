import { v4 as uuidv4 } from 'uuid';

export const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const EDIT_TODO_ITEM = 'EDIT_TODO_ITEM';

export const addTodoItem = (itemData) => {
  return {
    type: ADD_TODO_ITEM,
    item: {
      ...itemData,
      id: uuidv4(),
      done: false,
    }
  }
}

export const removeTodoItem = (id) => {
  return {
    type: REMOVE_TODO_ITEM,
    itemId: id,
  }
}

export const editTodoItem = (itemData) => {
  return {
    type: EDIT_TODO_ITEM,
    item: itemData,
  }
}