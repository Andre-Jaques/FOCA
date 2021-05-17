import React from 'react';
import {useNavigate} from 'react-router-dom';
import Menu from '../../menu';
import './regras.css';
import {TiArrowRightOutline} from 'react-icons/ti';

function Regras() {
    return (
        <>
            <Menu/>

            <main>
                <section id="containerRegras">
                <h1>Regras do teste de nivelamento</h1>

                <ul id="regras">
                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>O teste de nivelamento é individual, ou seja, é de suma importância que você realize sozinho, para que os resultados sejam o mais verdadeiro possível;</li>
                    </div>

                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>As provas serão formadas apenas com questões teóricas, seguindo o conteúdo programático vigente;</li>
                    </div>

                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>Utilize somente o navegador Google Chrome para realizar a prova;</li>
                    </div>

                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>Você terá 20 questões;</li>
                    </div>

                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>Você terá apenas 50 minutos para concluir o teste;</li>
                    </div>

                    <div className="boxRegras">
                        <TiArrowRightOutline color="#552583"/>
                        <li>O resultado da sua avaliação será disponibilizado em até 2 dias após a realização da mesma.</li>
                    </div>
                    
                </ul>

                <a href="/teste"><button>Começar</button></a>
                
                </section>
            </main>
        </>
    )
};

export default Regras;