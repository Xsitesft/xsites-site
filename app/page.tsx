import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Process />
      <Portfolio />
      <Differentials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}