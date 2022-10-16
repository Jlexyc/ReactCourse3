import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Dashboard } from './components/Dashboard'
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </div>
  );
};

export default App;
