import { combineReducers } from 'redux'
import animalReducer from './animalReducer';
import fruitReducer from './fruitReducer';

export default combineReducers({
   animals:animalReducer,
   fruits:fruitReducer
  });