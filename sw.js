/* Blueprint 720 service worker 0642d232127b: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-0642d232127b";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-CNDWFvyn.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Badge-CwgAznYJ.js","/blueprint-720/assets/Breadcrumbs-COm-C_7g.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-BaIotNZx.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-8JVe8bnK.js","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/CoursePage-YOKzH6DL.js","/blueprint-720/assets/ExtraPage-DtRDETxn.js","/blueprint-720/assets/FlashcardsHome-2xGQvKaP.js","/blueprint-720/assets/GuidePage-BOwARNMq.js","/blueprint-720/assets/GuidesIndex-vUw2pmf8.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/HomePage-Cu2ITMgU.js","/blueprint-720/assets/LabPage-DkyiNsHt.js","/blueprint-720/assets/LabsHome-DRiqR7df.js","/blueprint-720/assets/LessonPage-BY6bJyng.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ModulePage-Dsg8HYHa.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-Dqe1os1v.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-DU9b2XdF.js","/blueprint-720/assets/PlanPage-D3Teeurw.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-Da74hrym.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-CzprdvKS.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-D5ZTYfKq.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-DVxJ98eP.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/QuestionStrip-Uro5NWA-.js","/blueprint-720/assets/Results-B_WioC-9.css","/blueprint-720/assets/Results-CwapPsFU.js","/blueprint-720/assets/Review-BsZEdLAG.js","/blueprint-720/assets/Segmented-BCqFIpll.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-BU0FFeHt.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-BCntBGtS.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatTile-JZ-di_kF.js","/blueprint-720/assets/StatusChip-BYEgTs-C.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-VdMPm-1B.js","/blueprint-720/assets/chevron-right-dsXBat_4.js","/blueprint-720/assets/clock-Zoniiw7l.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-BGaUBaRi.js","/blueprint-720/assets/eye-DIjqctmo.js","/blueprint-720/assets/file-text-BERXYKFl.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-BW-POCOn.js","/blueprint-720/assets/gauge-B9YBXiR8.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-BkDMqOcU.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/index-D11ytmt0.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-BIhcteaX.js","/blueprint-720/assets/link-2-BAyTrn0w.js","/blueprint-720/assets/list-checks-BsqbLrqG.js","/blueprint-720/assets/map-CfHc_n7o.js","/blueprint-720/assets/official-Cq4zvFEy.js","/blueprint-720/assets/play-qui7pxm4.js","/blueprint-720/assets/printer-Wy4RAoiW.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-BndRKiAL.js","/blueprint-720/assets/rotate-ccw-clock-CHA83XJC.js","/blueprint-720/assets/sessions-Cf-Zjfyq.js","/blueprint-720/assets/shared-C0GofsCp.js","/blueprint-720/assets/shared-CJn3tnTf.js","/blueprint-720/assets/sparkles-DCy1elfP.js","/blueprint-720/assets/timer-Bk32pGcS.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-CJ0w0zDk.js","/blueprint-720/assets/useSessions-nVXTq6Oo.js","/blueprint-720/assets/zap-C_GGH9_-.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
