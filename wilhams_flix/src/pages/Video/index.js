import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

export default props =>
  <Fragment>
    <PageDefault>

      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria">Categoria</Link>
      
    </PageDefault>
  </Fragment>


  /* Forma Tradicional
function CadastrarVideo() {
  return (
    <Fragment>

      <h1>Cadastro de Vídeo</h1>
      <Link to="/cadastro/categoria" >Categoria</Link>

    </Fragment>

  )
};

export default CadastrarVideo;
/
const Main = styled.main`
 background-color: var(--black);
 color: var(--white);
 flex: 1;
 padding-top: 50px;
 padding-left: 5%;
 padding-right: 5%;
`;*/