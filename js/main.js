// ================================
// AOS 初期化
// ================================
AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    offset: 80
});

// ================================
// Typed.js
// ================================
new Typed('#typed', {
    strings: [
        '部屋が見つかる。',
        '暮らしが変わる。',
        '理想が叶う。',
    ],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
});

// ================================
// particles.js
// ================================
particlesJS('particles-js', {
    particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: '#c9a84c'},
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#c9a84c',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: false }
        }
    }
});

// ================================
// CountUp — Stats
// ================================
const statsSection = document.querySelector('.stats');

if (statsSection) {
  const countUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counts = document.querySelectorAll('.stats__count');
        counts.forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(target / (duration / 16));

          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              el.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              el.textContent = start.toLocaleString();
            }
          }, 16);
        });
        countUpObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });

  countUpObserver.observe(statsSection);
}

// ================================
// Swiper — Properties
// ================================
new Swiper('.properties__swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.properties__next',
        prevEl: '.properties__prev',
    },
    pagination: {
        el: '.properties__pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// ================================
// Swiper — Testimonials
// ================================
new Swiper('.testimonials__swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.testimonials__pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ================================
// FAQ Accordion
// ================================
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');

    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        faqItems.forEach(i => {
            i.classList.remove('is-open');
            i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
            item.classList.add('is-open');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// ================================
// Form Validation
// ================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Name
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
      nameError.textContent = 'お名前を入力してください';
      name.classList.add('is-error');
      isValid = false;
    } else {
      nameError.textContent = '';
      name.classList.remove('is-error');
    }

    // Email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      emailError.textContent = 'メールアドレスを入力してください';
      email.classList.add('is-error');
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      emailError.textContent = '正しいメールアドレスを入力してください';
      email.classList.add('is-error');
      isValid = false;
    } else {
      emailError.textContent = '';
      email.classList.remove('is-error');
    }

    // Area
    const area = document.getElementById('desiredArea');
    const areaError = document.getElementById('areaError');
    if (!area.value) {
      areaError.textContent = '希望エリアを選択してください';
      area.classList.add('is-error');
      isValid = false;
    } else {
      areaError.textContent = '';
      area.classList.remove('is-error');
    }

    // Message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
      messageError.textContent = 'ご相談内容を入力してください';
      message.classList.add('is-error');
      isValid = false;
    } else {
      messageError.textContent = '';
      message.classList.remove('is-error');
    }

    // Success
    if (isValid) {
      contactForm.reset();
      document.getElementById('contactSuccess').classList.add('is-visible');
    }
  });
}

// ================================
// Navbar Scroll
// ================================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ================================
// Navbar Hamburger
// ================================
const hamburger = document.querySelector('.navbar__hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
  });

  // Close menu when link clicked
  document.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });
}