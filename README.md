<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Eimy Contreras - Colombian Luxury

A luxurious web application showcasing exclusive experiences, content, and products. Built with React 19, TypeScript, and Vite.

View your app in AI Studio: https://ai.studio/apps/drive/16-SyMSLBU5IDrcmcRkvIt_bMEq6T0hn4

## Features

- **Exclusive Experiences**: Showcase luxury experiences like yacht tours, penthouse stays, and more
- **Content Gallery**: Display photos and videos with VIP badges
- **Product Collection**: High-end products with ratings and shopping cart
- **Elite Members**: Member leaderboard and join section
- **Contact Form**: Integrated with Formspree and Supabase for inquiry submissions

## Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (CDN)
- **Backend**: Supabase
- **Form Handling**: Formspree + Supabase

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   Create a `.env.local` file in the root directory with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
npm run preview
```

## Supabase Setup

The app uses Supabase to store contact form submissions. To set up the database:

1. Create a table named `contact_inquiries` with the following columns:
   - `id` (uuid, primary key)
   - `name` (text)
   - `email` (text)
   - `message` (text)
   - `created_at` (timestamp)

2. Enable Row Level Security (RLS) and create appropriate policies

## Form Integration

Contact form submissions are sent to:
- **Primary**: Formspree (https://formspree.io/f/mwprljle)
- **Secondary**: Supabase database for backup/analytics
