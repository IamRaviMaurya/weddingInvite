import { Check, Loader2, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { assets, events } from '../data/invitation';

const songs = ['Kala Chashma', 'London Thumakda', 'Gallan Goodiyaan', 'Mauja Hi Mauja', 'Badtameez Dil'];

export function RsvpForm() {
  const [attending, setAttending] = useState('yes');
  const [selectedEvents, setSelectedEvents] = useState(() => new Set(events.map((event) => event.name)));
  const [song, setSong] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const songMatches = useMemo(
    () => songs.filter((item) => song && item.toLowerCase().includes(song.toLowerCase())).slice(0, 4),
    [song]
  );

  const toggleEvent = (name) => {
    setSelectedEvents((current) => {
      const next = new Set(current);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const submit = (event) => {
    event.preventDefault();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSent(true);
      new Audio(assets.yay).play().catch(() => {});
    }, 900);
  };

  if (sent) {
    return (
      <section className="rsvp-section" id="rsvp">
        <div className="thanks-card">
          <span className="thanks-icon">
            <Check size={38} />
          </span>
          <h2>Thank You!</h2>
          <p>Your RSVP has been beautifully received. We cannot wait to celebrate with you.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-section" id="rsvp">
      {/* <span className="sec-label">Join the Celebration</span> */}
      <h2 className="sec-heading">Join the Celebration</h2>
      {/* <p className="section-copy">Kindly let us know if you can make it. Your presence will make this celebration whole.</p> */}

      <form className="rsvp-form" onSubmit={submit}>
        {/* <div className="form-panel">
          <label>
            <span>Your name</span>
            <input required type="text" placeholder="Full name" />
          </label>
          <label>
            <span>Phone number</span>
            <input required type="tel" placeholder="+91 00000 00000" />
          </label>
        </div> */}

        {/* <div className="form-panel">
          <p className="form-title">Will you join us?</p>
          <div className="radio-row">
            <button type="button" className={attending === 'yes' ? 'selected' : ''} onClick={() => setAttending('yes')}>
              Joyfully accept
            </button>
            <button type="button" className={attending === 'no' ? 'selected' : ''} onClick={() => setAttending('no')}>
              Regretfully decline
            </button>
          </div>
        </div> */}

          <>
            <div className="form-panel">
              <label>
                <span>Party size</span>
                <select defaultValue="2">
                  {[1, 2, 3, 4, 5].map((count) => (
                    <option key={count} value={count}>
                      {count === 1 ? '1 (Just me)' : `${count} guests`}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="form-panel">
              <p className="form-title">Events you will attend</p>
              <div className="check-list">
                {events.map((item) => (
                  <label key={item.name} className="check-item">
                    <input checked={selectedEvents.has(item.name)} onChange={() => toggleEvent(item.name)} type="checkbox" />
                    <span>
                      <strong>{item.name}</strong>
                      <small>
                        {item.date} - {item.time}
                      </small>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-panel">
              <label className="song-field">
                <span>A song for the dance floor</span>
                <Search size={16} />
                <input type="text" value={song} onChange={(event) => setSong(event.target.value)} placeholder="e.g. Kala Chashma" />
              </label>
              {songMatches.length > 0 && (
                <div className="song-menu">
                  {songMatches.map((item) => (
                    <button key={item} type="button" onClick={() => setSong(item)}>
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="form-panel">
              <label>
                <span>Dietary preferences</span>
                <select>
                  <option>No specific preferences</option>
                  <option>Vegetarian</option>
                  <option>Vegan</option>
                  <option>Jain Food</option>
                  <option>Gluten-Free</option>
                </select>
              </label>
              <label>
                <span>Marriage advice for us</span>
                <textarea placeholder="Share something sweet, funny, or wise..." />
              </label>
            </div>
          </>
        

        <button className="submit-btn" type="submit" disabled={sending}>
          {sending && <Loader2 className="spin" size={16} />}
          {sending ? 'Sending...' : 'Send RSVP'}
        </button>
      </form>
    </section>
  );
}
