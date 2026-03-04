// ===== PAWPRINT & CO. - MAIN JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initAnimatedCounters();
  initTestimonialCarousel();
  initTabs();
  initAccordions();
  initResourceCards();
  initContactForm();
  initFileUploadZone();
});

// ===== MOBILE MENU =====
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-overlay');

  if (!hamburger || !drawer || !overlay) return;

  function toggleMenu() {
    hamburger.classList.toggle('active');
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
    
    // Accessibility
    const isOpen = drawer.classList.contains('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    drawer.setAttribute('aria-hidden', !isOpen);
  }

  hamburger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  // Close on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('open')) toggleMenu();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) toggleMenu();
  });
}

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== ANIMATED COUNTERS =====
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = el.getAttribute('data-count');
  const suffix = el.getAttribute('data-suffix') || '';
  const prefix = el.getAttribute('data-prefix') || '';
  const isNumber = !isNaN(parseFloat(target));
  
  if (!isNumber) {
    el.textContent = target;
    return;
  }

  const targetNum = parseFloat(target);
  const isDecimal = target.includes('.');
  const duration = 2000;
  const steps = 60;
  const stepDuration = duration / steps;
  let current = 0;
  const increment = targetNum / steps;

  const timer = setInterval(() => {
    current += increment;
    if (current >= targetNum) {
      current = targetNum;
      clearInterval(timer);
    }
    const displayVal = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
    el.textContent = prefix + displayVal + suffix;
  }, stepDuration);
}

// ===== TESTIMONIAL CAROUSEL =====
function initTestimonialCarousel() {
  const wrapper = document.querySelector('.carousel-wrapper');
  if (!wrapper) return;

  const track = wrapper.querySelector('.carousel-track');
  const slides = wrapper.querySelectorAll('.carousel-slide');
  const prevBtn = wrapper.parentElement.querySelector('.carousel-prev');
  const nextBtn = wrapper.parentElement.querySelector('.carousel-next');
  const dots = wrapper.parentElement.querySelectorAll('.carousel-dot');

  if (!track || !slides.length) return;

  let currentIndex = 0;
  let autoplayInterval;
  const totalSlides = slides.length;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
      dot.setAttribute('aria-selected', i === currentIndex);
    });
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); prevSlide(); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); nextSlide(); startAutoplay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAutoplay(); goToSlide(i); startAutoplay(); });
  });

  // Pause on hover
  wrapper.addEventListener('mouseenter', stopAutoplay);
  wrapper.addEventListener('mouseleave', startAutoplay);

  // Keyboard navigation
  wrapper.setAttribute('tabindex', '0');
  wrapper.setAttribute('role', 'region');
  wrapper.setAttribute('aria-label', 'Testimonials carousel');
  wrapper.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { stopAutoplay(); prevSlide(); startAutoplay(); }
    if (e.key === 'ArrowRight') { stopAutoplay(); nextSlide(); startAutoplay(); }
  });

  startAutoplay();
}

// ===== TABS (Services Page) =====
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const targetEl = document.getElementById(target);
      if (targetEl) targetEl.classList.add('active');
    });

    // Keyboard navigation for tabs
    btn.addEventListener('keydown', (e) => {
      const tabs = Array.from(tabBtns);
      const index = tabs.indexOf(btn);
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = tabs[(index + 1) % tabs.length];
        next.click();
        next.focus();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = tabs[(index - 1 + tabs.length) % tabs.length];
        prev.click();
        prev.focus();
      }
    });
  });

  // Handle hash-based navigation
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchingBtn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
    if (matchingBtn) {
      matchingBtn.click();
      setTimeout(() => {
        document.querySelector('.tabs-container')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}

// ===== ACCORDION (Mobile Services) =====
function initAccordions() {
  const headers = document.querySelectorAll('.accordion-header');
  if (!headers.length) return;

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const target = header.getAttribute('data-accordion');
      const content = document.querySelector(`.accordion-content[data-accordion="${target}"]`);
      
      const isActive = header.classList.contains('active');

      // Close all
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        header.classList.add('active');
        if (content) content.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      } else {
        header.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// ===== RESOURCE CARDS (Expand/Collapse) =====
function initResourceCards() {
  const expandBtns = document.querySelectorAll('.expand-btn');
  if (!expandBtns.length) return;

  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-expand');
      const content = document.getElementById(target);

      btn.classList.toggle('active');
      if (content) content.classList.toggle('active');

      const isExpanded = btn.classList.contains('active');
      btn.setAttribute('aria-expanded', isExpanded);
      btn.querySelector('.expand-text').textContent = isExpanded ? 'Read Less' : 'Read More';
    });
  });
}

// ===== CONTACT FORM VALIDATION =====
function initContactForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
    form.querySelectorAll('.radio-error').forEach(el => el.style.display = 'none');

    // Validate required text/email/tel fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        const errorMsg = field.parentElement.querySelector('.error-message');
        if (errorMsg) errorMsg.style.display = 'block';
        isValid = false;
      }
    });

    // Validate email format
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value.trim())) {
        emailField.classList.add('error');
        const errorMsg = emailField.parentElement.querySelector('.error-message');
        if (errorMsg) {
          errorMsg.textContent = 'Please enter a valid email address';
          errorMsg.style.display = 'block';
        }
        isValid = false;
      }
    }

    // Validate species radio
    const speciesChecked = form.querySelector('input[name="species"]:checked');
    if (!speciesChecked) {
      const speciesError = form.querySelector('.species-error');
      if (speciesError) speciesError.style.display = 'block';
      isValid = false;
    }

    // Validate first visit radio
    const firstVisitChecked = form.querySelector('input[name="first-visit"]:checked');
    if (!firstVisitChecked) {
      const visitError = form.querySelector('.visit-error');
      if (visitError) visitError.style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      form.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) success.classList.add('show');
    } else {
      // Scroll to first error
      const firstError = form.querySelector('.error, .radio-error[style*="block"]');
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Live validation - remove error on input
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('error');
      const errorMsg = field.parentElement.querySelector('.error-message');
      if (errorMsg) errorMsg.style.display = 'none';
    });
  });
}

// ===== FILE UPLOAD ZONE (Visual Only) =====
function initFileUploadZone() {
  const zone = document.querySelector('.upload-zone');
  if (!zone) return;

  ['dragenter', 'dragover'].forEach(event => {
    zone.addEventListener(event, (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(event => {
    zone.addEventListener(event, (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
    });
  });

  zone.addEventListener('click', () => {
    const fileInput = zone.querySelector('input[type="file"]');
    if (fileInput) fileInput.click();
  });

  zone.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const fileInput = zone.querySelector('input[type="file"]');
      if (fileInput) fileInput.click();
    }
  });
}
