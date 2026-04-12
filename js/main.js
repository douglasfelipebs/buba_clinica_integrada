/* ========================================
   Buba Clínica Integrada - JavaScript Principal
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
    
    // ========================================
    // Lightbox - Fotos clicáveis e visualizáveis
    // ========================================
    initLightbox();
    
});

// ========================================
// Lightbox para visualização de fotos
// ========================================
function initLightbox() {
    var lightboxEl = document.getElementById('photo-lightbox');
    if (!lightboxEl) {
        lightboxEl = document.createElement('div');
        lightboxEl.id = 'photo-lightbox';
        lightboxEl.className = 'lightbox-overlay';
        lightboxEl.innerHTML = '<button class="lightbox-prev" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>' +
            '<div class="lightbox-content">' +
            '<button class="lightbox-close" aria-label="Fechar">×</button>' +
            '<img src="" alt="">' +
            '<p class="lightbox-caption"></p>' +
            '</div>' +
            '<button class="lightbox-next" aria-label="Próxima"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>';
        document.body.appendChild(lightboxEl);
    }
    
    var overlay = lightboxEl;
    var img = lightboxEl.querySelector('.lightbox-content img');
    var caption = lightboxEl.querySelector('.lightbox-caption');
    var closeBtn = lightboxEl.querySelector('.lightbox-close');
    var prevBtn = lightboxEl.querySelector('.lightbox-prev');
    var nextBtn = lightboxEl.querySelector('.lightbox-next');
    
    var photos = [];
    var currentIndex = 0;
    
    function getPhotosFromPage() {
        var items = [];
        var selectors = '.gallery-item, .clinic-photo, .facility-gallery .gallery-item, .doctor-card, .doctor-profile-photo-trigger';
        document.querySelectorAll(selectors).forEach(function(el) {
            var photoImg = el.querySelector('img');
            if (photoImg && photoImg.src && photoImg.src.indexOf('data:') !== 0) {
                items.push({ src: photoImg.src, alt: photoImg.alt || '' });
            }
        });
        document.querySelectorAll('#reviews-container .card').forEach(function(card) {
            var reviewImg = card.querySelector('img.card-img');
            if (reviewImg && reviewImg.src && reviewImg.src.indexOf('data:') !== 0) {
                items.push({ src: reviewImg.src, alt: reviewImg.alt || '' });
            }
        });
        return items;
    }
    
    function showPhoto(index) {
        if (index < 0 || index >= photos.length) return;
        currentIndex = index;
        var photo = photos[currentIndex];
        img.src = photo.src;
        img.alt = photo.alt;
        caption.textContent = photo.alt;
        caption.style.display = photo.alt ? 'block' : 'none';
        prevBtn.style.display = photos.length > 1 ? 'flex' : 'none';
        nextBtn.style.display = photos.length > 1 ? 'flex' : 'none';
        prevBtn.classList.toggle('hidden', index === 0);
        nextBtn.classList.toggle('hidden', index === photos.length - 1);
    }
    
    function openLightbox(src, alt) {
        if (!src || src.indexOf('data:') === 0) return;
        photos = getPhotosFromPage();
        var index = photos.findIndex(function(p) { return p.src === src; });
        if (index === -1) {
            photos = [{ src: src, alt: alt || '' }];
            index = 0;
        }
        currentIndex = index;
        showPhoto(currentIndex);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function showNext() {
        if (currentIndex < photos.length - 1) {
            showPhoto(currentIndex + 1);
        }
    }
    
    function showPrev() {
        if (currentIndex > 0) {
            showPhoto(currentIndex - 1);
        }
    }
    
    document.addEventListener('click', function(e) {
        var container = e.target.closest('.gallery-item, .clinic-photo, .facility-gallery .gallery-item');
        if (container) {
            var photoImg = container.querySelector('img');
            if (photoImg) {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(photoImg.src, photoImg.alt);
            }
        }
        var doctorCard = e.target.closest('.doctor-card');
        if (doctorCard && e.target.tagName === 'IMG' && e.target.classList.contains('card-img')) {
            var docImg = e.target;
            if (docImg.src && docImg.src.indexOf('data:') !== 0) {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(docImg.src, docImg.alt);
            }
        }
        var profilePhoto = e.target.closest('.doctor-profile-photo-trigger');
        if (profilePhoto && e.target.tagName === 'IMG' && e.target.classList.contains('doctor-profile__photo')) {
            var profImg = e.target;
            if (profImg.src && profImg.src.indexOf('data:') !== 0) {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(profImg.src, profImg.alt);
            }
        }
        if (e.target.closest('#reviews-container .card')) {
            var card = e.target.closest('#reviews-container .card');
            var reviewImg = card.querySelector('img.card-img');
            if (reviewImg) {
                e.preventDefault();
                e.stopPropagation();
                openLightbox(reviewImg.src, reviewImg.alt);
            }
        }
    });
    
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
    
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showPrev();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        showNext();
    });
    
    closeBtn.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', function(e) {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        } else if (e.key === 'ArrowRight') {
            showNext();
        }
    });
}

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

