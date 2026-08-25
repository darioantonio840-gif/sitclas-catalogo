import React, { useState } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { MethodologySection } from './components/sections/MethodologySection';
import { LevelsSection } from './components/sections/LevelsSection';
import { EspSection } from './components/sections/EspSection';
import { TravelSection } from './components/sections/TravelSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { SpeakingSection } from './components/sections/SpeakingSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AccreditationSection } from './components/sections/AccreditationSection';
import { ModalitiesSection } from './components/sections/ModalitiesSection';
import { PlacementModal } from './components/ui/PlacementModal';

import { LEVELS } from './data/levelsData';
import { ESP } from './data/espData';
import { TRAVEL_STEPS } from './data/travelData';
import { CERTS } from './data/certsData';
import { CLUBS } from './data/clubsData';
import { TESTIMONIALS } from './data/testimonialsData';
import { ACCRED_LIST, INSTITUTIONAL_REGISTRATION } from './data/accredData';
import { MODALIDADES } from './data/modalitiesData';
import { METHODOLOGY_FEATURES } from './data/methodologyData';

const SECTION_IDS = [
  'propuesta',
  'niveles',
  'especializado',
  'viajes',
  'certificaciones',
  'conversacion',
  'testimonios',
  'acreditacion',
  'modalidades',
  'contacto',
];

export function App() {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  // Initialize Scroll-Reveal entrance animations on scroll
  useScrollReveal();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <Navbar activeSection={activeSection} onOpenModal={handleOpenModal} />

      <main>
        <HeroSection
          levels={LEVELS}
          onSelectLevel={setSelectedLevelIndex}
          onOpenModal={handleOpenModal}
        />
        <MethodologySection features={METHODOLOGY_FEATURES} />
        <LevelsSection
          levels={LEVELS}
          selectedIndex={selectedLevelIndex}
          onSelectLevel={setSelectedLevelIndex}
        />
        <EspSection espList={ESP} />
        <TravelSection steps={TRAVEL_STEPS} />
        <CertificationsSection certs={CERTS} />
        <SpeakingSection clubs={CLUBS} />
        <TestimonialsSection testimonials={TESTIMONIALS} />
        <AccreditationSection
          accredList={ACCRED_LIST}
          registration={INSTITUTIONAL_REGISTRATION}
        />
        <ModalitiesSection modalidades={MODALIDADES} />
      </main>

      <Footer onOpenModal={handleOpenModal} />

      <PlacementModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
