import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowRight,
  Home as HomeIcon,
  Car,
  Truck,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Instagram,
  Play,
} from "lucide-react";
import "./Home.css";

// --- IMPORTAÇÕES DAS MÍDIAS CORRETAS ---
import foto5_img from "../assets/foto5.png";
import video1 from "../assets/video1.mp4";
import foto6_img from "../assets/foto6.png";
import video2 from "../assets/video2.mp4";
import foto7_img from "../assets/foto7.png";

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

// --- ARRAY DE DEPOIMENTOS ---
const STORIES = [
  {
    id: 1,
    type: "image",
    badge: "CONTEMPLADO",
    title: "Casa Própria",
    mediaUrl: foto5_img,
  },
  {
    id: 2,
    type: "video",
    badge: "EM VÍDEO",
    title: "Depoimento Cliente",
    mediaUrl: video1,
  },
  {
    id: 3,
    type: "image",
    badge: "6 COTAS",
    title: "Investimento Imobiliário",
    mediaUrl: foto6_img,
  },
  {
    id: 4,
    type: "video",
    badge: "HISTÓRIA REAL",
    title: "Entrega do Veículo",
    mediaUrl: video2,
  },
  {
    id: 5,
    type: "image",
    badge: "CONTEMPLADO",
    title: "Frota Renovada",
    mediaUrl: foto7_img,
  },
];

