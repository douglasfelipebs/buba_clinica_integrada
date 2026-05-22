/* ========================================
   Buba Clínica Integrada - JavaScript Profissionais
   ======================================== */

// Dados da equipe - editados diretamente neste arquivo
// Para atualizar, edite os dados abaixo na constante doctorsData
const doctorsData = {
  "doctors": [
    {
      "id": 1,
      "name": "Dr. Lucas Gustavo Buba",
      "specialty": "Clínica Geral | Prótese Dentária",
      "specialtyTags": ["Clínica geral", "Prótese dentária"],
      "area": "odontologica",
      "conselhoDeClasse": "CRO-SC 25167",
      "photo": "images/doctors/dr_lucas.jpeg",
      "atendimentoTags": ["Presencial"],
      "description": "Cirurgião-dentista formado pela PUCPR, atua em clínica geral com foco em qualidade, segurança e atendimento humanizado. Natural de Itaiópolis, retorna à cidade com o compromisso de oferecer uma experiência odontológica diferenciada, aliando cuidado individualizado à constante atualização por meio de sua especialização em Prótese Dentária. Seu objetivo é proporcionar tratamentos eficazes, confortáveis e alinhados às necessidades de cada paciente.",
      "bioExtended": null,
      "formacao": [
        "Graduação em Odontologia — PUCPR (Pontifícia Universidade Católica do Paraná)",
        "Especialização em Prótese Dentária — aperfeiçoamento contínuo"
      ]
    },
    {
      "id": 2,
      "name": "Dra. Beatriz Peruzzolo Boldori",
      "specialty": "Clínica Geral | Tricologia",
      "specialtyTags": ["Clínica geral", "Tricologia"],
      "area": "medica",
      "conselhoDeClasse": "CRM 37995/SC",
      "photo": "images/doctors/dra_beatriz.jpeg",
      "atendimentoTags": ["Presencial", "Online"],
      "description": "Médica dedicada ao cuidado integral da saúde, com atuação em saúde capilar, medicina funcional integrativa, emagrecimento, longevidade e reposição hormonal. Seu trabalho é focado em identificar e tratar as causas dos desequilíbrios do organismo, promovendo bem-estar, qualidade de vida e resultados duradouros. Através de uma abordagem personalizada, busca auxiliar cada paciente a alcançar sua melhor versão de forma equilibrada e sustentável.",
      "bioExtended": null,
      "formacao": []
    },
    {
      "id": 3,
      "name": "Dra. Jessyca Buba",
      "specialty": "Bucomaxilofacial | Implantes | Próteses",
      "specialtyTags": ["Bucomaxilofacial", "Implantodontia", "Estética dental", "Ortodontia", "Prótese dentária", "DTM e HOF"],
      "area": "odontologica",
      "conselhoDeClasse": "CRO-PR 28861",
      "photo": "images/doctors/dra_jessyca.jpeg",
      "atendimentoTags": ["Presencial"],
      "description": "Com dedicação e paixão pela odontologia, oferece tratamentos odontológicos completos e personalizados para toda a família, aliando tecnologia de ponta a um atendimento humanizado e acolhedor. Acredita que um sorriso saudável é fundamental para o bem-estar e a autoestima; por isso, trabalha com foco na qualidade, utilizando materiais e técnicas modernas para garantir resultados duradouros e naturais.",
      "bioExtended": "Missão: proporcionar cuidados odontológicos de excelência, promovendo saúde bucal e devolvendo sorrisos com confiança, carinho e profissionalismo.",
      "formacao": []
    },
    {
      "id": 4,
      "name": "Dra. Maria Eduarda Kostecki",
      "specialty": "Cardiologia",
      "specialtyTags": ["Cardiologia"],
      "area": "medica",
      "conselhoDeClasse": "CRM 25104 | RQE 23036",
      "photo": "images/doctors/dra_eduarda.jpeg",
      "atendimentoTags": ["Presencial"],
      "description": "Médica especialista em Cardiologia, com formação sólida e atuação focada na prevenção, diagnóstico e tratamento das doenças cardiovasculares. Realiza acompanhamento completo com abordagem individualizada e baseada em evidências, auxiliando seus pacientes no controle de condições como hipertensão, dislipidemias, insuficiência cardíaca, doença coronariana e arritmias. Seu objetivo é promover saúde, qualidade de vida e segurança em cada etapa do cuidado.",
      "bioExtended": null,
      "formacao": [
        "Graduação em Medicina pela Universidade da Região de Joinville/SC - Univille",
        "Residência em Clínica Médica pelo Hospital Regional Hans Dieter Schmidt - Joinville/SC",
        "Residência em Cardiologia pelo Hospital Santa Casa de Curitiba/PR",
        "Título em Cardiologia pela Sociedade Brasileira de Cardiologia (SBC)"
      ]
    },
    {
      "id": 5,
      "name": "Dra. Ana Paula de Paula Correa",
      "specialty": "Pediatria | Alergia | Imunologia",
      "specialtyTags": ["Pediatria", "Alergia", "Imunologia", "Imunoterapia"],
      "area": "medica",
      "conselhoDeClasse": "CRM 41361/SC | RQE 30918",
      "photo": "images/doctors/dra_ana.jpeg",
      "atendimentoTags": ["Presencial"],
      "description": "Pediatra com atuação nas áreas de alergia, imunologia e imunoterapia. Realiza atendimento pediátrico com puericultura e urgências, avaliação e tratamento de alergias; testes alérgicos (prick test e patch test); imunoterapia e laserterapia, com foco no cuidado integral de crianças e adolescentes.",
      "bioExtended": null,
      "formacao": [
        "Pediatra com atuação nas áreas de alergia, imunologia e imunoterapia"
      ]
    },
    {
      "id": 6,
      "name": "Laura Wolf",
      "specialty": "Nutricionista | Terapeuta Integrativa",
      "specialtyTags": ["Nutrição", "Terapia integrativa", "Ayurveda"],
      "area": "medica",
      "conselhoDeClasse": "CRN-10 4886 | CRTH BR 14849",
      "photo": "images/doctors/dra_laura.jpeg",
      "tituloParaAgendamento": "a nutricionista",
      "atendimentoTags": ["Presencial"],
      "description": "Nutricionista e terapeuta integrativa com 12 anos de experiência em consultório, 9 anos em hospitais e clínicas multidisciplinares e 3 anos na indústria de suplementos. Dedica-se a guiar cada paciente em uma jornada de saúde, autoconhecimento e transformação. Seu objetivo é contribuir para que cada um descubra sua melhor versão, respeitando singularidades e promovendo mudanças que realmente façam sentido para a vida.",
      "bioExtended": "Minha jornada começou com a visão de que a verdadeira nutrição vai além das refeições e dos nutrientes. Acredito que é uma prática de vida integral, onde corpo, mente e espírito caminham juntos. É por isso que me dedico a oferecer uma experiência única baseada nos princípios do Ayurveda — o conhecimento da vida —, explorando práticas milenares para promover saúde, longevidade e bem-estar.",
      "formacao": [
        "Nutricionista — CRN-10 4886",
        "Terapeuta Integrativa — CRTH BR 14849"
      ]
    }
  ]
};

