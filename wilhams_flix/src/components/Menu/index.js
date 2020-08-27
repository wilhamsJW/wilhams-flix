import React, { Fragment } from 'react';
import './Menu.css'
import Logo_wilhams from '../../assets/img/Logo_wilhams.png';
//import ButtonLink from '../ButtonLink';
import Button from '../Button/index' //utilizando styled components

export default props =>
    
        <Fragment>
            <nav className="Menu">
                <a href="/">
                    <img src={Logo_wilhams} className="Logo" alt="Wilhams Flix Logo" ></img>
                </a>
                {/**as="a" = para que o botão se comporte como um link e não sofra alterações no css */}
                <Button as='a' className="ButtonLink" href="/">
                    Novo Vídeo
            </Button>
            </nav>
        </Fragment>


/* Maneira tradicional
function Menu () {
    return (
        <header></header>
        )
    }

    export default Menu;*/