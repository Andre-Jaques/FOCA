import React from 'react';
import sim from '../../image/sim.png';
import nao from '../../image/nao.png'
import './amarelo.css';

function BoxAmarelo(props) {
    return (

        <>
           <div className="containerArticos">

                <section className="artico">

                    <aside id="Amarelo">
                    <h3>{props.titulo}</h3>
                    </aside>
                    

                    <aside>
                    <img src={props.Sim} alt="" className="imgIcon"/>
                    <p className="descricaoDoPlano">1 Prova por dia</p>
                    </aside>
                    

                    <aside>
                    <img src={nao} alt="" className="imgIcon"/>
                    <p className="descricaoDoPlano">Horário de estudo personalizado</p>
                    </aside>
                    

                    <aside>
                    <img src={nao} alt="" className="imgIcon"/>
                    <p className="descricaoDoPlano">Covênios</p>
                    </aside>
                   

                    <aside>
                    <img src={nao} alt="" className="imgIcon"/>
                    <p className="descricaoDoPlano">Dashbord para professor</p>
                    </aside>
                    

                    <aside>
                    <img src={nao} alt="" className="imgIcon"/>
                    <p className="descricaoDoPlano">Horário de estudo personalizado</p>
                    </aside>

                    </section>

                </div>
           
        </>
    )
};

export default BoxAmarelo;