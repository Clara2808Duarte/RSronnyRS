import { useState } from "react";
import { Link } from "react-router";
import {
  MessageCircle,
  Shield,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  TrendingUp,
  Percent,
  CheckCircle2
} from "lucide-react";

import { WHATSAPP_NUMBER } from "../data";
import { supabase } from "../../supabaseClient";

import "./Simulacao.css";

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

const INITIAL_FORM: FormData = {
  nome: "",
  telefone: "",
  email: "",
  tipoServico: "Consórcio",
  valorCredito: "",
  valorEntrada: "",
  meioComunicacao: "WhatsApp",
  melhorPeriodo: "Manhã",
};

function formatCurrency(value: string): string {
  const numbers = value.replace(/\D/g, "");
  if (!numbers) return "";
  const amount = Number(numbers) / 100;
  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "").slice(0, 11);
  if (numbers.length <= 2) return numbers.length > 0 ? `(${numbers}` : "";
  if (numbers.length <= 6) return `(${numbers.slice(0, 2)})${numbers.slice(2)}`;
  if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

export default function Simulacao() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const telefoneNumeros = form.telefone.replace(/\D/g, "");

  const isValid =
    form.nome.trim().length > 1 &&
    (telefoneNumeros.length === 10 || telefoneNumeros.length === 11) &&
    form.email.includes("@") &&
    form.tipoServico !== "" &&
    form.valorCredito !== "" &&
    form.valorEntrada !== "" &&
    form.meioComunicacao !== "" &&
    form.melhorPeriodo !== "";

  const handleSend = async () => {
    setLoading(true);

    try {
      // 1. Gravar os dados na tabela "simulações" do Supabase
      const { error } = await supabase.from('simulações').insert([
        {
          nome: form.nome,
          telefone: form.telefone,
          email: form.email,
          tipo_servico: form.tipoServico,
          valor_credito: form.valorCredito,
          valor_entrada: form.valorEntrada,
          meio_comunicacao: form.meioComunicacao,
          melhor_periodo: form.melhorPeriodo,
          status: "Pendente"
        }
      ]);

      if (error) {
        console.error("Erro ao guardar na base de dados:", error.message);
      }
    } catch (err) {
      console.error("Erro inesperado ao salvar:", err);
    } finally {
      setLoading(false);
    }

    // 2. Montar mensagem e abrir o WhatsApp com emojis seguros (Unicode)
    const lines = [
      `\uD83C\uDFC6 *Nova Simulação – RS Intermediações e Negócios*`,
      ``,
      `\uD83D\uDC64 *Nome:* ${form.nome}`,
      `\uD83D\uDCDE *Telefone:* ${form.telefone}`,
      `\uD83D\uDCE7 *E-mail:* ${form.email}`,
      ``,
      `\uD83D\uDCBC *Tipo de Serviço:* ${form.tipoServico}`,
      `\uD83D\uDCB0 *Valor do Crédito:* ${form.valorCredito}`,
      `\uD83D\uDCE5 *Valor de Entrada:* ${form.valorEntrada}`,
      ``,
      `\uD83D\uDCF2 *Meio de Contato:* ${form.meioComunicacao}`,
      `\uD83D\uDD50 *Melhor Período:* ${form.melhorPeriodo}`,
      ``,
      `_Simulação enviada pelo site._`,
    ];

    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="simulacao simulacao--success">
        <div className="simulacao__success">
          <div className="simulacao__success-icon">
            <CheckCircle size={36} color="#d9ad27" />
          </div>
          <h2 className="simulacao__success-title">Simulação enviada com sucesso!</h2>
          <p className="simulacao__success-text">
            Você foi redirecionado ao nosso WhatsApp com todas as informações preenchidas. Nossa equipe de especialistas já está a postos para analisar o seu perfil.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(INITIAL_FORM);
            }}
            className="simulacao__success-btn"
          >
            Fazer nova simulação
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="simulacao">
      <div className="simulacao__container">
        
        <div className="simulacao__layout">

          {/* COLUNA DE INFORMAÇÕES */}
          <div className="simulacao__info">
            <div className="simulacao__eyebrow">
              <div className="simulacao__eyebrow-line" />
              <span className="simulacao__eyebrow-text">Simulação Inteligente</span>
            </div>

            <h1 className="simulacao__title">
              Descubra o crédito ideal para o seu objetivo.
            </h1>

            <p className="simulacao__subtitle">
              Preencha os dados ao lado para gerarmos uma proposta preliminar sob medida. Trabalhamos com inteligência financeira para conectar você à melhor estratégia sem taxas ocultas.
            </p>

            <div className="simulacao__summary-card">
              <div className="simulacao__summary-header">
                <Sparkles size={18} className="simulacao__summary-icon" />
                <span>Resumo da sua Simulação</span>
              </div>
              <div className="simulacao__summary-body">
                <div className="simulacao__summary-row">
                  <span>Modalidade:</span>
                  <strong>{form.tipoServico || "Não selecionado"}</strong>
                </div>
                <div className="simulacao__summary-row">
                  <span>Crédito Desejado:</span>
                  <strong>{form.valorCredito || "R$ 0,00"}</strong>
                </div>
                <div className="simulacao__summary-row">
                  <span>Valor de Entrada:</span>
                  <strong>{form.valorEntrada || "R$ 0,00"}</strong>
                </div>
              </div>
            </div>

            <div className="simulacao__guarantees">
              <div className="simulacao__guarantee">
                <span className="simulacao__guarantee-icon"><Shield size={18} /></span>
                <span className="simulacao__guarantee-text">Seus dados estão 100% protegidos e seguros</span>
              </div>
              <div className="simulacao__guarantee">
                <span className="simulacao__guarantee-icon"><Award size={18} /></span>
                <span className="simulacao__guarantee-text">Consultoria inicial 100% gratuita</span>
              </div>
              <div className="simulacao__guarantee">
                <span className="simulacao__guarantee-icon"><Clock size={18} /></span>
                <span className="simulacao__guarantee-text">Retorno ágil em horário comercial</span>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO */}
          <div className="simulacao__form-wrapper">
            <div className="simulacao__form-header">
              <h3>Preencha os seus dados</h3>
              <p>Campos marcados com * são obrigatórios</p>
            </div>

            <div className="simulacao__grid">

              <div className="simulacao__field simulacao__field--full">
                <label className="simulacao__label">Nome completo *</label>
                <input
                  type="text"
                  placeholder="Ex: Carlos Eduardo Silva"
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  className="simulacao__input"
                />
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={(e) => update("telefone", formatPhone(e.target.value))}
                  className="simulacao__input"
                />
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">E-mail *</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="simulacao__input"
                />
              </div>

              <div className="simulacao__field simulacao__field--full">
                <label className="simulacao__label">Tipo de serviço desejado *</label>
                <div className="simulacao__toggle-group">
                  {["Consórcio", "Financiamento", "Ver o mais viável"].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update("tipoServico", opt)}
                      className={`simulacao__toggle ${
                        form.tipoServico === opt ? "simulacao__toggle--active" : ""
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">Valor do crédito desejado *</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  value={form.valorCredito}
                  onChange={(e) => update("valorCredito", formatCurrency(e.target.value))}
                  className="simulacao__input"
                />
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">Valor de entrada disponível *</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  value={form.valorEntrada}
                  onChange={(e) => update("valorEntrada", formatCurrency(e.target.value))}
                  className="simulacao__input"
                />
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">Melhor canal de contato *</label>
                <div className="simulacao__toggle-group">
                  {["WhatsApp", "Ligação"].map((meio) => (
                    <button
                      key={meio}
                      type="button"
                      onClick={() => update("meioComunicacao", meio)}
                      className={`simulacao__toggle ${
                        form.meioComunicacao === meio ? "simulacao__toggle--active" : ""
                      }`}
                    >
                      {meio}
                    </button>
                  ))}
                </div>
              </div>

              <div className="simulacao__field">
                <label className="simulacao__label">Melhor período para contato *</label>
                <select
                  value={form.melhorPeriodo}
                  onChange={(e) => update("melhorPeriodo", e.target.value)}
                  className="simulacao__select"
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noite">Noite</option>
                </select>
              </div>

            </div>

            <button
              onClick={handleSend}
              disabled={!isValid || loading}
              className={`simulacao__submit ${
                isValid && !loading ? "simulacao__submit--active" : "simulacao__submit--disabled"
              }`}
            >
              <MessageCircle size={20} />
              {loading ? "A enviar..." : "Enviar Simulação pelo WhatsApp"}
            </button>

            <p className="simulacao__disclaimer">
              Ao enviar, você concorda em iniciar o atendimento automatizado via WhatsApp com a nossa equipe comercial.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}