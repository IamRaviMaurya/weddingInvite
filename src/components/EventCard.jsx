import { DirectionButton } from './FloatingActions';

export function EventCard({ event }) {
  return (
    <article className="event-block">
      <div className="event-invite-frame">
        <img className="event-invite-bg" src={event.image} alt={event.name} loading="lazy" />
        <div className="event-invite-overlay">
          <h3 className={`event-invite-title ${event.dark ? 'dark-text' : ''}`}>{event.name}</h3>
          <p className={`event-date-row ${event.dark ? 'dark-text' : ''}`}>
            <span>{event.date}</span>
            <span className="event-date-bar">|</span>
            <span>{event.time}</span>
          </p>
        </div>
      </div>

      <div className="evt-details">
        <p className="evt-tagline">{event.note}</p>
        <div className="evt-dresscode">
          <span className="evt-dresscode-lbl">Dress code</span>
          <span className="evt-dresscode-dots">
            {event.palette.map((color) => (
              <i key={color} className="evt-dresscode-dot" style={{ backgroundColor: color }} />
            ))}
          </span>
          <span className="evt-dresscode-names">Celebrate in these tones</span>
        </div>
        <span className="evt-venue-name">{event.venue}</span>
        <DirectionButton query={event.mapQuery} />
      </div>
    </article>
  );
}
