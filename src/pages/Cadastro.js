import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import trees from '../assets/barbearialogin.jpg';

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");

  let history = useHistory();

  const cadastrarUsuario = () => {
    if (nome && telefone && cpf && senha && senhaConfirm) {
      if (senha === senhaConfirm) {
        axios.post('http://localhost:8000/api/registrar', {
          nome,
          telefone,
          cpf,
          tpUsuario: 1,
          senha,
          senha_confirmation: senhaConfirm
        }).then((response) => {
          console.log(response.data.user);
          localStorage.setItem(response.data.token);
          history.push("/agendar");
        }).catch((error) => {
          alert(error);
        });
      } else {
        alert("A senha não é igual a senha de confirmação!");
      }
    } else {
      alert("Informe todos os dados!");
    }
  }

  return (
    <div className='w-full h-screen flex'>
      <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
        <div className='w-full h-[550px] hidden md:block'>
          <img className='w-full h-full' src={trees} alt="/" />
        </div>
        <div className='p-4 flex flex-col justify-around'>
          <h2 className='text-4xl font-bold text-center mb-8'>Informe seus dados:</h2>
          <div>
            <label className='p-4'>Nome: </label>
            <input className='border p-4' type="text" placeholder='Digite seu nome' value={nome} onChange={(e) => { setNome(e.target.value) }} />
            <br />
            <label className='p-4'>Telefone: </label>
            <input className='border p-4' type="text" placeholder='Digite seu nome' value={telefone} onChange={(e) => { setTelefone(e.target.value) }} />
            <br />
            <label className='p-4'>CPF: </label>
            <input className='border p-4' type="text" placeholder='Digite seu CPF' value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
            <br />
            <label className='p-4'>Senha: </label>
            <input className='border p-4' type="text" placeholder='Digite sua senha' value={senha} onChange={(e) => { setSenha(e.target.value) }} />
            <br />
            <label className='p-4'>Confirme sua Senha: </label>
            <input className='border p-4' type="text" placeholder='Digite novamente sua senha' value={senhaConfirm} onChange={(e) => { setSenhaConfirm(e.target.value) }} />
          </div>
          <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500' onClick={cadastrarUsuario}>Cadastar</button>
        </div>
      </div>
    </div>
  );
}
