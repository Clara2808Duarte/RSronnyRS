import { useState } from "react";
import { Lock, Mail, User, ArrowRight, ShieldCheck } from "lucide-react";
import "./Auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert(`A fazer login com o e-mail: ${email}`);
      // Aqui integras a lógica de autenticação (Firebase/Supabase)
    } else {
      alert(`Conta criada com sucesso para: ${nome}`);
      // Aqui registas o novo membro na base de dados
    }
  };

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

            <button type="submit" className="auth-submit-btn">
              {isLogin ? "Entrar na Plataforma" : "Criar Conta Gratuita"}
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