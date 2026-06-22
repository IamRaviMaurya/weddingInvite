import { useEffect, useRef, useState } from 'react';

export function ScratchCard({ label, value, onReveal }) {
  const [revealed, setRevealed] = useState(false);
  const cardRef = useRef(null);

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    onReveal?.();
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    card.addEventListener('pointermove', reveal, { once: true });
    return () => card.removeEventListener('pointermove', reveal);
  });

  return (
    <div className="scratch-item">
      <span className="scratch-label">{label}</span>
      <button
        ref={cardRef}
        className={`scratch-card ${revealed ? 'revealed' : ''}`}
        type="button"
        onPointerDown={reveal}
        onFocus={reveal}
      >
        <span className="scratch-value">{value}</span>
        <span className="scratch-cover">Scratch</span>
      </button>
      <span className={`scratch-hint ${revealed ? 'hidden' : ''}`}>Swipe to reveal</span>
    </div>
  );
}
