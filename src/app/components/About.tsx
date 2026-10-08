import { Shield, Award, Target, Heart } from 'lucide-react';
import '../../styles/components/About.css';

const values = [
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Transparência e ética em todas as nossas negociações'
  },
  {
    icon: Award,
    title: 'Excelência',
    description: 'Compromisso com a qualidade e satisfação dos clientes'
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Foco em encontrar as melhores soluções para você'
  }
];

export function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <div className="about-icon">
            <Heart size={32} />
          </div>
          <h2 className="about-title">
            Sobre a <span className="about-title-gold">RS Intermediações</span>
          </h2>
          <p className="about-description">
            A <strong>RS Intermediações e Negócios</strong> é uma empresa especializada
            em consórcios e financiamentos, atuando no mercado desde 2022 com o compromisso de
            facilitar a realização dos sonhos de nossos clientes.
          </p>
        </div>

        <div className="about-grid">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="about-card">
                <div className="about-card-icon">
                  <Icon size={28} />
                </div>
                <h3 className="about-card-title">{value.title}</h3>
                <p className="about-card-description">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
