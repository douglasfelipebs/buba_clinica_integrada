# Próximos Passos - Buba Clínica Integrada

## 📋 Checklist de Implementação

### ✅ Concluído
- [x] Estrutura de diretórios
- [x] Arquivos HTML (páginas principais + `medico.html` perfil reutilizável)
- [x] Arquivos CSS (estilos completos)
- [x] Arquivos JavaScript (funcionalidades; dados de médicos em `js/doctors.js`)
- [x] README com documentação
- [x] Design responsivo
- [x] Identidade visual aplicada
- [x] Página de perfil por médico (`medico.html?id=`) + link/WhatsApp com nome do profissional
- [x] Listagem de médicos: até 3 por linha, clique no card abre perfil, clique na foto abre lightbox

---

## 🚨 Prioridade Alta - Essencial para o Site Funcionar

### 1. Logo da Clínica
- [x] **Ação:** Adicionar arquivo da logo
- [x] **Localização:** `images/logo/logo.jpeg`
- [x] **Formato:** PNG com fundo transparente (recomendado)
- [x] **Tamanho sugerido:** Mínimo 200x200px
- [x] **Status:** ⚠️ Sem a logo, o header mostrará apenas o texto "Buba Clínica Integrada"

### 2. Informações de Contato Completas
- [x] **Arquivo:** `contato.html`
- [x] **Ações necessárias:**
  - [x] Adicionar endereço completo (rua, número, bairro, CEP)
  - [x] Confirmar telefones e adicionar/remover conforme necessário
  - [x] Definir horário de funcionamento real
  - [x] Atualizar iframe do Google Maps com endereço real

**Telefone confirmado:**
- (47) 9 9930-0027

**Endereço completo:**
- Av. Getúlio Vargas, 945 - Centro, Itaiópolis - SC, 89340-000

**Horário de funcionamento:**
- Segunda à Sexta: 09h às 19h
- Sábado e Domingo: Fechado

### 3. Endereço no Google Maps
- [x] **Ação:** Obter código de incorporação do Google Maps
- [x] **Status:** Iframe configurado e funcionando corretamente
- [x] **Endereço configurado:** Av. Getúlio Vargas, 945 - Centro, Itaiópolis - SC, 89340-000
- [x] **Link direto:** Adicionado link "Ver no Google Maps" abaixo do iframe

---

## 📸 Prioridade Alta - Conteúdo Visual

### 4. Fotos dos Médicos
- [ ] **Localização:** `images/doctors/`
- [x] **Já adicionadas no site:**
  - [x] `dra_beatriz.jpeg` — Dra. Beatriz Peruzzolo Boldori
  - [x] `dra_eduarda.jpeg` — Dra. Maria Eduarda Kostecki
- [ ] **Ainda faltam (não marcar até enviar o arquivo):**
  - [ ] Foto do **Dr. Lucas Gustavo Buba** (no `doctors.js` está `photo: null` até ter arquivo)
  - [ ] Foto da **Dra. Jessyca Buba** (`jessyca-buba.jpg` referenciado — confirmar arquivo na pasta)

- [x] **Dados dos profissionais:** `js/doctors.js` (não há `data/doctors.json`)
  - [x] Nomes, especialidades e textos principais atualizados (Lucas, Beatriz, Jessyca, Eduarda)
  - [x] CRM/CRO corretos: Beatriz, Lucas, Eduarda
  - [ ] **CRO da Dra. Jessyca** ainda placeholder (`CRO PR-XXXXX`) — substituir pelo número real

### 5. Fotos da Clínica (Opcional mas Recomendado)
- [x] **Localização:** `images/clinic/` — galeria em uso (fachada, recepção, salas de espera, consultórios, etc.)
- [ ] **Opcional:** fotos extras ou imagens históricas específicas para `historia.html`

