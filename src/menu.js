import './menu.css';
import React from 'react';
import avatar from './image/homem-de-negocios.png';
import Logo from './image/focaAmarelo.jpeg'

function Menu() {
  return (
    <div className="containerMenu">
        <header className="containerHeader">
            <nav className="containerHeader">
                <a href="/">
                    <img src={Logo} alt="Logomarca"/>
                </a>

                <ul id="menu">
                    <li><a href="" className="nomeMenu">Configurações</a></li>
                    <li><a href="" className="nomeMenu">Acessibilidade</a></li>
                    <img src={avatar} alt="foto estudante"/>
                </ul>
            </nav>

        </header>
        
    </div>
    

  );
}

export default Menu;
