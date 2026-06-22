import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { EntryGate } from './components/EntryGate';
import { AudioButton, BuyNowButton } from './components/FloatingActions';
import { RsvpForm } from './components/RsvpForm';
import { assets } from './data/invitation';
import { useAudio } from './hooks/useAudio.jsx';
import { CountdownSection } from './sections/CountdownSection';
import { DateUnlockSection } from './sections/DateUnlockSection';
import { EventsSection } from './sections/EventsSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { VenueSection } from './sections/VenueSection';
import './styles.css';

function Petals() {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: 46 }, (_, index) => (
        <span
          key={index}
          style={{
            '--left': `${(index * 23) % 100}%`,
            '--delay': `${(index % 12) * -1.2}s`,
            '--duration': `${12 + (index % 9)}s`,
            '--size': `${10 + (index % 5) * 4}px`,
            '--drift': `${(index % 2 ? 1 : -1) * (35 + (index % 6) * 10)}px`,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const music = useAudio(assets.music);

  const openInvitation = () => {
    setOpened(true);
    music.play();
    window.setTimeout(() => document.getElementById('hero')?.scrollIntoView({ block: 'start' }), 50);
  };

  return (
    <>
      {music.audio}
      {!opened && <EntryGate onOpen={openInvitation} />}

      {opened && (
        <main className="site-shell">
          <Petals />
          <HeroSection />
          <DateUnlockSection onComplete={() => setUnlocked(true)} />

          <div className={`locked-content ${unlocked ? 'unlocked' : ''}`}>
            <CountdownSection />
            <StorySection />
            <EventsSection />
            <RsvpForm />
            <VenueSection />
            <FooterSection />
          </div>

          <AudioButton active={music.playing} onToggle={music.toggle} />
          {/* {unlocked && <BuyNowButton />} */}
        </main>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
