import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { selectTodoData } from '../../rdx/todoList/selector';
import { removeTodoItem } from '../../rdx/todoList/actions';
import { showFormModal } from '../../rdx/app/actions';

import { TodoElement } from '../TodoElement/TodoElement';
import { TodoAddElement } from '../TodoElement/TodoAddElement';
import './TodoElementList.css'

export const TodoElementList = () => {
  
  const dispatch = useDispatch();

  const onAddClicked = useCallback(
    () => {
      dispatch(showFormModal())
    },
    [dispatch],
  );

  const onRemoveElement = useCallback(
    (id) => {
      dispatch(removeTodoItem(id))
    },
    [dispatch],
  )

  const onEditElement = useCallback(
    (id) => {
      dispatch(showFormModal(id))
    },
    [dispatch],
  )
  
  const data = useSelector(selectTodoData);

  return (
    <div className='elementList'>
      {data.map(element => <TodoElement element={element} key={element.id} onRemoveElement={onRemoveElement} onEditElement={onEditElement} />)}
      <TodoAddElement onAddClick={onAddClicked} />
    </div>
  )
}
