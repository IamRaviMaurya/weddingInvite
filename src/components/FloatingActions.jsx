import { MapPin, MessageCircle, Volume2, VolumeX } from 'lucide-react';

export function AudioButton({ active, onToggle }) {
  return (
    <button className="audio-btn" type="button" onClick={onToggle} aria-label="Toggle music">
      {active ? <Volume2 size={21} /> : <VolumeX size={21} />}
    </button>
  );
}

export function BuyNowButton() {
  const url =
    'https://wa.me/919574486049?text=Hi!%20I%20loved%20the%20digital%20invitation%20at%20https%3A%2F%2Finvifest-demo.vercel.app%2F%20and%20I%20would%20like%20to%20get%20one%20made%20for%20myself.';

  return (
    <button className="floating-cta" type="button" onClick={() => window.open(url, '_blank')}>
      <MessageCircle size={19} />
      BUY NOW FOR YOURSELF
    </button>
  );
}

export function DirectionButton({ query, children = 'VIEW DIRECTIONS' }) {
  const url = `https://maps.google.com/?q=${encodeURIComponent(query)}`;

  return (
    <button className="direction-btn" type="button" onClick={() => window.open(url, '_blank')}>
      <MapPin size={16} />
      {children}
    </button>
  );
}
