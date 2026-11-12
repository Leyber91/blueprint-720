/* Blueprint 720 service worker 0042881345fc: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-0042881345fc";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-D1lbt6AT.js","/blueprint-720/assets/Badge-BPnjZtbT.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-BxmyxhDO.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-D9KgrMdg.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-C3CZ9IYA.js","/blueprint-720/assets/CoursePage-C_SMfZG3.js","/blueprint-720/assets/ExtraPage-DapsgvJX.js","/blueprint-720/assets/FlashcardsHome-Bsc4pswi.js","/blueprint-720/assets/GuidePage-Bd2Kk3Il.js","/blueprint-720/assets/GuidesIndex-DESJZIqA.js","/blueprint-720/assets/HomePage-B-XOB2On.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-BOqgUes4.js","/blueprint-720/assets/LabsHome-DMclt5-V.js","/blueprint-720/assets/LessonPage-Btk105uP.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-C2a4BdNE.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-DI62PDR9.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-CsSP9khA.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-Df14HAu_.js","/blueprint-720/assets/PracticeHub-BFt7o2Oy.js","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-CBfc8n_7.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-D4p5yb4P.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-e3T9FLAz.js","/blueprint-720/assets/QuestionStrip-BojRUKFt.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/Results-Bpdys9ZY.js","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Review-Dcbj0t4s.js","/blueprint-720/assets/Segmented-BEs698v1.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-dIyB7Khg.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-D3kphy_d.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-DZ9BPBgk.js","/blueprint-720/assets/StatusChip-D9NzL4D1.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-Dxf4qLdw.js","/blueprint-720/assets/chevron-right-Cc1CbaO9.js","/blueprint-720/assets/clock-SKoTKKQv.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-l-UoUDem.js","/blueprint-720/assets/eye-BBzvYqP5.js","/blueprint-720/assets/file-text-rPgI_6xE.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-LeX8pkIv.js","/blueprint-720/assets/gauge-Arhmt8t5.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-Cf3y4GcX.js","/blueprint-720/assets/index-DepoMfpP.css","/blueprint-720/assets/index-pHOVq5Xx.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/link-2-cN2tW8hC.js","/blueprint-720/assets/list-checks-D_qZdeqw.js","/blueprint-720/assets/map-DPcPuMKe.js","/blueprint-720/assets/official-BCIuyAEQ.js","/blueprint-720/assets/play-By3g4bmN.js","/blueprint-720/assets/printer-vgoA_Aq3.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-DRRSTGGw.js","/blueprint-720/assets/rotate-ccw-clock-DIGeoSyo.js","/blueprint-720/assets/sessions-CKDp-Blx.js","/blueprint-720/assets/shared-BO2Z7nZr.js","/blueprint-720/assets/shared-ek5GoZPp.js","/blueprint-720/assets/sparkles-bAH1Yrnq.js","/blueprint-720/assets/timer-C99ixZf0.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-CpOtzpJ2.js","/blueprint-720/assets/useSessions-CPqxT9Ou.js","/blueprint-720/assets/zap-aL0NYYSB.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
