# ASYNTH Migration Plan: HTML/CSS/JS → React + Tailwind CSS + Vite

## Phase 1: Project Setup & Structure

### 1.1 Initialize Vite React Project
```bash
npm create vite@latest asynth-react -- --template react
cd asynth-react
npm install
```

### 1.2 Install Dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
npm install @splinetool/react-spline
```

### 1.3 Project Structure
```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Navigation.jsx
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── CipherText.jsx
│   │   └── GlitchButton.jsx
│   ├── Sections/
│   │   ├── Events.jsx
│   │   ├── Explore.jsx
│   │   └── Services.jsx
│   ├── UI/
│   │   ├── Tooltip.jsx
│   │   └── SocialIcons.jsx
│   └── Footer/
│       └── Footer.jsx
├── hooks/
│   ├── useCipher.js
│   └── useResponsive.js
├── assets/
│   ├── fonts/
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
└── App.jsx
```

## Phase 2: Component Conversion Plan

### 2.1 Priority Order
1. **Header & Navigation** (Critical for UX)
2. **Hero Section with Cipher Animation** (Main feature)
3. **Events Section** (Content)
4. **Services Section** (Content)
5. **Explore Section** (Content)
6. **Footer** (Final)

### 2.2 Custom Hook Strategy
- `useCipher` - Extract cipher animation logic
- `useResponsive` - Handle mobile menu state
- `useScrollTop` - Scroll to top functionality

## Phase 3: Tailwind CSS Conversion

### 3.1 Font Integration
```css
/* Add to globals.css */
@font-face {
  font-family: 'MyFont';
  src: url('./assets/fonts/SpaceArmour.otf');
}

@font-face {
  font-family: 'MyFont2';
  src: url('./assets/fonts/Kusanagi.otf');
}
```

### 3.2 Tailwind Config Extensions
```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'space': ['MyFont', 'sans-serif'],
        'kusanagi': ['MyFont2', 'sans-serif'],
      },
      colors: {
        'asynth-green': '#7ead09',
        'asynth-dark': '#0c0e1b',
        'asynth-brown': '#6c4a3f',
      },
      animation: {
        'glitch': 'glitch 1s steps(2, end)',
        'scaleup': 'scaleup 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
```

## Phase 4: Key Challenges & Solutions

### 4.1 Spline 3D Integration
**Original:** `<spline-viewer>` web component
**Solution:** Use `@splinetool/react-spline` package
```jsx
import Spline from '@splinetool/react-spline';

<Spline scene="https://prod.spline.design/UbqFZEhUfu40PE4i/scene.splinecode" />
```

### 4.2 Cipher Animation
**Challenge:** Complex DOM manipulation
**Solution:** Convert to React hook with state management
```jsx
const useCipher = (text, isActive) => {
  const [displayText, setDisplayText] = useState(text);
  // Animation logic here
  return displayText;
};
```

### 4.3 Custom CSS Animations
**Challenge:** Complex keyframes and clip-path
**Solution:** Keep critical animations in CSS, integrate with Tailwind
```css
@keyframes glitch {
  /* Keep existing keyframes */
}

.glitch-button::after {
  /* Keep complex pseudo-element styling */
}
```

### 4.4 Background Images
**Challenge:** File path references
**Solution:** Import images as modules
```jsx
import bannerBg from '../assets/images/banner.jpg';

<div 
  className="w-screen h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${bannerBg})` }}
>
```

## Phase 5: Component Implementation Examples

### 5.1 Hero Component Structure
```jsx
const Hero = () => {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="..." />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center text-asynth-dark">
          <h1 className="font-space text-6xl mb-4">WELCOME TO</h1>
          <CipherText text="ASYNTH" className="font-space text-7xl text-asynth-green" />
          <p className="font-kusanagi text-2xl mt-4">"Where Innovation Meets Intelligence"</p>
          <GlitchButton>FOLLOW</GlitchButton>
        </div>
      </div>
    </section>
  );
};
```

### 5.2 Navigation Component
```jsx
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="absolute w-full z-20 p-4 flex items-center justify-between">
      <img src={logo} alt="ASYNTH" className="w-32 ml-4" />
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map(item => (
          <li key={item.name}>
            <a 
              href={item.href}
              className="font-kusanagi text-asynth-dark hover:after:w-3/4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-asynth-dark after:transition-all after:duration-500"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="w-8 h-8" />
      </button>
    </nav>
  );
};
```

## Phase 6: Testing & Optimization

### 6.1 Testing Checklist
- [ ] Responsive design on all screen sizes
- [ ] Cipher animation performance
- [ ] Spline 3D loading and interaction
- [ ] Mobile menu functionality
- [ ] Social media links
- [ ] All hover effects
- [ ] Font loading
- [ ] Image optimization

### 6.2 Performance Optimizations
- Lazy load images with `React.lazy()`
- Code splitting for heavy components
- Optimize Spline 3D loading
- Use `useMemo` for expensive calculations
- Implement proper loading states

## Phase 7: Deployment Preparation

### 7.1 Build Configuration
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 7.2 Asset Management
- Copy all images to `public/` or `src/assets/`
- Update font paths
- Optimize image sizes
- Test build output

## Migration Timeline

**Week 1:** Project setup, basic structure, header/navigation
**Week 2:** Hero section with cipher animation and Spline integration  
**Week 3:** Events and Services sections
**Week 4:** Explore section, footer, mobile responsiveness
**Week 5:** Testing, optimization, deployment

## Risk Mitigation

1. **Animation Complexity:** Keep original CSS for complex animations
2. **3D Performance:** Implement loading states for Spline viewer
3. **Font Loading:** Use font-display: swap for better performance
4. **Mobile Experience:** Test thoroughly on actual devices
5. **SEO Considerations:** Add proper meta tags and semantic HTML

This migration plan maintains the core visual identity and functionality while leveraging modern React patterns and Tailwind CSS utilities.