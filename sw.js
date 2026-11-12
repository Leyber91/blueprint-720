/* Blueprint 720 service worker f0cda530034f: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-f0cda530034f";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-CdqyZQVM.js","/blueprint-720/assets/Badge-BthOAmNL.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-CBojsT-K.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-BvmXU8-E.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-eeLk20RB.js","/blueprint-720/assets/CoursePage-DxJC-noz.js","/blueprint-720/assets/ExtraPage-DYDyF4Xu.js","/blueprint-720/assets/FlashcardsHome-BQn_ZHvY.js","/blueprint-720/assets/GuidePage-Cu-_mw3y.js","/blueprint-720/assets/GuidesIndex-f4yEDwU0.js","/blueprint-720/assets/HomePage-BRxt7ehY.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-Cgq0As1j.js","/blueprint-720/assets/LabsHome-CTbs4OKN.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/LessonPage-kF79pHSn.js","/blueprint-720/assets/ModulePage-Bm4oFNOz.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-DAR8Nuag.js","/blueprint-720/assets/PageHeader-B1CXoT3v.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-PLK08YBt.js","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/PracticeHub-DT5tvu29.js","/blueprint-720/assets/ProgressBar-25bXoZeZ.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-CVn3L-D3.js","/blueprint-720/assets/ProgressRing-BLAtur_A.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-DQRMTPb8.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Results-xLDa8tnQ.js","/blueprint-720/assets/Review-Cp5CtC6E.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-CodmpX5R.js","/blueprint-720/assets/SessionRunner-CjsU2tki.js","/blueprint-720/assets/SessionRunner-Ck2Q8IuA.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-vjD4ASVF.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-CnsFgVa0.js","/blueprint-720/assets/StatusChip-CCLehFNK.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-B7CAfGbe.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/chevron-right-DzY6FP_s.js","/blueprint-720/assets/clock-ckKlMem3.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-CR6qW7qp.js","/blueprint-720/assets/eye-JoLoiuh-.js","/blueprint-720/assets/file-text-D5g97pO3.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-CFLjApuu.js","/blueprint-720/assets/gauge-BbiZaBgv.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-CHUNBAOP.js","/blueprint-720/assets/index-DepoMfpP.css","/blueprint-720/assets/index-DifOCX3q.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-Bal8xenD.js","/blueprint-720/assets/link-2-DriR14rh.js","/blueprint-720/assets/list-checks-ChoAjEEl.js","/blueprint-720/assets/map-BVqF-TfX.js","/blueprint-720/assets/official-DzMAckSk.js","/blueprint-720/assets/play-C71s5Tnb.js","/blueprint-720/assets/printer-CtUoqtfG.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-DF5-uvIK.js","/blueprint-720/assets/rotate-ccw-clock-DerLi5Km.js","/blueprint-720/assets/sessions-CFaCos9-.js","/blueprint-720/assets/shared-CdgA372d.js","/blueprint-720/assets/shared-DqgaqgQ3.js","/blueprint-720/assets/sparkles-DG4DXteC.js","/blueprint-720/assets/timer-DwCY1Myz.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-CphkNdCJ.js","/blueprint-720/assets/useSessions-DJP3f9ja.js","/blueprint-720/assets/zap-C6mfIkiJ.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
