import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Users, TrendingUp, ShieldCheck, Mail, Phone, Calendar, ArrowUpRight, UserPlus, LogOut, Lock } from "lucide-react";
import "./Membros.css";

interface ClienteSimulacao {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  tipo_servico: string;
  valor_credito: string;
  created_at: string;
  status?: string;
}

export default function Membros() {
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Controla se está no modo Login (true) ou Criar Conta (false)
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Estados para o formulário (Login / Registo)
  const [emailInput, setEmailInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [nomeInput, setNomeInput] = useState("");
  const [formMsg, setFormMsg] = useState({ texto: "", erro: false });
  const [submitting, setSubmitting] = useState(false);

  // Estados do Dashboard
  const [clientes, setClientes] = useState<ClienteSimulacao[]>([]);
  const [loadingSimulacoes, setLoadingSimulacoes] = useState(true);

  // Verificar Sessão
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Buscar Simulações e Realtime
  useEffect(() => {
    if (!session) return;

    fetchSimulacoes();

    const channel = supabase
      .channel('public:simulacoes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'simulacoes' },
        (payload) => {
          setClientes((prev) => [payload.new as ClienteSimulacao, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [session]);

  const fetchSimulacoes = async () => {
    try {
      setLoadingSimulacoes(true);
      const { data, error } = await supabase
        .from('simulacoes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) console.error("Erro ao buscar simulações:", error);
      else if (data) setClientes(data);
    } catch (err) {
      console.error("Erro inesperado:", err);
    } finally {
      setLoadingSimulacoes(false);
    }
  };

  // Submeter formulário (Login ou Criar Conta)
  const handleSubmitAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg({ texto: "", erro: false });
    setSubmitting(true);

    try {
      if (isLoginMode) {
        // Tentar Login
        const { error } = await supabase.auth.signInWithPassword({
          email: emailInput,
          password: senhaInput,
        });
        if (error) throw error;
      } else {
        // Criar Novo Utilizador
        const { error } = await supabase.auth.signUp({
          email: emailInput,
          password: senhaInput,
          options: {
            data: { nome_completo: nomeInput },
          },
        });
        if (error) throw error;

        setFormMsg({ texto: "Conta criada com sucesso! Já podes entrar.", erro: false });
        setIsLoginMode(true); // Alterna de volta para o login
        setSenhaInput("");
      }
    } catch (err: any) {
      // Traduz ou exibe a mensagem de erro do Supabase de forma limpa
      let mensagemErro = err.message;
      if (mensagemErro.includes("Invalid login credentials")) {
        mensagemErro = "E-mail ou palavra-passe incorretos. Se não tens conta, clica em 'Criar Conta'.";
      }
      setFormMsg({ texto: mensagemErro, erro: true });
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (authLoading) {
    return <div style={{ padding: "100px", textAlign: "center", color: "#fff", background: "#09090b" }}>A carregar...</div>;
  }

  // ==========================================
  // 1. ECRÃ DE AUTENTICAÇÃO (LOGIN / REGISTO)
  // ==========================================
  if (!session) {
    return (
      <section className="membros-login-wrapper">
        <div className="membros-login-box">
          
          <div className="membros-login-header">
            <div className="membros-login-icon">
              <Lock size={24} />
            </div>
            <h2>{isLoginMode ? "Área de Membros" : "Criar Novo Acesso"}</h2>
            <p style={{ color: "#a1a1aa", fontSize: "0.9rem" }}>
              {isLoginMode ? "Introduza as suas credenciais para aceder ao painel." : "Preencha os dados para registar um novo vendedor/membro."}
            </p>
          </div>

          {formMsg.texto && (
            <div className={formMsg.erro ? "membros-alert-error" : "membros-alert-success"}>
              {formMsg.texto}
            </div>
          )}

          <form onSubmit={handleSubmitAuth} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {!isLoginMode && (
              <div className="membros-input-group">
                <label className="membros-label">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Nome do vendedor"
                  value={nomeInput}
                  onChange={(e) => setNomeInput(e.target.value)}
                  required
                  className="membros-input"
                />
              </div>
            )}

            <div className="membros-input-group">
              <label className="membros-label">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                className="membros-input"
              />
            </div>

            <div className="membros-input-group">
              <label className="membros-label">Palavra-passe</label>
              <input
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={senhaInput}
                onChange={(e) => setSenhaInput(e.target.value)}
                required
                className="membros-input"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="membros-submit-btn"
              style={{ width: "100%", marginTop: "8px" }}
            >
              {submitting ? "A processar..." : isLoginMode ? "Entrar na Plataforma" : "Registar Novo Acesso"}
            </button>
          </form>

          {/* Botão de alternância entre Login e Criar Conta */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="button"
              onClick={() => {
                setIsLoginMode(!isLoginMode);
                setFormMsg({ texto: "", erro: false });
              }}
              style={{ background: "none", border: "none", color: "#d9ad27", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline" }}
            >
              {isLoginMode ? "Ainda não tens conta? Clica aqui para criar" : "Já tens conta? Faz login aqui"}
            </button>
          </div>

        </div>
      </section>
    );
  }

  // Estatísticas para o Dashboard
  const totalClientes = clientes.length;
  const totalConsorcios = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("consórcio")).length;
  const totalFinanciamentos = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("financiamento")).length;

  // ==========================================
  // 2. PAINEL DE GESTÃO (QUANDO LOGADO)
  // ==========================================
  return (
    <div className="membros-container">
      <div className="membros-wrapper">
        
        {/* CABEÇALHO */}
        <div className="membros-header">
          <div>
            <span className="membros-eyebrow">Área de Membros & Gestão</span>
            <h1 className="membros-title">Painel de Controlo RS</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            <span className="membros-user-badge">
              👤 {session.user.email}
            </span>
            <button onClick={handleLogout} className="membros-logout-btn">
              <LogOut size={16} /> Sair
            </button>
          </div>
        </div>

        {/* MÉTRICAS */}
        <div className="membros-metrics-grid">
          <div className="membros-metric-card">
            <div className="membros-metric-icon membros-metric-icon--gold"><Users size={24} /></div>
            <div>
              <span className="membros-metric-label">Total de Simulações</span>
              <h2 className="membros-metric-value">{totalClientes}</h2>
            </div>
          </div>

          <div className="membros-metric-card">
            <div className="membros-metric-icon membros-metric-icon--blue"><TrendingUp size={24} /></div>
            <div>
              <span className="membros-metric-label">Interesse em Consórcio</span>
              <h2 className="membros-metric-value">{totalConsorcios}</h2>
            </div>
          </div>

          <div className="membros-metric-card">
            <div className="membros-metric-icon membros-metric-icon--green"><ArrowUpRight size={24} /></div>
            <div>
              <span className="membros-metric-label">Interesse em Financiamento</span>
              <h2 className="membros-metric-value">{totalFinanciamentos}</h2>
            </div>
          </div>
        </div>

        {/* TABELA DE SIMULAÇÕES EM TEMPO REAL */}
        <div className="membros-card">
          <div className="membros-table-header">
            <h3 className="membros-card-title" style={{ margin: 0 }}>Dashboard de Simulações em Tempo Real</h3>
            <span className="membros-live-tag">● Atualizado em tempo real</span>
          </div>

          <div className="membros-table-wrapper">
            {loadingSimulacoes ? (
              <p className="membros-empty-msg">A carregar dados da base de dados...</p>
            ) : clientes.length === 0 ? (
              <p className="membros-empty-msg">Ainda não existem simulações registadas.</p>
            ) : (
              <table className="membros-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Serviço Desejado</th>
                    <th>Valor do Crédito</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente) => {
                    const dataFormatada = cliente.created_at 
                      ? new Date(cliente.created_at).toLocaleString("pt-BR") 
                      : "Data não disponível";

                    const statusAtual = cliente.status || "Pendente";

                    return (
                      <tr key={cliente.id}>
                        <td><strong>{cliente.nome}</strong></td>
                        <td>
                          <div className="membros-table-contact">
                            <span>📧 {cliente.email}</span>
                            <span>📱 {cliente.telefone}</span>
                          </div>
                        </td>
                        <td>
                          <span className="membros-table-tag">{cliente.tipo_servico}</span>
                        </td>
                        <td><strong>{cliente.valor_credito}</strong></td>
                        <td style={{ color: "#a1a1aa", fontSize: "0.85rem" }}>{dataFormatada}</td>
                        <td>
                          <span className="membros-table-status">{statusAtual}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}