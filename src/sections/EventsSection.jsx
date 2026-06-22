import { EventCard } from '../components/EventCard';
import { events } from '../data/invitation';

export function EventsSection() {
  return (
    <section className="events-section" id="events">
      <span className="sec-label">Celebrations</span>
      <h2 className="sec-heading">Wedding Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.name} event={event} />
        ))}
      </div>
    </section>
  );
}
