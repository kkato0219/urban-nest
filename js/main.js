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

