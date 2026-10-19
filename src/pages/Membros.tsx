import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Users, TrendingUp, ShieldCheck, Mail, Phone, Calendar, ArrowUpRight, UserPlus, LogOut, Lock, FileText, CheckCircle2, Headphones, HelpCircle, ExternalLink } from "lucide-react";
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
  
  // Login / Registo
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [senhaInput, setSenhaInput] = useState("");
  const [nomeInput, setNomeInput] = useState("");
  const [formMsg, setFormMsg] = useState({ texto: "", erro: false });
  const [submitting, setSubmitting] = useState(false);

  // Dashboard de Simulações
  const [clientes, setClientes] = useState<ClienteSimulacao[]>([]);
  const [loadingSimulacoes, setLoadingSimulacoes] = useState(true);
  const [filtroServico, setFiltroServico] = useState("todos");

  // Criar novo membro
  const [novoEmail, setNovoEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [msgCriacao, setMsgCriacao] = useState({ texto: "", erro: false });
  const [criandoUser, setCriandoUser] = useState(false);

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

  const handleSubmitAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg({ texto: "", erro: false });
    setSubmitting(true);

    try {
      if (isLoginMode) {
        const { error } = await supabase.auth.signInWithPassword({
          email: emailInput,
          password: senhaInput,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email: emailInput,
          password: senhaInput,
          options: { data: { nome_completo: nomeInput } },
        });
        if (error) throw error;
        setFormMsg({ texto: "Conta criada com sucesso! Já podes entrar.", erro: false });
        setIsLoginMode(true);
        setSenhaInput("");
      }
    } catch (err: any) {
      setFormMsg({ texto: err.message || "Erro de autenticação.", erro: true });
    } finally {
      setSubmitting(false);
    }
  };

  const handleCriarUtilizador = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsgCriacao({ texto: "", erro: false });
    setCriandoUser(true);

    try {
      const { error } = await supabase.auth.signUp({
        email: novoEmail,
        password: novaSenha,
        options: { data: { nome_completo: novoNome } },
      });
      if (error) throw error;
      setMsgCriacao({ texto: `Membro ${novoEmail} criado com sucesso!`, erro: false });
      setNovoEmail("");
      setNovaSenha("");
      setNovoNome("");
    } catch (err: any) {
      setMsgCriacao({ texto: err.message || "Erro ao criar membro.", erro: true });
    } finally {
      setCriandoUser(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (authLoading) {
    return <div style={{ padding: "150px", textAlign: "center", color: "#fff", background: "#09090b" }}>A carregar...</div>;
  }

  // 1. LOGIN
  if (!session) {
    return (
      <section className="membros-login-wrapper">
        <div className="membros-login-box">
          <div className="membros-login-header">
            <div className="membros-login-icon"><Lock size={24} /></div>
            <h2>Área de Membros</h2>
            <p>Introduza as suas credenciais para aceder ao painel.</p>
          </div>

          {formMsg.texto && (
            <div className={formMsg.erro ? "membros-alert-error" : "membros-alert-success"}>
              {formMsg.texto}
            </div>
          )}

          <form onSubmit={handleSubmitAuth} className="membros-form">
            {!isLoginMode && (
              <div className="membros-input-group">
                <label className="membros-label">Nome Completo</label>
                <input type="text" placeholder="Nome" value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} required className="membros-input" />
              </div>
            )}
            <div className="membros-input-group">
              <label className="membros-label">E-mail</label>
              <input type="email" placeholder="seu@email.com" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required className="membros-input" />
            </div>
            <div className="membros-input-group">
              <label className="membros-label">Palavra-passe</label>
              <input type="password" placeholder="••••••••" value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} required className="membros-input" />
            </div>
            <button type="submit" disabled={submitting} className="membros-submit-btn">
              {submitting ? "A processar..." : isLoginMode ? "Entrar na Plataforma" : "Registar Novo Acesso"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="button" onClick={() => setIsLoginMode(!isLoginMode)} className="membros-toggle-btn">
              {isLoginMode ? "Ainda não tens conta? Clica aqui para criar" : "Já tens conta? Faz login"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Filtrar clientes
  const clientesFiltrados = clientes.filter(c => {
    if (filtroServico === "todos") return true;
    return c.tipo_servico?.toLowerCase().includes(filtroServico);
  });

  const totalClientes = clientes.length;
  const totalConsorcios = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("consórcio")).length;
  const totalFinanciamentos = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("financiamento")).length;

  // 2. DASHBOARD COMPLETO
  return (
    <div className="membros-container">
      <div className="membros-wrapper">
        
        {/* CABEÇALHO */}
        <div className="membros-header">
          <div>
            <span className="membros-eyebrow">Área Restrita & Gestão RS</span>
            <h1 className="membros-title">Painel de Controlo</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span className="membros-user-badge">👤 {session.user.email}</span>
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
              <span className="membros-metric-label">Consórcios</span>
              <h2 className="membros-metric-value">{totalConsorcios}</h2>
            </div>
          </div>
          <div className="membros-metric-card">
            <div className="membros-metric-icon membros-metric-icon--green"><ArrowUpRight size={24} /></div>
            <div>
              <span className="membros-metric-label">Financiamentos</span>
              <h2 className="membros-metric-value">{totalFinanciamentos}</h2>
            </div>
          </div>
        </div>

        {/* SECÇÃO SUBSTITUTA: SUPORTE COMERCIAL & DIRETRIZES */}
        <div className="membros-grid-two">
          <div className="membros-card" style={{ marginBottom: 0 }}>
            <div className="membros-card-title"><Headphones size={20} color="#d9ad27" /> Suporte & Orientações Comerciais</div>
            <p className="membros-card-desc">Boas práticas para o atendimento rápido aos leads de simulação.</p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem", color: "#d4d4d8" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Contacte o lead em até <strong>15 minutos</strong> após a submissão da simulação.</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Confirme o valor do crédito pretendido e o objetivo (imóvel, veículo ou investimento).</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <CheckCircle2 size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Atualize o status do cliente diretamente com a equipa de coordenação.</span>
              </div>
            </div>
          </div>

          {/* CRIAR NOVO MEMBRO */}
          <div className="membros-card" style={{ marginBottom: 0 }}>
            <div className="membros-card-title"><UserPlus size={20} color="#d9ad27" /> Registar Novo Vendedor / Membro</div>
            <p className="membros-card-desc">Crie acessos para novos colaboradores gerirem os clientes.</p>

            {msgCriacao.texto && (
              <div className={msgCriacao.erro ? "membros-alert-error" : "membros-alert-success"} style={{ marginBottom: "10px" }}>
                {msgCriacao.texto}
              </div>
            )}

            <form onSubmit={handleCriarUtilizador} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input type="text" placeholder="Nome do Membro" value={novoNome} onChange={(e) => setNovoNome(e.target.value)} required className="membros-input" />
              <input type="email" placeholder="E-mail de Acesso" value={novoEmail} onChange={(e) => setNovoEmail(e.target.value)} required className="membros-input" />
              <input type="password" placeholder="Palavra-passe temporária" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)} required className="membros-input" />
              <button type="submit" disabled={criandoUser} className="membros-submit-btn" style={{ marginTop: "4px" }}>
                {criandoUser ? "A criar..." : "Criar Conta de Membro"}
              </button>
            </form>
          </div>
        </div>

        {/* TABELA DE SIMULAÇÕES COM FILTROS */}
        <div className="membros-card" style={{ marginTop: "30px" }}>
          <div className="membros-table-header">
            <div>
              <h3 className="membros-card-title" style={{ margin: 0 }}>Simulações Recebidas</h3>
              <span style={{ fontSize: "0.8rem", color: "#a1a1aa" }}>Atualizações automáticas em tempo real</span>
            </div>
            
            {/* Filtros */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => setFiltroServico("todos")} className={`membros-filter-btn ${filtroServico === "todos" ? "active" : ""}`}>Todos</button>
              <button onClick={() => setFiltroServico("consórcio")} className={`membros-filter-btn ${filtroServico === "consórcio" ? "active" : ""}`}>Consórcio</button>
              <button onClick={() => setFiltroServico("financiamento")} className={`membros-filter-btn ${filtroServico === "financiamento" ? "active" : ""}`}>Financiamento</button>
            </div>
          </div>

          <div className="membros-table-wrapper">
            {loadingSimulacoes ? (
              <p className="membros-empty-msg">A carregar dados...</p>
            ) : clientesFiltrados.length === 0 ? (
              <p className="membros-empty-msg">Nenhuma simulação encontrada com este filtro.</p>
            ) : (
              <table className="membros-table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Serviço</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {clientesFiltrados.map((cli) => (
                    <tr key={cli.id}>
                      <td><strong>{cli.nome}</strong></td>
                      <td>
                        <div className="membros-table-contact">
                          <span>📧 {cli.email}</span>
                          <span>📱 {cli.telefone}</span>
                        </div>
                      </td>
                      <td><span className="membros-table-tag">{cli.tipo_servico}</span></td>
                      <td><strong>{cli.valor_credito}</strong></td>
                      <td style={{ color: "#a1a1aa", fontSize: "0.85rem" }}>{cli.created_at ? new Date(cli.created_at).toLocaleString("pt-BR") : "-"}</td>
                      <td><span className="membros-table-status">{cli.status || "Pendente"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}