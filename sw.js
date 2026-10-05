/* Blueprint 720 service worker fb25a86caaea: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-fb25a86caaea";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-onEYiS_A.js","/blueprint-720/assets/Badge--S_a3uPP.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-CkYphje-.js","/blueprint-720/assets/Card-BlQxbiCJ.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BC9_Yw42.js","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/CoursePage-DXhZqmTO.js","/blueprint-720/assets/ExtraPage-BgwOAtC2.js","/blueprint-720/assets/FlashcardsHome-DFWJP_Y3.js","/blueprint-720/assets/GuidePage-xLUct5XJ.js","/blueprint-720/assets/GuidesIndex-Dify9thy.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-D-Wok0wh.js","/blueprint-720/assets/LabPage-ClmXldSY.js","/blueprint-720/assets/LabsHome-CUAxJ1I2.js","/blueprint-720/assets/LessonPage-BUY0jSS_.js","/blueprint-720/assets/LessonPage-H8Y2u72A.css","/blueprint-720/assets/ModulePage-Bdzpxy5b.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-QP9coKYs.js","/blueprint-720/assets/PageHeader-BFVMjUFd.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-DeBhICmx.js","/blueprint-720/assets/PracticeHub-B0DTxALf.js","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-Cxq6AAZ9.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-JIO0ZZWf.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-Cr4WZxd5.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-fqf4CAaM.js","/blueprint-720/assets/Results-Df0tgLtx.css","/blueprint-720/assets/Results-Dq8nsUgc.js","/blueprint-720/assets/Review-C9ESgIs9.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-CGNTqHFK.js","/blueprint-720/assets/SessionRunner-BB_7fcWL.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-DGsxWHtj.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-D2LAlYCb.js","/blueprint-720/assets/StatusChip-DL6PDBnq.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-mnx0wiht.js","/blueprint-720/assets/chevron-right-CDJPoYd8.js","/blueprint-720/assets/clock-DQo31u7P.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-B6Ww8fwA.js","/blueprint-720/assets/eye-BfMfm3F4.js","/blueprint-720/assets/file-text-ZG31qXsp.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-ChlcJFiM.js","/blueprint-720/assets/gauge-BtGJwPtL.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-CJH10_H9.js","/blueprint-720/assets/index-AW7l-kfp.js","/blueprint-720/assets/index-DLsRrhaO.css","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/link-2-Dh1wi6oi.js","/blueprint-720/assets/list-checks-DICe8IGk.js","/blueprint-720/assets/map-BDpa6npL.js","/blueprint-720/assets/official--tcmf069.js","/blueprint-720/assets/play-BRz9D4CF.js","/blueprint-720/assets/printer-DGEQADM5.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-BL17UGwY.js","/blueprint-720/assets/rotate-ccw-clock-BfYOyBOY.js","/blueprint-720/assets/sessions-Xp8yorEM.js","/blueprint-720/assets/shared-BEz7tBXa.js","/blueprint-720/assets/shared-BHUrsAYB.js","/blueprint-720/assets/sparkles-J3gHjYsd.js","/blueprint-720/assets/timer-C66GRLPL.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-RL2vYJBs.js","/blueprint-720/assets/useSessions-D1Yyytas.js","/blueprint-720/assets/zap-DcZ2zTln.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/manifest.webmanifest"];
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
