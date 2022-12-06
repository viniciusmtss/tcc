import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import trees from '../assets/barbearialogin.jpg';

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  let history = useHistory();

  const validarLogin = () => {
    if (cpf && senha) {
      axios.post('http://localhost:8000/api/login', {
        cpf,
        senha
      }).then((response) => {
        console.log(response.data.user);
        localStorage.setItem(response.data.token);
        history.push("/agendar");
      }).catch((error) => {
        alert(error);
      });
    } else {
      alert("Informe o cpf e a senha!");
    }

  }

  return (
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={trees} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <h2 className='text-4xl font-bold text-center mb-8'>U.BARBERSHOP</h2>
          <div>
            <input className='border p-2 mr-2' type="text" placeholder='Digite seu CPF' value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
            <input className='border p-2' type="password" placeholder='Digite sua senha' value={senha} onChange={(e) => { setSenha(e.target.value) }} />
          </div>
          <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500' onClick={validarLogin}>Entrar</button>
          <p className='text-center'></p>

          <p className='text-center'>REALIZAR CADASTRO</p>
        </div>
      </div>
    </div>
  );
}
