# 🎨 Guia de Customização

Este documento mostra como customizar o site de forma fácil e rápida.

## 🎯 Mudanças Rápidas

### 1. Alterar Cores

#### Dourado (#d4af37)
Substituir em todos os arquivos CSS:
- Buscar: `#d4af37`
- Substituir por: sua cor (ex: `#ff6b6b`)

#### Dourado Hover (#c4a030)
Buscar e substituir: `#c4a030`

**Dica VSCode:** `Ctrl+Shift+H` para buscar e substituir em todos os arquivos

### 2. Alterar Logo

Substitua o arquivo:
```
src/images/logo.png
```

Recomendações:
- Formato: PNG com fundo transparente
- Tamanho: 200x200px ou maior
- Proporção: quadrada ou horizontal

### 3. Número do WhatsApp

Edite em `src/app/components/CreditSimulator.tsx`:
```typescript
const whatsappNumber = '5511999999999'; // Linha 40
// Formato: código do país (55) + DDD + número
// Exemplo: 5511987654321
```

### 4. Informações de Contato

#### Footer
Arquivo: `src/app/components/Footer.tsx`

```typescript
// Telefone (linha ~48)
<span>(11) 99999-9999</span>

// Email (linha ~53)
<span>seu@email.com.br</span>

// Endereço (linha ~58)
<span>Sua Rua, 123<br />Centro - Cidade/UF</span>
```

#### Contact
Arquivo: `src/app/components/Contact.tsx`

```typescript
// Atualizar nos cards de informação (linhas 44-84)
```

### 5. Textos e Conteúdo

#### Hero (Seção Principal)
Arquivo: `src/app/components/Hero.tsx`

```typescript
// Título (linhas 16-17)
<span className="hero-title-line hero-title-white">Realize seus</span>
<span className="hero-title-line hero-title-gold">sonhos com segurança</span>

// Descrição (linhas 20-22)
<p className="hero-description">
  Especialistas em consórcios...
</p>

// Estatísticas (linhas 45-61)
<div className="hero-stat-value">+5</div>
<div className="hero-stat-label">Anos de Experiência</div>
```

#### About (Sobre)
Arquivo: `src/app/components/About.tsx`

```typescript
// Valores da empresa (linhas 5-20)
const values = [
  {
    icon: Shield,
    title: 'Confiança',
    description: 'Transparência...'
  },
  // ...
];
```

#### Services (Serviços)
Arquivo: `src/app/components/Services.tsx`

```typescript
// Lista de serviços (linhas 4-32)
const services = [
  {
    icon: Car,
    title: 'Consórcio de Automóveis',
    description: 'Adquira seu veículo...',
    features: [
      'Sem entrada e sem juros',
      // ...
    ]
  },
  // ...
];
```

## 🎨 Customizações de Estilo

### Alterar Fonte

Edite `src/styles/global.css`:

```css
body {
  font-family: 'Sua Fonte', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

Para usar Google Fonts, adicione em `src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
```

Depois atualize o `global.css`:

```css
body {
  font-family: 'Poppins', sans-serif;
}
```

### Alterar Tamanhos

#### Aumentar/Diminuir Fonte Global

Em cada arquivo CSS de componente, ajuste os valores `clamp()`:

```css
/* Original */
font-size: clamp(1rem, 3vw, 1.25rem);

/* Maior */
font-size: clamp(1.2rem, 3vw, 1.5rem);

/* Menor */
font-size: clamp(0.9rem, 3vw, 1.1rem);
```

#### Ajustar Espaçamentos

```css
/* Original */
padding: 10vh 5vw;

/* Mais espaçoso */
padding: 15vh 7vw;

/* Mais compacto */
padding: 8vh 4vw;
```

### Alterar Animações

Edite a duração em cada arquivo CSS:

```css
/* Original */
transition: all 0.3s ease;

/* Mais rápido */
transition: all 0.15s ease;

/* Mais lento */
transition: all 0.5s ease;
```

### Remover Bordas Douradas

Busque e comente/remova em todos os arquivos CSS:

```css
/* Original */
border: 1px solid rgba(212, 175, 55, 0.2);

