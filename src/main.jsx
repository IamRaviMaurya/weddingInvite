import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Volume2, VolumeX, ArrowDown } from 'lucide-react';
import './styles.css';

const GANESHA_URL = 'https://invifest-demo.vercel.app/assets/ganesha.png';

function Petals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 42 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * -18}s`,
        duration: `${11 + Math.random() * 14}s`,
        size: `${10 + Math.random() * 20}px`,
        drift: `${(Math.random() - 0.5) * 110}px`,
        color: ['#f6c9c1', '#f3d7cd', '#d9b84f', '#efb4ba'][index % 4],
      })),
    []
  );

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          style={{
            '--left': petal.left,
            '--delay': petal.delay,
            '--duration': petal.duration,
            '--size': petal.size,
            '--drift': petal.drift,
            '--petal': petal.color,
          }}
        />
      ))}
    </div>
  );
}

function IntroCover({ onOpen }) {
  return (
    <button className="intro-cover" type="button" onClick={onOpen} aria-label="Open invitation">
      <img src="https://i.ibb.co/Z1Fcmczq/frame-001.jpg" alt="Intro Cover" />
      <span className="intro-glow" />
      <span className="intro-copy">Tap to open invitation</span>
    </button>
  );
}

function MusicToggle({ active, onToggle }) {
  return (
    <button className="music-toggle" type="button" onClick={onToggle} aria-label="Toggle music">
      {active ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      <article className="hero-card">
        <img className="ganesha" src={GANESHA_URL} alt="Ganesha" />
        <p className="mantra">
          ॥ श्री गणेशाय नमः ॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
          <br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
        <p className="invite-line">
          With the blessings of Shri Ganesh and our beloved families, we joyfully invite
          <br />
          you to celebrate the union of
        </p>
        <h1>Gudiyaa</h1>
        <div className="amp-row">
          <span />
          <strong>&amp;</strong>
          <span />
        </div>
        <h1>Ravi</h1>
        <p className="parents">Daughter of Mr. &amp; Mrs. Dinesh Son of Mr. &amp; Mrs. Dinesh</p>
      </article>

      <a className="scroll-cue" href="#date">
        <span>Scroll to see magic</span>
        <ArrowDown size={19} />
      </a>
    </section>
  );
}

function ScratchCard({ label, value }) {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef(null);

  const reveal = (event) => {
    event.preventDefault();
    setRevealed(true);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handler = () => setRevealed(true);
    card.addEventListener('pointermove', handler, { once: true });
    return () => card.removeEventListener('pointermove', handler);
  }, []);

  return (
    <div className="scratch-item">
      <span className="scratch-label">{label}</span>
      <button
        ref={cardRef}
        className={`scratch-card ${revealed ? 'revealed' : ''}`}
        type="button"
        onPointerDown={reveal}
        onFocus={() => setRevealed(true)}
      >
        <span className="scratch-value">{value}</span>
        <span className="scratch-cover">Scratch</span>
      </button>
      <span className="scratch-hint">{revealed ? 'Revealed' : '↑ Scratch'}</span>
    </div>
  );
}

function SaveDate() {
  return (
    <section className="date-section" id="date">
      <p className="eyebrow">The Date</p>
      <h2>Save the Date</h2>
      <p className="date-copy">Scratch below to reveal our wedding date</p>
      <div className="scratch-grid">
        <ScratchCard label="Month" value="soon.." />
        <ScratchCard label="Day" value="soon.." />
        <ScratchCard label="Year" value="soon.." />
      </div>
    </section>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [music, setMusic] = useState(false);
  const audioRef = useRef(null);

  const openInvitation = () => {
    setOpened(true);
    setMusic(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (music && opened) {
      audio.volume = 0.35;
      audio.play().catch(() => setMusic(false));
    } else {
      audio.pause();
    }
  }, [music, opened]);

  return (
    <>
      <audio ref={audioRef} src="https://invifest-demo.vercel.app/assets/bg-music.mp3" loop preload="auto" />
      {!opened ? (
        <IntroCover onOpen={openInvitation} />
      ) : (
        <main className="invitation">
          <Petals />
          <Hero />
          <SaveDate />
          <MusicToggle active={music} onToggle={() => setMusic((value) => !value)} />
        </main>
      )}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
