import React, { Fragment } from 'react';
import './Menu.css'
import Logo_wilhams from '../../assets/img/Logo_wilhams.png';
import ButtonLink from '../ButtonLink';

export default props =>
    <Fragment>
        <nav className="Menu">
            <a href="/">
                <img src={Logo_wilhams} className="Logo" alt="Wilhams Flix Logo" ></img>
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>
    </Fragment>


/* Maneira tradicional
function Menu () {
    return (
        <header></header>
        )
    }

    export default Menu;*/