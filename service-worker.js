const n = [
  "/blog/_app/immutable/start-f5159b00.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-2a5bae3e.js",
  "/blog/_app/immutable/assets/_layout-261401aa.css",
  "/blog/_app/immutable/components/error.svelte-5dc10a4c.js",
  "/blog/_app/immutable/components/pages/article/_layout.svelte-7c783a45.js",
  "/blog/_app/immutable/assets/_layout-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/_page.svelte-cb8c2f1b.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_edit/_page.svelte-2d5883fc.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_playground/_page.svelte-c7ea520f.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_selectors/_page.svelte-721b1e5b.js",
  "/blog/_app/immutable/components/pages/article/_page.svelte-906ed1e9.js",
  "/blog/_app/immutable/assets/_page-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/article/extractors/_page.svelte-05fe0358.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-a9ca5433.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-1d166e16.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_edit/_page.ts-45b21a84.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_playground/_page.ts-00a9d2d9.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_selectors/_page.ts-2df6f0c1.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-d6b1a2f4.js",
  "/blog/_app/immutable/modules/pages/article/extractors/_page.ts-5e771440.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/chunks/singletons-ac5e3bf0.js",
  "/blog/_app/immutable/chunks/paths-b500ea22.js",
  "/blog/_app/immutable/chunks/index-dc0a15ca.js",
  "/blog/_app/immutable/chunks/control-c34e24e7.js",
  "/blog/_app/immutable/chunks/index-89a39cf6.js",
  "/blog/_app/immutable/chunks/data-8d72ffdb.js",
  "/blog/_app/immutable/chunks/navigation-04577e39.js",
  "/blog/_app/immutable/chunks/page.state-fa4099fe.js",
  "/blog/_app/immutable/chunks/_layout-202e13d4.js",
  "/blog/_app/immutable/chunks/index-7e17df3a.js",
  "/blog/_app/immutable/chunks/stores-067b2245.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/Edit-e63d5363.js",
  "/blog/_app/immutable/assets/Edit-eaeaa541.css",
  "/blog/_app/immutable/chunks/Markdown-ee0d7f9c.js",
  "/blog/_app/immutable/chunks/H2-c3d7b268.js",
  "/blog/_app/immutable/chunks/_page-d8797f64.js",
  "/blog/_app/immutable/chunks/_page-379e80a7.js",
  "/blog/_app/immutable/chunks/_page-a27e1eb2.js",
  "/blog/_app/immutable/chunks/_page-8438084f.js",
  "/blog/_app/immutable/chunks/_page-ae7ad173.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/0-fda987c4.js",
  "/blog/_app/immutable/chunks/1-f27e5403.js",
  "/blog/_app/immutable/chunks/2-7b57d9e3.js",
  "/blog/_app/immutable/chunks/3-7cb0dfb9.js",
  "/blog/_app/immutable/chunks/4-499b428d.js",
  "/blog/_app/immutable/chunks/5-1ea7c023.js",
  "/blog/_app/immutable/chunks/6-b3f5e908.js",
  "/blog/_app/immutable/chunks/7-6555a7bf.js",
  "/blog/_app/immutable/chunks/8-4ee5283c.js",
  "/blog/_app/immutable/chunks/9-e533f95e.js"
], u = [
  "/blog/.nojekyll",
  "/blog/code.css",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/manifest.json",
  "/blog/robots.txt"
], o = new Date().toDateString(), t = self, c = `cache${o}`, b = n.concat(u).filter((e) => !e.includes("jekyll")), i = new Set(b);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((a) => {
      a == null || a.addAll(b);
    }).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const s of a)
        s !== c && await caches.delete(s);
      t.clients.claim();
    })
  );
});
async function g(e) {
  const a = await caches.open(`offline${o}`);
  try {
    const s = await fetch(e);
    return a.put(e, s.clone()), s;
  } catch (s) {
    const l = await a.match(e);
    if (l)
      return l;
    throw s;
  }
}
t.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), l = a.hostname === self.location.hostname && a.port !== self.location.port, p = a.host === self.location.host && i.has(a.pathname), m = e.request.cache === "only-if-cached" && !p;
  s && !l && !m && e.respondWith(
    (async () => p && await caches.match(e.request) || g(e.request))()
  );
});
