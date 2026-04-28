# Portfolio Site Map & Component Guide

Visual guide to your portfolio's structure, pages, and components.

## 🗺️ Site Structure

```
Home (/)
├─ Hero Section
│  ├─ Animated introduction
│  ├─ Tagline: "Turning ambiguity into testable, human-centered prototypes"
│  ├─ Two CTA buttons (View work, About me)
│  └─ Floating gradient orbs (decorative)
│
├─ Featured Work Carousel ⚡ INTERACTIVE
│  ├─ Project image (large)
│  ├─ Client badge + year
│  ├─ Project title & subtitle
│  ├─ Category badges
│  ├─ Overview text
│  ├─ "View case study" link
│  └─ Navigation (prev/next, dots)
│
└─ Quick Intro Section
   ├─ Heading: "25+ years turning complex problems..."
   ├─ Brief bio paragraph
   └─ Three highlight cards:
      ├─ Strategic thinking
      ├─ Human-centered learning
      └─ Cross-functional alignment

─────────────────────────────────────

About (/about)
├─ Profile Hero
│  ├─ Professional photo (square, left)
│  ├─ Name & title (right)
│  ├─ Bio paragraphs
│  └─ Contact info (location, email, LinkedIn)
│
├─ Experience Timeline ⚡ INTERACTIVE
│  ├─ Vertical gradient line
│  ├─ Animated dots on scroll
│  └─ Eight career milestones (1994-2024):
│     ├─ Year badge
│     ├─ Job title
│     ├─ Company name
│     └─ Description
│
└─ Philosophy Section
   ├─ AI Prototyping Workflow
   │  └─ Five phase cards:
   │     ├─ Frame (Understand)
   │     ├─ Plan (Define)
   │     ├─ Structure (Shape)
   │     ├─ Prototype (Experience)
   │     └─ Learn (Refine)
   │
   └─ Core Capabilities
      └─ Grid of 8 skills with checkmarks

─────────────────────────────────────

Work (/work)
├─ Hero Section
│  ├─ Heading: "Selected work"
│  └─ Description paragraph
│
└─ Project Grid ⚡ INTERACTIVE
   ├─ Category Filter Bar
   │  └─ Buttons: All | UX Research | Platform Design |
   │              AI & Agents | Service Design | CX | Gov
   │
   └─ Project Cards (3 columns on desktop)
      ├─ Project thumbnail image
      ├─ Client badge + Featured badge
      ├─ Project title
      ├─ Subtitle
      ├─ Category badges
      └─ Hover: overlay with "View case study"

─────────────────────────────────────

Project Detail (/work/[slug])
├─ Back Button ("← Back to all projects")
│
├─ Project Hero
│  ├─ Client badge + Year + Featured badge
│  ├─ Project title (large)
│  ├─ Subtitle
│  └─ Category badges
│
├─ Hero Image (16:9, full width)
│
├─ Overview Paragraph (large text)
│
├─ Why / What / Wow Grid
│  ├─ Why card
│  ├─ What card
│  └─ Wow card
│
├─ Solutions & Deliverables (2 columns)
│  ├─ Solutions description
│  └─ Deliverables list (with checkmarks)
│
├─ Tags Section
│  └─ Technology & method badges
│
└─ Next Project CTA
   ├─ "Next project"
   ├─ Project title
   └─ "View case study" button

─────────────────────────────────────

Contact (/contact)
└─ Contact Section (2 columns)
   ├─ Left Column
   │  ├─ Heading: "Let's work together"
   │  ├─ Description
   │  └─ Contact Cards:
   │     ├─ Email (with icon)
   │     ├─ LinkedIn (with icon)
   │     └─ Location (with icon)
   │
   └─ Right Column
      └─ Contact Form
         ├─ Name input
         ├─ Email input
         ├─ Subject input
         ├─ Message textarea
         ├─ Submit button
         └─ Success message (conditional)
```

## 🧩 Component Architecture

### Layout Components

```
Header (all pages)
├─ Logo/Name (left)
├─ Navigation Menu (right, desktop)
│  ├─ Home | About | Work | Contact
│  └─ Active state indicator (blue underline)
└─ Mobile Menu Button (right, mobile)
   └─ Hamburger → X animation

Footer (all pages)
├─ Three Columns (desktop)
│  ├─ About (name, tagline, social icons)
│  ├─ Navigation (page links)
│  └─ Contact (email, location)
└─ Bottom Bar
   ├─ Copyright
   └─ "Built with ♥ using Next.js"

PageTransition (all pages)
└─ Fade + slide animation wrapper
```

### UI Components

```
Button
├─ Variants: primary | secondary | ghost
├─ Sizes: sm | md | lg
├─ Optional arrow icon
└─ Can be link or button

Badge
├─ Variants: default | blue | green | coral | purple | yellow
├─ Sizes: sm | md
└─ Rounded pill shape

Card
├─ Optional hover effect
├─ Optional glass morphism
├─ Rounded corners
└─ Shadow on hover
```

