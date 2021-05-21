import React from 'react';
import {useNavigate} from 'react-router-dom';
import './TelaInicial.css';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Logo from '../../image/focaAmarelo.jpeg'



function TelaInicial() {
    const botaoInicial = useNavigate();
    return (
        <>
            <main className="containerInicial">
                <section id="conteudoInicial">
                    <h1 id="tituloInicial">VAMOS CONHECER O FOCA?</h1>
                   
                    <div id="boxInicial">
                        <figure>
                            <img src={Logo} alt="Logomarca"/>
                        </figure>
                       
                        <button id="botaoInicial" onClick={()=> botaoInicial('/landingpage')}> <AiOutlineArrowRight /> </button>
                    </div>
                    
                </section>
            </main>
        </>
    )
};

export default TelaInicial;