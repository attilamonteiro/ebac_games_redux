import * as S from './styles';
import { useSelector } from 'react-redux';
import React from 'react';
import cesta from '../../assets/cesta.png';
import { paraReal } from '../Produto';
import rootReducer from '../../store/reducers';
import store from '../../store';

const Header = () => {
  const itens = useSelector((state: ReturnType<typeof rootReducer>) => state.carrinho);
  const valorTotal = itens.reduce((acc: number, item: { preco: number }) => {
    acc += item.preco;
    return acc;
  }, 0);

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} alt="Cesta" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  );
};


export default Header;
