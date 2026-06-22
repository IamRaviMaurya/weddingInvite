import { ArrowDown } from 'lucide-react';
import { assets, couple } from '../data/invitation';

export function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-corner">
        <span />
      </div>

      <article className="hero-card">
        <img className="hero-icon" src={assets.ganesha} alt="" />
        <p className="god-quote">|| Shri Ganeshaya Namah || Vakratunda Mahakaya Suryakoti Samaprabha</p>
        <p className="intro-text">With the blessings of Shri Ganesh and our beloved families, we joyfully invite you to celebrate the union of</p>
        <h1 className="couple-name shimmer">{couple.groom}</h1>
        <div className="amp-row">
          <span className="amp-line" />
          <strong className="amp">&</strong>
          <span className="amp-line" />
        </div>
        <h1 className="couple-name shimmer">{couple.bride}</h1>
        <p className="parent-sub">{couple.parents}</p>
      </article>

      <a className="scroll-indicator" href="#date">
        <span>Scroll to see magic</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
