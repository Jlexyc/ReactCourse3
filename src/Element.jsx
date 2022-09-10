import React, { useCallback } from 'react'

import './Element.css'

export const Element = ({ title, subtitle, onDelete, id }) => {
  const onDeleteHandler = useCallback(() => {
    onDelete(id);
  }, [onDelete, id]);

  return (
    <div className='element'>
      <p>{title}</p>
      <p>{subtitle}</p>
      <div className="deleteButton" onClick={onDeleteHandler}>Delete</div>
    </div>
  )
}