import { useState } from "react";

import {
  MessageCircle,
  Shield,
  Award,
  CheckCircle,
} from "lucide-react";

import { WHATSAPP_NUMBER } from "../data";

import "./Simulacao.css";


// ======================================================
// TIPO DO FORMULÁRIO
// ======================================================

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  tipoServico: string;
  valorCredito: string;
  valorEntrada: string;
  meioComunicacao: string;
  melhorPeriodo: string;
}


// ======================================================
// FORMULÁRIO INICIAL
// ======================================================

const INITIAL_FORM: FormData = {
  nome: "",
  telefone: "",
  email: "",
  tipoServico: "",
  valorCredito: "",
  valorEntrada: "",
  meioComunicacao: "",
  melhorPeriodo: "",
};


// ======================================================
// FORMATAÇÃO DE MOEDA
// ======================================================

function formatCurrency(value: string): string {
  const numbers = value.replace(/\D/g, "");

  if (!numbers) {
    return "";
  }

  const amount = Number(numbers) / 100;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}


// ======================================================
// FORMATAÇÃO DE TELEFONE
// ACEITA 10 OU 11 NÚMEROS
// ======================================================

function formatPhone(value: string): string {
  // Remove tudo que não for número
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  // Apenas DDD
  if (numbers.length <= 2) {
    return numbers.length > 0
      ? `(${numbers}`
      : "";
  }

  // DDD + início do telefone
  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  // Telefone fixo - 10 números
  // (19) 3456-7890
  if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  }

  // Celular - 11 números
  // (19) 99876-5432
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}


// ======================================================
// COMPONENTE
// ======================================================

