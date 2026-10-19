import { useState, useEffect } from "react";
import { Users, TrendingUp, ShieldCheck, Mail, Phone, Calendar, ArrowUpRight, Lock } from "lucide-react";
import { supabase } from "../../supabaseClient"; 
import "./AdminDashboard.css";

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

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [clientes, setClientes] = useState<ClienteSimulacao[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Verificar autenticação antes de carregar o painel
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

  // 2. Buscar simulações apenas se o utilizador estiver autenticado
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
      setLoading(true);
      const { data, error } = await supabase
        .from('simulacoes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Erro ao buscar simulações:", error);
      } else if (data) {
        setClientes(data);
      }
    } catch (err) {
      console.error("Erro inesperado:", err);
    } finally {
      setLoading(false);
    }
  };

  // Se ainda estiver a validar a sessão, mostra um carregamento discreto
  if (authLoading) {
    return <div style={{ padding: "100px", textAlign: "center", color: "#fff", background: "#09090b" }}>A verificar credenciais de acesso...</div>;
  }

  // SE O UTILIZADOR NÃO ESTIVER LOGADO, BLOQUEIA E MOSTRA AVISO DE ACESSO RESTRITO
  if (!session) {
    return (
      <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#09090b", color: "#fff", padding: "20px" }}>
        <div style={{ background: "#18181b", border: "1px solid #27272a", padding: "40px", borderRadius: "16px", textAlign: "center", maxWidth: "420px", boxShadow: "0 10px 25px rgba(0,0,0,0.5)" }}>
          <div style={{ color: "#dc2626", marginBottom: "15px", display: "inline-block", background: "#fee2e2", padding: "14px", borderRadius: "50%" }}>
            <Lock size={32} />
          </div>
          <h2 style={{ marginBottom: "10px", fontSize: "1.5rem" }}>Acesso Restrito</h2>
          <p style={{ color: "#a1a1aa", fontSize: "0.95rem", marginBottom: "24px", lineHeight: "1.5" }}>
            Esta área de gestão é exclusiva para membros autenticados. Faça login na sua conta para visualizar o painel.
          </p>
          <a
            href="/auth" 
            style={{ display: "inline-block", background: "#d9ad27", color: "#000", fontWeight: "600", padding: "12px 24px", borderRadius: "8px", textDecoration: "none", transition: "opacity 0.2s" }}
          >
            Fazer Login / Área de Membros
          </a>
        </div>
      </section>
    );
  }

  // Estatísticas do Dashboard baseadas nos dados reais
  const totalClientes = clientes.length;
  const totalConsorcios = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("consórcio")).length;
  const totalFinanciamentos = clientes.filter(c => c.tipo_servico?.toLowerCase().includes("financiamento")).length;

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__container">
        
        {/* CABEÇALHO DO PAINEL */}
        <div className="admin-dashboard__header">
          <div>
            <span className="admin-dashboard__eyebrow">Painel Administrativo</span>
            <h1 className="admin-dashboard__title">Dashboard de Acessos e Clientes</h1>
          </div>
          <div className="admin-dashboard__badge">
            <ShieldCheck size={18} />
            <span>Ambiente Seguro RS</span>
          </div>
        </div>

        {/* MÉTRICAS / CARDS RESUMO */}
        <div className="admin-dashboard__metrics">
          <div className="admin-dashboard__metric-card">
            <div className="admin-dashboard__metric-icon">
              <Users size={24} />
            </div>
            <div>
              <span className="admin-dashboard__metric-label">Total de Cadastros / Simulações</span>
              <h2 className="admin-dashboard__metric-value">{totalClientes}</h2>
            </div>
          </div>

          <div className="admin-dashboard__metric-card">
            <div className="admin-dashboard__metric-icon">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="admin-dashboard__metric-label">Interesse em Consórcio</span>
              <h2 className="admin-dashboard__metric-value">{totalConsorcios}</h2>
            </div>
          </div>

          <div className="admin-dashboard__metric-card">
            <div className="admin-dashboard__metric-icon">
              <ArrowUpRight size={24} />
            </div>
            <div>
              <span className="admin-dashboard__metric-label">Interesse em Financiamento</span>
              <h2 className="admin-dashboard__metric-value">{totalFinanciamentos}</h2>
            </div>
          </div>
        </div>

        {/* TABELA DE CLIENTES RECENTES (Atualizada em tempo real) */}
        <div className="admin-dashboard__table-section">
          <div className="admin-dashboard__table-header">
            <h3>Últimos Clientes que Simularam</h3>
            <span className="admin-dashboard__live-indicator">● Atualizado em tempo real</span>
          </div>

          <div className="admin-dashboard__table-wrapper">
            {loading ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "#a7a7a7" }}>A carregar dados da base de dados...</p>
            ) : clientes.length === 0 ? (
              <p style={{ padding: "2rem", textAlign: "center", color: "#a7a7a7" }}>Ainda não existem simulações registadas.</p>
            ) : (
              <table className="admin-dashboard__table">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Contacto</th>
                    <th>Serviço Desejado</th>
                    <th>Valor do Crédito</th>
                    <th>Data da Simulação</th>
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
                        <td className="admin-dashboard__td-name">
                          <strong>{cliente.nome}</strong>
                        </td>
                        <td>
                          <div className="admin-dashboard__contact-info">
                            <span className="admin-dashboard__flex"><Mail size={14} /> {cliente.email}</span>
                            <span className="admin-dashboard__flex"><Phone size={14} /> {cliente.telefone}</span>
                          </div>
                        </td>
                        <td>
                          <span className="admin-dashboard__tag">{cliente.tipo_servico}</span>
                        </td>
                        <td><strong>{cliente.valor_credito}</strong></td>
                        <td>
                          <span className="admin-dashboard__flex"><Calendar size={14} /> {dataFormatada}</span>
                        </td>
                        <td>
                          <span className={`admin-dashboard__status admin-dashboard__status--${statusAtual.toLowerCase().replace(/\s/g, '-')}`}>
                            {statusAtual}
                          </span>
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