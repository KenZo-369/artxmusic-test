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
window.matchMedia('(min-width: 1351px)').addEventListener('change', closeMenu);

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

const festivalVideos = [...document.querySelectorAll('[data-festival-video]')];
festivalVideos.forEach(video => {
  video.addEventListener('play', () => {
    festivalVideos.forEach(other => {
      if (other !== video) other.pause();
    });
  });
});

document.querySelector('[data-load-video]')?.addEventListener('click', event => {
  festivalVideos.forEach(video => video.pause());
  const shell = event.currentTarget.closest('.video-shell');
  const frame = document.createElement('iframe');
  frame.src = 'https://www.youtube-nocookie.com/embed/p3mfjIPnBfQ?autoplay=1&rel=0';
  frame.title = window.ArtXMusicLocale?.language === 'de' ? 'ArtXMusic Festival 2026 – Video' : 'ArtXMusic Festival 2026 — Video';
  frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  shell.replaceChildren(frame);
  frame.focus();
});

const lightbox = document.getElementById('photo-lightbox');
const photoButtons = [...document.querySelectorAll('[data-open-photo]')];
let photoIndex = 0;
function selectPhoto(index) {
  if (!lightbox || !photoButtons.length) return;
  photoIndex = (index + photoButtons.length) % photoButtons.length;
  const trigger = photoButtons[photoIndex];
  const source = trigger.querySelector('img');
  const image = lightbox.querySelector('[data-photo-image]');
  const caption = trigger.closest('figure')?.querySelector('[data-photo-label]');
  image.src = source.dataset.fullSrc || source.currentSrc || source.src;
  image.alt = source.alt;
  lightbox.querySelector('[data-photo-caption]').textContent = caption?.textContent || source.alt;
  lightbox.querySelector('[data-photo-counter]').textContent = `${String(photoIndex + 1).padStart(2, '0')} / ${String(photoButtons.length).padStart(2, '0')}`;
}
photoButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectPhoto(index);
    lightbox.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('[data-photo-prev]')?.addEventListener('click', () => selectPhoto(photoIndex - 1));
document.querySelector('[data-photo-next]')?.addEventListener('click', () => selectPhoto(photoIndex + 1));
lightbox?.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  selectPhoto(photoIndex + (event.key === 'ArrowRight' ? 1 : -1));
});
document.querySelector('[data-close-photo]')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', event => {
  if (event.target === lightbox) {
    const bounds = lightbox.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) lightbox.close();
  }
});
lightbox?.addEventListener('close', () => { document.body.style.overflow = ''; });

// Keep the static donation anchors aligned with the shared public URL.
try {
  const destination = new URL(window.ArtXMusicDonations?.url);
  if (destination.protocol === 'https:') {
    document.querySelectorAll('[data-donate]').forEach(link => {
      link.href = destination.href;
    });
  }
} catch (_) {}
