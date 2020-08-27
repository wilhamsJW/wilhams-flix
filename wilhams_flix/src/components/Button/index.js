import styled from 'styled-components';

//usando styled componets, primeiro rode npm install styled-components para poder usa-lo
//isso é apenas umas das formas de usar componentes, basta imposta-lo sem a necessidade de criar um css externo
//o e-comercial & abaixo no css se refere ao própio Button
//styled.a = a é a tag <a></a>, pode ser qq outra tag
//baixe a versão styled-components no VSCODE para que o css desse arquivo mostres as cores alternadas
//com a styled componets, não preciso usar props.chlidren, props.classname, isso tudo é feito de froma automática

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover, 
    &:focus {
     opacity: .5;
  }
`;

export default Button;