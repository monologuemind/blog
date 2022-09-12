const m = [
  "/blog/_app/immutable/start-f779a64c.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-6daafd8f.js",
  "/blog/_app/immutable/assets/_layout-b5e733de.css",
  "/blog/_app/immutable/components/error.svelte-f0488983.js",
  "/blog/_app/immutable/components/pages/_page.svelte-d71d4860.js",
  "/blog/_app/immutable/components/pages/article/_page.svelte-b8bdca31.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-af7bba45.js",
  "/blog/_app/immutable/components/pages/edit/_page.svelte-ec221535.js",
  "/blog/_app/immutable/components/pages/playground/_page.svelte-7b985f61.js",
  "/blog/_app/immutable/components/pages/selectors/_page.svelte-89bfe52f.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-f9952288.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-531272af.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/modules/pages/edit/_page.ts-0deaec14.js",
  "/blog/_app/immutable/modules/pages/playground/_page.ts-56ec0363.js",
  "/blog/_app/immutable/modules/pages/selectors/_page.ts-5addf49d.js",
  "/blog/_app/immutable/chunks/singletons-b90a3d93.js",
  "/blog/_app/immutable/chunks/paths-dc1081f2.js",
  "/blog/_app/immutable/chunks/index-35b12e3c.js",
  "/blog/_app/immutable/chunks/control-cb0e148f.js",
  "/blog/_app/immutable/chunks/index-eb803a30.js",
  "/blog/_app/immutable/chunks/data-36da4607.js",
  "/blog/_app/immutable/chunks/navigation-5927b467.js",
  "/blog/_app/immutable/chunks/page.state-b2fe2329.js",
  "/blog/_app/immutable/chunks/_layout-c1f6ce61.js",
  "/blog/_app/immutable/chunks/index-8e094bd2.js",
  "/blog/_app/immutable/chunks/stores-b24668e6.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/Markdown-d95da4a3.js",
  "/blog/_app/immutable/chunks/_page-8105092e.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/Edit-9572f06e.js",
  "/blog/_app/immutable/assets/Edit-eaeaa541.css",
  "/blog/_app/immutable/chunks/_page-e1bc7dad.js",
  "/blog/_app/immutable/chunks/_page-02f63106.js",
  "/blog/_app/immutable/chunks/_page-3998c61e.js",
  "/blog/_app/immutable/chunks/0-477979e6.js",
  "/blog/_app/immutable/chunks/1-b778fc68.js",
  "/blog/_app/immutable/chunks/2-cbb25ff7.js",
  "/blog/_app/immutable/chunks/3-8ecb0557.js",
  "/blog/_app/immutable/chunks/4-ca980daf.js",
  "/blog/_app/immutable/chunks/5-6e8661a8.js",
  "/blog/_app/immutable/chunks/6-fcd116b0.js",
  "/blog/_app/immutable/chunks/7-ad822c54.js"
], i = [
  "/blog/.nojekyll",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/manifest.json",
  "/blog/markdown/test.md",
  "/blog/markdown/test2.md",
  "/blog/robots.txt"
], p = new Date().toDateString(), t = self, c = `cache${p}`, b = m.concat(i).filter((a) => !a.includes("jekyll")), u = new Set(b);
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
  const e = await caches.open(`offline${p}`);
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
  const e = new URL(a.request.url), s = e.protocol.startsWith("http"), l = e.hostname === self.location.hostname && e.port !== self.location.port, o = e.host === self.location.host && u.has(e.pathname), n = a.request.cache === "only-if-cached" && !o;
  s && !l && !n && a.respondWith(
    (async () => o && await caches.match(a.request) || g(a.request))()
  );
});