// --- DÚVIDAS / FAQ (ACORDEÃO) ---
const FAQ_ITEMS = [
  {
    question: "O que é um consórcio?",
    answer:
      "O consórcio é uma modalidade de compra planejada, na qual um grupo de pessoas se reúne para adquirir bens ou serviços por meio de contribuições mensais. Cada participante contribui com parcelas mensais, e a contemplação ocorre por sorteio ou lance, permitindo que os membros adquiram o bem desejado sem juros, apenas com uma taxa de administração. Exemplo: você pode entrar em um grupo de consórcio para comprar um carro, uma casa ou até mesmo investir em equipamentos pesados, pagando parcelas acessíveis e planejadas ao longo do tempo.",
  },
  {
    question: "Grupos: entenda como funcionam no consórcio",
    answer:
      "Um grupo de consórcio é formado por várias pessoas que contribuem mensalmente para formar um fundo comum. Por exemplo, imagine um grupo em que várias pessoas desejam comprar um imóvel de R$ 200 mil. Cada participante paga sua parcela mensal e, nas assembleias, alguns são contemplados por sorteio ou lance. Quem é contemplado pode utilizar sua carta de crédito para comprar o imóvel, seguindo as regras do contrato. Assim, todos participam do grupo e podem conquistar seu objetivo ao longo do prazo, sem garantia de quando serão contemplados.",
  },
  {
    question: "O papel do BACEN e da administradora de consórcio",
    answer:
      "O Banco Central (BACEN) é responsável por regulamentar e fiscalizar as administradoras de consórcio no Brasil, garantindo que elas sigam as normas estabelecidas. Já a administradora é a empresa autorizada que organiza e gerencia os grupos, controla os pagamentos, realiza as assembleias e conduz as contemplações por sorteio ou lance. Por exemplo, se você entra em um consórcio para comprar uma casa, a administradora cuida do funcionamento do grupo e das regras do contrato, enquanto o BACEN fiscaliza a atuação da administradora. Assim, cada um tem um papel importante para que o sistema de consórcios funcione de forma regular e segura.",
  },
  {
    question: "Como funciona a carta de crédito no consórcio?",
    answer:
      "A carta de crédito é o valor que o participante tem direito de utilizar quando é contemplado no consórcio, desde que cumpra as condições do contrato. Por exemplo, se você contratar um consórcio com uma carta de crédito de R$ 200 mil e for contemplado, poderá utilizar esse valor para comprar um imóvel, conforme as regras da administradora. Você não recebe esse dinheiro livremente na sua conta: a administradora realiza os procedimentos necessários para liberar o crédito para a compra. Mesmo após a contemplação, você continua pagando as parcelas restantes do plano. Assim, a carta de crédito permite realizar a compra planejada sem precisar esperar quitar todo o consórcio.dor.",
  },
  {
    question: "Quais são os tipos de consórcio?",
    answer:
      "Existem diferentes tipos de consórcio, de acordo com o objetivo de cada pessoa. O consórcio imobiliário é voltado para a compra de casas, apartamentos, terrenos ou imóveis comerciais. O consórcio de veículos pode ser utilizado para adquirir carros, motos e outros veículos previstos no contrato. Já o consórcio de serviços permite contratar serviços, como reformas, viagens e procedimentos, conforme as regras do plano. Também existem consórcios para veículos pesados, como caminhões e máquinas agrícolas. Dessa forma, cada pessoa pode escolher o tipo de consórcio que melhor atende às suas necessidades e ao seu planejamento financeiro.",
  },
  {
    question: "Formas de ingressar em um grupo de consórcio",
    answer:
      "Existem diferentes formas de ingressar em um grupo de consórcio. A primeira é entrar em um grupo novo, adquirindo uma cota quando a administradora abre novas vagas. A segunda é entrar em um grupo em andamento, adquirindo uma cota disponível de acordo com as condições oferecidas. Também é possível adquirir uma cota de transferência, quando um participante transfere sua cota para outra pessoa, mediante aprovação da administradora. Por exemplo, se alguém deseja entrar em um consórcio imobiliário, pode escolher uma cota de um grupo novo ou buscar uma cota de um grupo que já está funcionando, sempre verificando o contrato, as parcelas e as condições de contemplação.",
  },
  {
    question: "Por que fazer um consórcio?",
    answer:
      "Fazer um consórcio pode ser uma boa opção para quem deseja conquistar um imóvel, veículo ou outro bem por meio de planejamento financeiro. Uma das vantagens é não ter juros de financiamento, embora existam taxa de administração e outros encargos previstos no contrato. Além disso, o consórcio permite pagar parcelas mensais e participar de contemplações por sorteio ou lance, sem precisar dar uma entrada obrigatória em todos os planos. Por exemplo, uma pessoa que deseja comprar sua casa própria pode escolher uma carta de crédito e organizar seu orçamento para pagar as parcelas ao longo do prazo contratado. Assim, o consórcio pode ajudar a realizar objetivos financeiros, desde que a pessoa esteja ciente de que não há garantia de contemplação imediata.",
  },
  {
    question: "Como escolher a melhor administradora de consórcio?",
    answer:
      "Para escolher a melhor administradora de consórcio, é importante verificar se ela é autorizada pelo Banco Central (BACEN), pesquisar sua reputação e avaliar a qualidade do atendimento. Também é fundamental analisar o contrato, o valor da taxa de administração, os possíveis reajustes das parcelas, o prazo do grupo e as regras de contemplação. Por exemplo, antes de contratar um consórcio imobiliário, você pode comparar duas administradoras e verificar qual oferece condições mais adequadas ao seu orçamento e objetivo. Além disso, desconfie de promessas de contemplação garantida em uma data específica. Dessa forma, você pode tomar uma decisão mais consciente e escolher uma administradora confiável, com condições compatíveis com seu planejamento financeiro.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                  }
                }}
              >
                <div className="stories__card-badge">{item.badge}</div>

                {item.type === "video" ? (
                  <>
                    <video
                      src={item.mediaUrl}
                      className="stories__card-media"
                      muted
                      loop
                      playsInline
                      preload="metadata"
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

      {/* SEÇÃO FAQ / INICIANDO NO CONSÓRCIO (ACORDEÃO) */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">Iniciando no consórcio?</h2>
            <p className="faq-subtitle">
              Confira as principais dúvidas e informações sobre a modalidade e invista no seu sonho tranquilamente.
            </p>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-card ${isOpen ? "faq-card--open" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-card-header">
                    <span className="faq-question">{item.question}</span>
                    <button className="faq-toggle-btn" aria-label="Expandir">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>
                  {isOpen && (
                    <div className="faq-card-content">
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
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