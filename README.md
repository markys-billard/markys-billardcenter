# Markys Billardcenter Brig - High-End Website

Modern, responsive website for a premium billiard center in Brig, Switzerland.

## Features

- **Multi-language support**: DE, FR, IT, EN (language switcher in header)
- **Responsive design**: Mobile-first approach with optimized layouts for all devices
- **Performance optimized**: Lazy loading, WebP images, minimal JavaScript
- **SEO ready**: Meta tags, OpenGraph, Twitter Cards, LocalBusiness structured data
- **Accessibility**: WCAG AA compliant, semantic HTML, keyboard navigation

## Design System

### Colors
- **Primary**: `#E87E00` (Orange) - Main accent color
- **Background**: `#011423` (Ink) - Dark base
- **Light Background**: `#EADFC2` (Cream) - Content sections
- **Accents**: `#7C98B3` (Steel), `#6883BA` (Bay), `#618985` (Sage)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body/UI**: Inter (sans-serif)

## Pages

1. **Home** (`/`) - Hero slider, USPs, offerings, events, opening hours
2. **Angebot** (`/angebot`) - Detailed service descriptions (Billard, Darts, Bar/Lounge)
3. **Gastro** (`/gastro`) - Gastronomy offerings, menu download
4. **Teamevents** (`/teamevents`) - Corporate events and team building
5. **Turniere** (`/turniere`) - Tournaments and competitions
6. **Preise & Mitgliedschaften** (`/preise-mitgliedschaften`) - Pricing and memberships
7. **Kontakt & Reservation** (`/kontakt-reservation`) - Contact form and information
8. **Impressum** (`/impressum`) - Legal information
9. **Datenschutz** (`/datenschutz`) - Privacy policy

## Future Enhancements

### Dynamic Content Loading
Components marked with `data-component` attributes are ready for CMS/Google Sheets integration:

- **Events** (`data-component="events"`): Tournament listings on Home and Turniere pages
- **Downloads** (`data-component="downloads"`): PDF menu links on Gastro page

### To Replace

1. **Images**: Replace placeholder `/image.png` with actual high-quality photos
2. **Logo**: Already using `/logo.svg` - ensure final logo is in place
3. **Contact Info**: Update phone numbers, email, and social media links
4. **Google Maps**: Replace map placeholder with actual embedded map
5. **PDF Links**: Add actual menu/price list PDFs

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Performance Features

- Hero images load immediately, others lazy-loaded
- Minimal JavaScript (vanilla JS for slider only)
- WebP image format support
- Respects `prefers-reduced-motion`
- Optimized font loading

## Accessibility

- Skip-to-content link
- Semantic landmarks
- ARIA labels where needed
- Keyboard navigation
- 44px minimum tap targets
- AA contrast ratios

## Contact

**Markys Billardcenter Brig**
Kantonsstrasse 51
CH-3902 Brig-Glis
+41 79 436 81 34
markys@bluewin.ch
