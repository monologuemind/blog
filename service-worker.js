const n = [
  "/blog/_app/immutable/start-b32c79f2.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-2a172a5f.js",
  "/blog/_app/immutable/assets/_layout-261401aa.css",
  "/blog/_app/immutable/components/error.svelte-d83dd5f5.js",
  "/blog/_app/immutable/components/pages/article/_layout.svelte-7c783a45.js",
  "/blog/_app/immutable/assets/_layout-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/_page.svelte-cb8c2f1b.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_edit/_page.svelte-b04d181d.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_playground/_page.svelte-c7e1ebb0.js",
  "/blog/_app/immutable/components/pages/_legacy_routes/_selectors/_page.svelte-09e7c7ef.js",
  "/blog/_app/immutable/components/pages/article/_page.svelte-11dccb59.js",
  "/blog/_app/immutable/assets/_page-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/article/extractors/_page.svelte-05fe0358.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-d19af1cd.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-3ebf59fb.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_edit/_page.ts-45b21a84.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_playground/_page.ts-00a9d2d9.js",
  "/blog/_app/immutable/modules/pages/_legacy_routes/_selectors/_page.ts-2df6f0c1.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-d6b1a2f4.js",
  "/blog/_app/immutable/modules/pages/article/extractors/_page.ts-5e771440.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/chunks/singletons-42794fdc.js",
  "/blog/_app/immutable/chunks/paths-14676dcd.js",
  "/blog/_app/immutable/chunks/index-dc0a15ca.js",
  "/blog/_app/immutable/chunks/control-c34e24e7.js",
  "/blog/_app/immutable/chunks/data-b44c116b.js",
  "/blog/_app/immutable/chunks/navigation-8866a37a.js",
  "/blog/_app/immutable/chunks/page.state-5d2d7002.js",
  "/blog/_app/immutable/chunks/_layout-c9e62361.js",
  "/blog/_app/immutable/chunks/index-7e17df3a.js",
  "/blog/_app/immutable/chunks/stores-10c01727.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/Edit-cdfb9dd6.js",
  "/blog/_app/immutable/assets/Edit-eaeaa541.css",
  "/blog/_app/immutable/chunks/Markdown-bca0cf85.js",
  "/blog/_app/immutable/chunks/H2-c3d7b268.js",
  "/blog/_app/immutable/chunks/_page-d8797f64.js",
  "/blog/_app/immutable/chunks/_page-379e80a7.js",
  "/blog/_app/immutable/chunks/_page-a27e1eb2.js",
  "/blog/_app/immutable/chunks/_page-8438084f.js",
  "/blog/_app/immutable/chunks/_page-ae7ad173.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/0-adbb1a3c.js",
  "/blog/_app/immutable/chunks/1-2d045b30.js",
  "/blog/_app/immutable/chunks/2-7b57d9e3.js",
  "/blog/_app/immutable/chunks/3-7cb0dfb9.js",
  "/blog/_app/immutable/chunks/4-f8688cda.js",
  "/blog/_app/immutable/chunks/5-d7fd9866.js",
  "/blog/_app/immutable/chunks/6-b2f48dee.js",
  "/blog/_app/immutable/chunks/7-78eac4cb.js",
  "/blog/_app/immutable/chunks/8-4ee5283c.js",
  "/blog/_app/immutable/chunks/9-04827661.js"
], u = [
  "/blog/.nojekyll",
  "/blog/code.css",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/manifest.json",
  "/blog/robots.txt"
], o = new Date().toDateString(), t = self, c = `cache${o}`, b = n.concat(u).filter((a) => !a.includes("jekyll")), i = new Set(b);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(c).then((e) => {
      e == null || e.addAll(b);
    }).then(() => {
      t.skipWaiting();
    })
  );
});
t.addEventListener("activate", (a) => {
  a.waitUntil(
    caches.keys().then(async (e) => {
      for (const s of e)
        s !== c && await caches.delete(s);
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
  const e = new URL(a.request.url), s = e.protocol.startsWith("http"), l = e.hostname === self.location.hostname && e.port !== self.location.port, p = e.host === self.location.host && i.has(e.pathname), m = a.request.cache === "only-if-cached" && !p;
  s && !l && !m && a.respondWith(
    (async () => p && await caches.match(a.request) || g(a.request))()
  );
});
