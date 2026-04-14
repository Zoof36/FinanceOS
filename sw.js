/* QTVIS Business OS — Service Worker v1.0
   Strategy: cache-first, network-update-in-background
   Bump CACHE_VER whenever you push an update to GitHub */
var CACHE_VER = 'my-os-v1.0';
var SHELL = ['./', './manifest.json', './sw.js', './icon.svg'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_VER).then(function(c) { return c.addAll(SHELL); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE_VER; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return clients.claim(); })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var network = fetch(e.request).then(function(res) {
        if (res.ok) {
          var copy = res.clone();
          caches.open(CACHE_VER).then(function(c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function() { return cached; });
      return cached || network;
    })
  );
});
