import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from "react-router-dom";

import { selectTodoData } from '../../rdx/todoList/selector';
import { removeTodoItem } from '../../rdx/todoList/actions';
import { showFormModal } from '../../rdx/app/actions';

import { TodoElement } from '../TodoElement/TodoElement';
import { TodoAddElement } from '../TodoElement/TodoAddElement';
import './TodoElementList.css'

export const TodoElementList = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const sortType = searchParams.get('sort');
  console.log('sortType: ', sortType);
  
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
      navigate('edit/' + id)
    },
    [navigate],
  )
  
  const data = useSelector(selectTodoData);

  const dataToDisplay = useMemo(() => {
  
    if(!sortType) {
      return data;
    }

    return [...data].sort((a, b) => {
      if(a[sortType] > b[sortType]) {
        return 1;
      } else if(a[sortType] < b[sortType]) {
        return -1;
      }
      return 0;
    })
  }, [data, sortType])

  return (
    <div className='elementList'>
      {dataToDisplay.map(element => <TodoElement element={element} key={element.id} onRemoveElement={onRemoveElement} onEditElement={onEditElement} />)}
      <TodoAddElement onAddClick={onAddClicked} />
    </div>
  )
}
