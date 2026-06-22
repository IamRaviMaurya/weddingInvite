import { assets, couple } from '../data/invitation';

export function EntryGate({ onOpen }) {
  return (
    <button className="entry-gate" type="button" onClick={onOpen} aria-label="Open invitation">
      <img className="entry-gate__bg" src={assets.cover} alt="" />
      <span className="entry-gate__overlay" />
      <span className="entry-gate__particles" aria-hidden="true">
        {Array.from({ length: 34 }, (_, index) => (
          <i
            className="particle"
            key={index}
            style={{
              left: `${(index * 29) % 100}%`,
              top: `${(index * 47) % 100}%`,
              '--delay': `${(index % 8) * 0.35}s`,
              '--dur': `${2.5 + (index % 5) * 0.45}s`,
            }}
          />
        ))}
      </span>
      <span className="entry-gate__content">
        <img className="entry-gate__icon" src={assets.ganesha} alt="" />
        <span className="entry-gate__names">
          {couple.bride}
          <span className="entry-gate__amp">&</span>
          {couple.groom}
        </span>
        <span className="entry-gate__date">{couple.date}</span>
      </span>
      <span className="entry-gate__hint">Tap to open invitation</span>
    </button>
  );
}
