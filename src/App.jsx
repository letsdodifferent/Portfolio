import { useEffect } from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AcademicProfile from './components/AcademicProfile';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import ExtraCurricular from './components/ExtraCurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';
import './styles/animations.css';

function App() {
  // Initialize scroll animations
  useScrollAnimation();

  useEffect(() => {
    // Add keyboard navigation accessibility
    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-nav');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Konami Code Easter Egg
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKonamiCode = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          document.body.style.animation = 'rainbow 3s infinite';
          setTimeout(() => {
            document.body.style.animation = '';
          }, 3000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKonamiCode);

    // Console message
    console.log(
      '%c👋 Hey there!',
      'font-size: 20px; font-weight: bold; color: #8b5cf6;'
    );
    console.log(
      '%cThanks for checking out my portfolio! If you\'re interested in working together, let\'s connect!',
      'font-size: 14px; color: #6366f1;'
    );
    console.log(
      '%c📧 narendrajat1506@gmail.com',
      'font-size: 12px; color: #3b82f6;'
    );

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKonamiCode);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <AcademicProfile />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Achievements />
      <ExtraCurricular />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
