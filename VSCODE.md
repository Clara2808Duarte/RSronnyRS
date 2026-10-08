# 💻 Guia VSCode - RS Intermediações

Configurações e dicas para trabalhar no projeto usando VSCode.

## 🔌 Extensões Recomendadas

### Essenciais
1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Atalhos para criar componentes React rapidamente

2. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Autocomplete para classes Tailwind

3. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - Identifica erros de código

4. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Formata código automaticamente

### Úteis
5. **Auto Rename Tag**
   - ID: `formulahendry.auto-rename-tag`
   - Renomeia tags HTML/JSX automaticamente

6. **Path Intellisense**
   - ID: `christian-kohler.path-intellisense`
   - Autocomplete para caminhos de arquivos

7. **CSS Peek**
   - ID: `pranaygp.vscode-css-peek`
   - Visualiza CSS ao passar mouse sobre classes

8. **Live Server**
   - ID: `ritwickdey.LiveServer`
   - Servidor local com reload automático

## ⚙️ Configurações Recomendadas

Crie `.vscode/settings.json` no projeto:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "css.validate": true,
  "scss.validate": true,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["className\\s*=\\s*[\"'`]([^\"'`]*)[\"'`]", "([^\\s]+)"]
  ],
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "typescript": "typescriptreact"
  },
  "emmet.triggerExpansionOnTab": true
}
```

## ⌨️ Atalhos Úteis

### Navegação
| Atalho | Função |
|--------|--------|
| `Ctrl+P` | Abrir arquivo rápido |
| `Ctrl+Shift+P` | Command Palette |
| `Ctrl+B` | Toggle sidebar |
| `Ctrl+\`` | Toggle terminal |
| `Ctrl+,` | Configurações |
| `Ctrl+Tab` | Alternar entre arquivos abertos |
| `Ctrl+W` | Fechar arquivo |

### Edição
| Atalho | Função |
|--------|--------|
| `Alt+↑/↓` | Mover linha para cima/baixo |
| `Shift+Alt+↑/↓` | Duplicar linha |
| `Ctrl+/` | Comentar/descomentar linha |
| `Ctrl+Shift+K` | Deletar linha |
| `Ctrl+D` | Selecionar próxima ocorrência |
| `Ctrl+Shift+L` | Selecionar todas ocorrências |
| `Alt+Click` | Múltiplos cursores |

### Busca e Substituição
| Atalho | Função |
|--------|--------|
| `Ctrl+F` | Buscar no arquivo |
| `Ctrl+H` | Substituir no arquivo |
| `Ctrl+Shift+F` | Buscar em todos arquivos |
| `Ctrl+Shift+H` | Substituir em todos arquivos |

### Terminal
| Atalho | Função |
|--------|--------|
| ``Ctrl+` `` | Abrir/fechar terminal |
| `Ctrl+Shift+` `` | Novo terminal |
| `Ctrl+C` | Parar processo no terminal |

## 🚀 Snippets Personalizados

Crie `.vscode/react.code-snippets`:

```json
{
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "import '../../styles/components/${TM_FILENAME_BASE}.css';",
      "",
      "export function ${TM_FILENAME_BASE}() {",
      "  return (",
      "    <section className=\"${TM_FILENAME_BASE/(.*)/\\L$1/}\">",
      "      <div className=\"${TM_FILENAME_BASE/(.*)/\\L$1/}-container\">",
      "        $0",
      "      </div>",
      "    </section>",
      "  );",
      "}"
    ],
    "description": "Create functional component with CSS import"
  },
  "CSS Component": {
    "prefix": "cssc",
    "body": [
      ".${TM_FILENAME_BASE/(.*)/\\L$1/} {",
      "  padding: 10vh 5vw;",
      "  background: linear-gradient(180deg, #000000 0%, #18181b 100%);",
      "}",
      "",
      ".${TM_FILENAME_BASE/(.*)/\\L$1/}-container {",
      "  max-width: 1400px;",
      "  margin: 0 auto;",
      "}",
      "",
      "/* Tablet */",
      "@media (min-width: 768px) {",
      "  .${TM_FILENAME_BASE/(.*)/\\L$1/} {",
      "    padding: 12vh 5vw;",
      "  }",
      "}",
      "",
      "/* Desktop */",
      "@media (min-width: 1024px) {",
      "  .${TM_FILENAME_BASE/(.*)/\\L$1/} {",
      "    padding: 15vh 4vw;",
      "  }",
      "}"
    ],
    "description": "Create responsive CSS component"
  }
}
```

**Como usar:**
1. Digite `rfc` + `Tab` para criar componente
2. Digite `cssc` + `Tab` para criar CSS responsivo

## 📁 Navegação Rápida

### Abrir arquivos importantes
- `Ctrl+P` → Digite:
  - `App.tsx` → Arquivo principal
  - `Home.tsx` → Página home
  - `Header.css` → Estilo do header
  - `global.css` → Estilos globais

### Buscar em arquivos
- `Ctrl+Shift+F` → Buscar em todo projeto
  - Exemplo: buscar por `#d4af37` para trocar cor
  - Exemplo: buscar por `WhatsApp` para atualizar número

