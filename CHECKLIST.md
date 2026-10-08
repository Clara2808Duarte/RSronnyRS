# ✅ Checklist Pré-Lançamento

Use este checklist antes de colocar o site no ar!

## 🎯 Informações Essenciais

### ☐ Logo e Identidade Visual
- [ ] Logo substituído em `src/images/logo.png`
- [ ] Logo com boa resolução (mínimo 200x200px)
- [ ] Logo com fundo transparente (PNG)
- [ ] Cores da marca atualizadas no CSS

### ☐ Dados de Contato

#### WhatsApp
- [ ] Número correto em `src/app/components/CreditSimulator.tsx` (linha 40)
- [ ] Formato: 55 + DDD + número (ex: 5511987654321)
- [ ] Testado no celular

#### Email
- [ ] Email atualizado no Footer (`src/app/components/Footer.tsx`)
- [ ] Email atualizado no Contact (`src/app/components/Contact.tsx`)
- [ ] Email profissional configurado e funcionando

#### Telefone
- [ ] Números atualizados no Footer
- [ ] Números atualizados no Contact
- [ ] Com DDD correto

#### Endereço
- [ ] Endereço completo atualizado
- [ ] CEP correto
- [ ] Cidade e estado corretos

## 📝 Conteúdo

### ☐ Textos
- [ ] Título principal (Hero) revisado
- [ ] Descrições dos serviços revisadas
- [ ] Seção "Sobre" com informações corretas
- [ ] Ano de fundação correto (linha 23, About.tsx)
- [ ] Estatísticas atualizadas (anos de experiência, clientes, etc.)
- [ ] Ortografia e gramática verificadas

### ☐ Redes Sociais
- [ ] Links do Facebook no Footer
- [ ] Links do Instagram no Footer
- [ ] Links do LinkedIn no Footer
- [ ] Todos os links testados

## 🔧 Funcionalidades

### ☐ Formulários
- [ ] Simulador de crédito testado
- [ ] Redirecionamento WhatsApp funcionando
- [ ] Formulário de contato testado
- [ ] Validações funcionando
- [ ] Mensagens de erro claras

### ☐ Navegação
- [ ] Todos os links do menu funcionando
- [ ] Scroll suave entre seções
- [ ] Menu mobile funcionando
- [ ] Botões de call-to-action funcionando

## 📱 Responsividade

### ☐ Mobile (< 768px)
- [ ] iPhone SE (375px) testado
- [ ] iPhone 12/13 (390px) testado
- [ ] Android médio (412px) testado
- [ ] Textos legíveis
- [ ] Botões clicáveis (mínimo 44x44px)
- [ ] Imagens carregando
- [ ] Menu hamburguer funcionando

### ☐ Tablet (768px - 1023px)
- [ ] iPad (768px) testado
- [ ] iPad Pro (1024px) testado
- [ ] Layout em 2 colunas funcionando
- [ ] Imagens proporcionais

### ☐ Desktop (≥ 1024px)
- [ ] 1366px (laptop comum) testado
- [ ] 1920px (Full HD) testado
- [ ] Layout em 3 colunas funcionando
- [ ] Espaçamentos adequados

## 🎨 Visual

### ☐ Cores
- [ ] Paleta de cores consistente
- [ ] Contraste adequado (acessibilidade)
- [ ] Cor dourada (#d4af37) substituída se necessário
- [ ] Hover states funcionando

### ☐ Imagens
- [ ] Todas as imagens carregando
- [ ] Imagens otimizadas (< 500KB cada)
- [ ] Alt text em todas as imagens
- [ ] Logo em alta resolução

### ☐ Tipografia
- [ ] Fontes carregando corretamente
- [ ] Tamanhos legíveis em mobile
- [ ] Hierarquia visual clara
- [ ] Line-height adequado

## 🚀 Performance

### ☐ Otimização
- [ ] Imagens comprimidas
- [ ] Sem console.logs no código
- [ ] CSS minificado em produção
- [ ] JavaScript minificado em produção

### ☐ Velocidade
- [ ] Site carrega em < 3 segundos
- [ ] Sem erros no console do navegador
- [ ] Lazy loading de imagens configurado

## 🔒 Segurança & SEO

### ☐ Meta Tags (verificar no HTML)
- [ ] Title tag descritivo
- [ ] Meta description
- [ ] Viewport meta tag
- [ ] Favicon configurado
- [ ] Open Graph para redes sociais

### ☐ Acessibilidade
- [ ] Alt text em todas as imagens
- [ ] Labels em todos os inputs
- [ ] Contraste de cores adequado
- [ ] Navegação por teclado funcionando

### ☐ Legal
- [ ] Política de Privacidade
- [ ] Termos de Uso
- [ ] LGPD compliance (se aplicável)
- [ ] Copyright atualizado

## 🌐 Navegadores

### ☐ Testado em:
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Microsoft Edge
- [ ] Safari (Mac/iOS)
- [ ] Opera

## 📊 Analytics & Tracking

### ☐ Ferramentas
- [ ] Google Analytics configurado
- [ ] Google Search Console
- [ ] Facebook Pixel (se usar)
- [ ] Pixels de conversão

## 🔄 Pós-Lançamento

### ☐ Monitoramento
- [ ] Testar todos os formulários após deploy
- [ ] Verificar analytics funcionando
- [ ] Monitorar erros no console
- [ ] Verificar velocidade de carregamento
- [ ] Testar em diferentes redes (WiFi, 4G, 5G)

### ☐ Marketing
- [ ] Site adicionado nas redes sociais
- [ ] Google Meu Negócio atualizado
- [ ] Assinatura de email com link do site
- [ ] Cartões de visita com URL

## 🛠️ Build de Produção

### ☐ Antes do Deploy
```bash
# 1. Teste local
pnpm dev

# 2. Build de produção
pnpm build

# 3. Preview do build
pnpm preview

# 4. Verificar erros
```

### ☐ Variáveis de Ambiente
- [ ] URLs de API em produção
- [ ] Chaves de API protegidas
- [ ] Configurações de ambiente corretas

## 📋 Comandos Úteis

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Verificar erros
pnpm lint
```

## ⚠️ Avisos Importantes

### Antes de fazer build:
1. ✅ Substitua o número do WhatsApp
2. ✅ Atualize todos os dados de contato
3. ✅ Revise todos os textos
4. ✅ Teste em mobile REAL, não só no DevTools
5. ✅ Faça backup do código

### Informações Sensíveis:
- 🔐 Nunca comite senhas ou API keys
- 🔐 Use variáveis de ambiente
- 🔐 Adicione `.env` ao `.gitignore`

## 📞 Suporte Rápido

### Problema: Site não carrega
1. Limpe o cache: `Ctrl+Shift+R`
2. Verifique o console: `F12`
3. Reinicie o servidor

### Problema: Layout quebrado no mobile
1. Verifique viewport meta tag
2. Teste no DevTools mobile
3. Verifique media queries no CSS

### Problema: WhatsApp não abre
1. Verifique o formato do número
2. Teste em dispositivo móvel real
3. Verifique se WhatsApp está instalado

## ✨ Checklist Final

Antes de considerar 100% pronto:

- [ ] ✅ Todos os itens acima verificados
- [ ] ✅ Testado em pelo menos 3 dispositivos diferentes
- [ ] ✅ Aprovado por outra pessoa
- [ ] ✅ Backup feito
- [ ] ✅ Pronto para o deploy!

---

**Data da verificação:** ___/___/_____

**Responsável:** _________________

**Status:** [ ] Em progresso  [ ] Pronto  [ ] Deploy realizado
