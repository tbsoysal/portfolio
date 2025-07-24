// change heading color on viewed sections
const sections = document.querySelectorAll('.scroll-section');

const options = {
  threshold: 0.3
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const heading = entry.target.querySelector('h1');

    if (entry.isIntersecting) {
      window.alert('active now!');
      heading.classList.add('activeHeading');
    } else {
      heading.classList.remove('activeHeading');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));
