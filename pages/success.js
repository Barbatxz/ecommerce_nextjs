import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';

import { runFireworks } from '../lib/utils'; 

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setTotalQuantities(0);
      runFireworks();
    }, []);
  
    return (
    <div className='sucess-wrapper'>
        <div className="success">
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>¡Gracias por comprar en JC Store!</h2>
            <p className='email-msg'>Mira tu email para ver la factura.</p>
            <p className='description'>Si tienes alguna duda sobre tu comprar, comunicate a nuestro email
              <a className='email' href='mailto:jcoronadodev@gmail.com'>jcoronadodev@gmail.com</a>
            </p>
            <Link href='/'>
                <button type='button' width='280ox' className='btn' >Volver a la pagina principal</button>
            </Link>
        </div>
    </div>
  )
}

export default Success