## 🎨 Produtividade

### Emmet para HTML/JSX
Digite e pressione `Tab`:

```
div.hero-container>h1.hero-title+p.hero-description
```
Gera:
```html
<div className="hero-container">
  <h1 className="hero-title"></h1>
  <p className="hero-description"></p>
</div>
```

### Multi-cursor
1. `Alt+Click` em vários lugares
2. Digite uma vez, edita todos

Exemplo: Adicionar `;` no final de várias linhas CSS:
- `Alt+Click` no final de cada linha
- Digite `;`

### Edição em bloco
1. `Shift+Alt` + arrastar mouse
2. Cria cursor vertical
3. Útil para editar várias linhas iguais

## 🔍 Debugging

### DevTools Integration
1. Instale extensão: `msjsdiag.debugger-for-chrome`
2. F5 para iniciar debug
3. Breakpoints no código

### Console do VSCode
- `Ctrl+Shift+U` → Output
- Ver logs de build e erros

## 📦 Tarefas Comuns

### Criar novo componente
1. Criar arquivo: `src/app/components/MeuComponente.tsx`
2. Digite `rfc` + `Tab`
3. Criar CSS: `src/styles/components/MeuComponente.css`
4. Digite `cssc` + `Tab`

### Buscar e substituir cor
1. `Ctrl+Shift+H`
2. Buscar: `#d4af37`
3. Substituir: `#FF6B6B`
4. Replace All

### Organizar imports
1. `Shift+Alt+O` → Remove imports não usados
2. `Shift+Alt+F` → Formata documento

## 🎯 Workflow Recomendado

### Iniciar trabalho
```bash
1. Abrir VSCode
2. Ctrl+` para abrir terminal
3. pnpm dev
4. Ctrl+B para fechar sidebar (mais espaço)
5. Ctrl+P para abrir arquivo
```

### Editar componente
```bash
1. Ctrl+P → Nome do arquivo
2. Editar código
3. Ctrl+S para salvar (auto-format)
4. Alt+Tab para ver no navegador
```

### Commit (com Git)
```bash
1. Ctrl+Shift+G → Abrir Git
2. Revisar mudanças
3. Escrever mensagem
4. Ctrl+Enter para commit
```

## 🐛 Problemas Comuns

### "Cannot find module"
- `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### CSS não atualizando
- `Ctrl+Shift+R` no navegador (hard refresh)
- Reiniciar dev server (`Ctrl+C` no terminal, depois `pnpm dev`)

### Extensões não funcionando
- `Ctrl+Shift+P` → "Developer: Reload Window"

## 💡 Dicas Pro

### 1. Zen Mode
- `Ctrl+K Z` → Modo foco total
- `Esc Esc` para sair

### 2. Split Editor
- `Ctrl+\` → Dividir editor
- Ver CSS e componente lado a lado

### 3. File Explorer
- `Ctrl+Shift+E` → Focar no explorer
- Setas para navegar
- Enter para abrir

### 4. Minimap
- Visão geral do código
- Clique para ir direto

### 5. Breadcrumbs
- Topo do editor
- Mostra estrutura do arquivo
- Clique para navegar

## 🎨 Temas Recomendados

1. **One Dark Pro** (escuro)
2. **Night Owl** (escuro)
3. **GitHub Theme** (claro/escuro)
4. **Dracula** (escuro)

Instalar: `Ctrl+K Ctrl+T` → escolher tema

## 🔐 Git Integration

### Status Visual
- Verde: novo arquivo
- Amarelo: modificado
- Vermelho: deletado

### Comandos Git no VSCode
- `Ctrl+Shift+G` → Git panel
- `+` → Stage changes
- Mensagem → Commit
- `...` → Mais opções (push, pull, etc.)

## 📱 Preview no Mobile

### Live Server
1. Instalar extensão Live Server
2. Right click no HTML → "Open with Live Server"
3. Acessar no celular (mesma rede WiFi)

### DevTools Mobile
1. `F12` no navegador
2. `Ctrl+Shift+M` → Toggle device
3. Testar diferentes telas

## 📚 Recursos

- [VSCode Docs](https://code.visualstudio.com/docs)
- [VSCode Shortcuts PDF](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [React DevTools](https://react.dev/learn/react-developer-tools)

## ⚡ Performance VSCode

Se estiver lento:

```json
// settings.json
{
  "files.watcherExclude": {
    "**/node_modules/**": true,
    "**/dist/**": true,
    "**/.git/**": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

---

**Dica Final:** Pratique os atalhos! Em 1 semana você será 2x mais rápido.
