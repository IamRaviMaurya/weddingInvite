import { useEffect, useRef, useState } from 'react';

export function useAudio(src) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.volume = 0.35;
      audio.play().catch(() => setPlaying(false));
      return;
    }

    audio.pause();
  }, [playing]);

  return {
    audio: <audio ref={audioRef} src={src} loop preload="auto" />,
    playing,
    play: () => setPlaying(true),
    toggle: () => setPlaying((value) => !value),
  };
}
