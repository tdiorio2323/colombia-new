<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Eimy Contreras - Colombian Luxury

A production-ready luxury web application showcasing exclusive experiences, content, and products. Built with modern web technologies and deployed on Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tdiorio2323/colombia-new)

## ✨ Features

- **🏠 Multi-Page Routing**: React Router with Home and Thank You pages
- **🧭 Sticky Navigation**: Smooth scroll to sections with mobile-responsive menu
- **💎 Exclusive Experiences**: Luxury yacht tours, penthouse stays, and elite experiences
- **🎨 Content Gallery**: Photos and videos with VIP badges
- **🛍️ Product Collection**: High-end products with ratings
- **👑 Elite Members**: Member leaderboard and join section
- **📧 Contact Form**: Serverless API with Resend email integration
- **✅ Code Quality**: ESLint + Prettier configured

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript 5.8.2
- **Routing**: React Router DOM 7.9.5
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS (CDN with custom luxury theme)
- **Backend**: Vercel Serverless Functions
- **Email**: Resend API
- **Code Quality**: ESLint 9 + Prettier 3

## 🚀 Routes

- `/` - Home page with all sections
- `/thank-you` - Confirmation page after contact form submission

## 📦 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/tdiorio2323/colombia-new.git
   cd colombia-new
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local` and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   Required variables for production:

   ```env
   # Resend API (required for contact form)
   RESEND_API_KEY=re_your_api_key
   CONTACT_TO=your-email@example.com

   # Supabase (optional - for backup storage)
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code with ESLint
npm run lint:fix     # Lint and auto-fix issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying
npm run typecheck    # Run TypeScript type checking
```

## 🌐 Deployment (Vercel)

### Deploy via Vercel Dashboard

1. **Push to GitHub** (if not already done)

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

3. **Configure Environment Variables**

   In Vercel dashboard, add these environment variables:

   ```
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_TO=your-email@example.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add RESEND_API_KEY
vercel env add CONTACT_TO

# Deploy to production
vercel --prod
```

## 📧 Setting Up Resend

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use `onboarding@resend.dev` for testing)
3. Create an API key
4. Add to `.env.local` and Vercel environment variables
5. Update `api/contact.ts` line 58 with your verified domain:
   ```typescript
   from: 'Colombian Luxury <noreply@yourdomain.com>'
   ```

## 🏗️ Project Structure

```
colombia-new/
├── api/
│   └── contact.ts           # Vercel serverless function (Resend email)
├── components/
│   ├── Header.tsx           # Sticky nav with smooth scroll
│   ├── Hero.tsx
│   ├── ExclusiveExperiences.tsx
│   ├── ExclusiveContent.tsx
│   ├── LuxuryCollection.tsx
│   ├── EliteMembers.tsx
│   ├── Footer.tsx
│   ├── InterestFormModal.tsx # Contact form with API integration
│   ├── SectionTitle.tsx
│   ├── Icons.tsx
│   └── data.ts              # Mock data
├── pages/
│   ├── Home.tsx             # Home route (/)
│   └── ThankYou.tsx         # Thank you route (/thank-you)
├── lib/
│   └── supabase.ts          # Supabase client (optional)
├── App.tsx                  # Root component with BrowserRouter
├── index.tsx                # Entry point
├── types.ts                 # TypeScript interfaces
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint flat config
├── .prettierrc              # Prettier config
└── .env.example             # Environment variables template
```

## 🔧 Configuration Files

- **vite.config.ts**: Vite build configuration with path aliases
- **tsconfig.json**: TypeScript compiler options
- **eslint.config.js**: ESLint 9 flat config with React/TS rules
- **.prettierrc**: Code formatting rules
- **index.html**: Tailwind CSS CDN with custom theme

## 🎨 Custom Theme (Tailwind)

Located in `index.html`:

```js
colors: {
  'brand-dark': '#111111',
  'brand-dark-2': '#1a1a1a',
  'brand-gold': '#d4af37',
  'brand-rose': '#f4a9a8'
}
```

## 📝 API Endpoints

### POST /api/contact

Contact form submission endpoint.

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**

```json
{
  "ok": true,
  "messageId": "string"
}
```

**Error Response:**

```json
{
  "ok": false,
  "error": "string"
}
```

## 🐛 Troubleshooting

### Contact form not sending emails

1. Check `RESEND_API_KEY` and `CONTACT_TO` are set in Vercel
2. Verify your domain in Resend dashboard
3. Check Vercel function logs: `vercel logs`

### Build fails on Vercel

1. Ensure all environment variables are set
2. Run `npm run build` locally to test
3. Check Vercel build logs for specific errors

### TypeScript errors

```bash
npm run typecheck
```

## 📄 License

Private - All rights reserved

## 👤 Author

**Eimy Contreras** - [Colombian Luxury](https://github.com/tdiorio2323/colombia-new)

---

Built with 💎 in Colombia
