# Blueprint 720 (app shell)

The web app of a private study platform for the Anthropic certifications, published with GitHub Pages.

This repository holds only the built app: code, styles and icons. It contains no course content and no
personal data. The app shows nothing until it is connected, on each device, to the private repository
that holds the course and the progress, with a fine-grained token that only that repository accepts.

Built from the private repository's `platform/web` (`npm run build:hosted`) and published with
`python tools/publish_site.py`.
