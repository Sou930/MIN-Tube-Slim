// MIN-Tube-Slim Service Worker v1.3.0
const CACHE_NAME = 'min-tube-slim-v2';
const PRECACHE = [
  '/public/min-tube-slim.html',
  '/img/min-tube-pro.png',
];

// インストール時: 静的リソースをキャッシュ
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// 有効化時: 古いキャッシュを削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// フェッチ: キャッシュファースト → ネットワーク → オフラインフォールバック
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // 通知チェックAPIはキャッシュしない
  if (event.request.url.includes('/api/channel-latest')) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/');
          }
        });
    })
  );
});

// プッシュ通知ハンドラ
self.addEventListener('push', event => {
  if (!event.data) return;
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/img/min-tube-pro.png',
    badge: '/img/min-tube-pro.png',
    data: { url: data.url || '/' }
  });
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url || '/'));
});
