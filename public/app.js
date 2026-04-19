// ===== FUTURISTIC JAVASCRIPT SYSTEM =====

// Particle System
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Scroll Effects with Performance Optimization
let lastScrollY = 0;
let ticking = false;

function handleScroll() {
  lastScrollY = window.scrollY;
  
  if (!ticking) {
    requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
}

function updateScrollEffects() {
  const topbar = document.getElementById('topbar');
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > 100) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
  
  ticking = false;
}

// Mobile Menu Toggle with Animation
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const burgerBtn = document.getElementById('burgerBtn');
  
  mobileMenu.classList.toggle('isOpen');
  burgerBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('isOpen'));
  
  // Add animation class
  if (mobileMenu.classList.contains('isOpen')) {
    mobileMenu.style.animation = 'slideDown 0.3s ease';
  }
}

// Intersection Observer for Fade-in Animations
function setupFadeInAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// Button Loading States with Enhanced UX
function setupButtonLoading() {
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.href) {
        const loadingSpan = this.querySelector('.loading');
        const originalText = this.querySelector('span:not(.loading)').textContent;
        
        if (loadingSpan) {
          loadingSpan.style.display = 'inline-block';
          this.querySelector('span:not(.loading)').textContent = 'Enviando...';
          
          // Add pulse animation
          this.style.animation = 'pulse 1s ease-in-out infinite';
          
          setTimeout(() => {
            loadingSpan.style.display = 'none';
            this.querySelector('span:not(.loading)').textContent = originalText;
            this.style.animation = '';
          }, 2000);
        }
      }
    });
  });
}

// Smooth Scroll for Navigation
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 3D Card Tilt Effect with Performance
function setupCardTilt() {
  const cards = document.querySelectorAll('.solutionCard, .projectCard');
  
  cards.forEach(card => {
    let ticking = false;
    
    card.addEventListener('mousemove', function(e) {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;
          
          this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
          ticking = false;
        });
        ticking = true;
      }
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      ticking = false;
    });
  });
}

// Modal System with Enhanced Animations
function setupModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = modal.querySelector('.modal__backdrop');
  const closeBtn = modal.querySelector('.modal__close');
  
  // Open modal function
  window.openModal = function(projectData) {
    modal.classList.add('isOpen');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Add content dynamically
    const modalContent = modal.querySelector('.modal__panel');
    modalContent.innerHTML = `
      <div class="modal__header">
        <div>
          <div class="modal__tagsRow">
            <span class="tag">${projectData.category}</span>
            <span class="statusPill">${projectData.status}</span>
          </div>
          <h3>${projectData.title}</h3>
        </div>
        <button class="iconBtn" type="button" aria-label="Cerrar">×</button>
      </div>
      <div class="modal__content">
        <div class="modal__imageWrap">
          <img src="${projectData.image}" alt="${projectData.title}" />
        </div>
        <div class="modal__info">
          <div class="metaList">
            <div><strong>Tipo:</strong> <span>${projectData.type}</span></div>
            <div><strong>Preview:</strong> <span>${projectData.previewType}</span></div>
          </div>
          <p>${projectData.description}</p>
          <div class="hero__actions hero__actions--column">
            <a class="btn btn--primary" href="${projectData.demoUrl}" target="_blank" rel="noopener">Abrir demo</a>
            <a class="btn btn--ghost" href="#" target="_blank" rel="noopener">Quiero algo así</a>
          </div>
        </div>
      </div>
    `;
    
    // Setup close button
    modal.querySelector('.iconBtn').addEventListener('click', closeModal);
  };
  
  // Close modal function
  function closeModal() {
    modal.classList.remove('isOpen');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  // Event listeners
  backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  
  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('isOpen')) {
      closeModal();
    }
  });
}

// Dynamic Content Loading
function loadProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  const projects = [
    {
      title: 'E-commerce Fashion',
      category: 'Tienda Online',
      status: 'Publicado',
      type: 'Web Profesional',
      previewType: 'Demo',
      description: 'Tienda online con catálogo dinámico y sistema de pagos integrado.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6f454?w=400&q=80',
      demoUrl: '#'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Sistema',
      status: 'Nuevo',
      type: 'Sistema Especial',
      previewType: 'Demo',
      description: 'Panel de administración con analytics y gestión de usuarios.',
      image: 'https://images.unsplash.com/photo-1551288049-be9daa4d6a6a?w=400&q=80',
      demoUrl: '#'
    },
    {
      title: 'Portfolio Creativo',
      category: 'Portfolio',
      status: 'Destacado',
      type: 'Landing Page',
      previewType: 'Demo',
      description: 'Sitio web para agencia de diseño con galería dinámica.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d9406dc5?w=400&q=80',
      demoUrl: '#'
    }
  ];

  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="projectCard fade-in" style="animation-delay: ${index * 0.1}s">
      <div class="projectCard__image">
        <img src="${project.image}" alt="${project.title}" />
      </div>
      <div class="projectCard__body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    </article>
  `).join('');
  
  // Add click handlers
  projectsGrid.querySelectorAll('.projectCard').forEach((card, index) => {
    card.addEventListener('click', () => {
      openModal(projects[index]);
    });
  });
}

// WhatsApp Integration
function setupWhatsApp() {
  const defaultNumber = '5491164499481';
  const message = 'Hola CIBORG 347, vi tus demos y quiero consultar por una web para mi marca o emprendimiento.';
  const whatsappUrl = `https://wa.me/${defaultNumber}?text=${encodeURIComponent(message)}`;
  
  document.querySelectorAll('#topWhatsAppBtn, #mobileWhatsAppBtn, #heroWhatsAppBtn, #finalWhatsAppBtn, #waFloat').forEach(btn => {
    if (btn) {
      btn.href = whatsappUrl;
      btn.target = '_blank';
      btn.rel = 'noopener';
    }
  });
}

// Performance Monitoring
function setupPerformanceMonitoring() {
  // Monitor scroll performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      // Log performance metrics
      console.log('Scroll performance check');
    }, 100);
  });
  
  // Monitor animation performance
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 16) {
        console.warn('Slow animation detected:', entry);
      }
    }
  });
  
  observer.observe({entryTypes: ['measure', 'paint']});
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', function() {
  // Create particles
  createParticles();
  
  // Setup all systems
  setupFadeInAnimations();
  setupButtonLoading();
  setupSmoothScroll();
  setupCardTilt();
  setupModal();
  setupWhatsApp();
  setupPerformanceMonitoring();
  
  // Load dynamic content
  setTimeout(loadProjects, 1000);
  
  // Event Listeners
  window.addEventListener('scroll', handleScroll);
  
  // Mobile menu
  const burgerBtn = document.getElementById('burgerBtn');
  if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMobileMenu);
  }
  
  // Close mobile menu when clicking links
  document.querySelectorAll('.mobileMenu a[data-close]').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('isOpen');
    });
  });
  
  // Add loading states to WhatsApp buttons
  document.querySelectorAll('.btn[href*="wa.me"]').forEach(btn => {
    btn.addEventListener('click', function() {
      this.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        this.style.animation = '';
      }, 500);
    });
  });
});

// Export functions for external use
window.CIBORG347 = {
  openModal,
  loadProjects,
  createParticles,
  setupCardTilt
};
