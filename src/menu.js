import './menu.css';
import React from 'react';
import avatar from './image/homem-de-negocios.png';


function Menu() {
  return (
    <div className="containerMenu">
        <header className="containerHeader">
            <nav className="containerHeader">
                <a href="/">
                    <h1 id="logo">FOCA</h1>
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
