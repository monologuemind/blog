const m = [
  "/blog/_app/immutable/start-d02240c9.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-f257e088.js",
  "/blog/_app/immutable/assets/_layout-821fd373.css",
  "/blog/_app/immutable/components/error.svelte-091dc1cc.js",
  "/blog/_app/immutable/components/pages/_page.svelte-0bb309c9.js",
  "/blog/_app/immutable/components/pages/article/_page.svelte-5e18a80d.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-98d121e0.js",
  "/blog/_app/immutable/components/pages/edit/_page.svelte-be72c7cc.js",
  "/blog/_app/immutable/components/pages/playground/_page.svelte-f5b80f59.js",
  "/blog/_app/immutable/components/pages/selectors/_page.svelte-0645f3ff.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-029d6eb1.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-5af6fddd.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/modules/pages/edit/_page.ts-20ae29ff.js",
  "/blog/_app/immutable/modules/pages/playground/_page.ts-56ec0363.js",
  "/blog/_app/immutable/modules/pages/selectors/_page.ts-5addf49d.js",
  "/blog/_app/immutable/chunks/singletons-3ce68d27.js",
  "/blog/_app/immutable/chunks/paths-7e180b47.js",
  "/blog/_app/immutable/chunks/index-706dfd2d.js",
  "/blog/_app/immutable/chunks/index-7a3c47c2.js",
  "/blog/_app/immutable/chunks/index-90e9b6c2.js",
  "/blog/_app/immutable/chunks/data-8eb3fc9b.js",
  "/blog/_app/immutable/chunks/navigation-5802da58.js",
  "/blog/_app/immutable/chunks/_layout-a902f482.js",
  "/blog/_app/immutable/chunks/stores-6a1fdb1b.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/Markdown-b33ce313.js",
  "/blog/_app/immutable/chunks/_page-e3701de4.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/CodeMirror-9e002ec6.js",
  "/blog/_app/immutable/assets/CodeMirror-eaeaa541.css",
  "/blog/_app/immutable/chunks/_page-c0a2db5d.js",
  "/blog/_app/immutable/chunks/_page-02f63106.js",
  "/blog/_app/immutable/chunks/_page-3998c61e.js",
  "/blog/_app/immutable/chunks/0-ebfc5ba9.js",
  "/blog/_app/immutable/chunks/1-ebc3339f.js",
  "/blog/_app/immutable/chunks/2-31d19589.js",
  "/blog/_app/immutable/chunks/3-02dbd296.js",
  "/blog/_app/immutable/chunks/4-19622bfa.js",
  "/blog/_app/immutable/chunks/5-aff8081c.js",
  "/blog/_app/immutable/chunks/6-1f519f21.js",
  "/blog/_app/immutable/chunks/7-1d755470.js"
], i = [
  "/blog/.nojekyll",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/manifest.json",
  "/blog/markdown/test.md",
  "/blog/markdown/test2.md",
  "/blog/robots.txt"
], p = new Date().toDateString(), t = self, c = `cache${p}`, n = m.concat(i).filter((e) => !e.includes("jekyll")), u = new Set(n);
t.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((a) => {
      a == null || a.addAll(n);
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
  const a = await caches.open(`offline${p}`);
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
  const a = new URL(e.request.url), s = a.protocol.startsWith("http"), l = a.hostname === self.location.hostname && a.port !== self.location.port, o = a.host === self.location.host && u.has(a.pathname), b = e.request.cache === "only-if-cached" && !o;
  s && !l && !b && e.respondWith(
    (async () => o && await caches.match(e.request) || g(e.request))()
  );
});
