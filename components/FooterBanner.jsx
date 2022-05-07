import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, desc, product, buttonText, image } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h3>{smallText}</h3>
          <h3>{discount}</h3>
        </div>
        <div className="right">
          <p>{largeText2}</p>
          <h3>{midText}</h3>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} 
        alt="headphones" 
        className="footer-banner-image" />
      </div>
    </div>
  )
}

export default FooterBanner