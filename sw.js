/* Blueprint 720 service worker c74e44ef0018: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-c74e44ef0018";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-GjNEUU14.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-bKY6fSjN.js","/blueprint-720/assets/Breadcrumbs-CbaKJtlT.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-BgJ-9d5I.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-CXlc-RHU.js","/blueprint-720/assets/CoursePage-DeDlICIi.js","/blueprint-720/assets/ExtraPage-CFIHpNuY.js","/blueprint-720/assets/FlashcardsHome-BoXpdI_L.js","/blueprint-720/assets/GuidePage-oN-zLdJ0.js","/blueprint-720/assets/GuidesIndex-B2a16zUr.js","/blueprint-720/assets/HomePage-B76G0Seb.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-fLV0Fa4T.js","/blueprint-720/assets/LabsHome-D73aBYxb.js","/blueprint-720/assets/LessonPage-B3HRRNmn.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-kyYD1H2W.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-D3LKpJJx.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-lVP-OS11.js","/blueprint-720/assets/PlanPage-C_ZEMjbP.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PracticeHub-BwOFi-ca.css","/blueprint-720/assets/PracticeHub-YqvE3AdQ.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-CzCB0LD8.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-fkWiK9X0.js","/blueprint-720/assets/ProgressRing-BcAV4q_9.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-G_IHf7j_.js","/blueprint-720/assets/Results-C3c45ZAM.js","/blueprint-720/assets/Results-Yf5C-HoN.css","/blueprint-720/assets/Review-CiCBpooi.js","/blueprint-720/assets/Segmented-BXsH0Isp.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-CDMuD8Wb.js","/blueprint-720/assets/SessionRunner-CTqvbK2I.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-DKCqiBIg.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-r0_lhm88.js","/blueprint-720/assets/StatusChip-BpjOGJ2n.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-C6W9FwLh.js","/blueprint-720/assets/chevron-right-Co7vwk1u.js","/blueprint-720/assets/clock-Bn7tVD5y.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-CwTGyldP.js","/blueprint-720/assets/eye-BxAJ0Ri8.js","/blueprint-720/assets/file-text-CrCOTp0K.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-s5eN3MvQ.js","/blueprint-720/assets/gauge-2dEBHFF9.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-KE5FxKPC.js","/blueprint-720/assets/index-DepoMfpP.css","/blueprint-720/assets/index-jkyieHyl.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-DNiIzYyT.js","/blueprint-720/assets/link-2-Clz2Bc20.js","/blueprint-720/assets/list-checks-DR54hT-z.js","/blueprint-720/assets/map-DzgLkO-v.js","/blueprint-720/assets/official-DnmAxINW.js","/blueprint-720/assets/play-BLdAJRbm.js","/blueprint-720/assets/printer-dhPpRLxD.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-D3DO-Vbd.js","/blueprint-720/assets/rotate-ccw-clock-DrIf37-c.js","/blueprint-720/assets/sessions-C8V55qEI.js","/blueprint-720/assets/shared-BJSDjp6_.js","/blueprint-720/assets/shared-DeEWcc7c.js","/blueprint-720/assets/sparkles-BgpPhrqE.js","/blueprint-720/assets/timer-CLVuaeib.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-DzbmhlbC.js","/blueprint-720/assets/useSessions-I18PcOkU.js","/blueprint-720/assets/zap-DPFSYat1.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
