This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact form (no separate backend)

This project sends contact form messages via a Next.js Route Handler at `/api/contact` (see `src/app/api/contact/route.ts`).

Create a `.env.local` (recommended) or `.env` in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
RESEND_FROM="Portfolio Contact <your-verified-sender@your-domain.com>"
RESEND_TO=your_email_where_you_want_to_receive_messages@example.com
```

Notes:

- `RESEND_FROM` must be a sender address that Resend allows for your account (typically a verified domain/sender).
- When deploying (Vercel/Netlify/etc), add the same variables in your hosting provider’s environment settings.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
