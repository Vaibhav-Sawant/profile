# My Profile

A responsive personal portfolio built with Next.js App Router, TypeScript, and plain CSS.
The profile copy and project details are starter content—update them with your own information
before publishing.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize

- Edit the name, introduction, projects, experience, and contact address in `app/page.tsx`.
- Update the page title and description in `app/layout.tsx`.
- Adjust colors, typography, and responsive styling in `app/globals.css`.

## Deploy to GitHub Pages

This repository is configured to publish as a static site at
<https://vaibhav-sawant.github.io/profile/>. A GitHub Actions workflow builds the
site and deploys it whenever you push to `main`.

1. Push the repository to GitHub.
2. On GitHub, open **Settings → Pages** for the repository.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run **Deploy to GitHub Pages** manually from the **Actions** tab.
5. When the workflow completes, visit <https://vaibhav-sawant.github.io/profile/>.

The workflow sets `GITHUB_PAGES=true`; this adds the `/profile` base path needed
for a project site. A normal local `npm run build` exports the site at the domain
root. The static export is written to `out/`. To preview it locally after building,
run `python3 -m http.server 8000 --directory out` and open
<http://localhost:8000>.
