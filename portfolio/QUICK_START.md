# Quick Start Guide

Get your portfolio running in under 5 minutes.

## 🚀 Launch Development Server

```bash
# 1. Navigate to the project
cd portfolio

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev
```

**Open in browser**: [http://localhost:3000](http://localhost:3000)

## 📝 Immediate Next Steps

### 1. Add Your Photo (2 minutes)
```bash
# Place your photo in:
public/images/ivan-nunez.jpg

# Then edit:
components/about/ProfileHero.tsx
# Uncomment the <Image> component (line ~45)
```

### 2. Update Contact Info (1 minute)
```bash
# Edit:
lib/constants.ts

# Update:
- email address
- LinkedIn URL
```

### 3. Add Project Images (30 minutes)
```bash
# For each project, add to:
public/projects/[project-name]/
  ├── hero.jpg
  └── thumbnail.jpg

# Then uncomment <Image> components in:
- components/home/FeaturedWork.tsx
- components/work/ProjectCard.tsx
- components/work/ProjectDetail.tsx
```

## 🎨 Key Files to Customize

| File | What to Update |
|------|---------------|
| `lib/constants.ts` | Contact info, experience timeline, skills |
| `lib/projects.ts` | Project descriptions and details |
| `public/images/` | Your professional photo |
| `public/projects/` | Project screenshots |
| `components/contact/ContactForm.tsx` | Form submission logic |

## 📚 Documentation

- **README.md** - Project overview
- **SETUP_GUIDE.md** - Detailed setup instructions
- **PROJECT_SUMMARY.md** - Complete project documentation

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Run production build locally

# Code Quality
npm run lint        # Run linting

# Clean restart
rm -rf .next        # Clear Next.js cache
rm -rf node_modules # Remove dependencies
npm install         # Reinstall
```

## 🆘 Troubleshooting

### Port 3000 in use?
```bash
# Option 1: Kill process
lsof -ti:3000 | xargs kill -9

# Option 2: Use different port
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
rm package-lock.json
npm install
```

### Styles not updating?
```bash
rm -rf .next
npm run dev
```

## ✅ Ready to Deploy?

```bash
# 1. Build the project
npm run build

# 2. Test production build
npm start

# 3. Deploy to Vercel
# Push to GitHub, then import to Vercel
# See SETUP_GUIDE.md Phase 6 for details
```

## 🎯 Customization Checklist

- [ ] Added your photo
- [ ] Updated contact information
- [ ] Added project images
- [ ] Tested all pages
- [ ] Configured contact form
- [ ] Ready to deploy!

---

**Need more help?** See SETUP_GUIDE.md for detailed instructions.