function getDoctorById(id) {
    const n = parseInt(id, 10);
    if (Number.isNaN(n)) return null;
    return doctorsData.doctors.find(d => d.id === n) || null;
}

let allDoctors = [];
let filteredDoctors = [];

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('doctors-container')) {
        loadDoctors();
        setupFilters();
        setupDoctorCardNavigation();
    }
});

// ========================================
// Carrega dados dos profissionais (diretamente do objeto JavaScript)
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
        
        console.log('Profissionais carregados:', allDoctors.length);
        
        renderDoctors(filteredDoctors);
    } catch (error) {
        console.error('Erro ao carregar profissionais:', error);
        console.error('Detalhes do erro:', error.message);
        
        if (container) {
            container.innerHTML = `
                <div class="loading" style="color: var(--color-text-light); padding: var(--spacing-xl); text-align: center;">
                    <p style="margin-bottom: var(--spacing-sm);">Erro ao carregar informações dos profissionais.</p>
                    <p style="font-size: var(--font-size-sm);">Por favor, verifique o console do navegador (F12) para mais detalhes.</p>
                </div>
            `;
        }
    }
}

// ========================================
// Renderiza os cards dos profissionais
// ========================================
function renderDoctors(doctors) {
    const container = document.getElementById('doctors-container');
    
    if (!container) {
        console.error('Container #doctors-container não encontrado para renderização!');
        return;
    }
    
    if (!doctors || doctors.length === 0) {
        container.innerHTML = '<div class="loading">Nenhum profissional encontrado para esta categoria.</div>';
        return;
    }
    
    console.log(`Renderizando ${doctors.length} profissional(is)`);
    
    container.innerHTML = doctors.map(doctor => {
        const atLabels = doctor.atendimentoTags && Array.isArray(doctor.atendimentoTags) && doctor.atendimentoTags.length
            ? doctor.atendimentoTags.filter(Boolean)
            : [];
        const atendimentoHtml = atLabels.length
            ? `<p class="doctor-card__atendimento" aria-label="Atendimento: ${atLabels.join(', ')}">${atLabels.map(tag => `<span>${String(tag)}</span>`).join('<span class="doctor-card__atendimento-sep" aria-hidden="true">·</span>')}</p>`
            : '';
        const photoHtml = doctor.photo
            ? `<img src="${doctor.photo}" 
                 alt="${doctor.name}" 
                 class="card-img"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23E8E8E8%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%236B6B6B%22 font-family=%22Arial%22 font-size=%2214%22%3ESem Foto%3C/text%3E%3C/svg%3E'">`
            : `<div class="card-img doctor-photo-placeholder" role="img" aria-label="${doctor.name} — sem foto"><span>Sem foto</span></div>`;
        return `
        <div class="card doctor-card doctor-card--navigate fade-in" data-doctor-id="${doctor.id}">
            ${photoHtml}
            <div class="card-content">
                <h3 class="doctor-name">${doctor.name}</h3>
                <p class="doctor-specialty">${doctor.specialty}</p>
                <p class="doctor-council">${doctor.conselhoDeClasse}</p>
                ${atendimentoHtml}
                <p class="card-text">${doctor.description}</p>
                <div class="doctor-card__profile-wrap">
                    <a href="medico.html?id=${doctor.id}" class="doctor-card__profile-link">Ver perfil completo</a>
                </div>
            </div>
        </div>
    `;
    }).join('');
    
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
            
            // Filtra os profissionais
            if (filter === 'todos') {
                filteredDoctors = [...allDoctors];
            } else {
                filteredDoctors = allDoctors.filter(doctor => doctor.area === filter);
            }
            
            console.log(`Filtro aplicado: ${filter}, Profissionais encontrados: ${filteredDoctors.length}`);
            
            // Renderiza os profissionais filtrados
            renderDoctors(filteredDoctors);
        });
    });
}

// ========================================
// Clique no card abre o perfil; foto e links não disparam navegação aqui
// ========================================
function setupDoctorCardNavigation() {
    const container = document.getElementById('doctors-container');
    if (!container) return;

    container.addEventListener('click', function (e) {
        const card = e.target.closest('.doctor-card');
        if (!card || !container.contains(card)) return;

        if (e.target.closest('img.card-img')) return;
        if (e.target.closest('a[href]')) return;

        const id = card.getAttribute('data-doctor-id');
        if (!id) return;

        window.location.href = 'medico.html?id=' + encodeURIComponent(id);
    });
}

