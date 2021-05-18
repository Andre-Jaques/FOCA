import React from 'react';
import Menu from '../../menu';
import './login.css';
import google from '../../image/google.png';
import face from '../../image/facebook.png';
import {useNavigate} from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    return (
        <>
            <Menu/>
            <main>

                <section id="container">

                <article id="formulario">

                    <h1>Bem-Vindo</h1>

                    <section id="login">

                    <div>
                        <input type="email" placeholder="Email"/>
                    </div>

                    <div>
                        <input type="password" placeholder="Senha"/>
                    </div>
                    
                    </section>

                    <section id="entrar">

                    <button onClick={()=> navigate('/Regras')}> Entrar</button>
                    <a href="">Esqueceu sua senha?</a>

                    </section>

                </article>

                <article id="contas">
                <p>Ou entre com</p>

                <section id="icons">
                    <a href=""><img src={google} alt="foto google"/></a> 
                    <a href=""><img src={face} alt="foto facebook"/></a>
                </section>

                <p>Ainda não tem conta?<a href="cadastrar/cadastro.html"> Cadastre-se</a></p>
                </article>


                </section>
            </main>
        </>
    );
}

export default Login;




/*import React from 'react';

function Login() {
    return (
        <>
        </>
    )
};



export default Login;*/



