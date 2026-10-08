import { ArrowRight } from 'lucide-react';
import '../../styles/components/Hero.css';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line hero-title-white">Realize seus</span>
            <span className="hero-title-line hero-title-gold">sonhos com segurança</span>
          </h1>

          <p className="hero-description">
            Especialistas em consórcios e financiamentos. Oferecemos as melhores soluções
            para você conquistar seu patrimônio com planejamento e tranquilidade.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button hero-button-primary"
            >
              Simule seu Crédito
              <ArrowRight size={20} />
            </button>
            <button
              onClick={scrollToContact}
              className="hero-button hero-button-secondary"
            >
              Fale Conosco
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-button hero-button-secondary"
            >
              Nossos Serviços
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">+5</div>
              <div className="hero-stat-label">Anos de Experiência</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">1000+</div>
              <div className="hero-stat-label">Clientes Satisfeitos</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-gradient"></div>
    </section>
  );
}
