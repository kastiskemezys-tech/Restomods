(() => {
  const menu = document.getElementById('menu');
  const openBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.menu__close');
  if (!menu || !openBtn || !closeBtn) return;

  const setOpen = (open) => {
    menu.hidden = !open;
    openBtn.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) closeBtn.focus();
  };

  openBtn.addEventListener('click', () => setOpen(true));
  closeBtn.addEventListener('click', () => setOpen(false));
  menu.addEventListener('click', (e) => { if (e.target === menu) setOpen(false); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) setOpen(false); });
})();
