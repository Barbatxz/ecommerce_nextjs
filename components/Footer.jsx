import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© Copyright 2022 | JC Store Todos los derechos reservados.</p> 
      <a href="https://jcoronadodev.me/">Desarrollado por Juan Coronado.</a>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer