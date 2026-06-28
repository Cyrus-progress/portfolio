# Cyrus Ho · Portfolio

Personal portfolio of **Cyrus Ho** — a student researcher and builder from Vancouver, BC, working at the intersection of biotech and software.

[![Live Demo](https://img.shields.io/badge/Live_Demo-online-2563EB?style=flat-square)](https://cyrus-progress.github.io/portfolio/)
[![Stack](https://img.shields.io/badge/stack-HTML_·_CSS_·_JS-0A0A0B?style=flat-square)](#tech-stack)
[![Hosting](https://img.shields.io/badge/hosting-GitHub_Pages-2563EB?style=flat-square)](https://pages.github.com/)

## Overview

A single-page portfolio presenting selected work across mRNA research, AI-driven health tools, full-stack applications, and community initiatives — built as a fast, dependency-free static site.

**Live:** [cyrus-progress.github.io/portfolio](https://cyrus-progress.github.io/portfolio/)

## Tech stack

- **HTML · CSS · JavaScript** — no framework, no build step
- **Exo** + **Roboto Mono** typography on a Swiss-modernist design system
- Continuously deployed on **GitHub Pages**

## Structure

```
index.html   Page markup and sections
styles.css   Design system and layout
script.js    Project data (PROJECTS) and rendering
assets/      Profile photo and project imagery
```

## Local development

No tooling required. Open `index.html` directly, or serve it locally:

```bash
python3 -m http.server   # → http://localhost:8000
```

Content is data-driven — each project is an entry in the `PROJECTS` array in `script.js`.

---

<sub>© 2026 Cyrus Ho</sub>
