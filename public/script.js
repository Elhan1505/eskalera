// Premium Landing Page Interactivity для Эскалера

document.addEventListener('DOMContentLoaded', function() {
  console.log('✨ Эскалера лендинг загружен');

  // Enable animations after JS loaded
  document.body.classList.add('js-loaded');

  // ===== Create Progress Bar =====
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  // Update progress bar on scroll
  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // ===== Scroll Animations =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // ===== Staggered Card Animations =====
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  // Animate cards on scroll
  const cards = [
    ...document.querySelectorAll('.stat-card'),
    ...document.querySelectorAll('.gallery-card'),
    ...document.querySelectorAll('.matrix-card'),
    ...document.querySelectorAll('.review-card'),
    ...document.querySelectorAll('.pricing-card')
  ];

  // Cards will be visible by default, animations handled by CSS
  cards.forEach(card => {
    cardObserver.observe(card);
  });

  // ===== Smooth Scroll for Anchor Links =====
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

  // ===== Calculator Interactivity =====
  const heightInput = document.querySelector('input[type="number"]');
  const materialSelect = document.querySelector('.form-select');
  const result = document.querySelector('.calculator-result');

  if (heightInput && materialSelect) {
    const updatePrice = () => {
      const height = parseFloat(heightInput.value) || 2.8;
      const material = materialSelect.value;

      let basePrice = 450000;
      if (material.includes('Ясень')) basePrice = 480000;
      if (material.includes('Бук')) basePrice = 420000;

      const finalPrice = Math.round(basePrice * (height / 2.8) / 10000) * 10000;

      if (result) {
        const priceElement = result.querySelector('strong');
        if (priceElement) {
          priceElement.textContent = `от ${finalPrice.toLocaleString('ru-RU')} ₽`;
        }
      }
    };

    heightInput.addEventListener('input', updatePrice);
    materialSelect.addEventListener('change', updatePrice);
  }

  // ===== Form Input Animations =====
  const inputs = document.querySelectorAll('.form-input, .form-select');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.01)';
    });

    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // ===== CTA Button Ripple Effect =====
  document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Add ripple animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ===== Parallax Effect for Hero Section =====
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      heroSection.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
  }

  // ===== Pricing Card Hover Effects =====
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.zIndex = '10';
      pricingCards.forEach(otherCard => {
        if (otherCard !== this) {
          otherCard.style.opacity = '0.7';
        }
      });
    });

    card.addEventListener('mouseleave', function() {
      this.style.zIndex = '1';
      pricingCards.forEach(otherCard => {
        otherCard.style.opacity = '1';
      });
    });
  });

  // ===== Stats Counter Animation =====
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = target + (element.textContent.includes('%') ? '%' : '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start) + (element.textContent.includes('%') ? '%' : '');
      }
    }, 16);
  };

  const statMetrics = document.querySelectorAll('.stat-metric');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        const text = entry.target.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
          const number = parseInt(match[1]);
          entry.target.textContent = '0' + (text.includes('%') ? '%' : '');
          setTimeout(() => animateCounter(entry.target, number), 200);
        }
      }
    });
  }, { threshold: 0.5 });

  statMetrics.forEach(metric => statsObserver.observe(metric));

  // ===== Live Activity Update (simulated) =====
  const liveActivity = document.querySelector('.live-activity');
  if (liveActivity) {
    setInterval(() => {
      const activities = [
        '🔴 Только что в поселке "Московский" установили лестницу #128',
        '🔴 Клиент из Пушкино заказал визуализацию',
        '🔴 Новый отзыв: "Лестница готова за 23 дня. Супер!"',
        '🔴 Мастер выехал на замер в Королёв'
      ];
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      liveActivity.querySelector('p').textContent = randomActivity;
    }, 10000);
  }

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.overflow = 'hidden';
      answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
    }
  });

  // ===== Form Validation =====
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const nameInput = contactForm.querySelector('input[type="text"]');
    const telInput = contactForm.querySelector('input[type="tel"]');
    const submitButton = contactForm.querySelector('.cta-primary');

    if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        let isValid = true;

        if (nameInput && nameInput.value.trim().length < 2) {
          nameInput.style.borderColor = '#ff6b6b';
          isValid = false;
          setTimeout(() => nameInput.style.borderColor = '', 2000);
        }

        if (telInput && telInput.value.trim().length < 10) {
          telInput.style.borderColor = '#ff6b6b';
          isValid = false;
          setTimeout(() => telInput.style.borderColor = '', 2000);
        }

        if (!isValid) {
          e.preventDefault();
          console.log('❌ Форма не заполнена');
        } else {
          console.log('✅ Форма отправлена');
        }
      });
    }
  }

  // ===== Progress Bar on Scroll =====
  const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 4px;
      background: linear-gradient(90deg, #4caf50, #ff6b6b);
      z-index: 9999;
      transition: width 0.1s ease;
      box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      progressBar.style.width = scrolled + '%';
    });
  };

  createProgressBar();

  // ===== Lazy Load Images =====
  const images = document.querySelectorAll('[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // ===== Performance Monitoring =====
  if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'navigation') {
          console.log('⚡ Page Load Time:', Math.round(entry.loadEventEnd - entry.fetchStart), 'ms');
        }
      });
    });
    perfObserver.observe({ entryTypes: ['navigation'] });
  }

  console.log('✨ Все интерактивные элементы активированы');
});
