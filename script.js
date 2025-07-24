// change heading color on viewed sections
if ('POLL_INTERVAL' in IntersectionObserver.prototype) {
  IntersectionObserver.prototype.POLL_INTERVAL = 100;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const heading = entry.target.querySelector('h1');
    if (!heading) return;

    if (entry.isIntersecting) {
      heading.classList.add('activeHeading');
    } else {
      heading.classList.remove('activeHeading');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-section').forEach(section => {
  observer.observe(section);
});

