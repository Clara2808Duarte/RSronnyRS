import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import "./Home.css";

const STATS = [
  { value: "9+", label: "Anos de experiência" },
  { value: "17.000+", label: "Clientes atendidos" },
  { value: "R$41 Milhões +", label: "Em créditos realizados" },
  { value: "92%", label: "Taxa de satisfação" },
];

export default function Home() {
  return (
    <section className="home">
      <div className="home__bg">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop&auto=format"
          alt="Edifícios corporativos modernos"
          className="home__bg-img"
        />
        <div className="home__bg-overlay" />
        <div className="home__bg-grain" />
      </div>

      <div className="home__content">
        <div className="home__hero">
          <div className="home__eyebrow">
            <div className="home__eyebrow-line" />
            <span className="home__eyebrow-text">Consórcios & Financiamentos</span>
          </div>

          <h1 className="home__title">
            Realize seus{" "}
            <em className="home__title-highlight">objetivos</em>
            <br />
            com inteligência financeira.
          </h1>

          <p className="home__subtitle">
            Há vários anos conectamos brasileiros ao crédito certo — consórcio ou
            financiamento — com transparência, agilidade e o acompanhamento que você
            merece em cada etapa.
          </p>

          <div className="home__actions">
            <Link to="/simulacao" className="home__btn-primary">
              Simular Crédito <ArrowRight size={16} />
            </Link>
            <Link to="/servicos" className="home__btn-secondary">
              Conheça nossos serviços
            </Link>
          </div>
        </div>

        <div className="home__stats">
          {STATS.map((stat) => (
            <div key={stat.label} className="home__stat">
              <span className="home__stat-value">{stat.value}</span>
              <span className="home__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
