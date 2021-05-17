import React from 'react';
import {useNavigate} from 'react-router-dom';
import './notFound.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Menu from '../../menu';




function NotFound() {

    const botaoInicial = useNavigate();
    
    return (
        <>
            
            <div id="notFound">
                <h1 id="tituloNotFound">OPS... NOT FOUND</h1>
                <h3 id="descricaoNotFound">Desculpe, parece que você acessou uma página que não existe.
                 <br/>Clique no botão e volte para tela inicial do foca.</h3>

                <button id="botaoNotFound" onClick={()=> botaoInicial('/')}>Volte</button>
            </div>
            
        </>
    )
};

export default NotFound;