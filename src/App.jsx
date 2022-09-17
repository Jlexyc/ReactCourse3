import React from 'react';

import { TodoElementList } from './components/TodoElementsList/TodoElementList';
import { TodoElementFormModal } from './components/TodoElementFormModal/TodoElementFormModal';

import './App.css';

const App = () => {

  return (
    <div>
      <TodoElementList />
      <TodoElementFormModal />
    </div>
  );
}

export default App;
