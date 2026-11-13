/* Blueprint 720 service worker 0cdb95cd6b69: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-0cdb95cd6b69";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-CfyN3-AP.js","/blueprint-720/assets/Badge-B46pjGcs.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Breadcrumbs-CwDAAbl9.js","/blueprint-720/assets/Card-DEF8xyvL.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-DTdHykOZ.js","/blueprint-720/assets/CoursePage-D8JDlbtZ.js","/blueprint-720/assets/ExtraPage-CrFYEfce.js","/blueprint-720/assets/FlashcardsHome-DIi501VL.js","/blueprint-720/assets/GuidePage-TnjRGboN.js","/blueprint-720/assets/GuidesIndex-CjSlgbHY.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-zeYzX7Ce.js","/blueprint-720/assets/LabPage-CNkgeUpL.js","/blueprint-720/assets/LabsHome-gTtMc9Wk.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/LessonPage-DwdMbdbn.js","/blueprint-720/assets/ModulePage-CPLeCZ1c.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-CZZtbQhF.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-DIRUKi9F.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PlanPage-GpQY2joD.js","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-DrJFk2rt.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-DuGH-0Nr.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-CWO-wv7G.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-Dbko8Dal.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-DZCE_cZN.js","/blueprint-720/assets/Results-B_WioC-9.css","/blueprint-720/assets/Results-DMVFeKQt.js","/blueprint-720/assets/Review-BeiOC12U.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/Segmented-CLAFCYai.js","/blueprint-720/assets/SessionRunner-CFc0CXJJ.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/SettingsPage-P12j92N6.js","/blueprint-720/assets/StatTile-1mMNXTD5.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/StatusChip-DjNMwXWk.js","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-D-BXiGns.js","/blueprint-720/assets/chevron-right--ZAa_o0l.js","/blueprint-720/assets/clock-CANHK8SZ.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-C6LPXOEw.js","/blueprint-720/assets/eye-DQfyDA1X.js","/blueprint-720/assets/file-text-B-f6bcCI.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-CqOncKXw.js","/blueprint-720/assets/gauge-CXnuKCD9.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-CiKmHXCk.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/index-CIpkE2DY.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-BZ6l-CNX.js","/blueprint-720/assets/link-2-CRlJB0SR.js","/blueprint-720/assets/list-checks-CN6Mf4dN.js","/blueprint-720/assets/map-CMpi8-pv.js","/blueprint-720/assets/official-DDfwHbRc.js","/blueprint-720/assets/play-CSZM6Vaa.js","/blueprint-720/assets/printer-CjE-xvY5.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-CxYwwfq4.js","/blueprint-720/assets/rotate-ccw-clock-Bn7li2SD.js","/blueprint-720/assets/sessions-CbNYpBu-.js","/blueprint-720/assets/shared-CfXH2roZ.js","/blueprint-720/assets/shared-CtbDcKc5.js","/blueprint-720/assets/sparkles-B5NrUBcy.js","/blueprint-720/assets/timer-CfbWBlwn.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-BmfxqaJj.js","/blueprint-720/assets/useSessions-Be59-bOE.js","/blueprint-720/assets/zap-C3insrsl.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
