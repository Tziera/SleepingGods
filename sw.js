const CACHE = 'sleeping-gods-v20';
const FILES = [
  '/',
  '/index.html',
  '/app.js',
  '/style.css',
  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/the-wandering-sea.svg',
  '/images/blood-ruins.jpg',
  '/images/caldera-fortress.jpg',
  '/images/coral-temple.jpg',
  '/images/crypt-of-thorns.jpg',
  '/images/desert-grotto.jpg',
  '/images/fishbone-vault.jpg'
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
