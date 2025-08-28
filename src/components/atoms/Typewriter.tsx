import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
  className?: string;
};

const Typewriter = ({
  words,
  typingSpeedMs = 80,
  deletingSpeedMs = 40,
  pauseMs = 1200,
  className,
}: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = words[index % words.length];
    const tick = () => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          timeoutRef.current = window.setTimeout(() => setDeleting(true), pauseMs);
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
  }, [text, deleting, index, words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 inline-block w-[8px] animate-pulse bg-white" style={{ height: "1em" }} />
    </span>
  );
};

export default Typewriter;


