/* Blueprint 720 service worker f0a2cdef418a: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-f0a2cdef418a";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-CceWEevY.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-C-4qtK8o.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-DcJZOjEg.js","/blueprint-720/assets/Card-3-hxyTZD.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BILpEvfj.js","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/CoursePage-Ce_EMjvJ.js","/blueprint-720/assets/ExtraPage-XxGLrfII.js","/blueprint-720/assets/FlashcardsHome-DrISagyf.js","/blueprint-720/assets/GuidePage-Dj94RN6T.js","/blueprint-720/assets/GuidesIndex-BQ_oKnij.js","/blueprint-720/assets/HomePage-BD6aQwXu.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-CAbp_SKx.js","/blueprint-720/assets/LabsHome-BfncbBS_.js","/blueprint-720/assets/LessonPage-BgsqF6tM.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-DRSm21HT.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-iX5j1xoK.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-vd-HMhLv.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-DQFiK1jE.js","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-CQfKxJNG.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-dxnbpMNs.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-UHudt8IG.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-DpbF3CxR.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-DqBkwPqt.js","/blueprint-720/assets/Results-8K0wZsQb.js","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Review-CYelquPC.js","/blueprint-720/assets/Segmented-BlX14uC1.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-CP_RAF7A.js","/blueprint-720/assets/SessionRunner-Dv3MdGQ_.css","/blueprint-720/assets/SettingsPage-CQBmbdqu.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-C04VUmLV.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-DfEILUU5.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-Bruj4Kdm.js","/blueprint-720/assets/chevron-right-Dw-jchTo.js","/blueprint-720/assets/clock-BCDy79ku.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-CtUskOXn.js","/blueprint-720/assets/eye-DCoMXMhi.js","/blueprint-720/assets/file-text-ClfHOJHL.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-C61ZftF-.js","/blueprint-720/assets/gauge-BInIY78N.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-ZJnMUqZk.js","/blueprint-720/assets/index-0IPycSqn.css","/blueprint-720/assets/index-0qZ0DBzy.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-CXW0zoNF.js","/blueprint-720/assets/link-2-BObhvEpF.js","/blueprint-720/assets/list-checks-VIPdARn0.js","/blueprint-720/assets/map-H40zH1pl.js","/blueprint-720/assets/official-J6c4u5xY.js","/blueprint-720/assets/play-DcqsEIwT.js","/blueprint-720/assets/printer-CVxUoP12.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-DXJoj1w2.js","/blueprint-720/assets/rotate-ccw-clock-Bmrs3_kp.js","/blueprint-720/assets/sessions-BVcKCRDq.js","/blueprint-720/assets/shared-B8f2SstU.js","/blueprint-720/assets/shared-DGaAF1ty.js","/blueprint-720/assets/sparkles-xKtkS5RN.js","/blueprint-720/assets/timer-D-FFzFqD.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-DY0_-sAZ.js","/blueprint-720/assets/useSessions-Dofa-f3C.js","/blueprint-720/assets/zap-D7FcajVS.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
