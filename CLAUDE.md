# 🤖 CLAUDE.md - Development Guide

## How to Extend This Application

This guide helps developers (human or AI) understand the codebase architecture and how to extend it with new features.

---

## 📁 Architecture Overview

### Component Structure

```
App.tsx                          # Root: BrowserRouter + Layout
├── Header.tsx                   # Sticky nav (appears on all pages)
├── Routes
│   ├── / → pages/Home.tsx       # Main landing page
│   └── /thank-you → pages/ThankYou.tsx
├── Footer.tsx                   # Footer (appears on all pages)
└── InterestFormModal.tsx        # Modal (global state in App.tsx)
```

### Data Flow

1. **Static Data**: All mock data lives in `components/data.ts`
2. **Form Submission**: Modal → `/api/contact` → Resend → Email
3. **Navigation**: Header smooth scrolls to sections on Home page
4. **State**: Minimal - only modal open/close state in App.tsx

---

## 🎯 Common Extension Tasks

### 1. Adding a New Page/Route

**Example: Add an "About" page**

```typescript
// 1. Create pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-serif font-bold bg-clip-text text-transparent bg-brand-gradient mb-8">
          About Us
        </h1>
        <p className="text-stone-300 text-lg leading-relaxed">Your content here...</p>
      </div>
    </div>
  );
};

export default About;

// 2. Add route to App.tsx
import About from './pages/About';

// Inside <Routes>:
<Route path="/about" element={<About />} />

// 3. Add link to Header.tsx navigation
// Update navLinks array or add separate link
```

### 2. Adding a New Section to Home Page

**Example: Add a "Testimonials" section**

```typescript
// 1. Create types.ts interface
export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

// 2. Add data to components/data.ts
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sofia Martinez',
    title: 'Elite Member',
    content: 'An unforgettable luxury experience...',
    rating: 5,
  },
  // ...more testimonials
];

// 3. Create components/Testimonials.tsx
import React from 'react';
import type { Testimonial } from '../types';
import { testimonials } from './data';
import SectionTitle from './SectionTitle';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title="What Our Clients Say" subtitle="Real experiences from elite members" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-dark-2 border border-stone-700/50 rounded-xl p-6"
            >
              <p className="text-stone-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-stone-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

// 4. Add to pages/Home.tsx
import Testimonials from '../components/Testimonials';

// Inside main tag:
<section id="testimonials">
  <Testimonials />
</section>

// 5. Add to Header.tsx navLinks
{ name: 'Testimonials', sectionId: 'testimonials' }
```

### 3. Adding a New API Endpoint

**Example: Add a newsletter subscription endpoint**

```typescript
// Create api/newsletter.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ ok: false, error: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email' });
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'Colombian Luxury <noreply@yourdomain.com>',
      to: [email],
      subject: 'Welcome to Colombian Luxury Newsletter',
      html: '<h1>Welcome!</h1><p>Thank you for subscribing...</p>',
    });

    // Optionally: Save to database (Supabase, etc.)

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Newsletter API error:', error);
    return res.status(500).json({ ok: false, error: 'Failed to subscribe' });
  }
}

// Use in a component:
const handleSubscribe = async (email: string) => {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  // Handle response...
};
```

### 4. Integrating a Database (Supabase)

**Example: Store form submissions in Supabase**

```typescript
// Already configured in lib/supabase.ts

// In api/contact.ts, add after sending email:
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Use service key for server-side
);

// After successful email send:
await supabase.from('contact_inquiries').insert([
  {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    created_at: new Date().toISOString(),
  },
]);

// Don't forget to add environment variables to Vercel:
// SUPABASE_URL
// SUPABASE_SERVICE_KEY
```

### 5. Adding Authentication

**Example: Protect certain routes**

```typescript
// Install dependencies:
// npm install @clerk/clerk-react

// Wrap App with ClerkProvider in index.tsx:
import { ClerkProvider } from '@clerk/clerk-react';

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// Protect routes in App.tsx:
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

<Route
  path="/members-only"
  element={
    <>
      <SignedIn>
        <MembersOnlyPage />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  }
/>
```

### 6. Adding Animation

**Example: Animate section entry with Framer Motion**

```bash
npm install framer-motion
```

