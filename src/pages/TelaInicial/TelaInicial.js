import React from 'react';
import {useNavigate} from 'react-router-dom';
import './TelaInicial.css';
import {AiOutlineArrowRight} from 'react-icons/ai';



function TelaInicial() {
    const botaoInicial = useNavigate();
    return (
        <>
            <main className="containerInicial">
                <section id="conteudoInicial">
                    <h1 id="tituloInicial">VAMOS CONHECER O FOCA?</h1>

                    <button id="botaoInicial" onClick={()=> botaoInicial('/landingpage')}> <AiOutlineArrowRight /> </button>
                </section>
            </main>
        </>
    )
};

export default TelaInicial;