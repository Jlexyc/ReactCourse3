import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducer';

const middleware1 = store => next => action => {
    console.log('Middleware 1', action)
    const returnValue = next(action)
    return returnValue
  }

const middleware2 = ({ getState }) => {
  return next => action => {
    console.log('Middleware 2', action)
    const returnValue = next(action)
    return returnValue
  }
}

export const store = createStore(rootReducer, applyMiddleware(middleware1, middleware2));