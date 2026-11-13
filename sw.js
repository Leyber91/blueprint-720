/* Blueprint 720 service worker 69b239239927: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-69b239239927";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-BWPE0oC0.js","/blueprint-720/assets/Badge-3UJ1ROHN.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-CG43tEXs.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-CV5Lootx.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-BowkW77Q.js","/blueprint-720/assets/CoursePage-FF4z-hKW.js","/blueprint-720/assets/ExtraPage-kwTwrPpT.js","/blueprint-720/assets/FlashcardsHome-Bt-QRfps.js","/blueprint-720/assets/GuidePage-BkTIhpAx.js","/blueprint-720/assets/GuidesIndex-5pzFyVc2.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-CZ8PZl20.js","/blueprint-720/assets/LabPage-B2r2JD_A.js","/blueprint-720/assets/LabsHome-D8NXg0i1.js","/blueprint-720/assets/LessonPage-BP4s6oJO.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-Dx9QlKmN.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-CVWtHXKk.js","/blueprint-720/assets/PageHeader-BHgWUD3P.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-s5CW9BbQ.js","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-DPV4K_Ap.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-dHRluTj2.js","/blueprint-720/assets/ProgressPage-Bh1YPbHf.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-DQTaBv85.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-LzGoV_QE.js","/blueprint-720/assets/Results-BqbwdRF8.css","/blueprint-720/assets/Results-DgzSQ22M.js","/blueprint-720/assets/Review-9gOUFAKn.js","/blueprint-720/assets/Segmented-8y0GFLE4.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-BLd5ZttF.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-IkhXX3mv.js","/blueprint-720/assets/StatTile-BdmSvdwW.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-YT3mFHKY.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-s6OJhXD3.js","/blueprint-720/assets/chevron-right-BUkh7xqo.js","/blueprint-720/assets/clock-sr22RLx-.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-9ueshiib.js","/blueprint-720/assets/eye-Ohzpwyt0.js","/blueprint-720/assets/file-text-B-wauKAM.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-Cj6UePHa.js","/blueprint-720/assets/gauge-BmqSIhfu.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-DNm57Krc.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/index-DSoo2NPt.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-CButvo0w.js","/blueprint-720/assets/link-2-OSAK5qMe.js","/blueprint-720/assets/list-checks-C9PIZD_R.js","/blueprint-720/assets/map-CQxwWxdN.js","/blueprint-720/assets/official-BrNeFwrZ.js","/blueprint-720/assets/play-D7hI-6RY.js","/blueprint-720/assets/printer-OXf3YgoU.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-BSQFdv10.js","/blueprint-720/assets/rotate-ccw-clock-DBCDcbUM.js","/blueprint-720/assets/sessions-CcyVVoH-.js","/blueprint-720/assets/shared-DKGEwsnS.js","/blueprint-720/assets/shared-ddXMHW6E.js","/blueprint-720/assets/sparkles-4egyFexO.js","/blueprint-720/assets/timer-BTYe3o_L.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-nvOhRNeh.js","/blueprint-720/assets/useSessions-iU1fLKzS.js","/blueprint-720/assets/zap-DfFFtGIr.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
