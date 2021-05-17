import React from 'react';

import './cards.css';

function Cards(props) {
    return (
        <>
           <div id="boxCard">
                <h1 id="questao">{props.questao}</h1>

                <div id="boxAlternativas">
                    <button className="Alternativas"><p >{props.alternativa1}</p></button> 
                    <button className="Alternativas"><p >{props.alternativa2}</p></button> 
                    <button className="Alternativas"><p >{props.alternativa3}</p></button> 
                    <button className="Alternativas"><p >{props.alternativa4}</p></button> 
                    <button className="Alternativas"><p >{props.alternativa5}</p></button> 
                    
                    
                </div>

           </div>

           
        </>
    )
};

export default Cards;