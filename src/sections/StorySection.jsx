import { storyPhotos } from '../data/invitation';

export function StorySection() {
  return (
    <section className="story-section" id="story">
      <span className="sec-label">Our Story</span>
      <h2 className="sec-heading">A Little Film</h2>
      <div className="story-card">
        <p>
          Some stories begin with a grand scene. Ours began with simple conversations, shared laughter, and the quiet certainty that life felt
          warmer together.
        </p>
        <span />
        <p>Now we are ready for the next chapter, surrounded by the people who made our journey beautiful.</p>
      </div>

      <div className="story-stack">
        {storyPhotos.map((photo, index) => (
          <article className="story-polaroid" key={photo.title} style={{ '--tilt': `${index % 2 ? 3 : -3}deg` }}>
            <img src={photo.image} alt={photo.title} loading="lazy" />
            <strong>{photo.title}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
