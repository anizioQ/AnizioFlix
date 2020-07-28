import React from 'react';
import Logo from '../../assets/img/anizioflix.png';
import './Menu.css'
/* import ButtonLink from './componentes/ButtonLink'; */
import Button from '../Button';


function Menu() {
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt='AnizioFlix logo'/> 
            </a>

            <Button as='a' className='ButtonLink' href='./'>
                Novos Vídeos
            </Button>

        </nav>
    );
}

export default Menu;
