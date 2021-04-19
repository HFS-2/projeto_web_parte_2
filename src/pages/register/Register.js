import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  async function onRegisterSubmit(e) {
    e.preventDefault();
    if(!email){
      setError('Digite um e-mail');
      return
    }
    if(!password){
      setError('Digite uma senha');
      return
    }
    try {
      const token = await axios.post('https://reqres.in/api/register', {"email": email, "password": password});
      setMessage('Cadastro realizado com sucesso! Você será redirecionado para a página de Login!');
      
      setTimeout(function () {
        window.location = '/projeto_web_parte_2/#/login';
       }, 2000);
      
    } catch{
      setError('O formato desse e-mail é invalido');
      return
    }
  }

  return (
    <div className="Register">
    <h1>Cadastro</h1>
    <form onSubmit={onRegisterSubmit}>

      <input id="email" type="email" value={email} placeholder="Digite seu e-mail" 
      onChange={e => setEmail(e.target.value)}/>
      <br/>

      <input id="password" type="password" value={password} placeholder="Digite sua senha" 
      onChange={e => setPassword(e.target.value)}/>
      <br/>

      <Link to="/"><button className="Voltar-btn">Voltar</button></Link>
      <button className="Register-btn" type="submit">Confirmar</button>
      </form>

      {error&&<span  className="Register-error">{error}</span>}
      {message&&<span className="Register-message">{message}</span>}
    </div>
  );
}

export default Register;