### 6. Logo da Clínica para Favicon
- [x] **Ação:** Criar favicon
- [x] **Localização:** Configurado para usar `images/logo/logo.jpeg` como favicon
- [x] **Status:** Tags de favicon adicionadas em todas as páginas HTML
- [x] **Nota:** Usando a logo existente como favicon. Pode criar um `favicon.ico` específico no futuro se necessário.

---

## 📝 Prioridade Média - Conteúdo e Dados

### 7. Completar Informações dos Médicos
- [x] **Arquivo:** `js/doctors.js` (+ perfil em `js/doctor-profile.js` / `medico.html`)
- [x] **Já feito:**
  - [x] Perfis com descrição completa (conforme enviado): Lucas, Beatriz, Jessyca, Eduarda
  - [x] **Formação completa** no perfil: **Dra. Maria Eduarda Kostecki** (demais com `formacao: []` até enviarem)
  - [x] Tags de especialidade e seção “Formação e trajetória” reutilizável por profissional
- [ ] **Pendente (solicitar aos profissionais):**
  - [ ] Itens em `formacao` para Beatriz, Lucas, Jessyca
  - [ ] CRO real da Dra. Jessyca
  - [ ] Fotos em falta (item 4)
  - [ ] Novos médicos, se houver

### 8. Atualizar Lista de Serviços
- [ ] **Arquivo:** `servicos.html` (objeto `servicesData` no próprio arquivo)
- [ ] **Verificar:**
  - [ ] Todos os serviços estão listados?
  - [ ] Descrições estão corretas e completas?
  - [ ] Adicionar serviços específicos da clínica que faltam

### 9. Atualizar Planos de Saúde Aceitos
- [ ] **Arquivo:** `planos.html` (objeto `insuranceData` no próprio arquivo)
- [ ] **Ação:** Listar TODOS os planos realmente aceitos
- [ ] **Verificar:** Categorias (premium, intermediário, básico) estão corretas?
- [ ] **Nota:** Lista atual pode conter exemplos; substituir pela lista real

### 10. Adicionar Avaliações Reais
- [ ] **Arquivo:** `js/reviews.js` (constante `reviewsData`)
- [ ] **Ação:** Substituir avaliações de exemplo por avaliações reais
- [ ] **Opcional:** Adicionar fotos dos pacientes em `images/reviews/`

### 11. Personalizar Página "História da Casa"
- [ ] **Arquivo:** `historia.html`
- [ ] **Ações:**
  - [ ] Escrever a história real do imóvel
  - [ ] Adicionar fotos históricas em `images/clinic/`
  - [ ] Personalizar o texto narrativo

---

## 🎨 Prioridade Baixa - Melhorias e Personalização

### 12. Personalizar Página "Sobre"
- [ ] **Arquivo:** `sobre.html`
- [ ] **Verificar:**
  - [ ] Missão, visão e valores estão corretos?
  - [ ] Texto de apresentação reflete a realidade da clínica?

### 13. Conteúdo da Página Inicial
- [ ] **Arquivo:** `index.html`
- [ ] **Verificar:** Textos estão adequados ou precisam de ajustes?

### 14. Links de Redes Sociais
- [x] **Arquivo:** `contato.html` e `footer` em todas as páginas
- [x] **Ação:** Adicionar links para:
  - [x] Instagram: https://www.instagram.com/bubaclinicaitaiopolis/
  - [x] WhatsApp: (47) 9 9930-0027 - Link para https://wa.me/5547999300027
  - [x] Adicionado botão WhatsApp na página de contato
  - [x] Ícones de redes sociais no footer de todas as páginas

### 15. Meta Tags e SEO
- [ ] **Arquivos:** Todos os HTMLs
- [ ] **Verificar:**
  - [ ] Meta descriptions estão adequadas?
  - [ ] Keywords estão corretas?
  - [ ] Open Graph tags para redes sociais (opcional)
  - [ ] Google Analytics (opcional)

---

## 🔧 Configurações Técnicas

