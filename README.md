# Robin's Portfolio

A modern, high-performance portfolio built with React 19, TypeScript, Vite, and Tailwind CSS. The design focuses on a premium dark aesthetic with glassmorphism, interactive 3D elements, and smooth micro-animations.

## 🚀 Technologies Used

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/)

## ✨ Key Features

- **Interactive 3D Environments**: Custom WebGL implementations using React Three Fiber, including a dynamic floating particle system in the Hero section and an interactive constellation of skill orbs.
- **Glassmorphism UI**: High-end translucent cards, blurred backgrounds, and subtle gradients.
- **Fluid Micro-animations**: Magnetic buttons, scroll-triggered text reveals, and hover states powered by Framer Motion.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports without sacrificing the 3D experience.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local Vite development server:

```bash
npm run dev
```

### Production Build

Build the project for production:

```bash
npm run build
```

To preview the built production bundle locally:

```bash
npm run preview
```

## 🏗️ Project Structure

- `/src/components/sections/` - Main page sections (Hero, About, Skills, Projects, Contact)
- `/src/components/three/` - React Three Fiber 3D components and canvases
- `/src/components/ui/` - Reusable UI elements (GlassCard, GlassButton, ScrollReveal, SplitText)
- `/src/styles/` - Global CSS and Tailwind directives
