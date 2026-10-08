import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
            <img src={logo} alt="RS Intermediações" />
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
