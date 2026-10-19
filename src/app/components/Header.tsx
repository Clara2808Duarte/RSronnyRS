import { Menu, X, Lock, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import logo from "../../assets/logo.png";
import '../../styles/components/Header.css';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="RS Intermediações" />
            </Link>
          </div>

          <nav className="header-nav">
            <button onClick={() => scrollToSection('home')}>
              Início
            </button>
            <button onClick={() => scrollToSection('about')}>
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')}>
              Serviços
            </button>
            <button onClick={() => scrollToSection('simulator')}>
              Simular Crédito
            </button>
            <button onClick={() => scrollToSection('contact')}>
              Contato
            </button>

            {/* NOVOS LINKS DE ACESSO */}
            <Link to="/membros" className="header-link-member" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#d9ad27', fontWeight: 600, textDecoration: 'none', marginLeft: '10px' }}>
              <Lock size={14} /> Membros
            </Link>
          
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="header-mobile-nav">
            <div className="header-mobile-nav-content">
              <button onClick={() => scrollToSection('home')}>
                Início
              </button>
              <button onClick={() => scrollToSection('about')}>
                Sobre
              </button>
              <button onClick={() => scrollToSection('services')}>
                Serviços
              </button>
              <button onClick={() => scrollToSection('simulator')}>
                Simular Crédito
              </button>
              <button onClick={() => scrollToSection('contact')}>
                Contato
              </button>

              {/* LINKS MOBILE */}
              <Link to="/membros" onClick={() => setIsMenuOpen(false)} style={{ color: '#d9ad27', padding: '10px 0', textDecoration: 'none', fontWeight: 600 }}>
                🔒 Área de Membros
              </Link>
             
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}