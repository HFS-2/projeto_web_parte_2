import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import img_aviao from './imagens/img_aviao.jpg';
import img_big_inicio from './imagens/img_big_inicio.PNG';
import img_carro from './imagens/img_carro.jpg';

class Home extends React.Component{
  render(){
    return (
      <div>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width"/>
          <title>Nokia</title>

            <div id="nokia1">
                <h1>NOKIA</h1>
            </div>

            <div className="flexbox01">

                <div className="cabecalho" >
                    <p>For business v</p>
                </div>

                <div className="cabecalho" >
                    <p>For consumers v</p>
                </div>

                <div className="cabecalho" >
                    <p>Innovation v</p>
                </div>

                <div className="cabecalho" >
                    <p>About us v</p>
                </div>

                <div id="link_01" className="cabecalho">
                    <Link to="/login">Login ➜]</Link>
                </div>

                <div id="link_02" className="cabecalho">
                    <Link to="/register">Criar uma conta</Link>
                </div>

                <div className="barra_icones">
                    <p>&#127760;</p>
                </div>
            
                <div className="barra_icones">
                    <p>&#128269;</p>
                </div>

                <div className="barra_icones">
                    <p>&#8793;</p>
                </div>

                <div className="barra_icones">
                    <p>Menu</p>
                </div>

            </div>

            <div id="img_grande01"></div>

            <div className="texto_dentro_imagem">
                <h1>Bringing together the world's intelligence</h1>
            </div>

            <div className="flexbox02">
                <div id="img_carro" className="img_flex"></div>
                <div id="img_aviao" className="img_flex"></div>   
            </div>

      </div>
    );
  }
}

export default Home;
