const CACHE_NAME = 'dredlabs-v2';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './images/logo.svg',
    './manifest.json',
    // Icons
    './images/icons/icon-72x72.png',
    './images/icons/icon-96x96.png',
    './images/icons/icon-128x128.png',
    './images/icons/icon-144x144.png',
    './images/icons/icon-152x152.png',
    './images/icons/icon-192x192.png',
    './images/icons/icon-384x384.png',
    './images/icons/icon-512x512.png',
    // Splash Screens
    './images/splash/splash-2048x2732.png', // iPad Pro 12.9"
    './images/splash/splash-1668x2388.png', // iPad Pro 11"
    './images/splash/splash-1536x2048.png', // iPad Mini/Air
    './images/splash/splash-1125x2436.png', // iPhone X/XS
    './images/splash/splash-828x1792.png',  // iPhone XR
    './images/splash/splash-750x1334.png',  // iPhone 8/SE
    './images/splash/splash-1242x2688.png', // iPhone XS Max
];

// Install event - cache all static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching app assets');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache new responses for next time
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseClone);
                        });
                }
                return response;
            })
            .catch(() => {
                // If network fails, try to get it from cache
                return caches.match(event.request)
                    .then(response => {
                        if (response) {
                            return response;
                        }
                        // If both network and cache fail, show offline message
                        return new Response('You are offline');
                    });
            })
    );
}); 