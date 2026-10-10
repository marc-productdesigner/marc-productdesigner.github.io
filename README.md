# Marc Laurente — Portfolio Site

Static HTML/CSS/JS site for GitHub Pages.

## Setup

1. Push this folder to a GitHub repo
2. Go to repo Settings → Pages → Source: main branch / root
3. Your site will be live at `https://yourusername.github.io/repo-name/`

## Photography Images

The photography pages (Fashion, Engagement, Kids & Newborn) look for local images in:
- `images/fashion/1.jpg`, `2.jpg`, etc.
- `images/engagement/1.jpg`, `2.jpg`, etc.
- `images/kids/1.jpg`, `2.jpg`, etc.

**Before canceling Squarespace**, download your photos and place them in these folders.
Images that don't load are hidden automatically (no broken image icons).

## Videography

Edit `videography.html` and replace `VIDEO_ID_1`, `VIDEO_ID_2` etc. with your actual YouTube video IDs.
For Vimeo: `https://player.vimeo.com/video/YOUR_VIDEO_ID`

## Logo Images

The logos page still loads images from Squarespace CDN. Once you cancel Squarespace:
1. Download your logo images from Squarespace
2. Place them in an `images/logos/` folder
3. Update the `src` attributes in `logos.html` to point to `images/logos/1.png` etc.

## Files

- `index.html` — Home / work grid
- `about.html` — About + testimonials
- `logos.html` — Logo design grid with lightbox
- `fashion.html` — Fashion photography gallery
- `engagement.html` — Engagement photography gallery
- `kids-newborn.html` — Kids & newborn photography gallery
- `videography.html` — Video embeds
- `p2p.html` — Cars.com P2P case study
- `wyndhamcheckout.html` — Club Wyndham checkout case study
- `bmchat.html` — Benjamin Moore Chat 2.0 case study
- `sellindex-apps.html` — Cars.com Sell Index mobile apps case study
- `whatchapp.html` — Whatch App case study
- `style.css` — All styles
- `nav.js` — Shared navigation injector
