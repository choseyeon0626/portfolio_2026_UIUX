const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.site-nav a');
const revealItems = document.querySelectorAll('.reveal');
const parallaxItems = document.querySelectorAll('.parallax');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px',
});

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
            const isCurrent = link.getAttribute('href') === `#${currentId}`;
            link.classList.toggle('is-active', isCurrent);
        });
    });
}, {
    threshold: 0.45,
});

sections.forEach((section) => sectionObserver.observe(section));

const applyParallax = () => {
    if (window.innerWidth <= 560) {
        parallaxItems.forEach((item) => { item.style.transform = ''; });
        return;
    }
    const viewportHeight = window.innerHeight;
    parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const speed = Number(item.dataset.speed || 0.08);
        const offset = (rect.top - viewportHeight / 2) * speed;
        item.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
};

applyParallax();
window.addEventListener('scroll', applyParallax, { passive: true });
window.addEventListener('resize', applyParallax);
