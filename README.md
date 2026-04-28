# Ivan Nunez — Portfolio Website

A modern, premium portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Showcases UX strategy, platform design, and AI prototyping work.

## ✨ Features

- **Multipage Architecture**: Home, About, Work, Individual Project Pages, Contact
- **Interactive Elements**:
  - Featured work carousel with smooth transitions
  - Animated experience timeline
  - Filterable project grid
  - Hover-reveal project cards
  - Smooth page transitions
- **Premium Design**: Slalom brand-aligned with elevated visual layer
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Built with Next.js 14 App Router for optimal loading
- **Accessible**: WCAG 2.1 AA compliant design patterns

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── work/                # Work listing & detail pages
│   │   └── [slug]/         # Dynamic project pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── Card.tsx
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── home/               # Home page components
│   ├── about/              # About page components
│   ├── work/               # Work page components
│   └── contact/            # Contact page components
├── lib/
│   ├── types.ts            # TypeScript types
│   ├── projects.ts         # Project data
│   └── constants.ts        # Site configuration & constants
├── public/
│   ├── images/             # Your photos
│   └── projects/           # Project images
└── tailwind.config.ts      # Tailwind configuration with Slalom brand tokens
```

## 🎨 Customization Guide

### 1. Add Your Personal Information

**Edit `/lib/constants.ts`:**

```typescript
export const SITE_CONFIG = {
  name: 'Ivan Nunez',
  contact: {
    email: 'your.email@slalom.com',        // ← Update
    linkedin: 'https://linkedin.com/in/yourprofile', // ← Update
    location: 'Your City, State',
  },
};
```

### 2. Add Your Photo

**Place your professional photo at:**
```
/public/images/ivan-nunez.jpg
```

**Then uncomment the Image component in:**
- `/components/about/ProfileHero.tsx` (lines marked with TODO)

### 3. Add Project Images

**For each project, add images to:**
```
/public/projects/[project-slug]/
  ├── hero.jpg        (16:9 aspect ratio, ~1920x1080px)
  └── thumbnail.jpg   (16:10 aspect ratio, ~1200x750px)
```

**Then uncomment Image components in:**
- `/components/home/FeaturedWork.tsx`
- `/components/work/ProjectCard.tsx`
- `/components/work/ProjectDetail.tsx`

### 4. Customize Projects

**Edit `/lib/projects.ts`:**

- All your current projects are already loaded from the PDF
- To add new projects, copy the structure and add to the array
- To modify existing projects, edit the fields directly

### 5. Update Experience Timeline

**Edit `/lib/constants.ts`:**

The `EXPERIENCE_TIMELINE` array contains your professional history. Modify as needed.

### 6. Contact Form Integration

**The contact form is currently set up with a placeholder submission handler.**

**To integrate with a real backend:**

1. **Option A: Use Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update the `handleSubmit` function in `/components/contact/ContactForm.tsx`

2. **Option B: Use your own API**
   - Create an API route at `/app/api/contact/route.ts`
   - Implement your submission logic
   - Update the form to POST to your API

3. **Option C: Use a service like SendGrid, Resend, etc.**
   - Install the SDK
   - Add your API keys to `.env.local`
   - Implement in the form component

## 🎨 Slalom Brand Colors

The site uses official Slalom brand colors defined in `tailwind.config.ts`:

- **Slalom Blue**: `#0C62FB`
- **Supporting Colors**: Green, Coral, Yellow, Purple
- **Neutral Grays**: 90, 70, 50, 30, 10

Access in components:
```tsx
className="bg-slalom-blue text-white"
className="text-support-green"
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Import your repository**
4. **Deploy!**

Vercel will automatically:
- Build your Next.js app
- Set up continuous deployment
- Provide you with a production URL

### Build for Production Locally

```bash
npm run build
npm start
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 TODO Checklist

Use this checklist to track your customization progress:

- [ ] Update contact information in `/lib/constants.ts`
- [ ] Add your professional photo to `/public/images/ivan-nunez.jpg`
- [ ] Uncomment Image components in ProfileHero
- [ ] Add project images to `/public/projects/[slug]/`
- [ ] Uncomment Image components in work components
- [ ] Review and update project descriptions in `/lib/projects.ts`
- [ ] Set up contact form backend integration
- [ ] Test on mobile devices
- [ ] Review SEO metadata in each page
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Deploy to production

## 🎯 Key Interactive Features

### 1. Featured Work Carousel (Home Page)
- Smooth slide transitions between projects
- Dot pagination indicators
- Keyboard navigation support

### 2. Experience Timeline (About Page)
- Scroll-triggered animations
- Vertical timeline with gradient line
- Animated entry of timeline items

### 3. Filterable Project Grid (Work Page)
- Category-based filtering
- Smooth layout animations with Framer Motion
- Hover effects on project cards

### 4. Page Transitions
- Fade and slide transitions between routes
- Consistent animation timing

## 🎨 Design Philosophy

This portfolio follows these design principles:

1. **Slalom Brand Foundation**: Colors, typography, and ethos from Slalom Style Guide
2. **Elevated Layer**: Premium spacing, sophisticated animations, refined interactions
3. **Human-Centered**: Clear hierarchy, readable typography, accessible contrast
4. **Performance**: Optimized images, code splitting, fast page loads
5. **Maintainability**: Clean component structure, TypeScript for type safety

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Images not loading
- Make sure image paths match the file locations in `/public/`
- Image paths should start with `/` (e.g., `/images/photo.jpg`)
- Check image file extensions match (jpg vs jpeg)

### Styling not updating
- Clear `.next` cache: `rm -rf .next`
- Restart dev server

## 📧 Support

For questions or issues with this portfolio:
- Review this README
- Check the TODO comments in the code
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Refer to [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Built with ♥ using Next.js, TypeScript, Tailwind CSS, and Framer Motion
