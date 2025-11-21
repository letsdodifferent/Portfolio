# Portfolio React Tech Stack Conversion - Complete Guide

## ✅ Conversion Status: COMPLETE

Your portfolio has been successfully converted from vanilla HTML/CSS/JavaScript to a modern **React + Vite** tech stack while maintaining all original content and design.

---

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Fixed navbar with theme toggle & mobile menu
│   │   ├── Hero.jsx                # Hero section with parallax effect
│   │   ├── AcademicProfile.jsx     # Academic credentials display
│   │   ├── Skills.jsx              # Skills categorized by type
│   │   ├── Experience.jsx          # Timeline of work experiences
│   │   ├── Projects.jsx            # Featured projects showcase
│   │   ├── Publications.jsx        # Research publications
│   │   ├── Achievements.jsx        # Competitive programming achievements
│   │   ├── ExtraCurricular.jsx     # Extra-curricular activities
│   │   ├── Contact.jsx             # Contact methods section
│   │   ├── Footer.jsx              # Footer component
│   │   └── ScrollToTop.jsx         # Floating scroll-to-top button
│   ├── hooks/
│   │   ├── useTheme.js             # Dark/Light theme toggle logic
│   │   ├── useScrollAnimation.js   # Intersection Observer for fade-in effects
│   │   └── useActiveSection.js     # Active section highlighting in navbar
│   ├── data/
│   │   └── portfolio.js            # Centralized portfolio data
│   ├── styles/
│   │   ├── global.css              # Design system & all component styles
│   │   └── animations.css          # Keyframe animations
│   ├── App.jsx                     # Main App component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Base styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── package.json                    # Project dependencies
└── eslint.config.js                # ESLint configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
cd portfolio-react
npm install
```

### Development Server

```bash
npm run dev
```

The site will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Key Features Preserved

All original features have been converted to React while maintaining identical functionality:

✅ **Dark/Light Theme Toggle** - Persisted to localStorage
✅ **Smooth Scroll Navigation** - With active section highlighting
✅ **Mobile-Responsive Design** - Full responsive layouts
✅ **Scroll Animations** - Fade-in effects with Intersection Observer
✅ **Parallax Effect** - Hero section background parallax
✅ **Scroll-to-Top Button** - Floating button that appears on scroll
✅ **Mobile Menu** - Hamburger menu for smaller screens
✅ **Accessibility** - Keyboard navigation support
✅ **Easter Egg** - Konami code (↑ ↑ ↓ ↓ ← → ← → B A)

---

## 📝 Data Management

All portfolio content is centralized in `src/data/portfolio.js`:

```javascript
export const portfolioData = {
    personal: { /* contact info */ },
    academic: [ /* degrees & scores */ ],
    skills: { /* categorized skills */ },
    experience: [ /* job history */ ],
    projects: [ /* featured projects */ ],
    publications: [ /* research papers */ ],
    achievements: [ /* competitive programming */ ],
    extraCurricular: { /* volunteer work */ }
}
```

**To update content**, simply edit the values in this single file. All components automatically reflect the changes.

---

## 🎯 React Hooks Used

### Custom Hooks

1. **useTheme()** - Manages dark/light theme
   - Persists preference to localStorage
   - Updates document attribute for CSS variable switching

2. **useScrollAnimation()** - Scroll-triggered animations
   - Intersection Observer for fade-in effects
   - Stagger effect for elements

3. **useActiveSection()** - Navigation active state
   - Tracks which section is in viewport
   - Updates navbar link highlighting

### React Built-in Hooks

- `useState()` - Local component state
- `useEffect()` - Side effects (event listeners, observers)
- `useCallback()` - Memoized callbacks (if needed)

---

## 🛠️ Technology Stack

- **React 19.2** - UI Framework
- **Vite 7.2** - Build tool & dev server
- **CSS3** - Styling with custom properties (CSS variables)
- **JavaScript ES6+** - Modern JavaScript

**No additional UI libraries** - Pure React with vanilla CSS for minimal dependencies.

---

## 📱 Responsive Breakpoints

The design is optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (640px - 767px)
- **Small Mobile** (<640px)

All breakpoints are defined in `src/styles/global.css`

---

## 🎨 Customization Guide

### Change Color Scheme
Edit CSS variables in `src/styles/global.css` (lines 1-67):

```css
:root {
  --color-primary: #8b5cf6;        /* Purple accent */
  --color-bg-primary: #0a0e27;     /* Dark background */
  /* ... more variables */
}
```

### Add New Section
1. Create component in `src/components/NewSection.jsx`
2. Add data to `src/data/portfolio.js`
3. Import and add to `src/App.jsx`

### Modify Typography
Edit font sizes and family in CSS variables (lines 67-81):

```css
--font-primary: 'Inter', sans-serif;
--text-base: 1rem;
--text-2xl: 1.5rem;
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "vite": "^7.2.4",
    "eslint": "^9.39.1"
  }
}
```

**Minimal dependencies** - No heavy UI frameworks, maximizing performance.

---

## 🚀 Deployment Options

### Vercel (Recommended for Vite)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
```bash
npm run build
# Push dist/ folder as separate branch
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

---

## 🔧 Scripts Reference

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### CSS Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild: `npm run build`

### Theme Not Persisting
- Check localStorage is enabled
- Verify browser privacy settings

### Mobile Menu Not Closing
- Ensure click handler in Navigation.jsx is working
- Check browser console for errors

---

## ✨ Improvements Over Original

1. **Component-Based** - Reusable, maintainable code
2. **State Management** - React hooks instead of vanilla DOM manipulation
3. **Performance** - Vite provides instant HMR (Hot Module Replacement)
4. **Build Optimization** - Automatic code splitting & minification
5. **Developer Experience** - Hot reload, better debugging
6. **Scalability** - Easy to add features/pages
7. **Type Safety** - Ready for TypeScript migration

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## 📞 Contact & Support

All contact information is maintained in `src/data/portfolio.js`:
- Email: narendrajat1506@gmail.com
- Phone: +91 8619442726
- Location: Barmer, Rajasthan 344031

---

## 📄 License

This portfolio is personal and proprietary. All content belongs to Narendra.

---

**Happy coding! 🎉**

Your React portfolio is ready to deploy. Feel free to customize it further and deploy to your hosting platform of choice.
