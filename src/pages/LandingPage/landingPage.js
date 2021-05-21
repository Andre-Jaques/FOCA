import React from 'react';
import Menu from '../../menu';
import './landingPage.css';
import BoxAmarelo from './boxAmarelo.js';
import principal from '../../image/estudante.png';
import avatar from '../../image/homem-de-negocios.png';
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
            
                <section id="print"> 

                    <div className="container">

                        <div id="textoPrint">
                            <h2>Oferecemos um conteúdo mais elaborado e personalizado</h2>

                            <p>Organizamos por dia da semana, disciplina e assunto. Assim, você mantém uma rotina de estudo organizada</p>
                        </div>

                    </div>

                </section>

                <section id="depoimentos">

                    <div className="container">

                        <h2 id="tituloDepoimento">Depoimentos</h2>

                        <section id="containerDepoimentos">

                            <article className="boxDepoimento">

                                <h3 className="aspas">“...Passei na federal”</h3>

                                <div className="boxDoComentario">
                                    <p className="comentario">
                                        " O Foca foi essencial para mim. A plataforma facilitou muito meus estudos, pois não fazia cursinho e estudava e organizava o que estudaria por conta própria. ”

                                    </p>
                                </div>

                                <div className="perfilEnome">
                                    <figure className="imgPerfilDepoimento">
                                    <img src={avatar} alt="foto estudante"/>
                                    </figure>

                                    <p className="nomeEstudante">Felipe Nunes</p>
                                </div>

                            </article>

                            <article className="boxDepoimento">

                                <h3 className="aspas">“...consegui uma bolsa no Brasilescola”</h3>

                                <div className="boxDoComentario">
                                    <p className="comentario">
                                        " O Foca foi essencial para mim. A plataforma facilitou muito meus estudos, pois não fazia cursinho e estudava e organizava o que estudaria por conta própria. ”

                                    </p>
                                </div>

                                <div className="perfilEnome">
                                    <figure className="imgPerfilDepoimento">
                                    <img src={avatar} alt="foto estudante"/>
                                    </figure>

                                    <p className="nomeEstudante">Kátia Luna</p>
                                </div>

                            </article>


                        </section>

                    </div>

                </section>

                <section id="planos">
                    <div className="container">

                        <h2 className="tituloPlano">Conheça nossos planos</h2>

                        <section className="containerIndividual">

                            <h3 className="tituloIndividual">INDIVIDUAL</h3>

                            <BoxAmarelo
                            titulo='Grátis'
                            PrimeiraDescrição='1 Prova de desempenho por semana'
                            Sim='../../image/sim.png'
                            Nao='nao'
                            />  
                            

                        </section>
                    </div>
                </section>

            </main>
            
        </>
    );
}

export default LandingPage;




