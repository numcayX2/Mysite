const scrollElement = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY === 10) {
      scrollElement.classList.add('scrolled');
    } else {
      scrollElement.classList.remove('scrolled');
    }
  });