/* Đập Chuột – lưu game trên máy để mở được cả khi không có mạng.
   Trang game: ưu tiên bản mới trên mạng (có mạng là cập nhật ngay), mất mạng thì dùng bản đã lưu.
   Hình ảnh/biểu tượng: dùng bản đã lưu. Dữ liệu Google Sheets không đi qua đây (game tự lưu riêng). */
const CACHE = 'dapchuot-v1';
const CORE = ['./', './index.html', './manifest.json', './icon.png', './icon-192.png', './icon-512.png',
  './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('dapchuot-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
function withTimeout(p, ms){ return new Promise((res, rej) => { const t = setTimeout(() => rej(new Error('timeout')), ms); p.then(v => { clearTimeout(t); res(v); }, err => { clearTimeout(t); rej(err); }); }); }
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('/index.html');
  if (isPage){
    e.respondWith(withTimeout(fetch(req), 5000).then(res => {
      if (res && res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
      return res;
    }).catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res && res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
