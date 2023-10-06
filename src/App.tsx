import React, { useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';
import store from "./store";
import { RootState } from './store/reducers';
import { setGames, adicionarAoCarrinho } from './store/reducers/reducers';

export type Game = {
  id: number;
  titulo: string;
  plataformas: string[];
  precoAntigo: number;
  preco: number;
  categoria: string;
  imagem: string;
};

function App() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games);
  const carrinho = useSelector((state: RootState) => state.carrinho);

  useEffect(() => {
    fetch('http://localhost:4000/produtos')
      .then((res) => res.json())
      .then((res: Game[]) => {
        dispatch(setGames(res));
      });
  }, [dispatch]);

  function handleAdicionarAoCarrinho(jogo: Game) {
    if (carrinho.find((game) => game.id === jogo.id)) {
      alert('Item já adicionado');
    } else {
      dispatch(adicionarAoCarrinho(jogo));
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos jogos={games} adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </Provider>
  );
}

export default App;
