import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = {
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  loop?: boolean;
};

export const useTypewriter = (
  words: string[],
  {
    typingSpeedMs = 50,
    deletingSpeedMs = 35,
    pauseMs = 1200,
    loop = true,
  }: UseTypewriterOptions = {}
) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = words[index % words.length] ?? "";
    const tick = () => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          if (loop) {
            timeoutRef.current = window.setTimeout(() => setDeleting(true), pauseMs);
          }
          return;
        }
        timeoutRef.current = window.setTimeout(tick, typingSpeedMs);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
          timeoutRef.current = window.setTimeout(tick, typingSpeedMs);
          return;
        }
        timeoutRef.current = window.setTimeout(tick, deletingSpeedMs);
      }
    };

    timeoutRef.current = window.setTimeout(tick, deleting ? deletingSpeedMs : typingSpeedMs);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [text, deleting, index, words, typingSpeedMs, deletingSpeedMs, pauseMs, loop]);

  return text;
};

export default useTypewriter;


