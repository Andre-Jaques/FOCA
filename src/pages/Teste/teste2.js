import React from 'react';
import {useNavigate} from 'react-router-dom';
import Menu from '../../menu';
import './teste.css';
import Cards from '../../cards'
import {IoIosArrowDropright} from 'react-icons/io';


function Teste2() {

    const botaoInicial = useNavigate();

    return (
        <>
            <Menu/>

            <div id="CaixaRegras"> 

                <Cards 
                questao="Os agentes internos do relevo são responsáveis pela criação ou modificação da fisionomia da paisagem. Um desses agentes é provocado por forças no interior da Terra que atuam de forma lenta e prolongada na crosta terrestre. Entre outras consequências, é capaz de produzir deformações, formação de falhas e de dobramentos na superfície, dando origem a diversos tipos de relevo.
                "
                alternativa1 = "Movimento tectônico."
                alternativa2 = "Epirogênese."
                alternativa3 = "Vulcanismo."
                alternativa4 = "Desmoronamento."
                alternativa5 = "Erosão."
                />
                <div id="proximaQuestao">
                    <button onClick={()=> botaoInicial('')} id="botaoDirRegras"><IoIosArrowDropright/></button> 
                    <h3 id="textProxima">Próxima questão</h3>
                </div>
                

            </div>
            
            
        </>

    )
};



export default Teste2;
