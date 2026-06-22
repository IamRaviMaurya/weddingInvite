import { useState } from 'react';
import { ScratchCard } from '../components/ScratchCard';
import { scratchDate } from '../data/invitation';

export function DateUnlockSection({ onComplete }) {
  const [revealed, setRevealed] = useState(new Set());

  const reveal = (label) => {
    setRevealed((current) => {
      const next = new Set(current).add(label);
      if (next.size === scratchDate.length) onComplete?.();
      return next;
    });
  };

  return (
    <section className="scratch-section" id="date">
      <span className="scratch-title-sub">The Date</span>
      <h2 className="scratch-title">Save the Date</h2>
      <p className="scratch-desc">Scratch below to reveal our wedding date</p>
      <div className="scratch-grid">
        {scratchDate.map((item) => (
          <ScratchCard key={item.label} label={item.label} value={item.value} onReveal={() => reveal(item.label)} />
        ))}
      </div>
    </section>
  );
}
