import { v4 as uuidv4 } from 'uuid';

import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { TodoElementList } from './components/TodoElementsList/TodoElementList';
import { TodoElementFormModal } from './components/TodoElementFormModal/TodoElementFormModal';
import './App.css';

const initialData = [
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

const App = () => {
  const [data, setData] = useState(initialData);
  const [elementToEdit, setElementToEdit] = useState(null);
  const [isAddElementModalVisible, setIsAddElementModalVisible] = useState(false);

  const onAddElement = useCallback((element) => {
    setData([
      ...data, 
      {
        ...element,
        id: uuidv4(),
        done: false,
      }
    ])
    setIsAddElementModalVisible(false);
  }, [data]);

  const onEditElement = useCallback((element) => {
    setData(data.map(e => {
      if (e.id === element.id) {
        return element;
      }
      return e;
    }))
    setIsAddElementModalVisible(false);
  }, [data]);

  const onStartEditElement = useCallback((id) => {
    setElementToEdit(data.find(e => e.id === id));
    setIsAddElementModalVisible(true);
  }, [data]);

  const onRemoveElement = useCallback((id) => {
    setData(data.filter(e => e.id !== id));
  }, [data]);

  const showModal = useCallback(() => {
    setIsAddElementModalVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsAddElementModalVisible(false);
  }, []);

  return (
    <div>
      <TodoElementList 
        data={data} 
        onAddClick={showModal} 
        onRemoveElement={onRemoveElement}
        onEditElement={onStartEditElement}
      />
      {isAddElementModalVisible ? (
        <TodoElementFormModal 
          onAddElement={onAddElement} 
          onCloseClick={hideModal} 
          onEditElement={onEditElement}
          element={elementToEdit}
        />) : null}
    </div>
  );
}

export default App;
