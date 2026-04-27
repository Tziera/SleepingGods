const CACHE = 'sleeping-gods-v10';
const FILES = [
  '/SleepingGods/index.html',
  '/SleepingGods/app.js',
  '/SleepingGods/style.css',
  '/SleepingGods/manifest.json',
  '/SleepingGods/images/icon-192.png',
  '/SleepingGods/images/icon-512.png',
  '/SleepingGods/images/the-wandering-sea.svg',
  '/SleepingGods/images/blood-ruins.jpg',
  '/SleepingGods/images/caldera-fortress.jpg',
  '/SleepingGods/images/coral-temple.jpg',
  '/SleepingGods/images/crypt-of-thorns.jpg',
  '/SleepingGods/images/desert-grotto.jpg',
  '/SleepingGods/images/fishbone-vault.jpg'
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
