# 📚 Índice de Documentação - RS Intermediações

Guia completo para trabalhar no projeto.

## 🚀 Início Rápido

1. **[README.md](./README.md)** - Começar aqui!
   - Estrutura do projeto
   - Como executar
   - Funcionalidades
   - Configurações importantes

## 📱 Design & Responsividade

2. **[RESPONSIVO.md](./RESPONSIVO.md)** - Guia de Responsividade
   - Como funcionam vw, vh, flexbox, grid
   - Breakpoints (mobile, tablet, desktop)
   - Exemplos práticos
   - Testando responsividade
   - Boas práticas
   - Debugging

## 🎨 Personalização

3. **[CUSTOMIZACAO.md](./CUSTOMIZACAO.md)** - Guia de Customização
   - Alterar cores
   - Alterar logo
   - Mudar textos e conteúdo
   - Adicionar/remover seções
   - Temas alternativos
   - Performance

## ✅ Lançamento

4. **[CHECKLIST.md](./CHECKLIST.md)** - Checklist Pré-Lançamento
   - Informações essenciais
   - Conteúdo
   - Funcionalidades
   - Responsividade
   - SEO e acessibilidade
   - Deploy

## 💻 Ferramentas

5. **[VSCODE.md](./VSCODE.md)** - Guia VSCode
   - Extensões recomendadas
   - Atalhos úteis
   - Snippets personalizados
   - Produtividade
   - Debugging

---

## 📖 Como Usar Esta Documentação

### Se você é novo no projeto:
1. Leia **README.md** para entender a estrutura
2. Leia **VSCODE.md** para configurar o ambiente
3. Execute o projeto: `pnpm install` → `pnpm dev`
4. Leia **CUSTOMIZACAO.md** para fazer suas primeiras mudanças

### Se vai customizar o design:
1. **CUSTOMIZACAO.md** → Mudanças rápidas (cores, textos, logo)
2. **RESPONSIVO.md** → Entender como o CSS funciona
3. **VSCODE.md** → Atalhos para trabalhar mais rápido

### Se vai lançar o site:
1. **CUSTOMIZACAO.md** → Fazer todas as mudanças necessárias
2. **CHECKLIST.md** → Verificar cada item antes do deploy
3. Testar em múltiplos dispositivos
4. Deploy!

### Se tem problemas:
1. Procure no **RESPONSIVO.md** → Seção "Debugging"
2. Veja **VSCODE.md** → Seção "Problemas Comuns"
3. Consulte **README.md** → Seção "Notas"

---

## 🗂️ Estrutura dos Arquivos

```
📦 Projeto RS Intermediações
├── 📄 README.md              ← Visão geral do projeto
├── 📄 INDEX.md               ← Este arquivo (índice)
├── 📄 RESPONSIVO.md          ← Guia de responsividade
├── 📄 CUSTOMIZACAO.md        ← Como personalizar
├── 📄 CHECKLIST.md           ← Checklist pré-lançamento
├── 📄 VSCODE.md              ← Dicas VSCode
├── 📁 src/
│   ├── 📁 app/
│   │   ├── App.tsx
│   │   └── 📁 components/     ← Componentes React
│   ├── 📁 pages/
│   │   └── Home.tsx           ← Página principal
│   ├── 📁 images/
│   │   └── logo.png           ← Logo da empresa
│   └── 📁 styles/
│       ├── global.css         ← Estilos globais
│       └── 📁 components/      ← CSS de cada componente
└── 📁 node_modules/           ← Dependências (não editar)
```

---

## 🎯 Fluxo de Trabalho Recomendado

### Dia 1 - Setup
- [ ] Ler README.md
- [ ] Instalar VSCode e extensões (VSCODE.md)
- [ ] Executar projeto (`pnpm install` + `pnpm dev`)
- [ ] Testar no navegador

### Dia 2 - Personalização Básica
- [ ] Substituir logo (images/logo.png)
- [ ] Atualizar número WhatsApp (CUSTOMIZACAO.md)
- [ ] Atualizar dados de contato
- [ ] Mudar textos principais

### Dia 3 - Design
- [ ] Ajustar cores se necessário
- [ ] Revisar todos os textos
- [ ] Adicionar/remover seções
- [ ] Testar responsividade

### Dia 4 - Testes
- [ ] Testar em mobile real
- [ ] Testar em tablet
- [ ] Testar em desktop
- [ ] Verificar formulários
- [ ] Usar CHECKLIST.md

### Dia 5 - Deploy
- [ ] Completar CHECKLIST.md
- [ ] Build de produção
- [ ] Deploy
- [ ] Testes finais

---

## 🆘 Ajuda Rápida

### Comandos Principais
```bash
pnpm install     # Instalar dependências
pnpm dev         # Rodar em desenvolvimento
pnpm build       # Build para produção
```

### Arquivos Importantes
- **WhatsApp:** `src/app/components/CreditSimulator.tsx:40`
- **Logo:** `src/images/logo.png`
- **Contatos:** `src/app/components/Contact.tsx` e `Footer.tsx`
- **Cores:** Buscar `#d4af37` em todos arquivos CSS

### Problemas Comuns
| Problema | Solução |
|----------|---------|
| Mudança não aparece | `Ctrl+Shift+R` no navegador |
| Erro ao instalar | Deletar `node_modules` e rodar `pnpm install` |
| Layout quebrado | Ver RESPONSIVO.md → Debugging |
| CSS não funciona | Verificar import no componente |

---

## 📞 Próximos Passos

1. **Primeiro Acesso?**
   → Vá para [README.md](./README.md)

2. **Já configurou o ambiente?**
   → Vá para [CUSTOMIZACAO.md](./CUSTOMIZACAO.md)

3. **Pronto para lançar?**
   → Vá para [CHECKLIST.md](./CHECKLIST.md)

4. **Quer aprender mais sobre responsividade?**
   → Vá para [RESPONSIVO.md](./RESPONSIVO.md)

5. **Quer melhorar produtividade?**
   → Vá para [VSCODE.md](./VSCODE.md)

---

## 🎓 Recursos Adicionais

### Aprender React
- [React Docs](https://react.dev/)
- [React Tutorial](https://react.dev/learn)

### Aprender CSS
- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/) (jogo)
- [Grid Garden](https://cssgridgarden.com/) (jogo)

### Aprender TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Design & UI
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

## 📝 Notas Finais

- **Backup:** Sempre faça backup antes de mudanças grandes
- **Git:** Use commits frequentes com mensagens claras
- **Testes:** Teste em dispositivos reais, não só DevTools
- **Atualizações:** Mantenha dependências atualizadas

**Bom trabalho! 🚀**

Se precisar de ajuda adicional, consulte os arquivos de documentação específicos listados acima.
