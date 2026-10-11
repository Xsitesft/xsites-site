import Header from './components/Header';
import Hero from './components/Hero';
import BusinessCategories from './components/BusinessCategories';
import BarbershopDemo from './components/BarbershopDemo';
import SectorPreviews from './components/SectorPreviews';
import Services from './components/Services';
import Packages from './components/Packages';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Differentials from './components/Differentials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BusinessCategories />
      <BarbershopDemo />
      <SectorPreviews />
      <Services />
      <Packages />
      <Process />
      <Portfolio />
      <Differentials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </>
  );
}