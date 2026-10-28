(() => {
  'use strict';
  const d = document, root = d.documentElement;
  const wide = matchMedia('(min-width:1000px)');
  d.querySelectorAll('[data-year]').forEach(e => { e.textContent = new Date().getFullYear(); });

  /* ---------- navigation (native hash links + CSS smooth scroll; no scroll maths) ---------- */
  const nav = d.getElementById('site-nav'), btn = d.querySelector('.nav-root'), list = d.getElementById('nav-list');
  if (nav && btn && list) {
    const links = [...list.querySelectorAll('a')];
    const setOpen = o => { list.classList.toggle('is-open', o); btn.setAttribute('aria-expanded', String(o)); };
    btn.addEventListener('click', () => {
      if (wide.matches) location.assign(btn.dataset.home || '#home');
      else setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    list.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    d.addEventListener('keydown', e => { if (e.key === 'Escape' && list.classList.contains('is-open')) { setOpen(false); btn.focus(); } });
    d.addEventListener('click', e => { if (!nav.contains(e.target)) setOpen(false); });

    // Desktop: Education + Certificates and About + Contact share one band; mobile: each has its own target.
    const grouped = { education: 'edu-band', certificates: 'edu-band', about: 'closing-band', contact: 'closing-band' };
    const targetId = a => { const id = a.hash.slice(1); return (wide.matches && grouped[id]) || id; };
    let queued = false;
    const update = () => {
      queued = false;
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
      const secs = [...new Set(links.map(targetId))].map(id => d.getElementById(id)).filter(Boolean);
      if (!secs.length) return;
      const line = (wide.matches ? 66 : 16) + 72; // just below where a nav click lands
      let cur = secs[0];
      secs.forEach(s => { if (s.getBoundingClientRect().top <= line) cur = s; });
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 4) cur = secs[secs.length - 1];
      links.forEach(a => {
        if (targetId(a) === cur.id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    addEventListener('load', queue);
    wide.addEventListener('change', () => { setOpen(false); queue(); });
    update();
  }

  /* ---------- scroll reveal ---------- */
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    try {
      const selectors = [
        '.sec-head', '.project-card', '.t-entry', '.edu-block > *', '.certs h2', '.cert-list li',
        '.skills h2', '.skills .aside', '.ledger > div', '.about > *', '.contact h2', '.contact dl > div',
        '.project-breadcrumb', '.cs-title', '.cs-actions', '.facts > div', '.cs-sec > h2',
        '.caps > li', '.notes > li', '.stack-block', '.gallery-intro > *', '.gallery-item', '.empty-panel', '.cs-end > *'
      ];
      const items = [...new Set(selectors.flatMap(s => [...d.querySelectorAll(s)]))];
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          en.target.classList.add('is-revealed');
          io.unobserve(en.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
      items.forEach((el, i) => {
        el.classList.add('motion-reveal');
        el.style.setProperty('--reveal-delay', `${Math.min(i % 5, 4) * 65}ms`);
        io.observe(el);
      });
      if (items.length) root.classList.add('has-motion-reveal'); // only after the observer is set up
    } catch (err) { /* fail open: content stays visible */ }
  }

  /* ---------- screenshot lightbox (native <dialog>) ---------- */
  const dlg = d.getElementById('lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    const items = [...d.querySelectorAll('.gallery-item')];
    const img = dlg.querySelector('.lb-img'), cap = dlg.querySelector('.lb-cap'), count = dlg.querySelector('.lb-count');
    let i = 0;
    const show = n => {
      i = (n + items.length) % items.length;
      const it = items[i];
      dlg.classList.toggle('is-wide', it.classList.contains('gallery-item-wide'));
      img.src = it.dataset.full; img.alt = it.dataset.cap;
      cap.textContent = it.dataset.cap; count.textContent = `${i + 1} / ${items.length}`;
    };
    items.forEach((it, n) => it.addEventListener('click', () => { show(n); dlg.showModal(); }));
    dlg.querySelector('.lb-prev').addEventListener('click', () => show(i - 1));
    dlg.querySelector('.lb-next').addEventListener('click', () => show(i + 1));
    dlg.querySelector('.lb-close').addEventListener('click', () => dlg.close());
    dlg.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') show(i - 1);
      if (e.key === 'ArrowRight') show(i + 1);
    });
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  }
})();
