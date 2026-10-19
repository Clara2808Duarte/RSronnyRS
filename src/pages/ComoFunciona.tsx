import { useState } from "react";
import { Link } from "react-router";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  CheckCircle2, 
  HelpCircle, 
  TrendingUp, 
  Clock, 
  FileCheck 
} from "lucide-react";
import "./ComoFunciona.css";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Simulação e Diagnóstico",
    description: "Preencha nosso formulário inteligente com o seu objetivo (imóvel, veículo ou frotas). Analisamos o seu perfil financeiro sem compromisso para entender o que cabe perfeitamente no seu bolso.",
    details: ["Leva menos de 2 minutos", "Análise de perfil personalizada", "Zero burocracia inicial"],
  },
  {
    step: "02",
    title: "Estratégia e Proposta",
    description: "Nossa equipe de especialistas desenha o plano ideal. Comparamos consórcios e financiamentos para mostrar exatamente onde você economiza mais.",
    details: ["Comparativo transparente", "Melhores taxas do mercado", "Opções de prazos flexíveis"],
  },
  {
    step: "03",
    title: "Contratação Segura",
    description: "Você escolhe a melhor administradora parceira. Todo o processo de fechamento e assinatura do contrato é 100% digital, rápido e auditado.",
    details: ["Assinatura digital válida", "Parcerias com gigantes do setor", "Acompanhamento jurídico"],
  },
  {
    step: "04",
    title: "Conquista do Objetivo",
    description: "Fazemos o acompanhamento ativo do seu grupo, orientando estratégias de lances inteligentes até a contemplação e a liberação da sua carta de crédito.",
    details: ["Suporte até a entrega do bem", "Estratégias de lances vencedores", "Realização com tranquilidade"],
  },
];

const HIGHLIGHTS = [
  { icon: <Zap size={20} />, text: "Processo 100% Digital e Ágil" },
  { icon: <Headphones size={20} />, text: "Consultor Dedicado Exclusivo" },
  { icon: <ShieldCheck size={20} />, text: "Segurança e Regulamentação Total" },
];

const FAQS = [
  {
    question: "Preciso pagar alguma taxa para fazer a simulação?",
    answer: "Não! Todo o nosso processo de diagnóstico financeiro, simulação e consultoria inicial é 100% gratuito e sem compromisso. Você só paga quando decidir avançar com a contratação do consórcio ou financiamento."
  },
  {
    question: "Quanto tempo demora para a proposta ser analisada?",
    answer: "Após o envio dos dados da simulação, nossa equipe entra em contato com as opções personalizadas em poucas horas. O tempo de análise da proposta depende do tipo de crédito e da administradora escolhida, mas geralmente é rápido e transparente."
  },
  {
    question: "Como a RS Intermediações garante a segurança do processo?",
    answer: "Trabalhamos exclusivamente com as maiores e mais consolidadas administradoras regulamentadas pelo Banco Central do Brasil, garantindo total segurança jurídica ao seu contrato. Além disso, todo o processo é digital, auditado e acompanhado por nossa equipe de especialistas."
  }
];

export default function ComoFunciona() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="como-funciona">
      <div className="como-funciona__container">
        
        {/* CABEÇALHO */}
        <div className="como-funciona__header">
          <div>
            <div className="como-funciona__eyebrow">
              <div className="como-funciona__eyebrow-line" />
              <span className="como-funciona__eyebrow-text">Metodologia RS</span>
            </div>
            <h1 className="como-funciona__title">
              Como funciona
              <br />
              na prática?
            </h1>
          </div>
          <div className="como-funciona__header-right">
            <p className="como-funciona__subtitle">
              Estruturamos um caminho claro, transparente e humanizado para levar você da simulação inicial até a realização definitiva do seu sonho.
            </p>
            <div className="como-funciona__highlights-row">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="como-funciona__highlight-pill">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GRELHA DE ETAPAS */}
        <div className="como-funciona__grid">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="como-funciona__card">
              <div className="como-funciona__card-top">
                <span className="como-funciona__step">{item.step}</span>
                <div className="como-funciona__card-line" />
              </div>
              
              <h3 className="como-funciona__card-title">{item.title}</h3>
              <p className="como-funciona__card-desc">{item.description}</p>

              <ul className="como-funciona__details-list">
                {item.details.map((detail, i) => (
                  <li key={i} className="como-funciona__detail-item">
                    <CheckCircle2 size={16} className="como-funciona__detail-icon" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* =====================================================
            SEÇÃO EXTRA: BENEFÍCIOS TÉCNICOS DA JORNADA
        ===================================================== */}
        <div className="como-funciona__features-banner">
          <div className="como-funciona__feature-item">
            <div className="como-funciona__feature-icon"><Clock size={24} /></div>
            <div>
              <h4>Agilidade Comprovada</h4>
              <p>Redução drástica de burocracias em comparação com gerências tradicionais de bancos.</p>
            </div>
          </div>

          <div className="como-funciona__feature-item">
            <div className="como-funciona__feature-icon"><TrendingUp size={24} /></div>
            <div>
              <h4>Estratégia de Lances</h4>
              <p>Orientação estatística para maximizar suas chances reais de contemplação antecipada.</p>
            </div>
          </div>

          <div className="como-funciona__feature-item">
            <div className="como-funciona__feature-icon"><FileCheck size={24} /></div>
            <div>
              <h4>Suporte Jurídico</h4>
              <p>Acompanhamento completo na validação de documentos e liberação do crédito.</p>
            </div>
          </div>
        </div>

        {/* =====================================================
            SEÇÃO EXTRA: PERGUNTAS RÁPIDAS (FAQ)
        ===================================================== */}
        <div className="como-funciona__faq-section">
          <div className="como-funciona__faq-header">
            <span className="como-funciona__eyebrow-text">Esclarecimentos</span>
            <h2 className="como-funciona__faq-title">Dúvidas Comuns sobre o Processo</h2>
          </div>

          <div className="como-funciona__faq-list">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`como-funciona__faq-item ${openFaq === index ? "como-funciona__faq-item--open" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="como-funciona__faq-question">
                  <HelpCircle size={18} className="como-funciona__faq-icon" />
                  <span>{faq.question}</span>
                  <span className="como-funciona__faq-toggle">{openFaq === index ? "−" : "+"}</span>
                </div>
                {openFaq === index && (
                  <div className="como-funciona__faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BANNER DE CTA FINAL NA PÁGINA */}
        <div className="como-funciona__cta-box">
          <div className="como-funciona__cta-text">
            <h3>Pronto para dar o primeiro passo rumo à sua conquista?</h3>
            <p>Nossos especialistas estão prontos para desenhar o plano ideal para o seu momento financeiro.</p>
          </div>
          <Link to="/simulacao" className="como-funciona__cta-btn">
            Iniciar Simulação Gratuita <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}