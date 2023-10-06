// src/store/reducers/reducers.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../App';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: [] as Game[],
  reducers: {
    setGames: (state, action: PayloadAction<Game[]>) => {
      // O método push não retorna um novo array, então devemos fazer uma cópia
      return [...action.payload];
    },
  },
});

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: [] as Game[],
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Game>) => {
      // Aqui também, retornamos um novo array para indicar a mudança de estado
      return [...state, action.payload];
    },
  },
});

// Exportamos as ações
export const { setGames } = gamesSlice.actions;
export const { adicionarAoCarrinho } = carrinhoSlice.actions;

// Exportamos os reducers
export const gamesReducer = gamesSlice.reducer;
export const carrinhoReducer = carrinhoSlice.reducer;
