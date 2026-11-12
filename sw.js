/* Blueprint 720 service worker c96cacb76a0a: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-c96cacb76a0a";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-BaHDQyvh.js","/blueprint-720/assets/Badge-BZjWCXx6.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-G57nfTHZ.js","/blueprint-720/assets/Card-CgK3UZiJ.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BA1mIORo.js","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/CoursePage-ChvU3UWT.js","/blueprint-720/assets/ExtraPage-0iSyAQRr.js","/blueprint-720/assets/FlashcardsHome-yeNJ3u2C.js","/blueprint-720/assets/GuidePage-CiX1NJCv.js","/blueprint-720/assets/GuidesIndex-CdqIOL1g.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-wqUdo_qP.js","/blueprint-720/assets/LabPage-DaYPwq5d.js","/blueprint-720/assets/LabsHome-HAFNwzZS.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/LessonPage-DtDOhaMQ.js","/blueprint-720/assets/ModulePage-BE3DXau-.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-ZgU_kbv6.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-BoHIh7Be.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-DulcnuKh.js","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/PracticeHub-DNVLWMZs.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-KWytfq7J.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-CMLVbEpL.js","/blueprint-720/assets/ProgressRing-BG-rjCLF.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-DtvjbUgn.js","/blueprint-720/assets/Results-CZnUnukn.js","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Review-CzzB8UQ5.js","/blueprint-720/assets/Segmented-B5beJpeP.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-C8J_bFgw.js","/blueprint-720/assets/SessionRunner-Dv3MdGQ_.css","/blueprint-720/assets/SettingsPage-CqH3eC4q.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-CgV8uTGM.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-WevcJqEY.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-Cu99EQRZ.js","/blueprint-720/assets/chevron-right-AD3fqva-.js","/blueprint-720/assets/clock-OOpUYux7.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-xxJF4nrY.js","/blueprint-720/assets/eye-DKGv9Nz9.js","/blueprint-720/assets/file-text-DvQOOjvG.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-BuwDPVwb.js","/blueprint-720/assets/gauge-AODRjrKd.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-BgsZjD1M.js","/blueprint-720/assets/index-DepoMfpP.css","/blueprint-720/assets/index-jT5igjvI.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-DaEi19PX.js","/blueprint-720/assets/link-2-DXInCVaS.js","/blueprint-720/assets/list-checks-LOK2NnyD.js","/blueprint-720/assets/map-BcVAQrkA.js","/blueprint-720/assets/official-BmC-e7P_.js","/blueprint-720/assets/play-CcgDTH3h.js","/blueprint-720/assets/printer-9_E8_vt_.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-2XvHAxFt.js","/blueprint-720/assets/rotate-ccw-clock-1Siw_8DQ.js","/blueprint-720/assets/sessions-K3Ad09Hh.js","/blueprint-720/assets/shared-BJzp98FC.js","/blueprint-720/assets/shared-DV8kDFfz.js","/blueprint-720/assets/sparkles-BU6u2DHy.js","/blueprint-720/assets/timer-xt6wmJHG.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-C2crX3w8.js","/blueprint-720/assets/useSessions-B6Er_R4-.js","/blueprint-720/assets/zap-ji5wm10l.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
