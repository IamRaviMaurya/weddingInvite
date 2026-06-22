import { MapPin } from 'lucide-react';
import { assets, venue } from '../data/invitation';

export function VenueSection() {
  return (
    <section className="venue-section" id="venue">
      <span className="sec-label">Where</span>
      <h2 className="sec-heading">The Venue</h2>
      <article className="venue-card">
        <img src={assets.venue} alt={venue.name} loading="lazy" />
        <span className="venue-spark">✦</span>
        <h3>{venue.name}</h3>
        <p>
          {venue.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <button type="button" onClick={() => window.open(venue.mapUrl, '_blank')}>
          <MapPin size={17} />
          VIEW ON MAPS
        </button>
      </article>
    </section>
  );
}
