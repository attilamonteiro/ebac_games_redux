// src/store/reducers/index.ts

import { combineReducers } from 'redux';
import { carrinhoReducer, gamesReducer } from './reducers';

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  games: gamesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