export default function Simulacao() {

  const [form, setForm] = useState<FormData>(INITIAL_FORM);

  const [submitted, setSubmitted] = useState(false);


  // ====================================================
  // ATUALIZAÇÃO DOS CAMPOS
  // ====================================================

  const update = (
    key: keyof FormData,
    value: string
  ) => {
    setForm((f) => ({
      ...f,
      [key]: value,
    }));
  };


  // ====================================================
  // REMOVE OS CARACTERES DO TELEFONE PARA VALIDAR
  // ====================================================

  const telefoneNumeros = form.telefone.replace(
    /\D/g,
    ""
  );


  // ====================================================
  // VALIDAÇÃO DO FORMULÁRIO
  // ====================================================

  const isValid =
    form.nome.trim().length > 1 &&
    (telefoneNumeros.length === 10 ||
      telefoneNumeros.length === 11) &&
    form.email.includes("@") &&
    form.tipoServico !== "" &&
    form.valorCredito !== "" &&
    form.valorEntrada !== "" &&
    form.meioComunicacao !== "" &&
    form.melhorPeriodo !== "";


  // ====================================================
  // ENVIO PARA O WHATSAPP
  // ====================================================

  const handleSend = () => {

    const lines = [

      `🏆 *Nova Simulação – RS Intermediações e Negócios*`,

      ``,

      `👤 *Nome:* ${form.nome}`,

      `📞 *Telefone:* ${form.telefone}`,

      `📧 *E-mail:* ${form.email}`,

      ``,

      `💼 *Tipo de Serviço:* ${form.tipoServico}`,

      `💰 *Valor do Crédito:* ${form.valorCredito}`,

      `📥 *Valor de Entrada:* ${form.valorEntrada}`,

      ``,

      `📲 *Meio de Contato:* ${form.meioComunicacao}`,

      `🕐 *Melhor Período:* ${form.melhorPeriodo}`,

      ``,

      `_Simulação enviada pelo site._`,
    ];


    const msg = encodeURIComponent(
      lines.join("\n")
    );


    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,
      "_blank"
    );


    setSubmitted(true);
  };


  // ====================================================
  // TELA APÓS O ENVIO
  // ====================================================

  if (submitted) {

    return (

      <section className="simulacao simulacao--success">

        <div className="simulacao__success">

          <div className="simulacao__success-icon">

            <CheckCircle
              size={32}
              color="#C9A030"
            />

          </div>


          <h2 className="simulacao__success-title">
            Simulação enviada!
          </h2>


          <p className="simulacao__success-text">

            Você foi redirecionado ao nosso WhatsApp
            com todas as informações. Nossa equipe
            entrará em contato em breve.

          </p>


          <button
            onClick={() => {

              setSubmitted(false);

              setForm(INITIAL_FORM);

            }}
            className="simulacao__success-btn"
          >

            Fazer outra simulação

          </button>

        </div>

      </section>

    );
  }


  // ====================================================
  // FORMULÁRIO PRINCIPAL
  // ====================================================

  return (

    <section className="simulacao">

      <div className="simulacao__container">

        <div className="simulacao__layout">


          {/* ============================================
              COLUNA DE INFORMAÇÕES
          ============================================ */}

          <div className="simulacao__info">


            <div className="simulacao__eyebrow">

              <div className="simulacao__eyebrow-line" />

              <span className="simulacao__eyebrow-text">

                Simulação gratuita

              </span>

            </div>


            <h1 className="simulacao__title">

              Descubra o crédito ideal para você.

            </h1>


            <p className="simulacao__subtitle">

              Preencha o formulário e nossa equipe
              analisará seu perfil e apresentará as
              melhores opções do mercado — sem
              compromisso e sem taxas ocultas.

            </p>


            <div className="simulacao__guarantees">


              {/* SEGURANÇA */}

              <div className="simulacao__guarantee">

                <span className="simulacao__guarantee-icon">

                  <Shield size={16} />

                </span>

                <span className="simulacao__guarantee-text">

                  Seus dados são 100% seguros

                </span>

              </div>


              {/* CONSULTORIA */}

              <div className="simulacao__guarantee">

                <span className="simulacao__guarantee-icon">

                  <Award size={16} />

                </span>

                <span className="simulacao__guarantee-text">

                  Consultoria gratuita e sem compromisso

                </span>

              </div>


              {/* WHATSAPP */}

              <div className="simulacao__guarantee">

                <span className="simulacao__guarantee-icon">

                  <MessageCircle size={16} />

                </span>

                <span className="simulacao__guarantee-text">

                  Resposta em até 2 horas úteis

                </span>

              </div>


            </div>

          </div>


          {/* ============================================
              FORMULÁRIO
          ============================================ */}

          <div className="simulacao__form-wrapper">


            <div className="simulacao__grid">


              {/* ========================================
                  NOME
              ======================================== */}

              <div className="simulacao__field simulacao__field--full">

                <label className="simulacao__label">

                  Nome completo *

                </label>


                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.nome}
                  onChange={(e) =>
                    update(
                      "nome",
                      e.target.value
                    )
                  }
                  className="simulacao__input"
                />

              </div>


              {/* ========================================
                  TELEFONE
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  Telefone / WhatsApp *

                </label>


                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={(e) =>
                    update(
                      "telefone",
                      formatPhone(
                        e.target.value
                      )
                    )
                  }
                  className="simulacao__input"
                />

              </div>


              {/* ========================================
                  E-MAIL
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  E-mail *

                </label>


                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) =>
                    update(
                      "email",
                      e.target.value
                    )
                  }
                  className="simulacao__input"
                />

              </div>


              {/* ========================================
                  TIPO DE SERVIÇO
              ======================================== */}

              <div className="simulacao__field simulacao__field--full">

                <label className="simulacao__label">

                  Tipo de serviço *

                </label>


                <div className="simulacao__toggle-group">


                  {/* CONSÓRCIO */}

                  <button
                    type="button"
                    onClick={() =>
                      update(
                        "tipoServico",
                        "Consórcio"
                      )
                    }
                    className={`simulacao__toggle ${
                      form.tipoServico === "Consórcio"
                        ? "simulacao__toggle--active"
                        : ""
                    }`}
                  >

                    Consórcio

                  </button>


                  {/* FINANCIAMENTO */}

                  <button
                    type="button"
                    onClick={() =>
                      update(
                        "tipoServico",
                        "Financiamento"
                      )
                    }
                    className={`simulacao__toggle ${
                      form.tipoServico === "Financiamento"
                        ? "simulacao__toggle--active"
                        : ""
                    }`}
                  >

                    Financiamento

                  </button>


                  {/* VER O MAIS VIÁVEL */}

                  <button
                    type="button"
                    onClick={() =>
                      update(
                        "tipoServico",
                        "Ver o mais viável"
                      )
                    }
                    className={`simulacao__toggle ${
                      form.tipoServico === "Ver o mais viável"
                        ? "simulacao__toggle--active"
                        : ""
                    }`}
                  >

                    Ver o mais viável

                  </button>


                </div>

              </div>


              {/* ========================================
                  VALOR DO CRÉDITO
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  Valor do crédito desejado *

                </label>


                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  value={form.valorCredito}
                  onChange={(e) =>
                    update(
                      "valorCredito",
                      formatCurrency(
                        e.target.value
                      )
                    )
                  }
                  className="simulacao__input"
                />

              </div>


              {/* ========================================
                  VALOR DE ENTRADA
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  Valor de entrada *

                </label>


                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  value={form.valorEntrada}
                  onChange={(e) =>
                    update(
                      "valorEntrada",
                      formatCurrency(
                        e.target.value
                      )
                    )
                  }
                  className="simulacao__input"
                />

              </div>


              {/* ========================================
                  MEIO DE CONTATO
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  Melhor meio de contato *

                </label>


                <div className="simulacao__toggle-group">


                  {/* WHATSAPP */}

                  <button
                    type="button"
                    onClick={() =>
                      update(
                        "meioComunicacao",
                        "WhatsApp"
                      )
                    }
                    className={`simulacao__toggle ${
                      form.meioComunicacao === "WhatsApp"
                        ? "simulacao__toggle--active"
                        : ""
                    }`}
                  >

                    WhatsApp

                  </button>


                  {/* LIGAÇÃO */}

                  <button
                    type="button"
                    onClick={() =>
                      update(
                        "meioComunicacao",
                        "Ligação"
                      )
                    }
                    className={`simulacao__toggle ${
                      form.meioComunicacao === "Ligação"
                        ? "simulacao__toggle--active"
                        : ""
                    }`}
                  >

                    Ligação

                  </button>


                </div>

              </div>


              {/* ========================================
                  MELHOR PERÍODO
              ======================================== */}

              <div className="simulacao__field">

                <label className="simulacao__label">

                  Melhor período para contato *

                </label>


                <select
                  value={form.melhorPeriodo}
                  onChange={(e) =>
                    update(
                      "melhorPeriodo",
                      e.target.value
                    )
                  }
                  className="simulacao__select"
                >

                  <option
                    value=""
                    disabled
                  >
                    Selecione
                  </option>


                  <option value="Manhã">
                    Manhã
                  </option>


                  <option value="Tarde">
                    Tarde
                  </option>


                  <option value="Noite">
                    Noite
                  </option>

                </select>

              </div>


            </div>


            {/* ==========================================
                BOTÃO DE ENVIO
            ========================================== */}

            <button
              onClick={handleSend}
              disabled={!isValid}
              className={`simulacao__submit ${
                isValid
                  ? "simulacao__submit--active"
                  : "simulacao__submit--disabled"
              }`}
            >

              <MessageCircle size={18} />

              Enviar pelo WhatsApp

            </button>


            {/* AVISO */}

            <p className="simulacao__disclaimer">

              Ao enviar, você concorda em ser
              contatado pela nossa equipe.

            </p>


          </div>

        </div>

      </div>

    </section>

  );
}