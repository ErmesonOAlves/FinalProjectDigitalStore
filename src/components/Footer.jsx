import React from 'react'
import '../css/Footer.css';
import logo2 from '../../assets/logo2.png';
import Informations from './Informations';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {

  const informationsList = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/jobs" },
    { text: "Meus Pedidos", link: "/orders" },
  ]

  const categoriasList = [
    { text: "Camisetas", link: "/camisetas" },
    { text: "Calças", link: "/calcas" },
    { text: "Bonés", link: "/bones" },
    { text: "Headphones", link: "/headphones" },
    { text: "Tênis", link: "/tenis" },
  ];

  const contatoList = [
    { text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "#" },
    { text: "(85) 3051-3411", link: "tel:8530513411" },
  ];














    return (
      <section id="footer">
      <div className="footer-content">
        
        
        <div className="footer-col logo-col">
          <div className="logo-container">
             <img src={logo2} alt="Logo Digital Store" className="footer-logo" />
             
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        
        <Informations 
            title="Informação" 
            informations={informationsList} 
        />

        
        <Informations 
            title="Categorias" 
            informations={categoriasList} 
        />

        
        <Informations
            title="Contato" 
            informations={contatoList} 
        />

      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2024 Digital Store</p>
      </div>
    </section>
    )
}