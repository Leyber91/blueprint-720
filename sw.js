/* Blueprint 720 service worker 80ef944e79c9: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-80ef944e79c9";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-N7h3ApAB.js","/blueprint-720/assets/Badge-CoeFL-y8.js","/blueprint-720/assets/Badge-hCYbqMdH.css","/blueprint-720/assets/Breadcrumbs-CFFupHD4.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-CefOCaBi.css","/blueprint-720/assets/Card-D_LPuffx.js","/blueprint-720/assets/Checkbox-5b5OVRl1.css","/blueprint-720/assets/Checkbox-DziPJGCl.js","/blueprint-720/assets/CoursePage-Dz_jr_f0.js","/blueprint-720/assets/ExtraPage-cXP7HOgL.js","/blueprint-720/assets/FlashcardsHome-_4SAD1ys.js","/blueprint-720/assets/GuidePage-C0dHQJqq.js","/blueprint-720/assets/GuidesIndex-DGdSI-BG.js","/blueprint-720/assets/HomePage-BkNLELH0.css","/blueprint-720/assets/HomePage-ZXcXhyPA.js","/blueprint-720/assets/LabPage-DQrYrEBP.js","/blueprint-720/assets/LabsHome-CaiS54wB.js","/blueprint-720/assets/LessonPage-5L2E21zd.js","/blueprint-720/assets/LessonPage-CEA6-Ytw.css","/blueprint-720/assets/ModulePage-BgT0WczU.js","/blueprint-720/assets/Official-BYUINnRs.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/PageHeader-BzIWyVZj.js","/blueprint-720/assets/PageHeader-D076vPLK.css","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-v0T9oJQB.js","/blueprint-720/assets/PracticeHub-BhT2d-0j.css","/blueprint-720/assets/PracticeHub-DIzHWhvj.js","/blueprint-720/assets/ProgressBar-C8gq4ge1.css","/blueprint-720/assets/ProgressBar-DcuKCuDZ.js","/blueprint-720/assets/ProgressPage-BjeSZWYg.css","/blueprint-720/assets/ProgressPage-CcA8YSUW.js","/blueprint-720/assets/Results-CJb7EQgI.js","/blueprint-720/assets/Results-UWPIw6Y7.css","/blueprint-720/assets/Review-k1fHuUwD.js","/blueprint-720/assets/Segmented-BsLv-DXM.js","/blueprint-720/assets/Segmented-BvJseo43.css","/blueprint-720/assets/SessionRunner-B3IcVATi.js","/blueprint-720/assets/SessionRunner-Cd2v1s16.css","/blueprint-720/assets/SettingsPage-9EIJD09Y.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-ChbkQQ3P.css","/blueprint-720/assets/StatTile-DcXXl-0s.js","/blueprint-720/assets/StatusChip-Cnwh4hYi.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/chevron-right-BMtMTBpc.js","/blueprint-720/assets/clock-BkIgzyBZ.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/eye-CCEPWxHW.js","/blueprint-720/assets/file-text-CZ4S9XND.js","/blueprint-720/assets/flashcards-CM834Jxp.css","/blueprint-720/assets/flashcards.module-0zVqzJIn.js","/blueprint-720/assets/graduation-cap-DcBXmRwY.js","/blueprint-720/assets/index-Dyta688V.js","/blueprint-720/assets/index-QjmlNw-3.css","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/link-2-B9PkqFp7.js","/blueprint-720/assets/list-checks-BmohGdjL.js","/blueprint-720/assets/map-D1h_ygwN.js","/blueprint-720/assets/official-Df-ADiNS.js","/blueprint-720/assets/play-C_D-f2Su.js","/blueprint-720/assets/printer-DyCzWR8_.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-3xUaFJgs.js","/blueprint-720/assets/rotate-ccw-clock-DiQMqNZR.js","/blueprint-720/assets/shared-DbgwA_8B.js","/blueprint-720/assets/shared-DyzYNkaF.js","/blueprint-720/assets/timer-XwIBhdxl.js","/blueprint-720/assets/useScrollSpy-O_2nP_Y4.css","/blueprint-720/assets/useScrollSpy-pPFP75m6.js","/blueprint-720/assets/useSessions-C85OdQUS.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/manifest.webmanifest"];
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
