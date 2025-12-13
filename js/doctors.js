/* ========================================
   BUBA Clínica Integrada - JavaScript Médicos
   ======================================== */

let allDoctors = [];
let filteredDoctors = [];

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // Carrega os dados dos médicos
    loadDoctors();
    
    // Configura os filtros
    setupFilters();
    
});

// ========================================
// Carrega dados dos médicos do JSON
// ========================================
async function loadDoctors() {
    try {
        const response = await fetch('data/doctors.json');
        const data = await response.json();
        allDoctors = data.doctors;
        filteredDoctors = [...allDoctors];
        
        renderDoctors(filteredDoctors);
    } catch (error) {
        console.error('Erro ao carregar médicos:', error);
        document.getElementById('doctors-container').innerHTML = 
            '<div class="loading">Erro ao carregar informações dos médicos. Por favor, tente novamente mais tarde.</div>';
    }
}

// ========================================
// Renderiza os cards dos médicos
// ========================================
function renderDoctors(doctors) {
    const container = document.getElementById('doctors-container');
    
    if (!container) return;
    
    if (doctors.length === 0) {
        container.innerHTML = '<div class="loading">Nenhum médico encontrado para esta categoria.</div>';
        return;
    }
    
    container.innerHTML = doctors.map(doctor => `
        <div class="card doctor-card fade-in">
            <img src="${doctor.photo}" 
                 alt="${doctor.name}" 
                 class="card-img"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8E8E8%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236B6B6B%22 font-family=%22Arial%22 font-size=%2214%22%3ESem Foto%3C/text%3E%3C/svg%3E'">
            <div class="card-content">
                <h3 class="doctor-name">${doctor.name}</h3>
                <p class="doctor-specialty">${doctor.specialty}</p>
                <p class="doctor-council">${doctor.conselhoDeClasse}</p>
                <p class="card-text">${doctor.description}</p>
            </div>
        </div>
    `).join('');
    
    // Observa elementos para animação fade-in
    setTimeout(() => {
        document.querySelectorAll('#doctors-container .fade-in').forEach(el => {
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
// Configura os filtros por área
// ========================================
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove classe active de todos os botões
            filterButtons.forEach(b => b.classList.remove('active'));
            
            // Adiciona classe active ao botão clicado
            this.classList.add('active');
            
            // Obtém o filtro selecionado
            const filter = this.getAttribute('data-filter');
            
            // Filtra os médicos
            if (filter === 'todos') {
                filteredDoctors = [...allDoctors];
            } else {
                filteredDoctors = allDoctors.filter(doctor => doctor.area === filter);
            }
            
            // Renderiza os médicos filtrados
            renderDoctors(filteredDoctors);
        });
    });
}

