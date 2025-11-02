# WorkVar - Next.js + Vite Project

A modern web application with both Next.js and Vite support, featuring TailwindCSS and GSAP animations.

## Features

- ✅ Next.js 16 with App Router
- ✅ Vite for fast development and building
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ GSAP animations
- ✅ Multiple pages (Home, About, Contact)
- ✅ Responsive design
- ✅ Dark mode support

## Getting Started

Install dependencies:

```bash
pnpm install
```

### Using Next.js

Run the Next.js development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
pnpm build
pnpm start
```

### Using Vite

Run the Vite development server:

```bash
pnpm dev:vite
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

Build for production:

```bash
pnpm build:vite
pnpm preview:vite
```

## Project Structure

```
.
├── app/                 # Next.js App Router (Next.js setup)
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── contact/
│   │   └── page.tsx    # Contact page
│   └── globals.css     # Global styles
├── src/                 # Vite source files (Vite setup)
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Entry point
│   └── views/
│       ├── Home.tsx    # Home page
│       ├── About.tsx   # About page
│       └── Contact.tsx # Contact page
├── index.html          # Vite entry HTML
├── vite.config.ts      # Vite configuration
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## Scripts

### Next.js Scripts
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build Next.js for production
- `pnpm start` - Start Next.js production server

### Vite Scripts
- `pnpm dev:vite` - Start Vite development server
- `pnpm build:vite` - Build Vite for production
- `pnpm preview:vite` - Preview Vite production build

### Common Scripts
- `pnpm lint` - Run ESLint

## Technologies

- **Next.js** - React framework with App Router
- **Vite** - Next generation frontend tooling
- **React** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **React Router** - Client-side routing (for Vite)

