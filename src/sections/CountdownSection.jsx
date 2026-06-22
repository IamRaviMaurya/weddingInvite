import { couple } from '../data/invitation';
import { useCountdown } from '../hooks/useCountdown';

export function CountdownSection() {
  const time = useCountdown('2026-07-01T19:00:00+05:30');

  return (
    <section className="countdown-section" id="countdown">
      <div className="cd-card">
        <p className="cd-quote">Every second brings us closer to the celebration.</p>
        <span className="cd-script">Counting down to forever</span>
        <span className="cd-date">{couple.date}</span>
        <div className="cd-grid">
          {Object.entries(time).map(([label, value]) => (
            <div className="cd-unit" key={label}>
              <strong className="cd-num">{String(value).padStart(2, '0')}</strong>
              <span className="cd-lbl">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
