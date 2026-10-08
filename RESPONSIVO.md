# 📱 Guia de Responsividade

Este documento explica como funciona o sistema de responsividade do site.

## 🎯 Conceitos Utilizados

### 1. Unidades Relativas

#### vw (Viewport Width)
- `1vw` = 1% da largura da janela do navegador
- Exemplo: `padding: 5vw` - adiciona padding de 5% da largura da tela
- Útil para: espaçamentos, gaps, larguras que devem escalar com a tela

#### vh (Viewport Height)
- `1vh` = 1% da altura da janela do navegador
- Exemplo: `height: 100vh` - elemento com altura total da tela
- Útil para: alturas de seções, hero sections, padding vertical

#### clamp()
- Função CSS que define valores min, preferido e max
- Sintaxe: `clamp(mínimo, preferido, máximo)`
- Exemplo: `font-size: clamp(1rem, 3vw, 2rem)`
  - Nunca menor que 1rem
  - Cresce com 3vw
  - Nunca maior que 2rem

### 2. Flexbox

Layout flexível que se adapta automaticamente:

```css
.hero-buttons {
  display: flex;
  flex-direction: column; /* Mobile: empilhado verticalmente */
  gap: 2vh;
}

@media (min-width: 768px) {
  .hero-buttons {
    flex-direction: row; /* Tablet/Desktop: lado a lado */
  }
}
```

### 3. Grid

Sistema de grade para layouts complexos:

```css
.about-grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 coluna */
  gap: 4vh;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 colunas */
  }
}

@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 colunas */
  }
}
```

## 📊 Breakpoints

### Mobile First Approach
Começamos com estilos para mobile e adicionamos media queries para telas maiores.

```css
/* Mobile (padrão) - < 768px */
.element {
  padding: 5vw;
  font-size: 1rem;
}

/* Tablet - 768px a 1023px */
@media (min-width: 768px) {
  .element {
    padding: 4vw;
    font-size: 1.1rem;
  }
}

/* Desktop - ≥ 1024px */
@media (min-width: 1024px) {
  .element {
    padding: 3vw;
    font-size: 1.2rem;
  }
}

/* Large Desktop - ≥ 1440px */
@media (min-width: 1440px) {
  .element {
    padding: 2rem; /* Valores fixos em telas muito grandes */
  }
}
```

## 🎨 Exemplos Práticos

### Tipografia Responsiva

```css
.hero-title {
  /* Min: 2rem (32px), Cresce: 8vw, Max: 4rem (64px) */
  font-size: clamp(2rem, 8vw, 4rem);
  line-height: 1.2;
}
```

**Resultado:**
- iPhone SE (375px): ~32px
- Tablet (768px): ~61px
- Desktop (1920px): 64px (máximo)

### Espaçamentos Responsivos

```css
.section {
  /* Mobile */
  padding: 10vh 5vw;
}

@media (min-width: 768px) {
  .section {
    /* Tablet */
    padding: 12vh 5vw;
  }
}

@media (min-width: 1024px) {
  .section {
    /* Desktop */
    padding: 15vh 4vw;
  }
}
```

### Botões Responsivos

```css
.hero-button {
  width: 100%; /* Mobile: largura total */
  max-width: 300px;
  padding: 2vh 4vw;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
}

@media (min-width: 768px) {
  .hero-button {
    width: auto; /* Tablet/Desktop: largura automática */
    padding: 2vh 3vw;
  }
}
```

### Imagens e Ícones Responsivos

```css
.about-icon {
  width: 10vw;
  height: 10vw;
  min-width: 60px;  /* Não fica muito pequeno */
  max-width: 80px;  /* Não fica muito grande */
  min-height: 60px;
  max-height: 80px;
}
```

## 🔍 Testando Responsividade

### No Navegador (Chrome DevTools)

1. Pressione `F12` ou `Ctrl+Shift+I`
2. Clique no ícone de dispositivo móvel (ou `Ctrl+Shift+M`)
3. Teste diferentes dispositivos:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - iPad Pro (1024px)
   - Desktop (1920px)

### Ferramentas Online

- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [Am I Responsive](https://ui.dev/amiresponsive)

## 💡 Boas Práticas

### ✅ Faça

- Use `clamp()` para tipografia
- Teste em dispositivos reais
- Use `min-width` e `max-width` para limitar elementos
- Combine `vw/vh` com valores min/max
- Priorize mobile-first

### ❌ Evite

- Valores fixos (px) para tudo
- Muitos breakpoints (mantenha 2-3 principais)
- Esquecer de testar em landscape
- Ignorar touch targets (botões < 44px)

## 📐 Fórmulas Úteis

### Converter px para vw/vh

```
vw = (px / largura_da_tela) * 100
vh = (px / altura_da_tela) * 100

Exemplo (iPhone 12 Pro - 390px):
20px = (20 / 390) * 100 = 5.13vw
```

### Gap Responsivo com clamp()

```css
gap: clamp(1rem, 3vw, 2rem);
/* Mobile: 1rem, Tablet: ~2.3vw, Desktop: 2rem */
```

## 🛠️ Debugging

Se algo não está responsivo:

1. **Verifique o viewport meta tag** no HTML:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. **Use o DevTools** para inspecionar:
   - Computed styles
   - Box model
   - Media queries ativas

3. **Teste com limites**:
   - 767px (limite mobile/tablet)
   - 1023px (limite tablet/desktop)

## 📚 Recursos Adicionais

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Web.dev: Responsive Web Design Basics](https://web.dev/responsive-web-design-basics/)
