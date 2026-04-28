# Portfolio Setup Guide

Complete step-by-step guide to customize and launch your portfolio website.

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] Node.js 18.17 or later installed
- [ ] A code editor (VS Code recommended)
- [ ] Your professional photo ready
- [ ] Project screenshots/images ready
- [ ] Your resume/bio content reviewed

## 🚀 Phase 1: Initial Setup (5 minutes)

### Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the portfolio with placeholder content.

## 🎨 Phase 2: Add Your Images (30 minutes)

### Your Profile Photo

1. **Prepare your photo:**
   - Square format (recommended: 800x800px)
   - Professional headshot
   - Good lighting and clear background
   - Save as `ivan-nunez.jpg`

2. **Add to project:**
   ```
   /public/images/ivan-nunez.jpg
   ```

3. **Update code:**
   - Open `/components/about/ProfileHero.tsx`
   - Find the TODO comment around line 30
   - Uncomment the `<Image>` component
   - Comment out or remove the placeholder `<div>`

### Project Images

For each of your 7 projects, you need 2 images:

1. **Hero image** (16:9, ~1920x1080px) - Main project showcase
2. **Thumbnail** (16:10, ~1200x750px) - Grid/carousel view

**Project folders:**
```
/public/projects/
  ├── general-mills/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  ├── sourcewell/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  ├── boston-scientific/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  ├── ice/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  ├── southwest/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  ├── mde/
  │   ├── hero.jpg
  │   └── thumbnail.jpg
  └── nebraska/
      ├── hero.jpg
      └── thumbnail.jpg
```

**Update code to show images:**

1. **Featured Work Carousel** (`/components/home/FeaturedWork.tsx`):
   - Lines ~75-85: Uncomment the `<Image>` component
   - Comment out the placeholder div

2. **Project Cards** (`/components/work/ProjectCard.tsx`):
   - Lines ~30-35: Uncomment the `<Image>` component
   - Comment out the placeholder div

3. **Project Detail** (`/components/work/ProjectDetail.tsx`):
   - Lines ~90-100: Uncomment the `<Image>` component
   - Comment out the placeholder div

## 📝 Phase 3: Update Your Content (20 minutes)

### Contact Information

**Edit `/lib/constants.ts`:**

```typescript
export const SITE_CONFIG = {
  name: 'Ivan Nunez',
  contact: {
    email: 'ivan.nunez@slalom.com',  // ← Update this
    linkedin: 'https://linkedin.com/in/ivannunez',  // ← Update this
    location: 'Minneapolis, MN',
  },
};
```

### Experience Timeline

**Review `/lib/constants.ts` - `EXPERIENCE_TIMELINE`:**

- Already populated with your career history
- Verify dates and descriptions
- Add or remove entries as needed

### Skills List

**Review `/lib/constants.ts` - `SKILLS`:**

- Already populated with your key skills
- Add, remove, or reorder as needed

### Projects

**Review `/lib/projects.ts`:**

- All 7 projects from your PDF are already loaded
- Verify client names, descriptions, and deliverables
- Update any text that needs refinement
- Add new projects by copying the structure

**To add a new project:**

```typescript
{
  id: '8',
  slug: 'new-project-slug',
  title: 'Project Title',
  client: 'Client Name',
  subtitle: 'One-line description',
  category: ['Platform Design', 'UX Research & Strategy'],
  featured: false,
  year: '2024',
  heroImage: '/projects/new-project-slug/hero.jpg',
  thumbnailImage: '/projects/new-project-slug/thumbnail.jpg',
  color: '#0C62FB',
  overview: '...',
  why: '...',
  what: '...',
  wow: '...',
  solutions: '...',
  deliverables: ['Item 1', 'Item 2'],
  tags: ['Tag1', 'Tag2'],
}
```

## 🔧 Phase 4: Configure Contact Form (15 minutes)

The contact form currently has a placeholder handler. Choose an integration:

### Option A: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Update `/components/contact/ContactForm.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }
};
```

### Option B: Custom API Route

1. Create `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Your email sending logic here
  // Use SendGrid, Resend, Nodemailer, etc.
  
  return NextResponse.json({ success: true });
}
```

2. Update the form to POST to `/api/contact`

## ✅ Phase 5: Final Checks (10 minutes)

### Test All Pages

- [ ] **Home page** - Check carousel, animations, links
- [ ] **About page** - Verify photo loads, timeline displays
- [ ] **Work page** - Test category filters, project cards
- [ ] **Individual project pages** - Check all 7 projects load correctly
- [ ] **Contact page** - Test form submission

### Test Responsive Design

- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1440px width)

### Accessibility Check

- [ ] Tab through navigation with keyboard
- [ ] Check color contrast
- [ ] Verify all images have alt text
- [ ] Test with screen reader if possible

### Performance Check

```bash
npm run build
npm start
```

Check the build output for any errors or warnings.

## 🚢 Phase 6: Deploy (10 minutes)

### Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional):**
   - Go to your project settings in Vercel
   - Add your custom domain
   - Update DNS records as instructed

## 📊 Phase 7: Analytics & SEO (Optional)

### Add Analytics

**Google Analytics 4:**

1. Get your GA4 measurement ID
2. Create `/app/analytics.tsx`:

```typescript
'use client';

import Script from 'next/script';

export function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
```

3. Add to `/app/layout.tsx`:
```typescript
import { Analytics } from './analytics';

// Inside the body tag:
<Analytics />
```

### Improve SEO

1. **Add Open Graph images:**
   - Create a 1200x630px image for social sharing
   - Add to `/public/og-image.jpg`

2. **Update metadata in `/app/layout.tsx`:**
```typescript
export const metadata = {
  // ... existing metadata
  openGraph: {
    images: ['/og-image.jpg'],
  },
};
```

3. **Create a sitemap:**
   - Next.js can auto-generate this
   - Create `/app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `https://yourdomain.com/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/work',
      lastModified: new Date(),
    },
    {
      url: 'https://yourdomain.com/contact',
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
```

## 🎯 Quick Reference Checklist

Use this checklist to track your progress:

### Content
- [ ] Added profile photo
- [ ] Added all project images (7 projects × 2 images)
- [ ] Updated contact email and LinkedIn
- [ ] Reviewed and updated project descriptions
- [ ] Reviewed experience timeline
- [ ] Reviewed skills list

### Code Updates
- [ ] Uncommented Image components in ProfileHero
- [ ] Uncommented Image components in FeaturedWork
- [ ] Uncommented Image components in ProjectCard
- [ ] Uncommented Image components in ProjectDetail
- [ ] Configured contact form integration

### Testing
- [ ] Tested all pages in browser
- [ ] Tested mobile responsiveness
- [ ] Tested navigation and links
- [ ] Tested contact form submission
- [ ] Ran production build successfully

### Deployment
- [ ] Pushed code to GitHub
- [ ] Deployed to Vercel
- [ ] Verified live site works
- [ ] (Optional) Added custom domain
- [ ] (Optional) Added analytics

## 🆘 Common Issues & Solutions

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not displaying
- Verify file paths match exactly (case-sensitive)
- Ensure images are in `/public/` directory
- Image paths in code should start with `/` (e.g., `/images/photo.jpg`)

### Styles not updating
```bash
rm -rf .next
npm run dev
```

### Build errors
- Check for TypeScript errors in terminal
- Ensure all imports are correct
- Verify all image paths exist

## 📞 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/

---

**Estimated Total Setup Time**: 90 minutes

Good luck with your portfolio! 🚀
