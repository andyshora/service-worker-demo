/**
 * This must be at the root of the domain
 * so the scope of the worker can handle the whole domain
 */
importScripts('js/polyfill/serviceworker-cache-polyfill.js');

// The files we want to cache
var urlsToCache = [
  '/vendor',
  '/img',
  '/css'
];

// example usage:
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});