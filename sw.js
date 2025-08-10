const CACHE = "nihongo-sprint-pro-v1";
const ASSETS = ["./","./index.html","./manifest.webmanifest","./sw.js","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install", e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?null:caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e=>{
  const req=e.request; const accept=req.headers.get("accept")||"";
  if(req.mode==="navigate" || accept.includes("text/html")){
    e.respondWith(fetch(req).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); return r; }).catch(()=>caches.match(req).then(m=>m||caches.match("./index.html"))));
  }else{
    e.respondWith(caches.match(req).then(m=>m||fetch(req).then(r=>{ const cp=r.clone(); caches.open(CACHE).then(c=>c.put(req,cp)); return r; })));
  }
});