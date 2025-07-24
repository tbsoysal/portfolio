// change heading color on viewed sections
const sections = document.querySelectorAll('.section');

const options = {
  threshold: 0.4
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const heading = entry.target.querySelector('h1');

    if (entry.isIntersecting) {
      heading.classList.add('activeHeading');
    } else {
      heading.classList.remove('activeHeading');
    }
  });
}, options);

sections.forEach(section => observer.observe(section));


// scroll to sections without changing url (with #)
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

