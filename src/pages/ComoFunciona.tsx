import "./ComoFunciona.css";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Simule gratuitamente",
    description: "Preencha nosso formulário com os dados do que você deseja conquistar. Leva menos de 2 minutos.",
  },
  {
    step: "02",
    title: "Receba a proposta",
    description: "Nossa equipe analisa seu perfil e entra em contato com a melhor solução personalizada para você.",
  },
  {
    step: "03",
    title: "Escolha e contrate",
    description: "Você decide o plano ideal, assinamos digitalmente e o processo começa. Simples, rápido e seguro.",
  },
  {
    step: "04",
    title: "Realize seu sonho",
    description: "Acompanhe sua carta de crédito ou financiamento e conquiste seu objetivo com total tranquilidade.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="como-funciona">
      <div className="como-funciona__container">
        <div className="como-funciona__header">
          <div>
            <div className="como-funciona__eyebrow">
              <div className="como-funciona__eyebrow-line" />
              <span className="como-funciona__eyebrow-text">Processo</span>
            </div>
            <h1 className="como-funciona__title">
              Como funciona
              <br />
              na prática?
            </h1>
          </div>
          <p className="como-funciona__subtitle">
            Em 4 etapas simples você sai da simulação à conquista do seu objetivo.
          </p>
        </div>

        <div className="como-funciona__grid">
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} className="como-funciona__card">
              <span className="como-funciona__step">{item.step}</span>
              <div className="como-funciona__card-line" />
              <h3 className="como-funciona__card-title">{item.title}</h3>
              <p className="como-funciona__card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
