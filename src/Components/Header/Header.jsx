import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import airbnb from "./air1.png"



function Header() {
  return (
    <div className='header'>
        <img className='header_icon' src={airbnb} alt=""/>

      
      <div className="header_center">
          <input type="text"/>
      </div>
      <div className='header_bar'>
        <li className='header_bar'><Link to="/">Home</Link></li>
        <li className='header_bar'><Link to="/Usuario">Usuario</Link></li>
        <li className='header_bar'><Link to="/Publicacoes">Publicações</Link></li>
        <li className='header_bar'><Link to="/Dicas">Dicas</Link>
 </li>
      </div>

      <div className="header_right">
          <p id='p'>Venha conhecer o mundo conosco!</p>
      </div>
    </div>
  )
}

export default Header
