// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { carrinhoReducer, gamesReducer } from './reducers/reducers';

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    games: gamesReducer,
  },
});

export default store;
