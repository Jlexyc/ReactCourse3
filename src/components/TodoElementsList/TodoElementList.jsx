import React from 'react';
import PropTypes from 'prop-types';

import { TodoElement } from '../TodoElement/TodoElement';
import { TodoAddElement } from '../TodoElement/TodoAddElement';
import './TodoElementList.css'

export const TodoElementList = ({ data, onAddClick, onRemoveElement, onEditElement }) => {
  return (
    <div className='elementList'>
      {data.map(element => <TodoElement element={element} key={element.id} onRemoveElement={onRemoveElement} onEditElement={onEditElement} />)}
      <TodoAddElement onAddClick={onAddClick} />
    </div>
  )
}

TodoElementList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string,
    when: PropTypes.string,
    priority: PropTypes.number,
    done: PropTypes.bool,
  })),
  onAddClick: PropTypes.func.isRequired,
  onRemoveElement: PropTypes.func.isRequired,
  onEditElement: PropTypes.func.isRequired,
}