# Eventrra by Peththa

Luxury single-page Angular website for Eventrra by Peththa, an event coordinating and decoration company in Colombo, Sri Lanka.

## Tech Stack

- Angular 21
- SCSS
- Standalone Angular components
- EmailJS contact form integration
- Lucide Angular icons
- Vercel-ready production build

## Install

```bash
npm install
```

## Run Locally

```bash
npm start
```

Open `http://localhost:4200/`.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Configure EmailJS

EmailJS placeholder values live in:

- `src/environments/environment.ts`
- `src/environments/environment.development.ts`
- `src/environments/environment.production.ts`

Replace these placeholders with your EmailJS values:

```ts
emailjs: {
  serviceId: 'EMAILJS_SERVICE_ID',
  templateId: 'EMAILJS_TEMPLATE_ID',
  publicKey: 'EMAILJS_PUBLIC_KEY',
}
```

Do not commit real private secrets. EmailJS public keys are intended for browser use, but keep service configuration controlled in your EmailJS dashboard.

The form sends these template fields:

- `from_name`
- `from_email`
- `phone`
- `event_type`
- `event_date`
- `message`

## Update Content

Editable data files are in `src/app/data/`:

- `services.data.ts`
- `gallery.data.ts`
- `testimonials.data.ts`
- `contact.data.ts`

## Replace Gallery Images

Update `imgUrl` values in `src/app/data/gallery.data.ts`.

Each gallery item uses:

```ts
{
  id: 1,
  title: 'Candlelit Proposal',
  category: 'Wedding Proposals',
  imgUrl: 'https://example.com/image.jpg',
}
```

Use optimized public image URLs or move local assets into `public/` and reference them from the site.

## WhatsApp Booking

The floating Book Now button uses the sample WhatsApp number and pre-filled message from `src/app/data/contact.data.ts`.

Sample number:

```ts
+94 77 123 4567
```

Sample message:

```text
Hi Eventrra by Peththa, I would like to book an event decoration service.
```

## Deploy to Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Use the Angular defaults:
   - Build command: `npm run build`
   - Output directory: `dist/app/browser`
4. Deploy.

For custom domains or production EmailJS values, configure them before the final production deployment.
