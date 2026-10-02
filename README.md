# Car Service QR Website

A mobile-first React + Vite landing website designed as the digital extension of the supplied physical car-service poster.

## Run locally

```bash
npm install
npm run dev
```

## Build for Vercel

```bash
npm run build
```

Vercel can deploy the project directly with the Vite preset. No backend or environment variables are required.

## Change business details

Edit only:

`src/data/businessInfo.js`

Important configurable values:
- `phone`
- `whatsapp`
- `locationUrl`
- `websiteUrl`
- `tollIncluded`
- service areas
- pricing text
- vehicle gallery/specifications

`whatsapp` is intentionally empty until the correct WhatsApp number is confirmed. `locationUrl` is intentionally empty until the real Google Maps link is known. `tollIncluded: null` shows a confirmation message rather than making an unsupported claim.

## QR code

After Vercel deployment, replace `websiteUrl` with the final public URL. Generate the physical QR code using that URL. The public site does not include a QR generator.

## Assets

The vehicle visuals are optimized WebP crops made from the supplied promotional poster. Replace them later with clean original vehicle photos in `public/assets/` if available.