/* Removido */
/* border: 1px solid rgba(212, 175, 55, 0.2); */
```

## 🖼️ Adicionar Imagens de Fundo

### Hero Section
Edite `src/styles/components/Hero.css`:

```css
.hero {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax */
}

/* Adicione overlay para melhor legibilidade */
.hero-background {
  background: rgba(0, 0, 0, 0.7); /* Escurece a imagem */
}
```

### Seções com Imagem
```css
.about {
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.9)
  ), url('../images/about-bg.jpg');
}
```

## 🔄 Adicionar/Remover Seções

### Adicionar Nova Seção

1. Crie o componente em `src/app/components/MinhaSecao.tsx`:

```typescript
import '../../styles/components/MinhaSecao.css';

export function MinhaSecao() {
  return (
    <section id="minha-secao" className="minha-secao">
      <div className="minha-secao-container">
        <h2>Minha Seção</h2>
        {/* Seu conteúdo */}
      </div>
    </section>
  );
}
```

2. Crie o CSS em `src/styles/components/MinhaSecao.css`

3. Adicione em `src/pages/Home.tsx`:

```typescript
import { MinhaSecao } from '../app/components/MinhaSecao';

export function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <MinhaSecao /> {/* Nova seção */}
        <About />
        {/* ... */}
      </main>
      <Footer />
    </div>
  );
}
```

4. Adicione no Header para navegação:

```typescript
<button onClick={() => scrollToSection('minha-secao')}>
  Minha Seção
</button>
```

### Remover Seção

1. Remova a importação de `src/pages/Home.tsx`
2. Remova o componente da estrutura
3. (Opcional) Delete o arquivo do componente e CSS

## 📱 Ajustar Breakpoints

Edite os media queries nos arquivos CSS:

```css
/* Tablet menor */
@media (min-width: 600px) { /* Era 768px */ }

/* Desktop menor */
@media (min-width: 900px) { /* Era 1024px */ }
```

## 🎭 Temas Alternativos

### Tema Claro

Crie `src/styles/themes/light.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #000000;
  --text-secondary: #666666;
  --accent: #d4af37;
}

.hero {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

### Dark Mode Toggle

1. Adicione botão no Header
2. Use JavaScript para alternar classe:

```typescript
const [darkMode, setDarkMode] = useState(true);

const toggleTheme = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle('light-theme');
};
```

## 🚀 Performance

### Otimizar Imagens

Use ferramentas online:
- [TinyPNG](https://tinypng.com/) - Comprimir PNG/JPG
- [Squoosh](https://squoosh.app/) - Converter para WebP

### Lazy Loading

Para imagens:
```typescript
<img src="..." alt="..." loading="lazy" />
```

## 💡 Dicas

1. **Sempre teste mudanças em diferentes telas**
   - Mobile
   - Tablet
   - Desktop

2. **Use comentários no código**
   ```css
   /* Cor principal da empresa */
   color: #d4af37;
   ```

3. **Mantenha backup antes de mudanças grandes**
   ```bash
   git commit -m "Backup antes de mudanças"
   ```

4. **Use variáveis CSS** para valores repetidos:
   ```css
   :root {
     --gold: #d4af37;
     --gold-hover: #c4a030;
   }

   .button {
     background: var(--gold);
   }
   ```

## 🆘 Problemas Comuns

### Mudança não aparece
- Limpe o cache: `Ctrl+Shift+R`
- Reinicie o servidor: `Ctrl+C` e `pnpm dev`

### Layout quebrado
- Verifique se fechou todas as tags
- Confira os media queries
- Inspecione no DevTools (`F12`)

### Cores não mudaram
- Certifique-se de buscar e substituir em TODOS os arquivos
- Verifique se salvou os arquivos

## 📞 Suporte

Para problemas ou dúvidas:
1. Verifique a documentação
2. Inspecione o código no navegador (`F12`)
3. Consulte o README.md e RESPONSIVO.md
