/* Blueprint 720 service worker c6753f28a9fa: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-c6753f28a9fa";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-FyMJz3ZQ.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-DMrhK9bn.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-DRfP1qAK.js","/blueprint-720/assets/Card-CwZUtuhH.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-BwgsFvRQ.js","/blueprint-720/assets/CoursePage-Dv_u_n85.js","/blueprint-720/assets/ExtraPage-Biv7fF8g.js","/blueprint-720/assets/FlashcardsHome-BcVFI0s6.js","/blueprint-720/assets/GuidePage-vZMIRdHm.js","/blueprint-720/assets/GuidesIndex-CIVXDAUz.js","/blueprint-720/assets/HomePage-B_rT0dN3.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-CHNFocwF.js","/blueprint-720/assets/LabsHome-D2k8wBuO.js","/blueprint-720/assets/LessonPage-B3KYYMlz.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ListenBar-BzSV8X7W.js","/blueprint-720/assets/ListenBar-kNZkOGTO.css","/blueprint-720/assets/ModulePage-BeuIof5y.js","/blueprint-720/assets/Official-BXx09i1f.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/PageHeader-8yLlPaoY.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-Ilc3ZxZj.js","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-D8Zb6UUM.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-CtWGnljD.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-D_YzRvpB.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-DMYye6yu.js","/blueprint-720/assets/QuestionStrip-3bt4PCrR.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/Results-B_WioC-9.css","/blueprint-720/assets/Results-DICkHQmE.js","/blueprint-720/assets/Review-DRLAt51l.js","/blueprint-720/assets/Segmented-BS08DCE4.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-CMvQddyd.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-D5ao4J4k.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-SUA9s7mU.js","/blueprint-720/assets/StatusChip-B0FT0m5L.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-DCZjy_57.js","/blueprint-720/assets/chevron-right-BQkiBa-x.js","/blueprint-720/assets/clock-CIQPwivx.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-BCXhr4eu.js","/blueprint-720/assets/eye-B4f_U6GL.js","/blueprint-720/assets/file-text-CwuqIE1W.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-CMbrDcoZ.js","/blueprint-720/assets/gauge-DxBvxh9w.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-9jINmX28.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/index-CoWscGZE.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-CL618W0D.js","/blueprint-720/assets/link-2-Bs3gtyi4.js","/blueprint-720/assets/list-checks-BN9J_NzB.js","/blueprint-720/assets/map-2I-HmIaQ.js","/blueprint-720/assets/official-BrH_S1-t.js","/blueprint-720/assets/play-BgWQW868.js","/blueprint-720/assets/printer-E48F6QGb.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-CYk9RCbh.js","/blueprint-720/assets/rotate-ccw-clock-DRW8P6CU.js","/blueprint-720/assets/sessions-blTO4QYF.js","/blueprint-720/assets/shared-CAZ3lRgl.js","/blueprint-720/assets/shared-nb6DegNR.js","/blueprint-720/assets/sparkles-DrukIT3M.js","/blueprint-720/assets/timer-D2zuI0tA.js","/blueprint-720/assets/useScrollSpy-5_wuo1OW.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useSessions-CZX5_SC-.js","/blueprint-720/assets/zap-C1DfSLMN.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
