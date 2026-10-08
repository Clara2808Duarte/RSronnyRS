# RS Intermediações e Negócios

Site corporativo desenvolvido em React com Vite para RS Intermediações e Negócios, especializada em consórcios e financiamentos.

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── App.tsx           # Componente principal da aplicação
│   └── components/       # Componentes reutilizáveis
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── CreditSimulator.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── pages/
│   └── Home.tsx          # Página principal
├── images/
│   └── logo.png          # Logo da empresa
├── styles/
│   ├── global.css        # Estilos globais
│   └── components/       # Estilos dos componentes
│       ├── Header.css
│       ├── Hero.css
│       ├── About.css
│       ├── Services.css
│       ├── CreditSimulator.css
│       ├── Contact.css
│       └── Footer.css
└── imports/              # Arquivos importados (manter para referência)
```

## 📱 Responsividade

O site foi desenvolvido com CSS totalmente responsivo utilizando:

- **vw** (viewport width) - unidades relativas à largura da tela
- **vh** (viewport height) - unidades relativas à altura da tela
- **Flexbox** - layout flexível
- **Grid** - sistema de grid
- **clamp()** - função CSS para tipografia responsiva
- **Media queries** - breakpoints para diferentes dispositivos:
  - Mobile: < 768px (iPhone, Android)
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## 🚀 Como Executar no VSCode

1. Abra o projeto no VSCode
2. Abra o terminal integrado (Ctrl + `)
3. Instale as dependências:
   ```bash
   pnpm install
   ```
4. Execute o projeto:
   ```bash
   pnpm dev
   ```
5. Acesse no navegador: `http://localhost:5173`

## 📋 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Formulário de simulação de crédito com envio para WhatsApp
- ✅ Formulário de contato
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Animações e transições suaves
- ✅ Layout moderno com cores dourado (#d4af37) e preto

## 🔧 Configurações Importantes

### WhatsApp no Simulador de Crédito
Edite o número do WhatsApp em `src/app/components/CreditSimulator.tsx` na linha 40:
```typescript
const whatsappNumber = '5511999999999'; // Substitua pelo número real
```

### Informações de Contato
Edite as informações em `src/app/components/Contact.tsx` e `src/app/components/Footer.tsx`

## 📦 Dependências

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (ícones)

## 🎨 Paleta de Cores

- **Dourado**: #d4af37
- **Preto**: #000000
- **Cinza escuro**: #18181b
- **Cinza médio**: #9ca3af
- **Cinza claro**: #d1d5db

## 📝 Notas

- O site utiliza Tailwind CSS v4 apenas para alguns utilitários básicos
- A maior parte do styling é feito com CSS puro em arquivos separados
- Todos os componentes são funcionais e utilizam React Hooks
- O design é totalmente responsivo e otimizado para SEO
