# Yong Ma — Personal Website

Personal academic website for Yong Ma, Postdoctoral Researcher at KTH Royal Institute of Technology.

Built with plain HTML/CSS/JS (no build step) — ready to deploy on GitHub Pages.

## Structure

```
index.html        Main page
css/style.css      Styles (light/dark theme via CSS variables)
js/main.js         Nav toggle, theme toggle, scroll reveal animations
assets/            CV PDF
```

## Local preview

Any static file server works, e.g.:

```bash
python -m http.server 5500
```

Then open http://localhost:5500.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, under **Pages**, set the source to the `main` branch, root folder.
3. The site will be published at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).
