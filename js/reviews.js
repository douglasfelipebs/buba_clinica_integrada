/* ========================================
   BUBA Clínica Integrada - JavaScript Avaliações
   ======================================== */

// Dados das avaliações - editados diretamente neste arquivo
// Para atualizar, edite os dados abaixo na constante reviewsData
const reviewsData = {
  "reviews": [
    {
      "id": 1,
      "name": "Maria Silva",
      "area": "odontologica",
      "rating": 5,
      "text": "Excelente atendimento! O Dr. Lucas é muito atencioso e profissional. O tratamento foi feito com muito cuidado e carinho.",
      "photo": ""
    },
    {
      "id": 2,
      "name": "João Santos",
      "area": "medica",
      "rating": 5,
      "text": "A Dra. Beatriz transformou minha saúde. A abordagem integrativa fez toda a diferença no meu tratamento. Recomendo muito!",
      "photo": ""
    },
    {
      "id": 3,
      "name": "Ana Costa",
      "area": "odontologica",
      "rating": 5,
      "text": "Fiz cirurgia de siso com a Dra. Jessyca e foi perfeito! Sem dor, recuperação rápida. Equipe muito preparada.",
      "photo": ""
    },
    {
      "id": 4,
      "name": "Pedro Oliveira",
      "area": "odontologica",
      "rating": 5,
      "text": "Implante dentário realizado com sucesso. Profissionais de alto nível e ambiente muito acolhedor.",
      "photo": ""
    },
    {
      "id": 5,
      "name": "Carla Mendes",
      "area": "estetica",
      "rating": 5,
      "text": "Tratamentos estéticos de excelência! Resultados naturais e profissionais muito competentes.",
      "photo": ""
    },
    {
      "id": 6,
      "name": "Roberto Alves",
      "area": "medica",
      "rating": 5,
      "text": "Medicina funcional que realmente funciona! Saí da clínica entendendo melhor meu corpo e minha saúde.",
      "photo": ""
    }
  ]
};

let allReviews = [];
let filteredReviews = [];

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Carrega as avaliações
    loadReviews();
    
    // Configura os filtros (se existirem)
    setupReviewFilters();
    
});

// ========================================
// Carrega dados das avaliações (diretamente do objeto JavaScript)
// ========================================
function loadReviews() {
    const container = document.getElementById('reviews-container');
    
    if (!container) {
        console.error('Container #reviews-container não encontrado!');
        return;
    }
    
    try {
        if (!reviewsData.reviews || !Array.isArray(reviewsData.reviews)) {
            throw new Error('Formato inválido dos dados: propriedade reviews não encontrada ou não é array');
        }
        
        allReviews = reviewsData.reviews;
        filteredReviews = [...allReviews];
        
        console.log('Avaliações carregadas:', allReviews.length);
        
        renderReviews(filteredReviews);
    } catch (error) {
        console.error('Erro ao carregar avaliações:', error);
        if (container) {
            container.innerHTML = 
                '<div class="loading">Erro ao carregar avaliações. Por favor, verifique o console do navegador (F12).</div>';
        }
    }
}

// ========================================
// Renderiza os cards de avaliações
// ========================================
function renderReviews(reviews) {
    const container = document.getElementById('reviews-container');
    
    if (!container) return;
    
    if (reviews.length === 0) {
        container.innerHTML = '<div class="loading">Nenhuma avaliação encontrada para esta categoria.</div>';
        return;
    }
    
    container.innerHTML = reviews.map(review => `
        <div class="card fade-in">
            ${review.photo ? `
                <img src="${review.photo}" alt="${review.name}" class="card-img" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto var(--spacing-sm);">
            ` : ''}
            <div class="card-content" style="text-align: center;">
                <div class="rating">
                    ${renderStars(review.rating)}
                </div>
                <p class="card-text" style="font-style: italic; margin-bottom: var(--spacing-sm);">
                    "${review.text}"
                </p>
                <p class="card-title" style="margin-bottom: 0; font-size: var(--font-size-base);">
                    ${review.name}
                </p>
                <p style="color: var(--color-text-light); font-size: var(--font-size-sm); margin-top: var(--spacing-xs);">
                    ${getAreaName(review.area)}
                </p>
            </div>
        </div>
    `).join('');
    
    // Observa elementos para animação fade-in
    setTimeout(() => {
        document.querySelectorAll('#reviews-container .fade-in').forEach(el => {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(el);
        });
    }, 100);
}

// ========================================
// Renderiza as estrelas de avaliação
// ========================================
function renderStars(rating) {
    let starsHTML = '';
    const maxRating = 5;
    
    for (let i = 1; i <= maxRating; i++) {
        if (i <= rating) {
            starsHTML += '<span class="star">★</span>';
        } else {
            starsHTML += '<span class="star empty">★</span>';
        }
    }
    
    return starsHTML;
}

// ========================================
// Retorna o nome da área em português
// ========================================
function getAreaName(area) {
    const areaNames = {
        'medica': 'Área Médica',
        'odontologica': 'Área Odontológica',
        'estetica': 'Área Estética'
    };
    
    return areaNames[area] || area;
}

// ========================================
// Configura os filtros de avaliações (opcional)
// ========================================
function setupReviewFilters() {
    const filterButtons = document.querySelectorAll('.review-filter-btn');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove classe active de todos os botões
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            // Obtém o filtro selecionado
            const filter = this.getAttribute('data-filter');
            
            // Filtra as avaliações
            if (filter === 'todos') {
                filteredReviews = [...allReviews];
            } else {
                filteredReviews = allReviews.filter(review => review.area === filter);
            }
            
            // Renderiza as avaliações filtradas
            renderReviews(filteredReviews);
        });
    });
}

