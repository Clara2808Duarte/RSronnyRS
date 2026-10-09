import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Home as HomeIcon,
  Car,
  Truck,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import "./Home.css";

const STATS = [
  { value: "9+", label: "Anos de experiência" },
  { value: "17.000+", label: "Clientes atendidos" },
  { value: "R$41 Milhões +", label: "Em créditos realizados" },
  { value: "92%", label: "Taxa de satisfação" },
];

const OBJECTIVES = [
  {
    id: "imovel",
    title: "Casa própria",
    description:
      "Quer sair do aluguel, comprar o primeiro imóvel ou trocar de casa sem comprometer toda a sua renda.",
    icon: HomeIcon,
  },
  {
    id: "veiculo",
    title: "Veículo de passeio",
    description:
      "Quer comprar e renovar veículos com condições que caibam no seu bolso e na sua vida.",
    icon: Car,
  },
  {
    id: "pesados",
    title: "Veículos pesados e frotas",
    description:
      "Quer adquirir caminhões, tratores, frotas ou maquinários para ampliar a força do seu negócio.",
    icon: Truck,
  },
  {
    id: "investimento",
    title: "Investimento e patrimônio",
    description:
      "Quer usar crédito de forma inteligente para construir ou ampliar patrimônio com eficiência financeira.",
    icon: TrendingUp,
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleObjectiveClick = (objectiveId) => {
    navigate("/simulacao", { state: { category: objectiveId } });
  };

  const scrollToObjectives = () => {
    document.getElementById("objetivos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
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
              <span className="home__eyebrow-text">
                Consórcios & Financiamentos
              </span>
            </div>

            <h1 className="home__title">
              Realize seus{" "}
              <em className="home__title-highlight">objetivos</em>
              <br />
              com inteligência financeira.
            </h1>

            <p className="home__subtitle">
              Há vários anos conectamos brasileiros ao crédito certo — consórcio ou
              financiamento — com transparência, agilidade e o acompanhamento que
              você merece em cada etapa.
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

          {/* INDICADOR DE SCROLL */}
          <div className="home__scroll-indicator" onClick={scrollToObjectives}>
            <span className="home__scroll-text">
              Descubra as possibilidades
            </span>
            <ChevronDown size={20} className="home__scroll-icon" />
          </div>
        </div>
      </section>

      {/* SEÇÃO OBJETIVOS */}
      <section className="objectives" id="objetivos">
        <div className="objectives__container">
          <div className="objectives__header">
            <h2 className="objectives__title">Qual é o seu objetivo?</h2>
            <p className="objectives__subtitle">
              A estratégia muda. O compromisso com você é sempre o mesmo.
            </p>
          </div>

          <div className="objectives__grid">
            {OBJECTIVES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="objectives__card">
                  <div className="objectives__icon-wrapper">
                    <Icon className="objectives__icon" size={24} />
                  </div>

                  <h3 className="objectives__card-title">{item.title}</h3>

                  <p className="objectives__card-description">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    className="objectives__btn"
                    onClick={() => handleObjectiveClick(item.id)}
                  >
                    Entender como funciona
                    <ArrowRight size={18} className="objectives__btn-arrow" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}