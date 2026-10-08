import { useState } from "react";
import { Link } from "react-router";
import { TrendingUp, Shield, Users, ChevronRight } from "lucide-react";
import "./Servicos.css";

const SERVICES = [
  {
    icon: <TrendingUp size={28} />,
    title: "Consórcio",
    subtitle: "A melhor forma de planejar",
    description:
      "Conquiste bens e serviços com parcelas acessíveis e sem juros. Cartas de crédito para imóveis, veículos, serviços e muito mais.",
    benefits: ["Sem juros", "Parcelas fixas", "Flexibilidade total", "Plano traçado de acordo com seu perfil"],
    highlight: "Parcelas a partir de R$ 800/mês",
  },
  {
    icon: <Shield size={28} />,
    title: "Financiamento",
    subtitle: "Crédito rápido e com juros",
    description:
      "Realize seus projetos com financiamento personalizado. Crédito pessoal, imobiliário e para empresas com as melhores taxas do mercado.",
    benefits: ["Aprovação ágil", "Taxas competitivas", "Prazo estendido", "Sem burocracia"],
    highlight: "Taxas a partir de 1,5% a.m.",
  },
  {
    icon: <Users size={28} />,
    title: "Assessoria Completa",
    subtitle: "Você não está sozinho",
    description:
      "Nossa equipe analisa seu perfil e apresenta a solução mais vantajosa, seja consórcio, financiamento ou uma combinação estratégica.",
    benefits: ["Análise gratuita", "Consultoria especializada", "Acompanhamento total", "Resultado acertivo"],
    highlight: "Consulta 100% gratuita",
  },
];

export default function Servicos() {
  const [active, setActive] = useState(0);

  return (
    <section className="servicos">
      <div className="servicos__container">
        <div className="servicos__header">
          <div className="servicos__eyebrow">
            <div className="servicos__eyebrow-line" />
            <span className="servicos__eyebrow-text">O que oferecemos</span>
          </div>
          <h1 className="servicos__title">
            Soluções sob medida
            <br />
            para cada objetivo.
          </h1>
        </div>

        <div className="servicos__tabs">
          {SERVICES.map((svc, i) => (
            <button
              key={svc.title}
              onClick={() => setActive(i)}
              className={`servicos__tab ${active === i ? "servicos__tab--active" : ""}`}
            >
              {svc.title}
            </button>
          ))}
        </div>

        {SERVICES.map((svc, i) => (
          <div
            key={svc.title}
            className={`servicos__panel ${active === i ? "servicos__panel--visible" : "servicos__panel--hidden"}`}
          >
            <div className="servicos__panel-grid">
              <div className="servicos__panel-left">
                <div className="servicos__icon">{svc.icon}</div>
                <p className="servicos__subtitle">{svc.subtitle}</p>
                <h2 className="servicos__panel-title">{svc.title}</h2>
                <p className="servicos__description">{svc.description}</p>
                <div className="servicos__highlight">{svc.highlight}</div>
                <Link to="/simulacao" className="servicos__cta">
                  Simular agora <ChevronRight size={16} />
                </Link>
              </div>

              <div className="servicos__benefits">
                {svc.benefits.map((b) => (
                  <div key={b} className="servicos__benefit">
                    <div className="servicos__benefit-line" />
                    <span className="servicos__benefit-text">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
