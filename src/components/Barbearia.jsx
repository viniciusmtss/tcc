import React from 'react'
import barba from '../assets/barba.jpg';
import cadeirabarbearia from '../assets/cadeirabarbearia.jpg';
import chopp from '../assets/chopp.jpg';
import ferramentas from '../assets/ferramentas.jpg';
import dianoivo from '../assets/dianoivo.jpg';

function Barbearia() {
  return (
    <div name='barbearia' className='max-w-[1240px] mx-auto py-16 px-4 text-center bg-gradient-to-b from-black via-black to-gray-800'>
        <h1>Estrutura e conforto para voce!</h1>
        <p>Ambiente diferenciado para o seu dia</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img  className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-lg' src={cadeirabarbearia} alt="/" />
            <img  className='w-full h-full object-cover rounded-lg' src={chopp} alt="/" />
            <img  className='w-full h-full object-cover rounded-lg' src={ferramentas} alt="/" />
            <img  className='w-full h-full object-cover rounded-lg' src={dianoivo} alt="/" />
            <img  className='w-full h-full object-cover rounded-lg' src={barba} alt="/" />

        </div>
    </div>
  )
}

export default Barbearia