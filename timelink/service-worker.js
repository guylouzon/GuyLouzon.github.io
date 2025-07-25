self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('timelink-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/tl192.png',
        './icons/tl512.png'
        // Add other assets as needed
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});