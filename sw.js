self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch (no complex offline caching for now)
  e.respondWith(fetch(e.request));
});
