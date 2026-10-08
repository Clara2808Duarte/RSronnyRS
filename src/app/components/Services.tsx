import { Briefcase, Car, Home, Building2, CheckCircle } from 'lucide-react';
import '../../styles/components/Services.css';

const services = [
  {
    icon: Car,
    title: 'Consórcio de Automóveis',
    description: 'Adquira seu veículo sem entrada e com parcelas que cabem no seu bolso. Diversas administradoras parceiras.',
    features: [
      'Sem entrada e sem juros',
      'Parcelas que cabem no seu bolso',
      'Múltiplas administradoras',
      'Simulação sem compromisso'
    ]
  },
  {
    icon: Home,
    title: 'Consórcio e Financiamento',
    description: 'Realize o sonho da casa própria com planejamento. As melhores condições do mercado para financiar seu imóvel.',
    features: [
      'Taxas competitivas',
      'Análise personalizada',
      'Aprovação rápida',
      'Acompanhamento completo'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <div className="services-icon">
            <Briefcase size={32} />
          </div>
          <h2 className="services-title">
            Nossos <span className="services-title-gold">Serviços</span>
          </h2>
          <p className="services-description">
            Soluções completas em consórcios e financiamentos para realizar seus objetivos
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-card-header">
                  <div className="service-card-icon">
                    <Icon size={32} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                </div>
                <p className="service-card-description">
                  {service.description}
                </p>
                <ul className="service-card-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-card-feature">
                      <CheckCircle size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