### 16. Testes Locais
- [ ] Abrir o site em navegador local
- [ ] Verificar todas as páginas
- [ ] Testar menu mobile
- [ ] Verificar filtros de médicos e avaliações
- [ ] Testar em diferentes tamanhos de tela

### 17. Teste de Carregamento de Dados
- [ ] Verificar `js/doctors.js` na página `medicos.html` e `medico.html?id=…`
- [ ] Verificar blocos de dados em `servicos.html` e `planos.html`
- [ ] Verificar `js/reviews.js` na página `avaliacoes.html`

### 18. Verificação de Imagens Quebradas
- [ ] Verificar console do navegador (F12) por erros
- [ ] Garantir que todas as imagens referenciadas existem
- [ ] Verificar fallback de imagens (quando não encontradas)

---

## 🚀 Antes de Publicar

### 19. Revisão Final
- [ ] Todas as informações estão corretas?
- [ ] Todos os telefones e endereços estão atualizados?
- [ ] Todas as fotos estão no lugar?
- [ ] Logo está visível?
- [ ] Google Maps está configurado corretamente?

### 20. Preparação para GitHub
- [ ] Verificar se não há informações sensíveis no código
- [ ] Confirmar que telefones e endereços podem ser públicos (sim, pois são de divulgação)
- [ ] Preparar commit inicial
- [ ] Configurar GitHub Pages (Settings → Pages → Branch main)

---

## 📊 Resumo por Prioridade

### 🔴 Crítico (Site não funciona sem isso):
1. ✅ Logo da clínica - CONCLUÍDO
2. ✅ Endereço completo e Google Maps - CONCLUÍDO
3. ✅ Informações de contato corretas - CONCLUÍDO

### 🟡 Importante (Site fica incompleto sem isso):
4. Fotos em falta (Lucas, Jessyca) + CRO definitivo da Jessyca
5. Formação dos demais médicos (só Eduarda está completa no perfil)
6. Lista real de planos de saúde (`planos.html`)
7. História da casa (texto real)

### 🟢 Desejável (Melhora a experiência):
8. Fotos históricas extras / refinamento da galeria da clínica
9. Avaliações reais (`js/reviews.js`)
10. ~~Redes sociais~~ — já configuradas (Instagram + WhatsApp)
11. SEO aprimorado

---

## 💡 Dicas

1. **Comece pelos itens críticos** - logo, endereço e contatos
2. **Teste localmente** antes de publicar
3. **Use um servidor local** para desenvolvimento (ex: Live Server no VS Code)
4. **Valide a sintaxe** ao editar `doctors.js` / objetos nos HTML (vírgulas, aspas)
5. **Otimize as imagens** antes de adicionar (reduza o tamanho do arquivo)
6. **Mantenha backup** dos arquivos originais antes de fazer alterações

---

## 🆘 Precisa de Ajuda?

- Consulte o `README.md` para instruções detalhadas
- Verifique o console do navegador (F12) para erros JavaScript
- Para trechos JSON dentro de HTML/JS, valide em: https://jsonlint.com/
- Teste responsividade em: https://responsivechecker.net/

---

**Última atualização:** 
- ✅ Logo, contato completo, Google Maps, favicon
- ✅ Médicos: dados em `js/doctors.js`; perfil `medico.html?id=`; WhatsApp “Agendar consulta” com mensagem personalizada
- ✅ Fotos: Dra. Beatriz e Dra. Eduarda; **sem foto** Dr. Lucas (placeholder); **pendente** foto Jessyca
- ✅ Formação detalhada no perfil: **só Dra. Eduarda** (demais quando enviarem)
- ✅ Galeria da clínica em `images/clinic/` em uso nas páginas

**Status geral:** 🟢 Itens críticos e boa parte do conteúdo médico ok. **Pendências principais:** fotos Lucas/Jessyca, CRO Jessyca, formação dos outros profissionais, planos/serviços/revisão de textos e avaliações reais

