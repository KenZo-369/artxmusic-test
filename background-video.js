'use strict';

(() => {
  const videos = [...document.querySelectorAll('[data-background-video]')];
  const toggle = document.querySelector('[data-background-toggle]');
  if (!videos.length || !toggle) return;

  const pauseLabel = toggle.querySelector('[data-background-pause]');
  const playLabel = toggle.querySelector('[data-background-play]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const background = document.querySelector('.site-background [data-background-video]');
  const hero = document.querySelector('.hero-film [data-background-video]');
  const loaded = new WeakSet();
  let heroVisible = Boolean(hero);
  let requested = !reducedMotion.matches && !navigator.connection?.saveData;
  let resumeWhenVisible = false;

  videos.forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.playsInline = true;
  });

  function updateControl() {
    const playing = videos.some(video => !video.paused && !video.ended);
    pauseLabel.hidden = !playing;
    playLabel.hidden = playing;
  }

  function pauseVideos() {
    videos.forEach(video => video.pause());
  }

  function startVideo() {
    if (!requested || document.hidden) return;
    // Only the visible hero or the ambient background runs at a time.
    const active = hero && heroVisible ? hero : background || videos[0];
    videos.forEach(video => {
      if (video !== active) video.pause();
    });
    if (!loaded.has(active)) {
      active.querySelectorAll('source[data-src]').forEach(source => {
        source.src = source.dataset.src;
      });
      loaded.add(active);
      active.load();
    }
    active.muted = true;
    const playback = active.play();
    if (playback) playback.catch(updateControl);
  }

  videos.forEach(video => {
    video.addEventListener('play', updateControl);
    video.addEventListener('pause', updateControl);
    video.addEventListener('ended', updateControl);
    video.addEventListener('error', updateControl);
  });

  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    resumeWhenVisible = false;
    requested = !videos.some(video => !video.paused && !video.ended);
    if (requested) startVideo();
    else pauseVideos();
  });

  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      requested = false;
      resumeWhenVisible = false;
      pauseVideos();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      resumeWhenVisible = requested;
      pauseVideos();
    } else if (resumeWhenVisible && !reducedMotion.matches) {
      resumeWhenVisible = false;
      startVideo();
    }
  });

  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      startVideo();
    }, { threshold: 0.05 }).observe(hero);
  }

  updateControl();
  startVideo();
})();
