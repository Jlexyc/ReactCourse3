import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { Element } from './Element';


export const ElementList = ({ data, onDeleteElement }) => {
  return (
    <div className="App">
        {data.map((element) => (
          <Element 
            key={element.id} 
            title={element.title} 
            subtitle={element.subtitle}
            id={element.id}
            onDelete={onDeleteElement}
          />
        ))}
    </div>
  );
}

