/* ========================================
   BUBA Clínica Integrada - JavaScript Médicos
   ======================================== */

// Dados dos médicos - editados diretamente neste arquivo
// Para atualizar, edite os dados abaixo na constante doctorsData
const doctorsData = {
  "doctors": [
    {
      "id": 1,
      "name": "Dr. Lucas G. Buba",
      "specialty": "Cirurgião Dentista",
      "area": "odontologica",
      "conselhoDeClasse": "CRO PR-XXXXX",
      "photo": "images/doctors/lucas-buba.jpg",
      "description": "Especialista em cirurgia oral, implantes dentários e tratamentos estéticos odontológicos. Dedicado a proporcionar o melhor cuidado e resultados aos pacientes."
    },
    {
      "id": 2,
      "name": "Dra. Beatriz Boldori",
      "specialty": "Médica Integrativa",
      "area": "medica",
      "conselhoDeClasse": "CRM PR-XXXXX",
      "photo": "images/doctors/beatriz-boldori.jpg",
      "description": "Médica especializada em medicina funcional e integrativa, focada em tratamentos personalizados que consideram o paciente como um todo. Também atende na área de saúde capilar."
    },
    {
      "id": 3,
      "name": "Dra. Jessyca Buba",
      "specialty": "Cirurgiã Dentista",
      "area": "odontologica",
      "conselhoDeClasse": "CRO PR-XXXXX",
      "photo": "images/doctors/jessyca-buba.jpg",
      "description": "Especialista em cirurgia de terceiros molares (sisos), implantes dentários e tratamento para bruxismo. Comprometida com o bem-estar e conforto dos pacientes."
    },
    {
      "id": 4,
      "name": "Dr. Exemplo Estético",
      "specialty": "Especialista em Estética",
      "area": "estetica",
      "conselhoDeClasse": "CRM PR-XXXXX",
      "photo": "images/doctors/exemplo-estetica.jpg",
      "description": "Profissional especializado em tratamentos estéticos não-invasivos e procedimentos de beleza. Exemplo de template que pode ser substituído por profissional real."
    }
  ]
};

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
// Carrega dados dos médicos (diretamente do objeto JavaScript)
// ========================================
function loadDoctors() {
    const container = document.getElementById('doctors-container');
    
    if (!container) {
        console.error('Container #doctors-container não encontrado!');
        return;
    }
    
    try {
        if (!doctorsData.doctors || !Array.isArray(doctorsData.doctors)) {
            throw new Error('Formato inválido dos dados: propriedade doctors não encontrada ou não é array');
        }
        
        allDoctors = doctorsData.doctors;
        filteredDoctors = [...allDoctors];
        
        console.log('Médicos carregados:', allDoctors.length);
        
        renderDoctors(filteredDoctors);
    } catch (error) {
        console.error('Erro ao carregar médicos:', error);
        console.error('Detalhes do erro:', error.message);
        
        if (container) {
            container.innerHTML = `
                <div class="loading" style="color: var(--color-text-light); padding: var(--spacing-xl); text-align: center;">
                    <p style="margin-bottom: var(--spacing-sm);">Erro ao carregar informações dos médicos.</p>
                    <p style="font-size: var(--font-size-sm);">Por favor, verifique o console do navegador (F12) para mais detalhes.</p>
                </div>
            `;
        }
    }
}

// ========================================
// Renderiza os cards dos médicos
// ========================================
function renderDoctors(doctors) {
    const container = document.getElementById('doctors-container');
    
    if (!container) {
        console.error('Container #doctors-container não encontrado para renderização!');
        return;
    }
    
    if (!doctors || doctors.length === 0) {
        container.innerHTML = '<div class="loading">Nenhum médico encontrado para esta categoria.</div>';
        return;
    }
    
    console.log(`Renderizando ${doctors.length} médico(s)`);
    
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
    
    if (filterButtons.length === 0) {
        console.warn('Botões de filtro não encontrados!');
        return;
    }
    
    console.log('Filtros configurados:', filterButtons.length);
    
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
            
            console.log(`Filtro aplicado: ${filter}, Médicos encontrados: ${filteredDoctors.length}`);
            
            // Renderiza os médicos filtrados
            renderDoctors(filteredDoctors);
        });
    });
}

