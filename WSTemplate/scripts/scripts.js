function toggleMenu() {
    const nav = document.querySelector('.top-nav ul');
    nav.classList.toggle('show');
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.hash = "#";
  }
