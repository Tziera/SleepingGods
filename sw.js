const CACHE = 'sleeping-gods-v5';
const FILES = [
  '/SleepingGods/index.html',
  '/SleepingGods/app.js',
  '/SleepingGods/style.css',
  '/SleepingGods/manifest.json',
  '/SleepingGods/icon-192.png',
  '/SleepingGods/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
