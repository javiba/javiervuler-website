VULER PRESS — PHASE 1 DEPLOYMENT
=================================

Project Structure:
├── index.html
├── about.html
├── book.html
├── consultations.html
├── knowledge-centre.html
├── faq.html
├── contact.html
├── privacy.html
├── cookies.html
├── terms.html
├── legal.html
├── 404.html
├── css/
│   ├── style.css (main stylesheet)
│   └── cookie-banner.css (cookie banner styles)
├── js/
│   └── script.js (cookie banner + language selector)
└── images/
    ├── cover-en.jpg
    ├── cover-es.jpg
    └── cover-fr.jpg

SETUP INSTRUCTIONS
==================

1. Create folder structure:
   - Create a "css" folder
   - Create a "js" folder
   - Create an "images" folder

2. Add CSS files to html headers:
   In each HTML file, add this line in the <head>:
   <link rel="stylesheet" href="css/cookie-banner.css">
   
   (It's already included in all HTML files)

3. Add book cover images:
   - Place cover-en.jpg, cover-es.jpg, cover-fr.jpg in the images/ folder
   - Make sure filenames match exactly

4. Update placeholder content:
   The following placeholders need to be filled in:
   
   In privacy.html, cookies.html, terms.html, legal.html:
   - [DATE TO BE INSERTED BY LEGAL] → Replace with current date
   - [CONTACT EMAIL TO BE INSERTED BY JAVIER] → Replace with email
   - [MAILING ADDRESS TO BE INSERTED BY JAVIER] → Replace with address
   - [JURISDICTION TO BE INSERTED BY JAVIER] → Replace with jurisdiction
   - [ANALYTICS PROVIDER TO BE SPECIFIED] → Specify if using analytics
   - [MARKETING PLATFORM TO BE SPECIFIED IF APPLICABLE] → Specify if applicable

5. Configure DNS:
   Point javiervuler.com to your hosting provider.
   Use these DNS records:
   - A record pointing to your Vercel project (or hosting IP)
   - Or CNAME record pointing to your hosting

DEPLOYMENT TO VERCEL
====================

1. Create a Vercel account (free tier available)
2. Connect your repository or upload files
3. Configure:
   - Framework: "Other"
   - Output Directory: "."
   - Root Directory: "."
4. Add environment variables (if needed in Phase 2)
5. Deploy

ALTERNATIVE: Deploy to any web host
====================================

This is a static HTML/CSS/JS website. It requires:
- No server-side processing
- No database
- Standard HTTP hosting

Upload via:
- FTP
- SFTP
- CPanel File Manager
- Git deployment
- Cloud hosting (AWS, Azure, Google Cloud, etc.)

VERCEL-SPECIFIC (.vercel.json)
===============================

If deploying to Vercel, create a vercel.json in the root:

{
  "buildCommand": "",
  "outputDirectory": ".",
  "rewrites": [
    {
      "source": "/404",
      "destination": "/404.html"
    }
  ]
}

ROBOTS.TXT
==========

Create robots.txt in the root:

User-agent: *
Allow: /

Sitemap: https://javiervuler.com/sitemap.xml

SITEMAP.XML (Phase 2)
====================

Placeholder for sitemap generation. Will be implemented in Phase 2
with dynamic sitemap generation based on language structure.

PHASE 2 FEATURES (Coming Later)
================================

- Newsletter integration (Brevo)
- Email form processing
- Premium content access system
- Multilingual routing (EN/ES/FR)
- Analytics
- User authentication
- Email verification
- Resource downloads

SUPPORT & CUSTOMIZATION
========================

Before going live, have a lawyer review:
1. privacy.html
2. cookies.html
3. terms.html
4. legal.html

And customize:
- Company contact details
- Jurisdiction information
- Legal entity details
- Analytics providers (if using)

ACCESSIBILITY CHECK
===================

This site includes:
- Semantic HTML
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Skip-to-content link
- Proper heading hierarchy
- Alt text support for images
- Form labels and ARIA attributes

Test with:
- Screen readers (NVDA, JAWS, VoiceOver)
- Keyboard only navigation
- Mobile browsers

SEO BASICS
==========

Each page includes:
- Unique <title> tags
- Proper <meta> descriptions
- Canonical links
- Semantic HTML structure
- Mobile-responsive design

Next steps:
- Submit sitemap to Google Search Console
- Verify domain ownership
- Monitor indexing status

CUSTOM CONFIGURATION NEEDED
============================

Before deployment, update:

1. Contact email (multiple pages)
2. Company address (multiple pages)
3. Business registration details
4. Jurisdiction information
5. Legal entity name/structure
6. Analytics provider (if using)
7. Book retailer links (where to buy section)

PERFORMANCE CHECKLIST
======================

- CSS files minified (Phase 2)
- JavaScript optimized (Phase 2)
- Images compressed (upload optimized JPGs)
- Font loading optimized (Phase 2)
- Lazy loading for images (Phase 2)
- Cache headers configured (hosting-specific)

TESTING CHECKLIST
=================

Before going live:
□ Test all links (internal and external)
□ Test forms
□ Test language selector buttons
□ Test cookie banner
□ Test on mobile (375px, 768px, 1024px)
□ Test on desktop (1920px+)
□ Test accessibility (keyboard navigation)
□ Test different browsers (Chrome, Firefox, Safari, Edge)
□ Verify all images load
□ Check for console errors
□ Test 404 page (visit non-existent URL)

DOCUMENT STRUCTURE
==================

All pages use:
- Semantic HTML5 elements
- ARIA labels where appropriate
- Proper heading hierarchy
- Mobile-first responsive design
- BEM CSS naming convention

Expected page size:
- Each page: 15-25 KB (without images)
- CSS bundle: ~35 KB
- JS bundle: ~8 KB
- Total with images: ~200-400 KB per page view

This Phase 1 is a solid, accessible, SEO-friendly foundation.
Next phases will add interactive features and content management.
