import React from 'react';
import Menu from '../../menu';
import './landingPage.css';
import principal from '../../image/estudante.png';

import {useNavigate} from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <Menu/>

            <main id="mainLanding">
                
                <section id="principal">

                    <div className="container">

                        <section id="blocoTitulo">
                            <h1 id="titulo">MATENHA SEMPRE O FOCO!</h1>

                            <p id="subtitulo">O Foca é a plataforma que <strong>organiza seu dia a dia</strong> e te indica os melhores métodos de estudo, <strong>totalmente personalizado</strong> com o seu perfil!
                            </p>

                            <a href="/login"><button>Faça login</button></a>

                            <p className="cadastre">Ainda não tem conta? <a href="/cadastrar/cadastro.html">Cadastre-se</a></p>
                        </section>

                        <div id="imgPrincipal">
                            <img src={principal} alt="foto google"/>
                        </div>
                    </div>

                </section>
            
                 
            </main>
            
        </>
    );
}

export default LandingPage;