## 📊 Data Structure

### Project Data (`lib/projects.ts`)

```typescript
Project {
  id: string
  slug: string              // URL-friendly
  title: string
  client: string
  subtitle: string
  category: string[]        // Multiple categories
  featured: boolean
  year: string
  heroImage: string         // Path to 16:9 image
  thumbnailImage: string    // Path to 16:10 image
  
  overview: string          // 2-3 sentences
  why: string              // Problem statement
  what: string             // Approach & process
  wow: string              // Impact & results
  solutions: string        // Summary of solution
  
  deliverables: string[]   // Bulleted list
  tags: string[]           // Tech/methods
  color?: string           // Accent color
}
```

### Site Config (`lib/constants.ts`)

```typescript
SITE_CONFIG
├─ name
├─ title
├─ description
├─ tagline
└─ contact
   ├─ email
   ├─ linkedin
   └─ location

SLALOM_BRAND
└─ colors
   ├─ primary (#0C62FB)
   ├─ support (4 colors)
   └─ gray (5 shades)

NAVIGATION
└─ Array of {label, href}

SKILLS
└─ Array of capability strings

EXPERIENCE_TIMELINE
└─ Array of {year, title, company, description}
```

## 🎨 Design Tokens

### Colors
```css
Primary:    #0C62FB (Slalom Blue)
Green:      #00FF7F
Coral:      #FF6B6B
Yellow:     #FFD600
Purple:     #8B5CF6

Gray-90:    #1A1A1A (body text)
Gray-70:    #4D4D4D (secondary text)
Gray-50:    #808080 (disabled)
Gray-30:    #B3B3B3 (borders)
Gray-10:    #E6E6E6 (backgrounds)
```

### Typography
```css
Display:    72px / 1.1
H1:         56px / 1.2
H2:         40px / 1.3
H3:         32px / 1.4
H4:         24px / 1.5
Body-lg:    20px / 1.6
Body:       16px / 1.6
Body-sm:    14px / 1.6
```

### Spacing
```css
Grid:       8px base
Gaps:       12px, 16px, 24px, 32px
Section:    64px, 96px, 128px (mobile, tablet, desktop)
Container:  1280px max-width
Padding:    24px, 32px, 48px (mobile, tablet, desktop)
```

### Animations
```css
Duration:   200ms (micro), 400ms (standard), 600ms (emphasis)
Easing:     ease-out (default), custom cubic-bezier
```

## 🔄 User Flows

### View a Project
```
Home → Click project in carousel → Project Detail
  or
Work → Filter by category → Click card → Project Detail
  or
Work → Click card directly → Project Detail
```

### Navigate Site
```
Any Page → Header → Click nav item → New page
  or
Footer → Click nav link → New page
```

### Contact
```
Contact → Fill form → Submit → Success message
  or
Any Page → Footer → Click email → Opens email client
  or
Any Page → Footer → Click LinkedIn → Opens LinkedIn
```

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layouts
- Hamburger menu
- Stacked project grid
- Touch-friendly tap targets
- Reduced text sizes

### Tablet (768-1023px)
- Two column layouts
- Full navigation visible
- 2-column project grid
- Medium text sizes

### Desktop (1024px+)
- Multi-column layouts
- Fixed header on scroll
- 3-column project grid
- Full text sizes
- Hover states active

## 🎯 Page Purposes

| Page | Primary Goal | Secondary Goal |
|------|-------------|---------------|
| **Home** | Showcase expertise & featured work | Drive to Work page |
| **About** | Build credibility & trust | Encourage contact |
| **Work** | Display project range | Deep dive into cases |
| **Project** | Demonstrate process & impact | Navigate to next project |
| **Contact** | Facilitate communication | Provide multiple contact options |

## ⚡ Interactive Elements Summary

1. **Featured Work Carousel** - Slide between featured projects
2. **Experience Timeline** - Scroll-triggered animations
3. **Project Grid Filter** - Category-based filtering
4. **Project Cards** - Hover reveal effects
5. **Navigation** - Active state indicators
6. **Mobile Menu** - Slide-down animation
7. **All Buttons** - Hover and focus states
8. **Form Inputs** - Focus states with blue ring

## 📍 Where to Find Content

| Content Type | Location |
|-------------|----------|
| Your bio | `lib/constants.ts` → SITE_CONFIG |
| Your photo | `public/images/ivan-nunez.jpg` |
| Projects | `lib/projects.ts` → projects array |
| Project images | `public/projects/[slug]/` |
| Experience history | `lib/constants.ts` → EXPERIENCE_TIMELINE |
| Skills | `lib/constants.ts` → SKILLS |
| Contact info | `lib/constants.ts` → SITE_CONFIG.contact |

---

**Use this map to understand your portfolio's structure and locate content!**
