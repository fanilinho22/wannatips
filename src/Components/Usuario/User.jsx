import React from 'react';
import "./user.css"
import Header from '../Header/Header';
import logo from './coca.jpg';

function Home() {

    return (

        <div className='Home'>
            <Header />
            <header className="App-header">

                <img src={logo} className="App-usuario" alt="usuario" />
                <div className='info'>
                <p className='usuario'>
                    <b><a>Usuário </a></b>Vitor Pires
                </p>
                <a className='visitados'>
                    <b>Locais Visitados</b>
                </a>

                <a className='interesse'>
                    <b>Interesses de viagens</b>
                </a>

                <div className='perguntaBox'>
                    Alabama
                    <div className='botaoBox'>
                        <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                    </div>

                    New York
                    <div className='botaoBox'>
                        <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                    </div>

                    Bielo Russia
                    <div className='botaoBox'>
                        <input type='checkbox' id='topping' name='topping' value='panner' />Visitar
                    </div>
                </div>
                </div>
            </header>
        </div>
    );
}

export default Home
