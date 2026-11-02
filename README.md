# Kirolos Emad — portfolio

Static site: plain HTML, CSS and JavaScript. No build step, no packages.

## Preview locally
```bash
cd portfolio
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repository and push the contents of this folder to its root (`index.html` at the top level).
2. In the repository, open Settings, then Pages, choose the branch and the `/ (root)` folder, and save.
3. All links are relative, so it also works from a repository subpath.

## Edit
- Colors: CSS variables at the top of `css/style.css`.
- CV: replace `assets/cv.pdf` (keep the filename).
- Portrait: replace `assets/profile.webp`.
- Fonts: Young Serif and Readex Pro are bundled in `assets/fonts/` (SIL Open Font License; licenses included).

See `PROJECTS.md` for the project pattern and `PORTFOLIO_TODOS.md` for open items.
