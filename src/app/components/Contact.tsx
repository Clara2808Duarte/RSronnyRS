import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import '../../styles/components/Contact.css';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-icon">
            <Mail size={32} />
          </div>
          <h2 className="contact-title">
            Entre em <span className="contact-title-gold">Contato</span>
          </h2>
          <p className="contact-description">
            Estamos prontos para atendê-lo e encontrar a melhor solução para suas necessidades
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Phone size={24} />
              </div>
              <div className="contact-info-content">
                <h3>Telefone</h3>
                <p>(00) 0000-0000</p>
                <p>(00) 90000-0000</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={24} />
              </div>
              <div className="contact-info-content">
                <h3>E-mail</h3>
                <p>contato@rsintermediacao.com.br</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-info-content">
                <h3>Endereço</h3>
                <p>
                  Rua Exemplo, 123<br />
                  Centro - Cidade/UF<br />
                  CEP 00000-000
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Clock size={24} />
              </div>
              <div className="contact-info-content">
                <h3>Horário de Atendimento</h3>
                <p>
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 13h
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-form-content">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-label">Nome Completo *</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="contact-input"
                  placeholder="Seu nome"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-label">E-mail *</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="contact-input"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-phone" className="contact-label">Telefone *</label>
                <input
                  type="tel"
                  id="contact-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="contact-input"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-message" className="contact-label">Mensagem</label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="contact-textarea"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              <button type="submit" className="contact-button">
                <Send size={20} />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
