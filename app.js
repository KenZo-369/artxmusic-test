'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('is-open', !expanded);
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let target;
    if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') target = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = tabs.length - 1;
    if (target === undefined) return;
    event.preventDefault();
    selectTab(tabs[target], true);
  });
});
document.querySelector('[data-show-past]')?.addEventListener('click', () => selectTab(document.getElementById('tab-past'), true));
if (window.location.hash === '#vergangene-events') {
  const pastTab = document.getElementById('tab-past');
  if (pastTab) {
    selectTab(pastTab);
    document.getElementById('events').scrollIntoView();
  }
}

document.querySelector('[data-load-video]')?.addEventListener('click', event => {
  const shell = event.currentTarget.closest('.video-shell');
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/p3mfjIPnBfQ?autoplay=1&rel=0';
  frame.title = 'ArtXMusic Festival 2026 – Video';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  shell.replaceChildren(frame);
  frame.focus();
});

const lightbox = document.getElementById('photo-lightbox');
document.querySelector('[data-open-photo]')?.addEventListener('click', () => {
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
});
document.querySelector('[data-close-photo]')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  }
});
lightbox?.addEventListener('close', () => { document.body.style.overflow = ''; });
