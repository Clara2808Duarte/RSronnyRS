import { useState } from "react";
import { Lock, Mail, User, ArrowRight, ShieldCheck, LogOut, LayoutDashboard, Database, Key } from "lucide-react";
import { supabase } from "../../supabaseClient";
import "./Auth.css";

export default function Auth() {
  const [session, setSession] = useState(supabase.auth.getSession() ? null : null);
  const [user, setUser] = useState<any>(null);
  
  // Verificar se já existe sessão ativa ao carregar
  supabase.auth.getSession().then(({ data: { session } }) => {
    setSession(session);
    setUser(session?.user ?? null);
  });

  supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
    setUser(session?.user ?? null);
  });

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      if (isLogin) {
        // Fazer Login com Supabase Auth
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password: senha,
        });
        if (error) throw error;
      } else {
        // Criar Conta no Supabase Auth
        const { error } = await supabase.auth.signUp({
          email,
          password: senha,
          options: {
            data: {
              nome_completo: nome,
            },
          },
        });
        if (error) throw error;
        alert("Conta criada com sucesso! Podes entrar na plataforma.");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Ocorreu um erro na autenticação.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  // ==========================================
  // SE ESTIVER LOGADO: MOSTRA O PAINEL DE MEMBROS
  // ==========================================
  if (user) {
    return (
      <section className="auth-section">
        <div className="auth-container" style={{ maxWidth: "800px" }}>
          <div className="auth-box" style={{ textAlign: "left" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
              <div>
                <div className="auth-eyebrow">
                  <ShieldCheck size={16} />
                  <span>Área de Membros RS</span>
                </div>
                <h2>Bem-vindo, {user.user_metadata?.nome_completo || user.email}!</h2>
                <p style={{ color: "#888", fontSize: "0.9rem" }}>Painel de controlo e gestão de acessos</p>
              </div>
              <button 
                onClick={handleLogout}
                style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fee2e2", color: "#dc2626", border: "none", padding: "10px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
              >
                <LogOut size={16} /> Sair
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "2rem" }}>
              <div style={{ background: "#18181b", padding: "20px", borderRadius: "12px", border: "1px solid #27272a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#d9ad27", marginBottom: "10px" }}>
                  <LayoutDashboard size={20} />
                  <h4 style={{ margin: 0, color: "#fff" }}>As Suas Simulações</h4>
                </div>
                <p style={{ color: "#a1a1aa", fontSize: "0.9rem", margin: "0 0 15px 0" }}>Consulte o histórico e o estado das propostas enviadas.</p>
                <span style={{ fontSize: "0.85rem", background: "#27272a", padding: "6px 12px", borderRadius: "6px", color: "#fff" }}>Ativo no sistema</span>
              </div>

              <div style={{ background: "#18181b", padding: "20px", borderRadius: "12px", border: "1px solid #27272a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#d9ad27", marginBottom: "10px" }}>
                  <Key size={20} />
                  <h4 style={{ margin: 0, color: "#fff" }}>Gestão de Credenciais</h4>
                </div>
                <p style={{ color: "#a1a1aa", fontSize: "0.9rem", margin: "0 0 15px 0" }}>Pode gerir os seus dados de acesso e e-mail associado.</p>
                <span style={{ fontSize: "0.85rem", background: "#27272a", padding: "6px 12px", borderRadius: "6px", color: "#fff" }}>{user.email}</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // ==========================================
  // SE NÃO ESTIVER LOGADO: MOSTRA FORMULÁRIO
  // ==========================================
  return (
    <section className="auth-section">
      <div className="auth-container">
        
        <div className="auth-box">
          <div className="auth-header">
            <div className="auth-eyebrow">
              <ShieldCheck size={16} />
              <span>Área Restrita RS</span>
            </div>
            <h2>{isLogin ? "Aceder à sua Conta" : "Criar Nova Conta"}</h2>
            <p>
              {isLogin
                ? "Introduza os seus dados para consultar as suas simulações e propostas."
                : "Registe-se para acompanhar o andamento do seu crédito em tempo real."}
            </p>
          </div>

          {errorMsg && (
            <div style={{ background: "#fee2e2", color: "#dc2626", padding: "10px", borderRadius: "8px", fontSize: "0.85rem", marginBottom: "15px", textAlign: "center" }}>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="auth-field">
                <label>Nome Completo</label>
                <div className="auth-input-wrapper">
                  <User size={18} className="auth-input-icon" />
                  <input
                    type="text"
                    placeholder="O seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>E-mail</label>
              <div className="auth-input-wrapper">
                <Mail size={18} className="auth-input-icon" />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Palavra-passe (Senha)</label>
              <div className="auth-input-wrapper">
                <Lock size={18} className="auth-input-icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" disabled={loading}>
              {loading ? "A processar..." : isLogin ? "Entrar na Plataforma" : "Criar Conta Gratuita"}
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Ainda não tem uma conta?" : "Já possui uma conta?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="auth-toggle-link"
              >
                {isLogin ? "Registe-se aqui" : "Faça login"}
              </button>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}