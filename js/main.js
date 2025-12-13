/* ========================================
   BUBA Clínica Integrada - JavaScript Principal
   ======================================== */

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Menu Mobile
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Alterna ícone do menu (☰ / ✕)
            if (navLinks.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
    }
    
    // Fecha menu ao clicar em um link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '☰';
            }
        });
    });
    
    // Fecha menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navLinks.contains(event.target);
        const isClickOnToggle = menuToggle && menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '☰';
            }
        }
    });
    
    // ========================================
    // Header Sticky/Scroll Effect
    // ========================================
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // ========================================
    // Scroll Suave para Âncoras
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios
            if (href === '#' || href === '') {
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Animações on Scroll (Fade In)
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Remove observer após animação para performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observa todos os elementos com classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // Ativa Link Ativo no Menu
    // ========================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinksItems.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === '')) {
            link.classList.add('active');
        }
    });
    
    // ========================================
    // Previne comportamento padrão de links vazios
    // ========================================
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });
    
});

// ========================================
// Função auxiliar para formatar telefone
// ========================================
function formatPhone(phone) {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 11) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`;
    } else if (cleaned.length === 10) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`;
    }
    return phone;
}

