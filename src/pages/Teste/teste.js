import React from 'react';
import {useNavigate, Outlet} from 'react-router-dom';
import Menu from '../../menu';
import './teste.css';
import Cards from '../../cards'
import {IoIosArrowDropright} from 'react-icons/io';


function Teste() {

    const botaoTeste = useNavigate();

    return (
        <>
         
            <Menu/>
            

            <div id="CaixaRegras"> 

                <Cards 
                questao="O processo de sedimentação, deposição de materiais e formação de rochas que dá origem às bacias sedimentares leva milhares de anos para concretizar-se. A respeito desse processo, estão corretas as afirmativas abaixo, exceto:
                "
                alternativa1 = "Quando as rochas desgastam-se por causa da ação dos agentes externos ou exógenos de transformação do relevo, elas dão origem aos sedimentos."
                alternativa2 = " Os sedimentos originados do intemperismo são levados, especialmente pela água, para as camadas inferiores do relevo e acumulam-se."
                alternativa3 = "Com o passar dos milhões de anos, os sedimentos acumulados vão sendo sobrepostos e exercem um “peso” cada vez maior. Essa pressão compacta os sedimentos, que se transformam em rochas sedimentares."
                alternativa4 = "Durante o processo de formação das bacias sedimentares, pode ocorrer acúmulo de matéria orgânica, que, a depender das condições de temperatura e pressão, pode formar depósitos de combustíveis fósseis, como o petróleo, gás natural e carvão mineral."
                alternativa5 = "As bacias sedimentares estão presentes apenas no relevo submarino, por essa razão, é mais comum encontrar reservas de petróleo nos mares e oceanos."
                />
                <div id="proximaQuestao">
                    <button onClick={()=> botaoTeste('/teste2')} id="botaoDirRegras"><IoIosArrowDropright/></button> 
                    <h3 id="textProxima">Próxima questão</h3>
                </div>
                
               
            </div>
            
            <Outlet/>
        </>

    )
};



export default Teste;
