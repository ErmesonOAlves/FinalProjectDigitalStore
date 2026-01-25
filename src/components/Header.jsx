import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../assets/logo.png";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "../css/Header.css";

function Header() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [termoPesquisa,setTermoPesquisa] = useState("")


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


  const handleSearch = ()=>{
    if(termoPesquisa.trim()){
      navigate(`/products?filter=${encodeURIComponent(termoPesquisa)}`)
    }
  };
  const handleKeyDown = (e)=>{
    if(e.key === 'Enter'){
      handleSearch()
    }
  }

  return (
    <header className="">
      <div className="container">
        
        
        <div className="header-top">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <a href="/" className="logo-area" onClick={closeMobileMenu}>
            <img src={Logo}  />
          </a>

          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Pesquisar produto..." 
              className="search-input"
              value={termoPesquisa}              // Vincula o valor ao estado
              onChange={(e) => setTermoPesquisa(e.target.value)} // Atualiza o estado ao digitar
              onKeyDown={handleKeyDown}
            />
            <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          <div className="mobile-search-icon">
            <FaSearch />
          </div>

          <div className="user-actions">
            <a href="/cadastro" className="signup-link">Cadastre-se</a>
            <a href="">
              <button className="login-button" onClick={()=> navigate('/login')}>Entrar</button>
            </a>
            <div className="cart-wrapper">
              <a href="/carrinho" className="cart-link">
                <FaShoppingCart />
                <span className="cart-badge">2</span>
              </a>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
        
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="/" className="nav-item" onClick={closeMobileMenu}>Home</a></li>
            <li><a href="" className="nav-item" onClick={closeMobileMenu}>Produtos</a></li>
            <li><a href="/categorias" className="nav-item" onClick={closeMobileMenu}>Categorias</a></li>
            <li><a href="/pedidos" className="nav-item" onClick={closeMobileMenu}>Meus Pedidos</a></li>
          </ul>
          <div className="mobile-nav-separator"></div>
          <div className="mobile-auth-actions">
            <button className="mobile-login-button" onClick={() => { navigate('/login'); closeMobileMenu(); }}>
              Entrar
            </button>
            <a href="/cadastro" className="mobile-signup-link" onClick={closeMobileMenu}>
              Cadastre-se
            </a>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;