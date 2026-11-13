/* Blueprint 720 service worker 680d49039bb7: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-680d49039bb7";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-BX40Xc8k.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-Dhquyjhi.js","/blueprint-720/assets/Breadcrumbs-CJY4PUly.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-CESi8wGd.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-MGZ11lit.js","/blueprint-720/assets/CoursePage-DvGYdDIg.js","/blueprint-720/assets/ExtraPage-BZ1-0inz.js","/blueprint-720/assets/FlashcardsHome-DlhPvPWR.js","/blueprint-720/assets/GuidePage-BUa8Pkvf.js","/blueprint-720/assets/GuidesIndex-Co_kfEG9.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-srcXmO7k.js","/blueprint-720/assets/LabPage-CQpXGaXF.js","/blueprint-720/assets/LabsHome-BaJ7irJ0.js","/blueprint-720/assets/LessonPage-BxUcc_F-.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-COsQe-xZ.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-Dj7OfpoF.js","/blueprint-720/assets/PageHeader-BNpO-KRT.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PlanPage-D54KL39p.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PracticeHub-B0LMGc6o.js","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-C5LB_Hqv.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-D56sllmB.js","/blueprint-720/assets/ProgressRing-ChKvyLYJ.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-oEVhPyiL.js","/blueprint-720/assets/Results-Bd7im7Ze.js","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Review-pRzbPobF.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-DBshYH8p.js","/blueprint-720/assets/SessionRunner-CdWcSzk3.js","/blueprint-720/assets/SessionRunner-Dv3MdGQ_.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-vns1TDOp.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-UmzZ8VB1.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-qmHWFTPO.js","/blueprint-720/assets/WarmupRunner-Bk1ZRuKY.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/chevron-right-BGNJLvfg.js","/blueprint-720/assets/clock-fKXoBfjv.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-DRi-mJxy.js","/blueprint-720/assets/eye-DvzJu2dr.js","/blueprint-720/assets/file-text-BBLqAVX2.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-DbkOHxUi.js","/blueprint-720/assets/gauge-DPS4TebH.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-ClGkHGyO.js","/blueprint-720/assets/index-0IPycSqn.css","/blueprint-720/assets/index-Da1-zujp.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-BXEr9G5O.js","/blueprint-720/assets/link-2-CVNyTbYj.js","/blueprint-720/assets/list-checks-D5VnVrol.js","/blueprint-720/assets/map-Cmf3r8kn.js","/blueprint-720/assets/official-BesOF5FD.js","/blueprint-720/assets/play-BwgZl_GM.js","/blueprint-720/assets/printer-C6WuNI-3.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-BB6Toa6i.js","/blueprint-720/assets/rotate-ccw-clock-Ck-JqYIG.js","/blueprint-720/assets/sessions-BuGrgbT9.js","/blueprint-720/assets/shared-Bu_wJa3A.js","/blueprint-720/assets/shared-CjGHLGQP.js","/blueprint-720/assets/sparkles--mOkvy_o.js","/blueprint-720/assets/timer-DotlisZw.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-CobuHmOD.js","/blueprint-720/assets/useSessions-Cqd02jQo.js","/blueprint-720/assets/zap-DJbc_pEU.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
