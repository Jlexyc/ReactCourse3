import React from 'react';
import { Routes, Route } from "react-router-dom";

import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { TodoElementsDetails } from './components/TodoElementsDetails/TodoElementsDetails';
import { DashboardPage } from './components/DashboardPage/DashboardPage';
import { TodoElementFormModal } from './components/TodoElementFormModal/TodoElementFormModal';

import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<WelcomePage />} />
        <Route path='/app' element={<DashboardPage />} >
          <Route path='edit' element={<TodoElementsDetails />} />
          <Route path='edit/:itemId' element={<TodoElementsDetails />} />
        </Route>
      </Routes>
      <TodoElementFormModal />
    </div>
  );
}

export default App;
