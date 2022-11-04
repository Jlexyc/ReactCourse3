import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";

import { Dashboard } from './components/Dashboard';
import { CastList } from './components/CastList';

import './App.css';
import { selectCurrentTheme } from './rdx/app/selectors';

export const ThemeContext = React.createContext('theme');

const App = () => {
  const themeValue = useSelector(selectCurrentTheme);
  return (
    <div className={`App ${themeValue}`}>
      <ThemeContext.Provider value={themeValue}>
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/cast/:movieId' element={<CastList />}/>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
