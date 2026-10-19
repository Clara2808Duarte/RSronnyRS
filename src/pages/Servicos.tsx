import { useState } from "react";
import { Link } from "react-router";
import { 
  Home, 
  Car, 
  Truck, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  Check,
  X,
  Award,
  Headset,
  FileCheck,
  Percent,
  MessageCircle
} from "lucide-react";

import { WHATSAPP_NUMBER } from "../data";
import "./Servicos.css";

const SERVICES = [
  {
    id: "imovel",
    icon: <Home size={28} />,
    title: "Consórcio Imobiliário",
    subtitle: "A conquista da casa própria sem juros",
    description:
      "Planeje a compra da sua casa, apartamento, terreno ou realize aquela reforma estrutural. Sem taxa de juros abusivas, com parcelas que cabem no seu planejamento financeiro e poder de compra à vista.",
    benefits: [
      "Zero incidência de juros",
      "Utilize seu FGTS para lances ou complementação",
      "Prazos estendidos de até 240 meses",
      "Liberdade para escolher o imóvel em qualquer região"
    ],
    highlight: "Planos habitacionais sob medida para o seu orçamento",
  },
  {
    id: "veiculos",
    icon: <Car size={28} />,
    title: "Veículos de Passeio",
    subtitle: "Troque ou conquiste seu carro novo",
    description:
      "A melhor alternativa ao financiamento tradicional. Adquira carros novos ou usados de qualquer marca e modelo, planejando a troca de forma inteligente e livre de juros compostos.",
    benefits: [
      "Sem juros embutidos nas parcelas",
      "Poder de negociação à vista ao ser contemplado",
      "Possibilidade de ofertar lances embutidos ou fixos",
      "Renovação de frota pessoal facilitada"
    ],
    highlight: "Parcelas previsíveis e planejamento ágil",
  },
  {
    id: "pesados",
    icon: <Truck size={28} />,
    title: "Pesados e Frotas",
    subtitle: "Impulsione o seu negócio e maquinário",
    description:
      "Solução ideal para produtores rurais, empresários e autônomos que precisam expandir ou renovar caminhões, ônibus, tratores, implementos agrícolas e máquinas industriais.",
    benefits: [
      "Acelere a produtividade da sua empresa",
      "Linhas de crédito robustas para frotas",
      "Planejamento financeiro de longo prazo",
      "Redução drástica de custos operacionais comparado a juros de bancos"
    ],
    highlight: "Investimento estratégico para o crescimento empresarial",
  },
  {
    id: "financiamento",
    icon: <TrendingUp size={28} />,
    title: "Financiamento Estratégico",
    subtitle: "Crédito ágil com as melhores taxas",
    description:
      "Precisa do bem imediatamente? Intermediamos linhas de financiamento imobiliário e veicular junto às principais instituições financeiras, negociando as taxas mais competitivas do mercado para o seu perfil.",
    benefits: [
      "Aprovação de crédito rápida e desburocratizada",
      "Negociação direta com os principais bancos",
      "Análise de portabilidade e redução de juros",
      "Suporte em toda a documentação jurídica e cartorária"
    ],
    highlight: "Soluções imediatas para urgência na aquisição",
  },
  {
    id: "investimento",
    icon: <Briefcase size={28} />,
    title: "Alavancagem Patrimonial",
    subtitle: "Multiplique seu capital com cotas contempladas",
    description:
      "Estratégias avançadas para investidores que desejam rentabilizar capital através de consórcios, utilizando cartas contempladas para geração de renda passiva com aluguéis ou revenda.",
    benefits: [
      "Rentabilidade superior a investimentos tradicionais de renda fixa",
      "Construção acelerada de patrimônio imobiliário",
      "Diversificação segura de carteira",
      "Assessoria especializada em mercado de capitais e crédito"
    ],
    highlight: "Foque na multiplicação inteligente do seu patrimônio",
  },
  {
    id: "assessoria",
    icon: <Users size={28} />,
    title: "Consultoria Personalizada",
    subtitle: "A estratégia exata para o seu momento",
    description:
      "Nossa equipe de especialistas mapeia detalhadamente o seu cenário financeiro e objetivos de curto, médio e longo prazo, desenhando o caminho mais eficiente entre você e a sua conquista.",
    benefits: [
      "Diagnóstico financeiro 100% gratuito",
      "Simulações comparativas entre consórcio e financiamento",
      "Acompanhamento humanizado em todas as etapas",
      "Suporte pós-venda e orientação para lances vencedores"
    ],
    highlight: "Atendimento consultivo e transparente do início ao fim",
  },
];

