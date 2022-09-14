import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { getColorFromPriority } from '../../utils/elementsUtils';

import './TodoElement.css';

export const TodoElement = ({ element, onEditElement = () => {}, onRemoveElement = () => {} }) => {

  const additionalCardStyle = useMemo(() => {
    return { backgroundColor: getColorFromPriority(element.priority) }
  }, [element.priority])

  const onRemoveClick = useCallback(() => {
    onRemoveElement(element.id)
  }, [element.id, onRemoveElement])

  const onEditClick = useCallback(() => {
    onEditElement(element.id)
  }, [element.id, onEditElement])

  return (
    <div style={additionalCardStyle} className="element">
      <div className="elementsContainer">
        <div>
          {element.description}
        </div>
        <div>
          {element.when}
        </div>
        <div>
          {element.done ? "DONE" : "PENDING"}
        </div>
      </div>
      <div className="buttonContainer">
        <button onClick={onRemoveClick}>Remove</button>
        <button onClick={onEditClick}>Edit</button>
      </div>
    </div>
  )
}

TodoElement.propTypes = {
  element: PropTypes.shape({
    description: PropTypes.string,
    when: PropTypes.string,
    priority: PropTypes.number,
    done: PropTypes.bool,
  }),
  onEditElement: PropTypes.func,
  onRemoveElement: PropTypes.func,
}