# Kushal Shrestha Cybersecurity Portfolio

Static, Vercel-ready cybersecurity portfolio for Kushal Shrestha.

## What is included

- `index.html` - complete single-page portfolio
- `css/style.css` - responsive dark SOC/cybersecurity visual system
- `js/data.js` - centralized profile, links, skills, projects, education, certifications and experience data
- `js/live-scene.js` - immersive animated SOC terrain using Three.js when available, with a native canvas fallback
- `js/main.js` - mobile menu, filters, case-study modals, icons, toolkit detail panel, contact validation and scroll behavior
- `assets/images/kushal-shrestha-profile.jpeg` - uploaded profile photo
- `assets/images/contoso-security-architecture.png` - uploaded Contoso security architecture image
- `assets/documents/Kushal-Shrestha-Cybersecurity-Resume.pdf` - uploaded resume PDF
- `assets/documents/Security-Operations-Efficiency-Workbook.pdf` - uploaded workbook PDF
- `robots.txt`, `sitemap.xml`, `vercel.json`

## Edit content

Most portfolio content lives in:

```text
js/data.js
```

Update this file to change:

- Name, headline, location, email and phone
- LinkedIn, GitHub, resume and workbook paths
- Skills and skill levels
- Certifications and learning status
- Projects, project links, tools and case-study content
- Education dates
- Experience entries
- Toolkit details

Keep SC-200 as `In Progress` until the certification is completed.

## Replace or add assets

Use these paths:

```text
assets/images/
assets/documents/
```

Recommended filenames already used by the site:

```text
assets/documents/Kushal-Shrestha-Cybersecurity-Resume.pdf
assets/documents/Security-Operations-Efficiency-Workbook.pdf
assets/images/kushal-shrestha-profile.jpeg
assets/images/contoso-security-architecture.png
```

To add real project screenshots later, place images in `assets/images/` and add fields to the relevant project object in `js/data.js`.

## Run locally

Because this is a static HTML/CSS/JavaScript site, you can open `index.html` directly in a browser.

For a local server preview:

```bash
npx serve .
```

or:

```bash
python -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Deploy to Vercel

1. Create a new GitHub repository or use an existing portfolio repository.
2. Upload all files from this folder to the repository root.
3. Go to Vercel and choose `Add New Project`.
4. Import the GitHub repository.
5. Leave framework preset as `Other`.
6. Leave build command empty.
7. Leave output directory empty or set it to `.`.
8. Deploy.

The included `vercel.json` tells Vercel to serve the static site from the project root.

## GitHub setup

```bash
git init
git add .
git commit -m "Add cybersecurity portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_REPOSITORY_URL` with your actual GitHub portfolio repository URL.

## Credibility notes

The site avoids fake production claims, fake clients, fake employers, fake statistics and fake completed certifications. Lab content is labelled as hands-on lab, learning environment or simulated mock data where appropriate.