const DIFFERENTIALS = [
  {
    icon: <Award size={28} />,
    title: "Parcerias Nacionais",
    desc: "Trabalhamos exclusivamente com as maiores e mais sólidas administradoras de consórcio e crédito do Brasil."
  },
  {
    icon: <Headset size={28} />,
    title: "Atendimento Humanizado",
    desc: "Um consultor dedicado para acompanhar você desde a primeira simulação até a liberação e uso da carta de crédito."
  },
  {
    icon: <FileCheck size={28} />,
    title: "Zero Burocracia",
    desc: "Processos digitalizados, análise de perfil ágil e orientação completa em toda a documentação necessária."
  },
  {
    icon: <Percent size={28} />,
    title: "Estratégias de Lance",
    desc: "Análise estatística e acompanhamento de grupos para maximizar as suas chances reais de contemplação antecipada."
  }
];

const COMPARISON = [
  { feature: "Incidência de Juros", consorcio: "Zero (Sem juros)", financiamento: "Alto (Juros compostos)" },
  { feature: "Taxa de Entrada", consorcio: "Flexível e alcançável", financiamento: "Exige 20% a 30% do valor" },
  { feature: "Poder de Compra", consorcio: "Mais poder de negociação", financiamento: "Parcelado pelo banco" },
  { feature: "Flexibilidade", consorcio: "Troca de bem ou resgate", financiamento: "Rígido ao contrato inicial" },
  { feature: "Planejamento Financeiro", consorcio: "Excelente para valores melhores", financiamento: "Ideal apenas para urgências" },
];

