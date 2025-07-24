import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.reducer';
import tokenReducer from './token.reducer';
import modeleReducer from './modele.reducer'
const rootReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  modele: modeleReducer
});

export default rootReducer;
