# Próximos Passos - BUBA Clínica Integrada

## 📋 Checklist de Implementação

### ✅ Concluído
- [x] Estrutura de diretórios
- [x] Arquivos HTML (8 páginas)
- [x] Arquivos CSS (estilos completos)
- [x] Arquivos JavaScript (funcionalidades)
- [x] Arquivos JSON de dados (templates)
- [x] README com documentação
- [x] Design responsivo
- [x] Identidade visual aplicada

---

## 🚨 Prioridade Alta - Essencial para o Site Funcionar

### 1. Logo da Clínica
- [ ] **Ação:** Adicionar arquivo da logo
- [ ] **Localização:** `images/logo/logo.png`
- [ ] **Formato:** PNG com fundo transparente (recomendado)
- [ ] **Tamanho sugerido:** Mínimo 200x200px
- [ ] **Status:** ⚠️ Sem a logo, o header mostrará apenas o texto "BUBA Clínica Integrada"

### 2. Informações de Contato Completas
- [ ] **Arquivo:** `contato.html`
- [ ] **Ações necessárias:**
  - [ ] Adicionar endereço completo (rua, número, bairro, CEP)
  - [ ] Confirmar telefones e adicionar/remover conforme necessário
  - [ ] Definir horário de funcionamento real
  - [ ] Atualizar iframe do Google Maps com endereço real

**Telefones atuais (precisam ser confirmados):**
- (47) 9 9930-0027
- (41) 3270-9209
- (41) 9929-0000

### 3. Endereço no Google Maps
- [ ] **Ação:** Obter código de incorporação do Google Maps
- [ ] **Como fazer:**
  1. Acesse [Google Maps](https://www.google.com/maps)
  2. Busque pelo endereço da clínica
  3. Clique em "Compartilhar" → "Incorporar um mapa"
  4. Copie o código iframe
  5. Substitua em `contato.html` (linha com `<iframe src="..."`)

---

## 📸 Prioridade Alta - Conteúdo Visual

### 4. Fotos dos Médicos
- [ ] **Localização:** `images/doctors/`
- [ ] **Fotos necessárias:**
  - [ ] `lucas-buba.jpg` - Dr. Lucas G. Buba
  - [ ] `beatriz-boldori.jpg` - Dra. Beatriz Boldori
  - [ ] `jessyca-buba.jpg` - Dra. Jessyca Buba
  - [ ] `exemplo-estetica.jpg` - (ou remover se não houver profissional de estética)

- [ ] **Atualizar:** `data/doctors.json` com:
  - [ ] Números corretos dos conselhos de classe (CRM/CRO)
  - [ ] Descrições completas de cada profissional
  - [ ] Especialidades detalhadas

### 5. Fotos da Clínica (Opcional mas Recomendado)
- [ ] **Localização:** `images/clinic/`
- [ ] **Sugestões:**
  - [ ] Foto da fachada
  - [ ] Foto de consultórios
  - [ ] Foto da recepção
  - [ ] Fotos históricas (para página de História)

### 6. Logo da Clínica para Favicon
- [ ] **Ação:** Criar favicon
- [ ] **Localização:** Raiz do projeto como `favicon.ico`
- [ ] **Como adicionar:** Incluir `<link rel="icon" href="favicon.ico">` no `<head>` de cada HTML

---

## 📝 Prioridade Média - Conteúdo e Dados

### 7. Completar Informações dos Médicos
- [ ] **Arquivo:** `data/doctors.json`
- [ ] **Verificar/Atualizar:**
  - [ ] Números dos conselhos de classe (CRM/CRO) corretos
  - [ ] Descrições profissionais completas
  - [ ] Remover médico fictício de estética (se não houver profissional real)
  - [ ] Adicionar mais médicos, se necessário

### 8. Atualizar Lista de Serviços
- [ ] **Arquivo:** `data/services.json`
- [ ] **Verificar:**
  - [ ] Todos os serviços estão listados?
  - [ ] Descrições estão corretas e completas?
  - [ ] Adicionar serviços específicos da clínica que faltam

### 9. Atualizar Planos de Saúde Aceitos
- [ ] **Arquivo:** `data/insurance.json`
- [ ] **Ação:** Listar TODOS os planos realmente aceitos
- [ ] **Verificar:** Categorias (premium, intermediário, básico) estão corretas?
- [ ] **Nota:** Lista atual contém exemplos, precisa ser substituída pela lista real

### 10. Adicionar Avaliações Reais
- [ ] **Arquivo:** `data/reviews.json`
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

### 14. Links de Redes Sociais (Opcional)
- [ ] **Arquivo:** `contato.html` e `footer` em todas as páginas
- [ ] **Ação:** Adicionar links para:
  - [ ] Instagram
  - [ ] Facebook
  - [ ] WhatsApp Business
  - [ ] Outras redes sociais

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
- [ ] Verificar se `doctors.json` carrega corretamente
- [ ] Verificar se `services.json` carrega corretamente
- [ ] Verificar se `insurance.json` carrega corretamente
- [ ] Verificar se `reviews.json` carrega corretamente

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
1. Logo da clínica
2. Endereço completo e Google Maps
3. Informações de contato corretas

### 🟡 Importante (Site fica incompleto sem isso):
4. Fotos dos médicos
5. Dados corretos dos médicos (CRM/CRO)
6. Lista real de planos de saúde
7. História da casa (texto real)

### 🟢 Desejável (Melhora a experiência):
8. Fotos da clínica
9. Avaliações reais
10. Redes sociais
11. SEO aprimorado

---

## 💡 Dicas

1. **Comece pelos itens críticos** - logo, endereço e contatos
2. **Teste localmente** antes de publicar
3. **Use um servidor local** para desenvolvimento (ex: Live Server no VS Code)
4. **Valide os arquivos JSON** antes de salvar (use um validador online)
5. **Otimize as imagens** antes de adicionar (reduza o tamanho do arquivo)
6. **Mantenha backup** dos arquivos originais antes de fazer alterações

---

## 🆘 Precisa de Ajuda?

- Consulte o `README.md` para instruções detalhadas
- Verifique o console do navegador (F12) para erros JavaScript
- Valide arquivos JSON em: https://jsonlint.com/
- Teste responsividade em: https://responsivechecker.net/

---

**Última atualização:** Site base implementado e funcional
**Status geral:** 🟡 70% completo - Faltam principalmente conteúdo e imagens