```typescript
import { motion } from 'framer-motion';

const AnimatedSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-4"
    >
      <h2>Animated Content</h2>
    </motion.section>
  );
};
```

---

## 🎨 Styling Guidelines

### Using Brand Colors

Always use Tailwind's custom brand colors defined in `index.html`:

```jsx
<div className="bg-brand-dark text-brand-gold">
  <h1 className="bg-clip-text text-transparent bg-brand-gradient">Gradient Text</h1>
  <button className="bg-brand-gradient hover:bg-brand-gradient-hover">Button</button>
</div>
```

### Typography

- **Headings**: Use `font-serif` (Cormorant Garamond)
- **Body**: Default `font-sans` (Poppins)

```jsx
<h1 className="text-5xl font-serif font-bold">Luxury Title</h1>
<p className="text-lg text-stone-300">Body text</p>
```

### Common Patterns

**Card:**

```jsx
<div className="bg-brand-dark-2 border border-stone-700/50 rounded-xl p-6 hover:border-brand-rose/50 transition-all">
  Content
</div>
```

**Button (Primary):**

```jsx
<button className="px-8 py-3 bg-brand-gradient text-brand-dark font-bold rounded-full shadow-lg hover:shadow-glow transition-all">
  Click Me
</button>
```

---

## 🧪 Testing

### Manual Testing Checklist

Before deploying:

- [ ] Test all routes (/, /thank-you)
- [ ] Test navigation (desktop & mobile)
- [ ] Test contact form submission
- [ ] Test mobile menu collapse/expand
- [ ] Test smooth scroll to sections
- [ ] Verify email delivery (check spam folder)
- [ ] Test on different browsers (Chrome, Firefox, Safari)

### Adding Automated Tests (Future)

```bash
# Install Vitest + React Testing Library
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

# Create tests/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen.getByText('Experiences')).toBeInTheDocument();
});
```

---

## 🐛 Debugging Tips

### Common Issues

**1. Modal not closing after form submission**

- Check `onClose()` is called before `navigate()`
- Verify `setTimeout` delay (300ms) matches modal animation

**2. Smooth scroll not working**

- Ensure section IDs match `navLinks` array in Header.tsx
- Verify `scrollToSection` offset matches header height

**3. API endpoint 500 error**

- Check Vercel logs: `vercel logs`
- Verify environment variables are set
- Test locally with `npm run dev` and `.env.local`

**4. Tailwind classes not applying**

- Check class names are correct (use auto-complete)
- Verify CDN is loaded in `index.html`
- Check for conflicting styles

---

## 📦 Deployment Checklist

Before deploying to production:

1. **Environment Variables**

   - [ ] `RESEND_API_KEY` set in Vercel
   - [ ] `CONTACT_TO` set in Vercel
   - [ ] Optional: `SUPABASE_URL` and `SUPABASE_SERVICE_KEY`

2. **Code Quality**

   - [ ] Run `npm run lint` (no errors)
   - [ ] Run `npm run typecheck` (no errors)
   - [ ] Run `npm run format` (all formatted)

3. **Build Test**

   - [ ] Run `npm run build` (successful)
   - [ ] Run `npm run preview` and test locally

4. **Content Review**
   - [ ] Update `api/contact.ts` line 58 with verified domain
   - [ ] Update footer links and contact info
   - [ ] Replace placeholder images in `components/data.ts`
   - [ ] Update metadata in `index.html` (title, description)

---

## 🔐 Security Best Practices

1. **Never commit secrets**: Use `.env.local` (gitignored)
2. **Use environment variables**: Access via `process.env` in API routes
3. **Validate all inputs**: Check email format, required fields, etc.
4. **Rate limiting**: Add rate limiting to API routes (future enhancement)
5. **CORS**: API routes are protected by Vercel's default CORS policy

---

## 📚 Additional Resources

- [React Router Docs](https://reactrouter.com/)
- [Vercel Serverless Functions](https://vercel.com/docs/functions)
- [Resend API Docs](https://resend.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)

---

## 🤝 Contributing

When extending this project:

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Make atomic commits with clear messages
3. Run linting and type checking before committing
4. Test thoroughly on desktop and mobile
5. Update this CLAUDE.md if adding new patterns

---

**Need help?** Check the [README.md](./README.md) for setup instructions or the codebase comments for inline documentation.
