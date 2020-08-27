import React, { Fragment } from 'react';
import './Menu.css'
import Logo_wilhams from '../../assets/img/Logo_wilhams.png';
import {Link} from 'react-router-dom'; //evita reload na page
//import ButtonLink from '../ButtonLink';
import Button from '../Button/index' //utilizando styled components

export default props =>
    
        <Fragment>
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo_wilhams} className="Logo" alt="Wilhams Flix Logo" ></img>
                </Link>
                {/**as={Link} = para que o botão se comporte como um link e não sofra alterações no css e não faça reload na page */}
                <Button as={Link} className="ButtonLink" to="/cadastro/video">
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