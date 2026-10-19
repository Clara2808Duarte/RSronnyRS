import { useState, useEffect } from "react";
import { Users, TrendingUp, ShieldCheck, Mail, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { supabase } from "../../supabaseClient"; // Certifica-te de que o caminho para o teu cliente supabase está correto
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
  const [clientes, setClientes] = useState<ClienteSimulacao[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Buscar os dados iniciais da tabela "simulações"
    fetchSimulacoes();

    // 2. Ouvir novas inserções em tempo real pelo Supabase Realtime
    const channel = supabase
      .channel('public:simulações')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'simulações' },
        (payload) => {
          // Quando entra um novo cliente, adiciona-o imediatamente no topo da lista
          setClientes((prev) => [payload.new as ClienteSimulacao, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSimulacoes = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('simulações')
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