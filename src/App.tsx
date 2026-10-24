import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { ScrollProgress } from './components/layout/ScrollProgress/ScrollProgress';
import { Navbar } from './components/layout/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { Projects } from './components/sections/Projects/Projects';
import { Experience } from './components/sections/Experience/Experience';
import { Stack } from './components/sections/Stack/Stack';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/layout/Footer/Footer';
import { LikeButton } from './components/ui/LikeButton/LikeButton';

function PortfolioContent() {
  const { progress, scrolled } = useScrollProgress();
  useRevealOnScroll();

  return (
    <>
      <ScrollProgress progress={progress} />
      <Navbar scrolled={scrolled} />
      <Hero />
      <main className="wrap">
        <Projects />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <LikeButton />
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
