# Madurai Jashwitha Travels — React + Vite Multi-Page Site

Standard React + Vite multi-page application (MPA) with TailwindCSS v4 and shadcn/ui.
No SSR, no Cloudflare Workers, no framework lock-in — deploys to any static/shared host
(Apache, cPanel, FTP, Nginx, Netlify, Vercel, S3, GitHub Pages).

## Scripts

```bash
npm install
npm run dev       # local dev at http://localhost:5173
npm run build     # builds to ./dist
npm run preview   # preview the production build locally
```

## Pages

Each page is built as its own real HTML document (true multi-page build):

| URL                | HTML entry                  | Page component               |
|--------------------|-----------------------------|------------------------------|
| `/`                | `index.html`                | `src/pages/Home.tsx`         |
| `/services/`       | `services/index.html`       | `src/pages/Services.tsx`     |
| `/tour-packages/`  | `tour-packages/index.html`  | `src/pages/TourPackages.tsx` |
| `/tariff/`         | `tariff/index.html`         | `src/pages/Tariff.tsx`       |
| `/contact/`        | `contact/index.html`        | `src/pages/Contact.tsx`      |

## Deploy to shared hosting (cPanel / Apache / FTP)

1. Run `npm run build`.
2. Upload the **contents** of `dist/` to your web root (e.g. `public_html/`).
3. The included `.htaccess` (copied automatically from `public/`) handles caching and the
   fallback rule. Folder URLs like `/tariff/` are served by their real `index.html`.

If your host does not support `.htaccess`, replicate the rule for your server
(Nginx `try_files $uri $uri/ /index.html;`).

## Structure

```
index.html            # home page document
services/index.html   # one HTML document per page
src/
  entries/            # one React mount script per page
  pages/              # page components (Home, Services, TourPackages, Tariff, Contact)
  components/site/    # Header, Hero, Sections, Content, Fleet, PageLayout, Seo, Reveal
  components/ui/      # shadcn/ui components
  lib/site.ts         # business info, nav, trip & vehicle types
  lib/router-shim.tsx # Link / NavLink / useNavigate over plain anchors
  assets/             # local images and logo
public/
  .htaccess           # Apache config
  sitemap.xml
  robots.txt
```

## Notes

- SEO per page: `<title>`/meta live in each page's HTML plus `react-helmet-async` via `src/components/site/Seo.tsx`.
- Update phone numbers, address and WhatsApp number in `src/lib/site.ts`.
- Update the domain in `public/sitemap.xml` before going live.
