/* Blueprint 720 service worker 40047c756898: keeps the app shell for offline use. GitHub API calls pass through untouched. */
const VERSION = "b720-40047c756898";
const BASE = "/blueprint-720/";
const PRECACHE = ["/blueprint-720/","/blueprint-720/assets/ActivityCalendar-1X7YYG0j.css","/blueprint-720/assets/ActivityCalendar-CAQskUjX.js","/blueprint-720/assets/Badge-BUBHsBXh.js","/blueprint-720/assets/Badge-BuYB41b-.css","/blueprint-720/assets/Breadcrumbs-BB4hX21z.js","/blueprint-720/assets/Breadcrumbs-CcLlUkza.css","/blueprint-720/assets/Card-B1qlXcJR.js","/blueprint-720/assets/Card-DhqAn6c3.css","/blueprint-720/assets/Checkbox-BgvTmyTz.css","/blueprint-720/assets/Checkbox-DuhlZG_B.js","/blueprint-720/assets/CoursePage-BLZVCHum.js","/blueprint-720/assets/ExtraPage-CnPrzwIQ.js","/blueprint-720/assets/FlashcardsHome-C-ZqRzVa.js","/blueprint-720/assets/GuidePage-D38S1NSD.js","/blueprint-720/assets/GuidesIndex-B-dTY2EY.js","/blueprint-720/assets/HomePage-BXFnt-pD.js","/blueprint-720/assets/HomePage-CVorQ2Mp.css","/blueprint-720/assets/LabPage-CKnM-yV_.js","/blueprint-720/assets/LabsHome-DLfDLtPd.js","/blueprint-720/assets/LessonPage-D4FxF168.js","/blueprint-720/assets/LessonPage-Dg6yzOQN.css","/blueprint-720/assets/ListenBar-Bcp5il-e.js","/blueprint-720/assets/ListenBar-kNZkOGTO.css","/blueprint-720/assets/ModulePage-CY4PijVN.js","/blueprint-720/assets/Official-BcinHwf5.css","/blueprint-720/assets/Official-BlFD9gYE.js","/blueprint-720/assets/PageHeader-Ba5RBz8o.css","/blueprint-720/assets/PageHeader-bv7LKWON.js","/blueprint-720/assets/PlanPage-BKyqFqvk.js","/blueprint-720/assets/PlanPage-DAjcvshf.css","/blueprint-720/assets/PracticeHub-BVdt5bb9.css","/blueprint-720/assets/PracticeHub-CTGAHeoY.js","/blueprint-720/assets/ProgressBar-Bh9HxKSr.css","/blueprint-720/assets/ProgressBar-DfRUiJmb.js","/blueprint-720/assets/ProgressPage-CKm1a-wg.css","/blueprint-720/assets/ProgressPage-DfeFXgmp.js","/blueprint-720/assets/ProgressRing-Ckv0tSB7.css","/blueprint-720/assets/ProgressRing-TzPXC2_d.js","/blueprint-720/assets/QuestionStrip-CcHnFdnN.js","/blueprint-720/assets/QuestionStrip-DYoUgTEw.css","/blueprint-720/assets/Results-B_WioC-9.css","/blueprint-720/assets/Results-igxVIrqy.js","/blueprint-720/assets/Review-UKs-gQj2.js","/blueprint-720/assets/Segmented-Bn6n8bze.js","/blueprint-720/assets/Segmented-C3yZeNZI.css","/blueprint-720/assets/SessionRunner-B8_qAB6W.js","/blueprint-720/assets/SessionRunner-sO46mvvv.css","/blueprint-720/assets/SettingsPage-C4l2qvWo.js","/blueprint-720/assets/SettingsPage-D1BIfEYG.css","/blueprint-720/assets/StatTile-B-oxLK6j.js","/blueprint-720/assets/StatTile-Byz9Rdti.css","/blueprint-720/assets/StatusChip-CtkraoEH.js","/blueprint-720/assets/StatusChip-DP_AVLsR.css","/blueprint-720/assets/WarmupRunner-Bo1-10Ch.css","/blueprint-720/assets/WarmupRunner-CBnuOTvC.js","/blueprint-720/assets/chevron-right-BV93hxCi.js","/blueprint-720/assets/clock-BLb19JfD.js","/blueprint-720/assets/course-DQt-TF4t.css","/blueprint-720/assets/course.module-BRlthR7a.js","/blueprint-720/assets/drills-BKKxkc5A.js","/blueprint-720/assets/eye-p-hvpgwz.js","/blueprint-720/assets/file-text-DXeWszgQ.js","/blueprint-720/assets/flashcards-CCxTTvDc.css","/blueprint-720/assets/flashcards.module-CQ1Q7BNQ.js","/blueprint-720/assets/gauge-C4f4P6bJ.js","/blueprint-720/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/blueprint-720/assets/geist-latin-wght-italic-dTnRTFFJ.woff2","/blueprint-720/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/blueprint-720/assets/geist-mono-latin-ext-wght-normal-Bwz-egvJ.woff2","/blueprint-720/assets/geist-mono-latin-wght-normal-XN7g48iV.woff2","/blueprint-720/assets/graduation-cap-Oe7dxeWk.js","/blueprint-720/assets/index-BSOvX-iN.css","/blueprint-720/assets/index-BkkxKEES.js","/blueprint-720/assets/labState-CTLpfhgB.css","/blueprint-720/assets/labState-WtK7A48C.js","/blueprint-720/assets/lightbulb-BWpq7YiA.js","/blueprint-720/assets/link-2-BS69TwFZ.js","/blueprint-720/assets/list-checks-B-O9YFOu.js","/blueprint-720/assets/map-ve8DOS4r.js","/blueprint-720/assets/official-DDq_KiE6.js","/blueprint-720/assets/play-Bpnsc8Gh.js","/blueprint-720/assets/printer-BJKZFYtf.js","/blueprint-720/assets/reading-Armbrtc1.js","/blueprint-720/assets/reading-QLwNhZpw.css","/blueprint-720/assets/rotate-ccw-Cksx08VK.js","/blueprint-720/assets/rotate-ccw-clock-7zjs09l7.js","/blueprint-720/assets/sessions-YuKcQS84.js","/blueprint-720/assets/shared-ALktEw7o.js","/blueprint-720/assets/shared-BxAewRij.js","/blueprint-720/assets/sparkles-DOBTDfFc.js","/blueprint-720/assets/timer-BpiB5NS2.js","/blueprint-720/assets/useScrollSpy-Bhm26PMz.css","/blueprint-720/assets/useScrollSpy-DVn6M65H.js","/blueprint-720/assets/useSessions-6WLYcqDq.js","/blueprint-720/assets/zap-g4YyH-D0.js","/blueprint-720/favicon.svg","/blueprint-720/icons/apple-touch-icon.png","/blueprint-720/icons/icon-192.png","/blueprint-720/icons/icon-512.png","/blueprint-720/icons/icon-maskable-512.png","/blueprint-720/index.html","/blueprint-720/licenses/OFL-Geist.txt","/blueprint-720/manifest.webmanifest"];
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
