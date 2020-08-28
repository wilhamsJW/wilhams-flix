import React from 'react';
import { FooterBase } from './styles'; //FooterBase = var criada com o css dentro, feito com a lib styled components

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/" target='blank'>
        <img src="https://fontmeme.com/permalink/200825/d7ba98ec50cb2c6fee8dd912e640175f.png" style={{width: '180px'}} alt="Logo Alura" />
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
