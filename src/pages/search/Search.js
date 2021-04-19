import React, { useState } from 'react';
import currents from '../../Currents';
import './Search.css';

function Search() {

  const [id,setId] = useState('');
  const [author,setAuthor] = useState('');//seta estado inicial vazio para todos
  const [category,setCategory] = useState('');
  const [description,setDescription] = useState('');
  const [published,setPublished] = useState('');
  const [title,setTitle] = useState('');
  const [url,setURL] = useState('');
  const [insert,setInsert] = useState('');

  async function envia(evento){

      evento.preventDefault();
      setId('');
      setTitle('');
      setDescription('');
      setURL('');
      setAuthor('');
      setCategory('');
      setPublished('');


      if(insert==""){ //verifica se há algum valor no campo busca
        alert("Digite algo no campo de busca!");
      }
      else{
        try{
          const json = await currents.get("https://api.currentsapi.services/v1/search?keywords=" + insert + "&apiKey=CvQ3xTfauB-JF-z4-EXnKXPN3Ii_ha7pSZHMT46nwmwgYtb9");

              console.log(insert);

              setId(json.data.news[0].id);
              setTitle(json.data.news[0].title);
              setDescription(json.data.news[0].description);
              setURL(json.data.news[0].url);
              setAuthor(json.data.news[0].author);
              setCategory(json.data.news[0].category);
              setPublished(json.data.news[0].published);

              console.log(json);

      }catch(erro){
          alert("Não foi possível encontrar a notícia");
      }
      setInsert(''); 
    }
  }

  function logOut(){
    localStorage.clear();
    alert("Usuário deslogado com sucesso!");
    window.location = '/projeto_web_parte_2/#/';
  }

  return(
    <div className="main_box">

      <div className="head">

        <h1>Encontre uma notícia</h1>
        <div className="bt_inicio">
          <a href=""><span>Início</span></a>
        </div>
        <div className="bt_logout">
          <a onClick={logOut}>Logout [➜</a>
        </div>
        
      </div>

      <div className="instructions">
        <p>Digite uma palavra chave relacionada a notícia</p>
        <p>Exemplos de palavras chave: Amazon, Brazil, China, Tesla.</p> 
      </div>
           

          <div className="form_search">
            <form onSubmit={envia}>
              <input
                id = "id_news"
                type = "text"
                value = {insert}
                placeholder = "Digite uma palavra chave"
                onChange = {evento => setInsert(evento.target.value)}
              />
              <button className="botao_buscar" type="submit">Buscar</button>
            </form>
          </div>

            <div className="resultado">
                <p><span>Título: {title}</span></p>
                <p><span>Descrição: {description}</span></p> 
                <p><span>Autor: {author}</span></p>
                <p><span>Categoria: {category}</span></p>
                <p><span>Data de publicação: {published}</span></p>
                <p><span>URL: {url}</span></p>
                <p><span>ID: {id}</span></p>    
            </div>

    </div>
  );
}

export default Search;



