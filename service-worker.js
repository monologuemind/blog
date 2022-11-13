const i = [
  "/blog/_app/immutable/assets/rust_bg-dd0ebff1.wasm",
  "/blog/_app/immutable/start-7a7c27c3.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-5ec2e46e.js",
  "/blog/_app/immutable/assets/_layout-546f011d.css",
  "/blog/_app/immutable/components/error.svelte-79fab2d0.js",
  "/blog/_app/immutable/components/pages/article/_layout.svelte-0b94e8ae.js",
  "/blog/_app/immutable/assets/_layout-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/topics/_layout.svelte-d61deb26.js",
  "/blog/_app/immutable/components/pages/_page.svelte-670f1420.js",
  "/blog/_app/immutable/components/pages/article/dynamic-typing/_page.svelte-97f8cca6.js",
  "/blog/_app/immutable/components/pages/article/hidden/_page.svelte-aa2f4d32.js",
  "/blog/_app/immutable/assets/_page-73e8887f.css",
  "/blog/_app/immutable/components/pages/article/wasm-rust/_page.svelte-ef23bcd6.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-69d2d3a3.js",
  "/blog/_app/immutable/components/pages/topics/_page.svelte-507bcd9c.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-e714b1a1.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-0d67ef09.js",
  "/blog/_app/immutable/modules/pages/article/dynamic-typing/_page.ts-472cd466.js",
  "/blog/_app/immutable/modules/pages/article/hidden/_page.ts-74064b37.js",
  "/blog/_app/immutable/modules/pages/article/wasm-rust/_page.ts-9ef1c1d7.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/modules/pages/topics/_page.ts-e99dd96f.js",
  "/blog/_app/immutable/chunks/singletons-7413af87.js",
  "/blog/_app/immutable/chunks/paths-88cc51a0.js",
  "/blog/_app/immutable/chunks/index-db185f5b.js",
  "/blog/_app/immutable/chunks/control-38b853d4.js",
  "/blog/_app/immutable/chunks/index-73e68155.js",
  "/blog/_app/immutable/chunks/data-854333e4.js",
  "/blog/_app/immutable/chunks/compatability-4f501869.js",
  "/blog/_app/immutable/chunks/_layout-4e6b50b5.js",
  "/blog/_app/immutable/chunks/index-1458f7f0.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/_page-39d91d21.js",
  "/blog/_app/immutable/chunks/v4-7b84e476.js",
  "/blog/_app/immutable/chunks/Collapse-b4b1b797.js",
  "/blog/_app/immutable/chunks/_page-f2ab96f6.js",
  "/blog/_app/immutable/chunks/_page-4bb90914.js",
  "/blog/_app/immutable/chunks/_page-1c0e785b.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/_page-2b8e8cae.js",
  "/blog/_app/immutable/chunks/0-2c27f826.js",
  "/blog/_app/immutable/chunks/1-4483aa4b.js",
  "/blog/_app/immutable/chunks/2-0fbb6949.js",
  "/blog/_app/immutable/chunks/3-59edd73f.js",
  "/blog/_app/immutable/chunks/4-d417641e.js",
  "/blog/_app/immutable/chunks/5-024f251c.js",
  "/blog/_app/immutable/chunks/6-7bce4371.js",
  "/blog/_app/immutable/chunks/7-caa66cb4.js",
  "/blog/_app/immutable/chunks/8-b7c6aa0e.js",
  "/blog/_app/immutable/chunks/9-0c71a1bb.js",
  "/blog/_app/immutable/chunks/10-04493248.js"
], n = [
  "/blog/.nojekyll",
  "/blog/code.css",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/lib.rs",
  "/blog/manifest.json",
  "/blog/robots.txt",
  "/blog/rust.js",
  "/blog/rust_bg.wasm"
], o = new Date().toDateString(), t = self, b = `cache${o}`, c = i.concat(n).filter((a) => !a.includes("jekyll")), u = new Set(c);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(b).then((e) => {
      e == null || e.addAll(c);
    }).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== b && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function g(a) {
  const e = await caches.open(`offline${o}`);
  try {
    const s = await fetch(a);
    return e.put(a, s.clone()), s;
  } catch (s) {
    const l = await e.match(a);
    if (l)
      return l;
    throw s;
  }
}
t.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET" || a.request.headers.has("range"))
    return;
  const e = new URL(a.request.url), s = e.protocol.startsWith("http"), l = e.hostname === self.location.hostname && e.port !== self.location.port, p = e.host === self.location.host && u.has(e.pathname), m = a.request.cache === "only-if-cached" && !p;
  s && !l && !m && a.respondWith(
    (async () => p && await caches.match(a.request) || g(a.request))()
  );
});
