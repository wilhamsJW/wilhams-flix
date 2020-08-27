import React from 'react';
import { FooterBase } from './styles'; //FooterBase = var criada com o css dentro, feito com a lib styled components

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" target='blank'>
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Wilhams Júnior durante a
        {' '} 
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
