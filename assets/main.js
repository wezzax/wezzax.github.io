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

const sliderDots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

setInterval(() => {
  sliderDots[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % sliderDots.length;
  sliderDots[currentSlide].classList.add('active');
}, 3000);

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  this.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .case-card, .testimonial-card, .stat-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});