export default function Servicos() {
  const [active, setActive] = useState(0);

  const currentService = SERVICES[active];

  // Função para abrir o WhatsApp com mensagem personalizada para o serviço selecionado
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Olá! Estava a ver o serviço de *${currentService.title}* no site da RS Intermediações e gostaria de falar com um especialista.`
    );
    window.open(`https://wa.me/${`19990013809`}?text=${text}`, "_blank");
  };

  return (
    <section className="servicos">
      <div className="servicos__container">
        
        {/* CABEÇALHO */}
        <div className="servicos__header">
          <div className="servicos__eyebrow">
            <div className="servicos__eyebrow-line" />
            <span className="servicos__eyebrow-text">Nossas Soluções</span>
          </div>
          <h1 className="servicos__title">
            Serviços sob medida
            <br />
            para cada grande objetivo.
          </h1>
          <p className="servicos__header-desc">
            Trabalhamos com inteligência financeira para conectar você ao crédito ideal, combinando planejamento, segurança e as melhores taxas do mercado.
          </p>
        </div>

        {/* ABAS / NAVEGAÇÃO DE SERVIÇOS */}
        <div className="servicos__tabs">
          {SERVICES.map((svc, i) => (
            <button
              key={svc.id}
              onClick={() => setActive(i)}
              className={`servicos__tab ${active === i ? "servicos__tab--active" : ""}`}
            >
              <span className="servicos__tab-icon">{svc.icon}</span>
              {svc.title}
            </button>
          ))}
        </div>

        {/* PAINEL DE CONTEÚDO ATIVO */}
        <div className="servicos__panel">
          <div className="servicos__panel-grid">
            
            {/* COLUNA ESQUERDA: DETALHES */}
            <div className="servicos__panel-left">
              <div className="servicos__badge">
                {currentService.icon}
                <span>{currentService.subtitle}</span>
              </div>
              
              <h2 className="servicos__panel-title">{currentService.title}</h2>
              <p className="servicos__description">{currentService.description}</p>
              
              <div className="servicos__highlight-box">
                <span className="servicos__highlight-label">Destaque do serviço:</span>
                <span className="servicos__highlight-text">{currentService.highlight}</span>
              </div>

              <div className="servicos__actions">
                <Link to="/simulacao" state={{ category: currentService.id }} className="servicos__cta">
                  Simular {currentService.title} <ArrowRight size={18} />
                </Link>
                <button onClick={handleWhatsAppClick} className="servicos__cta-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <MessageCircle size={18} color="#25D366" /> Falar com especialista
                </button>
              </div>
            </div>

            {/* COLUNA DIREITA: BENEFÍCIOS */}
            <div className="servicos__benefits-card">
              <h3 className="servicos__benefits-title">Vantagens exclusivas</h3>
              <div className="servicos__benefits-list">
                {currentService.benefits.map((b) => (
                  <div key={b} className="servicos__benefit-item">
                    <CheckCircle2 size={20} className="servicos__benefit-icon" />
                    <span className="servicos__benefit-text">{b}</span>
                  </div>
                ))}
              </div>

              <div className="servicos__card-footer">
                <ShieldCheck size={22} className="servicos__footer-icon" />
                <span>Processo 100% seguro, transparente e regulamentado.</span>
              </div>
            </div>

          </div>
        </div>

        {/* SEÇÃO: DIFERENCIAIS RS INTERMEDIAÇÕES */}
        <div className="servicos__process-section">
          <div className="servicos__process-header">
            <span className="servicos__process-eyebrow">Por que nos escolher</span>
            <h2 className="servicos__process-title">O padrão RS de excelência</h2>
            <p className="servicos__process-subtitle">Diferenciais construídos para entregar a segurança e o resultado que você merece.</p>
          </div>

          <div className="servicos__process-grid">
            {DIFFERENTIALS.map((item, index) => (
              <div key={index} className="servicos__process-card">
                <div className="servicos__process-icon-box">{item.icon}</div>
                <h3 className="servicos__process-card-title">{item.title}</h3>
                <p className="servicos__process-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO: TABELA COMPARATIVA (CONSÓRCIO X FINANCIAMENTO) */}
        <div className="servicos__compare-section">
          <div className="servicos__compare-header">
            <div className="servicos__eyebrow">
              <div className="servicos__eyebrow-line" />
              <span className="servicos__eyebrow-text">Análise inteligente</span>
            </div>
            <h2 className="servicos__compare-title">Consórcio vs. Financiamento</h2>
            <p className="servicos__compare-subtitle">Entenda por que o planejamento financeiro inteligente economiza milhares de reais no seu bolso.</p>
          </div>

          <div className="servicos__table-wrapper">
            <table className="servicos__table">
              <thead>
                <tr>
                  <th>Critério de Avaliação</th>
                  <th className="servicos__th-highlight">RS Consórcio</th>
                  <th>Financiamento Bancário</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, index) => (
                  <tr key={index}>
                    <td className="servicos__td-feature">{row.feature}</td>
                    <td className="servicos__td-highlight">
                      <Check size={16} className="servicos__icon-check" />
                      {row.consorcio}
                    </td>
                    <td className="servicos__td-muted">
                      <X size={16} className="servicos__icon-x" />
                      {row.financiamento}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BANNER EXTRA INFERIOR */}
        <div className="servicos__extra-banner">
          <div className="servicos__extra-content">
            <h3>Dúvida sobre qual modalidade escolher?</h3>
            <p>Nossa equipe faz uma análise comparativa gratuita para mostrar se vale mais a pena consórcio ou financiamento no seu caso.</p>
          </div>
          <Link to="/simulacao" className="servicos__extra-btn">
            Solicitar Análise Gratuita <ChevronRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}