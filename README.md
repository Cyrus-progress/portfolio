# Cyrus Ho — Portfolio

A single-page portfolio. Plain HTML/CSS/JS — **no build step, no dependencies**. Edit a file, push, done.

## Files

| File | What it's for |
|------|---------------|
| `index.html` | Page structure (hero, about, contact). Rarely needs editing. |
| `styles.css` | All styling (colours, layout). |
| `script.js` | **Your content lives here** — the `PROJECTS` array at the top. |
| `assets/profile.jpg` | Your photo. |
| `assets/projects/*.jpg` | Project images. |

## Edit your content

Open `script.js` and edit the `PROJECTS` array at the top. Each project is one `{ ... }` block:

- **Add a Notion link** → find the project, replace `href: "#"` with your real URL, e.g.
  `{ label: "Notion", href: "https://www.notion.so/your-page" }`
  *(Make sure the Notion page is shared "to web" or visitors will hit a login wall.)*
- **Edit text** → change `blurb` (the card teaser) or `description` (the paragraphs in the popup).
- **Add a project** → copy a whole `{ ... }` block, paste it, and fill it in.

Any link left as `"#"` shows as a greyed-out **"soon"** button automatically, so placeholders look intentional.

## Images

- Replace the photo: drop a new image at `assets/profile.jpg` (portrait works best).
- Add a project image: put a `.jpg` in `assets/projects/` and set `image: "assets/projects/yourfile.jpg"` on that project. Remove the `image:` line (and keep `emoji`/`accent`) to use a coloured placeholder instead.
- Keep images web-sized. To shrink one on a Mac: `sips -Z 1600 -s format jpeg yourfile.png --out assets/projects/yourfile.jpg`

## Preview locally

Just double-click `index.html`. (Or, for an exact match to GitHub Pages, run `python3 -m http.server` in this folder and open <http://localhost:8000>.)

## Publish to GitHub Pages

One-time setup (run inside this folder):

```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create portfolio --public --source=. --push   # needs the GitHub CLI
```

Then turn on Pages: GitHub repo → **Settings → Pages → Source: `main` / root → Save**.
Your site goes live at **https://cyrus-progress.github.io/portfolio/** in a minute or two.

**To update later:**

```bash
git add .
git commit -m "Update projects"
git push
```

> No GitHub CLI? Create an empty repo named `portfolio` on github.com, then:
> `git remote add origin https://github.com/cyrus-progress/portfolio.git && git branch -M main && git push -u origin main`
