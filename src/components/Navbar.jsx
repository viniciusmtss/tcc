import React, {useState} from 'react'; 
import { Link, animateScroll as scroll,} from 'react-scroll'
import {BsPerson} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube} from "react-icons/fa";


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose =()=> setNav(!nav);
    const [logo, ] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        
    };


  return (
    <div  className='flex w-full justify-between items-center h-20 px-4 z-10 fixed drop-shadow-lg bg-zinc-600/30 text-white'>
        <div>
            <h1  onClick={handleNav} className={logo ? 'hidden' : 'block'}>U.BARBERSHOP</h1>
            
        </div>
        <ul className='hidden md:flex'>
        <li><Link to="inicio" smooth={true} offset={-50} duration={500}>Início</Link></li>
        <li><Link to="barbearia" smooth={true} offset={50} duration={500}>Barbearia</Link></li>
        <li><Link to="agendar" smooth={true} offset={50} duration={500}>Agendar</Link></li>

        </ul>
        <div className='hidden md:flex'>
        
        <BsPerson size={20}/>
        </div>

        {/* Menu hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20}/> }
            
        </div>
     
      {/* Menu mobile com dropdown */}

      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
        <h1>U.BARBERSHOP</h1>
        <li><Link onClick={handleClose} to="inicio" smooth={true}  duration={500}>Início</Link></li>
        <li><Link onClick={handleClose} to="barbearia" smooth={true} offset={50} duration={500}>Barbearia</Link></li>
        <li><Link onClick={handleClose} to="agendar" smooth={true} offset={50} duration={500}>Agendar</Link></li>
          <div className='flex flex-col'>
            <button className='my-6'>Registre-se</button>
            <button>Login</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;