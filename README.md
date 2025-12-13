# BUBA Clínica Integrada - Site Institucional

Site institucional da BUBA Clínica Integrada, desenvolvido em HTML, CSS e JavaScript puro (sem dependências externas ou banco de dados).

## 📋 Estrutura do Projeto

```
BubaClinicaIntegrada/
├── index.html              # Página inicial
├── sobre.html              # Sobre a clínica
├── medicos.html            # Equipe médica
├── servicos.html           # Serviços oferecidos
├── planos.html             # Planos de saúde aceitos
├── historia.html           # História da casa
├── avaliacoes.html         # Avaliações e depoimentos
├── contato.html            # Informações de contato
├── css/
│   ├── style.css          # Estilos base e variáveis CSS
│   ├── components.css     # Componentes reutilizáveis
│   └── responsive.css     # Media queries responsivas
├── js/
│   ├── main.js            # JavaScript principal (navegação, menu)
│   ├── doctors.js         # Lógica de médicos e filtros
│   └── reviews.js         # Lógica de avaliações
├── data/
│   ├── doctors.json       # Dados dos médicos
│   ├── services.json      # Lista de serviços
│   ├── insurance.json     # Planos de saúde aceitos
│   └── reviews.json       # Avaliações dos pacientes
└── images/
    ├── logo/              # Logo da clínica
    ├── doctors/           # Fotos dos médicos
    └── clinic/            # Fotos da clínica/história
```

## 🎨 Identidade Visual

O site foi desenvolvido seguindo a identidade visual da clínica:

- **Cores Principais:**
  - Dourado/Bronze (#CD7F32, #B8860B)
  - Cinza Escuro (#2C2C2C)
  - Branco (#FFFFFF)
  - Cinza Claro (#F5F5F5)

- **Tipografia:**
  - Logo: Fonte serifada elegante (Playfair Display)
  - Títulos: Sans-serif bold (Montserrat)
  - Corpo: Sans-serif regular (Montserrat)

## 🚀 Como Usar

### Adicionar Logo

1. Adicione o arquivo da logo em `images/logo/logo.png`
2. O logo será exibido automaticamente no header de todas as páginas

### Atualizar Informações dos Médicos

Edite o arquivo `data/doctors.json`:

```json
{
  "doctors": [
    {
      "id": 1,
      "name": "Nome do Médico",
      "specialty": "Especialidade",
      "area": "medica|odontologica|estetica",
      "conselhoDeClasse": "CRM/CRO número",
      "photo": "images/doctors/foto.jpg",
      "description": "Descrição do profissional"
    }
  ]
}
```

**Campos:**
- `area`: Use "medica", "odontologica" ou "estetica"
- `photo`: Caminho relativo da foto (adicione as fotos em `images/doctors/`)
- `conselhoDeClasse`: Número do CRM, CRO ou outro conselho de classe

### Adicionar Fotos dos Médicos

1. Adicione as fotos em `images/doctors/`
2. Atualize o campo `photo` no `doctors.json` com o nome do arquivo

### Atualizar Serviços

Edite o arquivo `data/services.json`:

```json
{
  "services": [
    {
      "id": 1,
      "name": "Nome do Serviço",
      "area": "medica|odontologica|estetica",
      "description": "Descrição do serviço",
      "icon": "icon-name"
    }
  ]
}
```

### Atualizar Planos de Saúde

Edite o arquivo `data/insurance.json`:

```json
{
  "insurance": [
    {
      "id": 1,
      "name": "Nome do Plano",
      "category": "premium|intermediário|básico"
    }
  ]
}
```

### Adicionar Avaliações

Edite o arquivo `data/reviews.json`:

```json
{
  "reviews": [
    {
      "id": 1,
      "name": "Nome do Paciente",
      "area": "medica|odontologica|estetica",
      "rating": 5,
      "text": "Texto da avaliação",
      "photo": "images/reviews/foto.jpg"
    }
  ]
}
```

**Nota:** O campo `photo` é opcional. Se não tiver foto, deixe como string vazia `""`.

### Atualizar Informações de Contato

Edite diretamente o arquivo `contato.html` e atualize:

- Endereço completo
- Telefones
- Horário de funcionamento
- Link do Google Maps (iframe)

Para atualizar o mapa:

1. Acesse [Google Maps](https://www.google.com/maps)
2. Localize o endereço da clínica
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código iframe
5. Substitua o iframe em `contato.html`

### Personalizar Conteúdo das Páginas

- **História da Casa:** Edite `historia.html` e adicione fotos em `images/clinic/`
- **Sobre a Clínica:** Edite `sobre.html` para personalizar missão, visão e valores

## 🌐 Hospedagem

O site é totalmente estático e pode ser hospedado em:

- **GitHub Pages** (recomendado para repositórios públicos)
  1. Faça push do código para o GitHub
  2. Vá em Settings → Pages
  3. Selecione a branch main e a pasta raiz
  4. O site estará disponível em `https://seuusuario.github.io/BubaClinicaIntegrada/`

- **Netlify, Vercel, ou outros serviços estáticos**

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablets (768px - 1199px)
- Mobile (até 767px)

## 🔧 Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Variáveis CSS, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- JSON para dados dinâmicos
- Google Fonts (Playfair Display, Montserrat)

## 📝 Notas Importantes

1. **Sem informações sensíveis:** Não inclua informações sensíveis no código, pois o repositório é público
2. **Logo:** Adicione a logo em `images/logo/logo.png` para que seja exibida
3. **Fotos:** As fotos dos médicos devem ser adicionadas manualmente em `images/doctors/`
4. **Google Maps:** Atualize o iframe do mapa com o endereço real da clínica
5. **Telefones:** Os telefones já estão parcialmente preenchidos baseados nas imagens fornecidas

## 🎯 Funcionalidades

- ✅ Navegação multi-página
- ✅ Menu responsivo (hamburger no mobile)
- ✅ Header sticky ao rolar
- ✅ Scroll suave entre seções
- ✅ Animações on-scroll
- ✅ Filtros de médicos por área
- ✅ Filtros de avaliações por área
- ✅ Carregamento dinâmico de dados JSON
- ✅ Design responsivo mobile-first

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. Console do navegador (F12) para erros JavaScript
2. Se os arquivos JSON estão no formato correto
3. Se os caminhos das imagens estão corretos
4. Se o servidor está servindo os arquivos corretamente (requer servidor local para desenvolvimento)

## 🔄 Atualizações Futuras

- Adicionar formulário de contato (opcional)
- Integração com Google Analytics
- Sistema de agendamento online (opcional)

---

**Desenvolvido para BUBA Clínica Integrada**  
Medicina • Odontologia • Estética  
Itaiópolis - PR

