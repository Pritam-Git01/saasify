# 🚀 Saasify

A modern, high-performance SaaS landing page built with Next.js 15, React 19, and cutting-edge web technologies. Designed to convert visitors into customers with a sleek, responsive interface and optimized user experience.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15 and React 19
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Component Library**: Comprehensive UI components using Radix UI
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Server-side rendering and static generation
- **Animations**: Smooth animations powered by GSAP
- **Form Handling**: React Hook Form with Zod validation
- **Theme Support**: Dark/light mode with next-themes
- **Data Visualization**: Interactive charts with Recharts

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.3.5** - React framework with SSR/SSG
- **React 19** - Latest React with concurrent features
- **TypeScript 5.5.3** - Type-safe development

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **Lucide React** - Beautiful icon library
- **GSAP** - Professional animation library
- **next-themes** - Theme switching functionality

### Forms & Validation
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation library resolvers

### Data Management
- **TanStack Query** - Powerful data synchronization
- **date-fns** - Modern JavaScript date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization

## 📁 Project Structure

```
saasify/
├── 📁 .next/                    # Next.js build output
├── 📁 node_modules/             # Dependencies
├── 📁 public/                   # Static assets
├── 📁 src/                      # Source code
│   ├── 📁 app/                  # Next.js App Router
│   │   ├── favicon.ico          # Site favicon
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   ├── not-found.tsx        # 404 page
│   │   └── page.tsx             # Home page
│   ├── 📁 components/           # Reusable components
│   │   ├── 📁 sections/         # Landing page sections
│   │   │   ├── contact.tsx      # Contact section
│   │   │   ├── deployments.tsx  # Deployments showcase
│   │   │   ├── features.tsx     # Features section
│   │   │   ├── hero.tsx         # Hero section
│   │   │   ├── pricing.tsx      # Pricing plans
│   │   │   └── testimonials.tsx # Customer testimonials
│   │   └── 📁 ui/               # UI components
│   ├── 📁 hooks/                # Custom React hooks
│   └── 📁 lib/                  # Utility functions
├── .gitignore                   # Git ignore rules
├── next-env.d.ts               # Next.js TypeScript declarations
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies
├── package-lock.json           # Dependency lock file
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pritam-git01/saasify.git
   cd saasify
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 3005 |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run preview` | Build and start production preview |
| `npm run type-check` | Run TypeScript compiler without emitting files |

## 🏗️ Key Components

### Landing Page Sections

- **Hero Section** (`hero.tsx`) - Eye-catching introduction with CTA
- **Features Section** (`features.tsx`) - Product features showcase
- **Pricing Section** (`pricing.tsx`) - Subscription plans and pricing
- **Testimonials** (`testimonials.tsx`) - Customer reviews and social proof
- **Contact Section** (`contact.tsx`) - Contact form and information
- **Deployments** (`deployments.tsx`) - Deployment showcase and integrations

### UI Components

The project uses a comprehensive set of Radix UI components including:
- Accordion, Alert Dialog, Avatar
- Checkbox, Collapsible, Context Menu
- Dialog, Dropdown Menu, Hover Card
- Navigation Menu, Popover, Progress
- Select, Slider, Switch, Tabs
- Toast, Toggle, Tooltip

## 🎨 Styling

### Tailwind CSS v4
- Latest Tailwind CSS with enhanced performance
- Custom configuration with PostCSS
- Typography plugin for rich text content
- Animation utilities for smooth interactions

### Theme System
- Built-in dark/light mode support
- Consistent color palette
- Responsive design patterns
- Accessible contrast ratios

## 🔧 Configuration

### Next.js Configuration
The project uses Next.js 15 with App Router for:
- File-based routing
- Server and client components
- Automatic code splitting
- Image optimization
- Built-in SEO support

### TypeScript Configuration
- Strict type checking enabled
- Path mapping for clean imports
- ESLint integration
- Type-safe API routes

## 🚀 Deployment

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

### Deployment Platforms

This project can be deployed on various platforms:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## 🧪 Development Guidelines

### Code Quality
- Follow TypeScript best practices
- Use ESLint configuration for consistent code style
- Implement proper error boundaries
- Write semantic HTML with accessibility in mind

### Component Development
- Create reusable, composable components
- Use Radix UI primitives for accessibility
- Implement proper TypeScript interfaces
- Follow the existing component structure

### Performance Optimization
- Leverage Next.js built-in optimizations
- Implement proper image optimization
- Use dynamic imports for code splitting
- Monitor Core Web Vitals

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review existing discussions

---

**Built with ❤️ using Next.js, React, and modern web technologies.**