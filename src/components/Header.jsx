import React, { useState } from "react";
import {useLocation} from 'react-router-dom'
import { useNavigate, NavLink, Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import Logo from "./Logo";
import FilterGroup from './FilterGroup'
import "../css/Header.css";

function Header() {
  const location = useLocation()
  const isProductsPage = location.pathname === '/produtos'
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
      navigate(`/produtos?filter=${encodeURIComponent(termoPesquisa)}`)
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

          <Link to ='/' className="logo-area" onClick={closeMobileMenu}>
            <Logo width="253" height="44" />
          </Link>

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
            <Link to="/cadastro" className="signup-link">Cadastre-se</Link>
           
              <button className="login-button" onClick={()=> navigate('/login')}>Entrar</button>
            
            <div className="cart-wrapper">
              <Link to="/carrinho" className="cart-link">
                <FaShoppingCart />
                <span className="cart-badge">2</span>
              </Link>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}
        
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className={`nav-list ${isProductsPage ? 'hide-on-mobile' : ''}`}>
            <li><NavLink to="/" className="nav-item" onClick={closeMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/produtos" className="nav-item" onClick={closeMobileMenu}>Produtos</NavLink></li>
            <li><NavLink to="/categorias" className="nav-item" onClick={closeMobileMenu}>Categorias</NavLink></li>
            <li><NavLink to="/pedidos" className="nav-item" onClick={closeMobileMenu}>Meus Pedidos</NavLink></li>
          </ul>
          {isProductsPage && (
          <div className="mobile-filters-section">
            <h3 className="mobile-filter-title">Filtrar por</h3>
            <FilterGroup 
              title="Marca" 
              inputType="checkbox" 
              options={[
                { text: 'Adidas' },
                { text: 'Nike' },
                { text: 'Puma' }
              ]} 
            />
            <FilterGroup 
              title="Categoria" 
              inputType="checkbox" 
              options={[
                { text: 'Esporte e lazer' },
                { text: 'Casual' },
                { text: 'Corrida' }
              ]} 
            />
            <FilterGroup 
              title="Gênero" 
              inputType="checkbox" 
              options={[
                { text: 'Masculino' },
                { text: 'Feminino' },
                { text: 'Unisex' }
              ]} 
            />
            <FilterGroup
              title="Estado"
              inputType="checkbox"
              options={[
                { text: 'Novo' },
                { text: 'Usado' }
              ]}
            />
          </div>
        )}
          <div className="mobile-nav-separator"></div>
          <div className="mobile-auth-actions">
            <button className="mobile-login-button" onClick={() => { navigate('/login'); closeMobileMenu(); }}>
              Entrar
            </button>
            <Link href="/cadastro" className="mobile-signup-link" onClick={closeMobileMenu}>
              Cadastre-se
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
}

export default Header;