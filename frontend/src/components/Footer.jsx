import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="bg-info text-center text-lg-start mt-5">
      <div className="text-center p-3">
       <p className='footer'>Copyright © {new Date().getFullYear()} Freelog. Tha Don All Rights Reserved 
       <p>
            <a href="https://www.linkedin.com/in/tafadzwa-munyuki-6a225155/" target="_blank" rel="noopener noreferrer">
               <FaLinkedin size={30} className="social" />
            </a>
            <a href="https://www.github.com/tafadzwamunyuki" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social"/>
            </a>

            <a href="https://www.facebook.com/tafadzwa.munyuki" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="social" />
            </a>
                   
            <a href="https://www.x.com/tafadzwa1twit" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={30} className="social" />
            </a>
        </p>
         </p> 
      </div>
    </footer>
  );
}

