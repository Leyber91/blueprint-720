/* Blueprint 720 service worker b4f959acbd7c: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-b4f959acbd7c";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-C2Ckk1sR.js","/blueprint-720/assets/Badge-DZ_xy-9T.js","/blueprint-720/assets/Badge-hCYbqMdH.css","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-k23G8FYj.js","/blueprint-720/assets/Card-C1KEpjOs.js","/blueprint-720/assets/Card-CefOCaBi.css","/blueprint-720/assets/Checkbox-5b5OVRl1.css","/blueprint-720/assets/Checkbox-B7dHh86y.js","/blueprint-720/assets/CoursePage-BPy0Y2DK.js","/blueprint-720/assets/ExtraPage-De1R1Xu6.js","/blueprint-720/assets/FlashcardsHome-CkD13Ysm.js","/blueprint-720/assets/GuidePage-C8naJIwN.js","/blueprint-720/assets/GuidesIndex-CS_AhPkx.js","/blueprint-720/assets/HomePage-B7coh761.js","/blueprint-720/assets/HomePage-BkNLELH0.css","/blueprint-720/assets/LabPage-BSUCdlkx.js","/blueprint-720/assets/LabsHome-CU40b1dp.js","/blueprint-720/assets/LessonPage-CEA6-Ytw.css","/blueprint-720/assets/LessonPage-EUq4YzbC.js","/blueprint-720/assets/ModulePage-D3SXWz6P.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-CmEJk2Iv.js","/blueprint-720/assets/PageHeader-D076vPLK.css","/blueprint-720/assets/PageHeader-DsX3RrGp.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-DBrVKXPP.js","/blueprint-720/assets/PracticeHub-BhT2d-0j.css","/blueprint-720/assets/PracticeHub-Ca-CT_uZ.js","/blueprint-720/assets/ProgressBar-C8gq4ge1.css","/blueprint-720/assets/ProgressBar-nL0Wt-A8.js","/blueprint-720/assets/ProgressPage-BjeSZWYg.css","/blueprint-720/assets/ProgressPage-D5fzPecc.js","/blueprint-720/assets/Results-Cw0eOQeB.js","/blueprint-720/assets/Results-UWPIw6Y7.css","/blueprint-720/assets/Review-DFFDY3G2.js","/blueprint-720/assets/Segmented-BkLlf4K6.js","/blueprint-720/assets/Segmented-BvJseo43.css","/blueprint-720/assets/SessionRunner-Cd2v1s16.css","/blueprint-720/assets/SessionRunner-mMOX8Fml.js","/blueprint-720/assets/SettingsPage-B29TROOP.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-BNSgCsRN.js","/blueprint-720/assets/StatTile-ChbkQQ3P.css","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-Zm9d-7rR.js","/blueprint-720/assets/chevron-right-CgXXCS7e.js","/blueprint-720/assets/clock-CyiRSx4K.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/eye-BDXXaBL-.js","/blueprint-720/assets/file-text-X6syTIXb.js","/blueprint-720/assets/flashcards-CM834Jxp.css","/blueprint-720/assets/flashcards.module-xrHKn2B8.js","/blueprint-720/assets/graduation-cap-9jGXp5sm.js","/blueprint-720/assets/index-QjmlNw-3.css","/blueprint-720/assets/index-cT9l12jq.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/link-2-B9Hb82ux.js","/blueprint-720/assets/list-checks-BxlHljYp.js","/blueprint-720/assets/map-BF8El3zR.js","/blueprint-720/assets/official-ec69bpKq.js","/blueprint-720/assets/play-DHRNhTCr.js","/blueprint-720/assets/printer-BNF8ctoL.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-CuTJbLLc.js","/blueprint-720/assets/rotate-ccw-clock-CxYjI6aC.js","/blueprint-720/assets/shared-Czp4hQPm.js","/blueprint-720/assets/shared-u7Oo-frC.js","/blueprint-720/assets/timer--1a2GbBR.js","/blueprint-720/assets/useScrollSpy-0YVDGYGr.js","/blueprint-720/assets/useScrollSpy-O_2nP_Y4.css","/blueprint-720/assets/useSessions-BmIRYqp3.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/manifest.webmanifest"];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith("b720-") && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;
  if (req.mode === "navigate") {
    // Network first, so a new version shows as soon as it's published; the cached shell offline.
    event.respondWith(fetch(req).catch(() => caches.match(BASE + "index.html", { ignoreSearch: true })));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(VERSION).then((cache) => cache.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
