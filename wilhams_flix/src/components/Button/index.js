import styled from 'styled-components';

//usando stryled componets, primeiro rode npm install styled-components para poder usa-lo
//o e-comercial & abaixo no css se refere ao própio Button
const Button = styled.a`
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