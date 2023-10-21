window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.clientHeight;
    const scrollProgress = scrollTop / documentHeight;
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = scrollProgress * 100 + '%';
  });