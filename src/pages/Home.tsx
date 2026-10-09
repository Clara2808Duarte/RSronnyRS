// Substitui o conteúdo do teu arquivo Home.tsx por este:

import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Home as HomeIcon,
  Car,
  Truck,
  TrendingUp,
  ChevronDown,
  Instagram,
  Play,
} from "lucide-react";
import "./Home.css";

// --- IMPORTAÇÕES DAS MÍDIAS (CORRIGIDAS USANDO A TUA ESTRUTURA REAL) ---

// Usamos "../assets/" porque o Home.tsx está dentro de pages, e precisa subir um nível para achar assets.
import foto5_img from "../assets/foto5.png"; // Importamos o arquivo foto2.png
import video1 from "../assets/video1.mp4"; // Importamos o video1
import foto6_img from "../assets/foto6.png"; // Importamos foto3.png
import video2 from "../assets/video2.mp4"; // Importamos o video2
import foto7_img from "../assets/foto7.png"; // Importamos foto4.png

const STATS = [
  { value: "9+", label: "Anos de experiência" },
  { value: "17.000+", label: "Clientes atendidos" },
  { value: "R$41 Milhões +", label: "Em créditos realizados" },
  { value: "92%", label: "Taxa de satisfação" },
];

const OBJECTIVES = [
  {
    id: "imovel",
    title: "Conquista do imóvel",
    description:
      "Conquiste sua casa, apartamento ou lote com planejamento financeiro inteligente e sem juros abusivos.",
    icon: HomeIcon,
    bgImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "veiculo",
    title: "Veículos de passeio",
    description:
      "Troque de carro ou conquiste seu novo veículo com parcelas previsíveis que caibam no seu orçamento.",
    icon: Car,
    bgImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "pesados",
    title: "Pesados e frotas",
    description:
      "Adquira caminhões, máquinas agrícolas e utilitários para expandir e fortalecer a operação do seu negócio.",
    icon: Truck,
    bgImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&auto=format&fit=crop&q=80",
  },
  {
    id: "investimento",
    title: "Alavancagem patrimonial",
    description:
      "Utilize linhas de crédito estratégicas para construir patrimônio, rentabilizar capital e diversificar investimentos.",
    icon: TrendingUp,
    bgImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
];

// --- ARRAY DE DEPOIMENTOS (CORRIGIDO PARA USAR AS MÍDIAS EXISTENTES) ---
const STORIES = [
  {
    id: 1,
    type: "image",
    badge: "CONTEMPLADO",
    title: "Casa Própria",
    mediaUrl: foto5_img, // Usando a variável importada de foto5.png
  },
  {
    id: 2,
    type: "video",
    badge: "EM VÍDEO",
    title: "Depoimento Cliente",
    mediaUrl: video1, // Usando a variável do video1
  },
  {
    id: 3,
    type: "image",
    badge: "6 COTAS",
    title: "Investimento Imobiliário",
    mediaUrl: foto6_img, // Usando a variável importada de foto6.png
  },
  {
    id: 4,
    type: "video",
    badge: "HISTÓRIA REAL",
    title: "Entrega do Veículo",
    mediaUrl: video2, // Usando a variável do video2
  },
  {
    id: 5,
    type: "image",
    badge: "CONTEMPLADO",
    title: "Frota Renovada",
    mediaUrl: foto7_img, // Usando a variável importada de foto7.png
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
              Cada conquista exige um plano sob medida. Escolha o seu caminho:
            </p>
          </div>

          <div className="objectives__grid">
            {OBJECTIVES.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="objectives__card">
                  <div
                    className="objectives__card-bg"
                    style={{ backgroundImage: `url(${item.bgImage})` }}
                  />
                  <div className="objectives__card-overlay" />

                  <div className="objectives__card-content">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO HISTÓRIAS E DEPOIMENTOS */}
      <section className="stories">
        <div className="stories__container">
          <div className="stories__info">
            <h2 className="stories__title">Conquistas reais, em detalhes</h2>
            <p className="stories__description">
              Clientes que confiaram na estratégia certa e foram contemplados — a
              casa própria, a frota, o carro dos sonhos. Cada carta de crédito aqui
              é uma vitória realizada.
            </p>

            <span className="stories__hint">
              PASSE O MOUSE E ASSISTA <ArrowRight size={16} />
            </span>

            <a
              href="https://www.instagram.com/ronny.consultor/"
              target="_blank"
              rel="noreferrer"
              className="stories__instagram-btn"
            >
              <Instagram size={18} />
              Acompanhe no Instagram
            </a>
          </div>

          <div className="stories__deck">
            {STORIES.map((item, index) => (
              <div
                key={item.id}
                className={`stories__card stories__card--${index + 1}`}
              >
                <div className="stories__card-badge">{item.badge}</div>

                {item.type === "video" ? (
                  <>
                    <video
                      src={item.mediaUrl}
                      className="stories__card-media"
                      loop
                      muted
                      playsInline
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="stories__card-play-icon">
                      <Play size={20} fill="#0d1117" />
                    </div>
                  </>
                ) : (
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="stories__card-media"
                  />
                )}

                <div className="stories__card-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO CTA DE SIMULAÇÃO */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="cta-banner__overlay" />

        <div className="cta-banner__container">
          <span className="cta-banner__pill">
            Em menos de 3 minutos • Sem compromisso
          </span>

          <h2 className="cta-banner__title">
            Descubra a melhor estratégia para o seu momento
          </h2>

          <p className="cta-banner__description">
            Acesse nosso simulador exclusivo, configure o valor que precisa e
            receba uma análise personalizada da nossa equipe.
          </p>

          <Link to="/simulacao" className="cta-banner__btn">
            Fazer minha simulação
          </Link>

          <span className="cta-banner__footnote">
            Atendimento rápido, seguro e transparente.
          </span>
        </div>
      </section>
    </div>
  );
}