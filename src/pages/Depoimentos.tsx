import { Star } from "lucide-react";
import "./Depoimentos.css";

const TESTIMONIALS = [
  {
    name: "Carlos Eduardo dos Santos",
    role: "Caminhoneiro, Piracicaba.",
    stars: 5,
    text: "Precisa trocar o caminhão da empresa sem desestruturar as contas da firma. O pessoal da RS entendeu direitinho a minha necessidade, achou a melhor condição de crédito e deu todo o suporte do começo ao fim. A frota já tá rodando!",
  },
  {
    name: "Mariana Oliveira",
    role: "Professora, Campinas",
    stars: 5,
    text: "Tava super perdida entre fazer consórcio ou financiamento pro meu apartamento. A equipe me explicou tudo sem enrolação, mostrou os prós e contras e me ajudou a escolher o melhor caminho. Consegui a chave do meu imóvel antes do que imaginava!",
  },
  {
    name: "Roberto Almeida",
    role: "Empresário, Americana",
    stars: 5,
    text: "Sempre quis trocar de carro, mas fugia dos juros absurdos do mercado. A RS montou um plano perfeito pro meu bolso e o atendimento foi nota 10. Em pouco tempo fui contemplado e já tô de carro novo na garagem.",
  },
];

export default function Depoimentos() {
  return (
    <section className="depoimentos">
      <div className="depoimentos__container">
        <div className="depoimentos__header">
          <div className="depoimentos__eyebrow">
            <div className="depoimentos__eyebrow-line" />
            <span className="depoimentos__eyebrow-text">Depoimentos</span>
          </div>
          <h1 className="depoimentos__title">
            O que nossos clientes
            <br />
            dizem sobre nós.
          </h1>
        </div>

        <div className="depoimentos__grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="depoimentos__card">
              <div className="depoimentos__stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} fill="#C9A030" color="#C9A030" />
                ))}
              </div>
              <p className="depoimentos__quote">"{t.text}"</p>
              <div className="depoimentos__author">
                <p className="depoimentos__author-name">{t.name}</p>
                <p className="depoimentos__author-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
