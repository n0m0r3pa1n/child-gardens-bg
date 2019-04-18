import { combineReducers } from 'redux';
import { gardensReducer } from "../gardens/reducers"

export const rootReducer = combineReducers({
    gardens: gardensReducer
  });