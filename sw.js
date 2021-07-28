// cash files
const cacheName = 'js13kPWA-v1'; const appShellFiles = [
'https://cdn.statically.io/gh/iniy3/pwa-examples/master/js13kpwa/icons/icon-192.png',
'https://cdn.statically.io/gh/iniy3/pwa-examples/master/js13kpwa/icons/icon-512.png'
'https://testing-bog-2.blogspot.com/index.html',
];


// Installing Service Worker
self.addEventListener('install', (e) => {console.log('[Service Worker] Install');e.waitUntil((async () => { const cache = await caches.open(cacheName); console.log('[Service Worker] Caching all: app shell and content'); await cache.addAll(contentToCache); })());  });

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => { e.respondWith((async () => { const r = await caches.match(e.request);  console.log(`[Service Worker] Fetching resource: ${e.request.url}`); if (r) return r;  const response = await fetch(e.request);  const cache = await caches.open(cacheName); console.log(`[Service Worker] Caching new resource: ${e.request.url}`); cache.put(e.request, response.clone()); return response; })());  });
