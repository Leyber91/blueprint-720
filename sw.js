/* Blueprint 720 service worker c9a0dbf2386d: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-c9a0dbf2386d";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-ConpZ1L5.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-CLvf04rM.js","/blueprint-720/assets/Breadcrumbs-CAZDpxnP.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-D8F1qnjX.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-KvT4f6Au.js","/blueprint-720/assets/CoursePage-MMZUyKLL.js","/blueprint-720/assets/ExtraPage-CwYV-K3s.js","/blueprint-720/assets/FlashcardsHome-B_HtS3HE.js","/blueprint-720/assets/GuidePage-JBH0ogDx.js","/blueprint-720/assets/GuidesIndex-3H1ySId5.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-DKsLg6VS.js","/blueprint-720/assets/LabPage-C8OdT0FR.js","/blueprint-720/assets/LabsHome-UBbfE5Xx.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/LessonPage-veh8wJtN.js","/blueprint-720/assets/ModulePage-I4XA2dg7.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-eMEihgsT.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-DRR47cxC.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-P7SyFelp.js","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-Clw1zzRo.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-DCq3gTnE.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-lAzUKa3K.js","/blueprint-720/assets/ProgressRing-C1ceb3ve.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-B6QxEB3B.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/Results-BqbwdRF8.css","/blueprint-720/assets/Results-wffN0Ri1.js","/blueprint-720/assets/Review-DO-P4pvC.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-DZfsumMK.js","/blueprint-720/assets/SessionRunner-CaH_437r.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-C-BoNKj5.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-9FN-jvId.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatusChip-BeJeTmUC.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-CV9-cZw4.js","/blueprint-720/assets/chevron-right-CcscLNTg.js","/blueprint-720/assets/clock-BdiFKzuw.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-D8BzvDCP.js","/blueprint-720/assets/eye-CU9W8So9.js","/blueprint-720/assets/file-text-Wg6MJfbJ.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-DAlkTdZl.js","/blueprint-720/assets/gauge-EHETyjCr.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-C8n9Gx_z.js","/blueprint-720/assets/index-7iS_KnEZ.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-Bjgp22zw.js","/blueprint-720/assets/link-2-DIgKXCTL.js","/blueprint-720/assets/list-checks-BZhCdw4s.js","/blueprint-720/assets/map-D4-Z0ubq.js","/blueprint-720/assets/official-BMJHksUy.js","/blueprint-720/assets/play-hCvli9fn.js","/blueprint-720/assets/printer-n5W8o9Gb.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-B2K2thho.js","/blueprint-720/assets/rotate-ccw-clock-Br82O9BW.js","/blueprint-720/assets/sessions-ChabGBV1.js","/blueprint-720/assets/shared--F9LbOX3.js","/blueprint-720/assets/shared-vvjDS4N9.js","/blueprint-720/assets/sparkles-BoAbllFY.js","/blueprint-720/assets/timer-CG1F3Lq0.js","/blueprint-720/assets/useScrollSpy-B5CEBeRi.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useSessions-CWcgSn-7.js","/blueprint-720/assets/zap-D6UGtMNV.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
