const CACHE_NAME = 'mybudget-v1';
const ASSETS = [
  '.',
  '.index.html',
  'httpscdn.jsdelivr.netnpm@tablericons-webfont@latesttabler-icons.min.css'
];

self.addEventListener('install', (e) = {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) = cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) = {
  e.respondWith(
    caches.match(e.request).then((res) = res  fetch(e.request))
  );
});