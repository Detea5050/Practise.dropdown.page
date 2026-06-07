// Mobile menu toggle
const menuToggle = document.getElementById('open-menu');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');

if (menuToggle && mobileMenu && overlay) {

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('show');
    overlay.classList.add('show');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
  });


  function closeDropdown() {
    mobileMenu.classList.add('closing');

    setTimeout(() => {
      mobileMenu.classList.remove('show', 'closing');
      overlay.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }, 300);
  }


  if (closeMenu) closeMenu.addEventListener('click', closeDropdown);

  overlay.addEventListener('click', closeDropdown);

  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeDropdown);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
      closeDropdown();
    }
  });
}
