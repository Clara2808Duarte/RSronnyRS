import { Calculator } from 'lucide-react';
import { useState, FormEvent } from 'react';
import '../../styles/components/CreditSimulator.css';

export function CreditSimulator() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'mais-viavel',
    creditValue: '',
    downPayment: '',
    contactMethod: 'whatsapp',
    bestDay: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const serviceTypeLabel = formData.serviceType === 'consorcio'
      ? 'Consórcio'
      : formData.serviceType === 'financiamento'
      ? 'Financiamento'
      : 'Ver o mais viável';

    const contactMethodLabel = formData.contactMethod === 'ligacao' ? 'Ligação' : 'WhatsApp';

    const message = `*Simulação de Crédito - RS Intermediações*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Email:* ${formData.email}
*Tipo de Serviço:* ${serviceTypeLabel}
*Valor do Crédito:* R$ ${formData.creditValue}
*Valor de Entrada:* R$ ${formData.downPayment}
*Melhor meio de comunicação:* ${contactMethodLabel}
*Melhor dia para contato:* ${formData.bestDay}

Gostaria de simular este crédito e receber mais informações.`;

    const whatsappNumber = '5511999999999';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="simulator" className="simulator">
      <div className="simulator-container">
        <div className="simulator-header">
          <div className="simulator-icon">
            <Calculator size={32} />
          </div>
          <h2 className="simulator-title">
            Simule seu <span className="simulator-title-gold">Crédito</span>
          </h2>
          <p className="simulator-description">
            Preencha os dados abaixo e receba uma simulação personalizada direto no WhatsApp
          </p>
        </div>

        <div className="simulator-form-wrapper">
          <div className="simulator-form-container">
            <form onSubmit={handleSubmit} className="simulator-form">
              <div className="simulator-form-grid">
                <div className="simulator-form-group">
                  <label htmlFor="name" className="simulator-label">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="phone" className="simulator-label">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="email" className="simulator-label">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="serviceType" className="simulator-label">
                    Tipo de Serviço *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="simulator-select"
                  >
                    <option value="mais-viavel">Ver o mais viável</option>
                    <option value="consorcio">Consórcio</option>
                    <option value="financiamento">Financiamento</option>
                  </select>
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="creditValue" className="simulator-label">
                    Valor do Crédito (R$) *
                  </label>
                  <input
                    type="number"
                    id="creditValue"
                    name="creditValue"
                    required
                    min="1000"
                    step="1000"
                    value={formData.creditValue}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="250000"
                  />
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="downPayment" className="simulator-label">
                    Valor de Entrada (R$) *
                  </label>
                  <input
                    type="number"
                    id="downPayment"
                    name="downPayment"
                    required
                    min="0"
                    step="1000"
                    value={formData.downPayment}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="50000"
                  />
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="contactMethod" className="simulator-label">
                    Melhor meio de comunicação *
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    required
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="simulator-select"
                  >
                    <option value="whatsapp">WhatsApp</option>
                    <option value="ligacao">Ligação</option>
                  </select>
                </div>

                <div className="simulator-form-group">
                  <label htmlFor="bestDay" className="simulator-label">
                    Melhor dia para contato *
                  </label>
                  <input
                    type="text"
                    id="bestDay"
                    name="bestDay"
                    required
                    value={formData.bestDay}
                    onChange={handleChange}
                    className="simulator-input"
                    placeholder="Ex: Segunda-feira pela manhã"
                  />
                </div>
              </div>

              <div className="simulator-button-wrapper">
                <button type="submit" className="simulator-button">
                  <Calculator size={20} />
                  <span>Simular no WhatsApp</span>
                </button>
              </div>

              <p className="simulator-disclaimer">
                Ao clicar em "Simular no WhatsApp", você será redirecionado para nosso atendimento com seus dados preenchidos.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
