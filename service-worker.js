const m = [
  "/blog/_app/immutable/start-45b27b04.js",
  "/blog/_app/immutable/components/pages/_layout.svelte-57aee412.js",
  "/blog/_app/immutable/assets/_layout-d7d6c277.css",
  "/blog/_app/immutable/components/error.svelte-28926ea7.js",
  "/blog/_app/immutable/components/pages/article/_layout.svelte-3f67cf0a.js",
  "/blog/_app/immutable/assets/_layout-6d1fb0d3.css",
  "/blog/_app/immutable/components/pages/_page.svelte-8c7e19a3.js",
  "/blog/_app/immutable/components/pages/article/_page.svelte-07d2007d.js",
  "/blog/_app/immutable/components/pages/article/dynamic-typing/_page.svelte-df5eb8c2.js",
  "/blog/_app/immutable/components/pages/article-list/_page.svelte-6f43a3cf.js",
  "/blog/_app/immutable/modules/pages/_layout.ts-5fc52d5a.js",
  "/blog/_app/immutable/modules/pages/_page.ts-6aba1f63.js",
  "/blog/_app/immutable/modules/pages/article/_page.ts-0d67ef09.js",
  "/blog/_app/immutable/modules/pages/article/dynamic-typing/_page.ts-472cd466.js",
  "/blog/_app/immutable/modules/pages/article-list/_page.ts-146aedd8.js",
  "/blog/_app/immutable/chunks/singletons-d215f441.js",
  "/blog/_app/immutable/chunks/paths-88cc51a0.js",
  "/blog/_app/immutable/chunks/index-372a785c.js",
  "/blog/_app/immutable/chunks/control-38b853d4.js",
  "/blog/_app/immutable/chunks/index-ffb74a66.js",
  "/blog/_app/immutable/chunks/data-d058cef2.js",
  "/blog/_app/immutable/chunks/compatability-560643da.js",
  "/blog/_app/immutable/chunks/_layout-637ef984.js",
  "/blog/_app/immutable/chunks/index-1458f7f0.js",
  "/blog/_app/immutable/chunks/_page-2d218a6f.js",
  "/blog/_app/immutable/chunks/_page-39d91d21.js",
  "/blog/_app/immutable/chunks/_page-f2ab96f6.js",
  "/blog/_app/immutable/chunks/_page-0735bfdf.js",
  "/blog/_app/immutable/chunks/0-d73914bb.js",
  "/blog/_app/immutable/chunks/1-80d44a2a.js",
  "/blog/_app/immutable/chunks/2-8c87d014.js",
  "/blog/_app/immutable/chunks/3-2d577b6d.js",
  "/blog/_app/immutable/chunks/4-f56c16ea.js",
  "/blog/_app/immutable/chunks/5-94b32e68.js",
  "/blog/_app/immutable/chunks/6-13ee8db9.js"
], b = [
  "/blog/.nojekyll",
  "/blog/code.css",
  "/blog/data.json",
  "/blog/favicon.ico",
  "/blog/favicon.png",
  "/blog/manifest.json",
  "/blog/robots.txt"
], p = new Date().toDateString(), t = self, c = `cache${p}`, n = m.concat(b).filter((a) => !a.includes("jekyll")), u = new Set(n);
t.addEventListener("install", (a) => {
  a.waitUntil(
    caches.open(c).then((e) => {
      e == null || e.addAll(n);
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
  const e = new URL(a.request.url), s = e.protocol.startsWith("http"), l = e.hostname === self.location.hostname && e.port !== self.location.port, o = e.host === self.location.host && u.has(e.pathname), i = a.request.cache === "only-if-cached" && !o;
  s && !l && !i && a.respondWith(
    (async () => o && await caches.match(a.request) || g(a.request))()
  );
});
