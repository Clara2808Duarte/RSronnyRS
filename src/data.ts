export const WHATSAPP_NUMBER = "5519990013809";

export interface FormData {
  nome: string;
  telefone: string;
  email: string;
  tipoServico: string;
  valorCredito: string;
  valorEntrada: string;
  meioComunicacao: string;
  melhorDia: string;
}

export const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Como Funciona", to: "/como-funciona" },
  { label: "Simulação", to: "/simulacao" },
  { label: "Depoimentos", to: "/depoimentos" },
];

export const DIAS_SEMANA = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function formatCurrency(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  const num = parseInt(digits, 10);
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(num / 100);
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return value;
}
