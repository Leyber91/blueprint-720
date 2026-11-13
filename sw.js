/* Blueprint 720 service worker 27523b4c8fa3: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-27523b4c8fa3";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-DSrujt0U.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-CHFMMQB4.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-D_CzZHhR.js","/blueprint-720/assets/Card-DZKrL-Fw.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-CRAG_3CY.js","/blueprint-720/assets/CoursePage-4UlDp_Go.js","/blueprint-720/assets/ExtraPage-BAkHZfTl.js","/blueprint-720/assets/FlashcardsHome-BHgzNH4m.js","/blueprint-720/assets/GuidePage-CTJKU-AV.js","/blueprint-720/assets/GuidesIndex-CuEuSY6y.js","/blueprint-720/assets/HomePage-CliqgeEs.css","/blueprint-720/assets/HomePage-TL_TE9Wa.js","/blueprint-720/assets/LabPage-BUTndxOY.js","/blueprint-720/assets/LabsHome-DkTHcZdy.js","/blueprint-720/assets/LessonPage-2F2QmlC5.css","/blueprint-720/assets/LessonPage-BdB7lvLq.js","/blueprint-720/assets/ListenBar-CNPnxawv.css","/blueprint-720/assets/ListenBar-MRczV7Q9.js","/blueprint-720/assets/ModulePage-BKyjQwn0.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-DsOq7QaH.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-eqM3Q9NE.js","/blueprint-720/assets/PlanPage-CXGfwp6I.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-WLTtprmU.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-COkzjEMp.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-DY7JNBnK.js","/blueprint-720/assets/ProgressRing-BWeLUPfL.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-DcDpn_kv.js","/blueprint-720/assets/Results-C6soP45_.css","/blueprint-720/assets/Results-CsrtiLnI.js","/blueprint-720/assets/Review-N3NUZDd3.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-D0fxuWlO.js","/blueprint-720/assets/SessionRunner-EVVDBagj.css","/blueprint-720/assets/SessionRunner-fU7U13NW.js","/blueprint-720/assets/SettingsPage-BtxetMy4.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-hgXjAXaR.js","/blueprint-720/assets/StatusChip-3mimifvg.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-CIbwx0bG.js","/blueprint-720/assets/chevron-right-Dx9dFVQc.js","/blueprint-720/assets/clock-ajd1jYMP.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-DnGJuiCT.js","/blueprint-720/assets/eye-DlZdInNg.js","/blueprint-720/assets/file-text-DlYJeXKZ.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-DtbYNWu_.js","/blueprint-720/assets/gauge-Btu_Lgo8.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-_JBczf_S.js","/blueprint-720/assets/index-DOmzQOvH.js","/blueprint-720/assets/index-DYAIVV7t.css","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-B-5I68EB.js","/blueprint-720/assets/link-2-9K1-XzMp.js","/blueprint-720/assets/list-checks-DyykLNB2.js","/blueprint-720/assets/map-COTQOjP5.js","/blueprint-720/assets/official-DySKtc-U.js","/blueprint-720/assets/play-D6uLH5wg.js","/blueprint-720/assets/printer-CoiJnNfD.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-DsxwplSe.js","/blueprint-720/assets/rotate-ccw-clock-CqdT6RDi.js","/blueprint-720/assets/sessions-vSJozLgf.js","/blueprint-720/assets/shared-BBKmDOey.js","/blueprint-720/assets/shared-BpNpTEO3.js","/blueprint-720/assets/sparkles-jMBCLZg8.js","/blueprint-720/assets/timer-I4F5nukv.js","/blueprint-720/assets/useScrollSpy-BI1wXRhM.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useSessions-oUJMiZut.js","/blueprint-720/assets/zap-KcDsY65d.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
