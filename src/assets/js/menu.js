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
    else openBtn.focus();
  };

  openBtn.addEventListener('click', () => setOpen(true));
  closeBtn.addEventListener('click', () => setOpen(false));
  menu.addEventListener('click', (e) => { if (e.target === menu) setOpen(false); });
  window.addEventListener('keydown', (e) => {
    if (menu.hidden) return;
    if (e.key === 'Escape') { setOpen(false); return; }
    // Focus trap
    if (e.key === 'Tab') {
      const focusable = menu.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
