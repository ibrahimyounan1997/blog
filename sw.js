self.addEventListener('install', (e) => { e.waitUntil( caches.open('fox-store').then((cache) => cache.addAll([
'https://cdn.statically.io/gh/iniy3/pwa-examples/master/js13kpwa/icons/icon-192.png',
'https://cdn.statically.io/gh/iniy3/pwa-examples/master/js13kpwa/icons/icon-512.png'
'https://testing-bog-2.blogspot.com/index.html',
])), ); });

self.addEventListener('fetch', (e) => { console.log(e.request.url);e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)),); });
