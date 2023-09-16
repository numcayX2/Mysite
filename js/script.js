const scrollElement = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      scrollElement.classList.add('scrolled');
    } else {
      scrollElement.classList.remove('scrolled');
    }
  });