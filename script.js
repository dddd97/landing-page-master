const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    scrollTopButton.classList.remove('hidden');
  } else {
    scrollTopButton.classList.add('hidden');
  }
});

const btnScrollTop = document.getElementById('scroll-top');
btnScrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const toggleSwitch = document.querySelector('#toggle');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }    
});

const toggle = document.getElementById('toggle');
const indicator = document.getElementById('toggle-indicator');

toggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    indicator.classList.remove('translate-x-0');
    indicator.classList.add('translate-x-full');
  } else {
    indicator.classList.remove('translate-x-full');
    indicator.classList.add('translate-x-0');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
