import { useState } from "react";
import { Star, Quote, CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import "./Depoimentos.css";

const TESTIMONIALS = [
  {
    name: "Carlos Eduardo dos Santos",
    role: "Caminhoneiro • Piracicaba, SP",
    category: "pesados",
    stars: 5,
    text: "Precisava trocar o caminhão da empresa sem desestruturar o caixa da firma. O pessoal da RS entendeu direitinho a minha necessidade, achou a melhor condição de crédito e deu todo o suporte do começo ao fim. A frota já tá rodando!",
    highlight: "Troca de Frota Realizada",
  },
  {
    name: "Mariana Oliveira",
    role: "Professora • Campinas, SP",
    category: "imovel",
    stars: 5,
    text: "Tava super perdida entre fazer consórcio ou financiamento pro meu apartamento. A equipe me explicou tudo sem enrolação, mostrou os prós e contras e me ajudou a escolher o melhor caminho. Consegui a chave do meu imóvel antes do que imaginava!",
    highlight: "Casa Própria Conquistada",
  },
  {
    name: "Roberto Almeida",
    role: "Empresário • Americana, SP",
    category: "veiculos",
    stars: 5,
    text: "Sempre quis trocar de carro, mas fugia dos juros absurdos do mercado tradicional. A RS montou um plano perfeito pro meu bolso e o atendimento foi nota 10. Em pouco tempo fui contemplado e já tô de carro novo na garagem.",
    highlight: "Veículo Contemplado",
  },
  {
    name: "Juliana Mendes",
    role: "Investidora • Jundiaí, SP",
    category: "investimento",
    stars: 5,
    text: "Utilizo a estratégia de alavancagem patrimonial com cotas contempladas recomendada pela RS. A rentabilidade e a segurança superaram totalmente minhas expectativas em relação aos investimentos tradicionais de renda fixa.",
    highlight: "Alavancagem de Patrimônio",
  },
  {
    name: "Marcos Vinicius",
    role: "Engenheiro • Campinas, SP",
    category: "imovel",
    stars: 5,
    text: "O suporte na estratégia de lances foi o grande diferencial. Fui contemplado no consórcio imobiliário muito antes do prazo médio do grupo. Profissionalismo impecável!",
    highlight: "Contemplação Antecipada",
  },
  {
    name: "Ana Paula Silveira",
    role: "Empresária • Limeira, SP",
    category: "pesados",
    stars: 5,
    text: "Adquirimos duas máquinas agrícolas para a nossa produção rural através da assessoria da RS. Economizamos uma quantia enorme em juros bancários comparado ao financiamento tradicional.",
    highlight: "Maquinário Agrícola",
  },
];

const CATEGories = [
  { id: "all", label: "Todos os Depoimentos" },
  { id: "imovel", label: "Imóveis" },
  { id: "veiculos", label: "Veículos" },
  { id: "pesados", label: "Pesados e Frotas" },
  { id: "investimento", label: "Investimentos" },
];

export default function Depoimentos() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTestimonials = selectedCategory === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedCategory);

  return (
    <section className="depoimentos">
      <div className="depoimentos__container">
        
        {/* CABEÇALHO */}
        <div className="depoimentos__header">
          <div className="depoimentos__header-left">
            <div className="depoimentos__eyebrow">
              <div className="depoimentos__eyebrow-line" />
              <span className="depoimentos__eyebrow-text">Histórias de Sucesso</span>
            </div>
            <h1 className="depoimentos__title">
              O que nossos clientes
              <br />
              dizem sobre nós.
            </h1>
          </div>
          
          <div className="depoimentos__header-right">
            <div className="depoimentos__stats-box">
              <span className="depoimentos__stats-number">4.9 / 5.0</span>
              <div className="depoimentos__stats-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="#d9ad27" color="#d9ad27" />
                ))}
              </div>
              <p className="depoimentos__stats-text">Avaliação média baseada em dezenas de clientes satisfeitos na região.</p>
            </div>
          </div>
        </div>

        {/* MÉTRICAS DE IMPACTO ADICIONAIS */}
        <div className="depoimentos__metrics-grid">
          <div className="depoimentos__metric-item">
            <Users size={24} className="depoimentos__metric-icon" />
            <div>
              <h3>+500</h3>
              <p>Clientes assessorados com sucesso</p>
            </div>
          </div>
          <div className="depoimentos__metric-item">
            <Award size={24} className="depoimentos__metric-icon" />
            <div>
              <h3>100%</h3>
              <p>Compromisso com transparência</p>
            </div>
          </div>
          <div className="depoimentos__metric-item">
            <TrendingUp size={24} className="depoimentos__metric-icon" />
            <div>
              <h3>Milhões</h3>
              <p>Em cartas de crédito intermediadas</p>
            </div>
          </div>
        </div>

        {/* FILTROS POR CATEGORIA */}
        <div className="depoimentos__filters">
          {CATEGories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`depoimentos__filter-btn ${selectedCategory === cat.id ? "depoimentos__filter-btn--active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* GRELHA DE TESTEMUNHOS */}
        <div className="depoimentos__grid">
          {filteredTestimonials.map((t, index) => (
            <div key={index} className="depoimentos__card">
              <div className="depoimentos__card-top">
                <div className="depoimentos__stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#d9ad27" color="#d9ad27" />
                  ))}
                </div>
                <Quote size={28} className="depoimentos__quote-icon" />
              </div>

              <span className="depoimentos__badge">
                <CheckCircle2 size={13} />
                {t.highlight}
              </span>

              <p className="depoimentos__quote">"{t.text}"</p>

              <div className="depoimentos__author">
                <div className="depoimentos__author-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="depoimentos__author-name">{t.name}</p>
                  <p className="depoimentos__author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}