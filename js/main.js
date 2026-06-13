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