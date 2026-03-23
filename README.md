#

Lightweight single-page portfolio built with plain HTML, CSS, and JavaScript.

## What This Site Uses

- `index.html`
- `styles.css`
- `script.js`
- local image/icon assets

No build tools, frameworks, or package dependencies are required.

## Local Preview

```bash
python -m http.server 5500
```

Then open `http://127.0.0.1:5500`.

## Publish with GitHub Pages

### 1. Create the repository

Use one of these options:

- User site (recommended): `kjelenji.github.io

### 2. Push this folder to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/kjelenji/kjelenji.github.io.git
git push -u origin main
```

If you use a project-site repository instead, replace the remote URL accordingly.

### 3. Enable Pages

In GitHub repository settings:

1. Open `Settings` -> `Pages`
2. Under `Build and deployment`, choose `Deploy from a branch`
3. Select branch `main` and folder `/ (root)`
4. Save

### 4. Open the live URL

- User site: `https://kjelenji.github.io`

## Notes

- Because the site is static and dependency-free, it is ideal for GitHub Pages hosting.
- Any update is just a `git add`, `git commit`, and `git push`.
