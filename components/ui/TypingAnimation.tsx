'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type PunctuationPause = Partial<Record<string, number>>;

interface TypingProps {
  text: string;
  className?: string;
  avgSpeed?: number;
  variance?: number;
  punctuationPause?: PunctuationPause;
  misprintChance?: number;
  startDelay?: number;
  loop?: boolean;
  instant?: boolean;
  onDone?: () => void;
  showCursor?: boolean;
}

type Segmenter = { segment: (input: string) => Iterable<{ segment: string }> };

function splitGraphemes(input: string): string[] {
  try {
    const SegmenterCtor = (
      Intl as typeof Intl & { Segmenter?: { new (lang: string, opts: any): Segmenter } }
    ).Segmenter;
    if (typeof SegmenterCtor === 'function') {
      const seg = new SegmenterCtor('pt', { granularity: 'grapheme' });
      return Array.from(seg.segment(input), (s) => s.segment);
    }
    return Array.from(input);
  } catch {
    return Array.from(input);
  }
}

function randomDelay(base: number, variance: number) {
  const jitter = (Math.random() * 2 - 1) * variance * base;
  return Math.max(15, base + jitter);
}

function pickMistakeChar() {
  const pool = 'asdfghjklçqwertyuiopzxcvbnm';
  return pool[Math.floor(Math.random() * pool.length)];
}

const defaultPunct: PunctuationPause = {
  ',': 180,
  ';': 220,
  ':': 220,
  '.': 320,
  '!': 340,
  '?': 360,
  '…': 420,
  ')': 140,
  '”': 120,
};

export default function TypingAnimation({
  text,
  className,
  avgSpeed = 60,
  variance = 0.5,
  punctuationPause = defaultPunct,
  misprintChance = 0.06,
  startDelay = 0,
  loop = false,
  instant = false,
  onDone,
  showCursor = true,
}: TypingProps) {
  const [out, setOut] = useState('');
  const [idx, setIdx] = useState(0);
  const tokens = useMemo(() => splitGraphemes(text), [text]);
  const timeouts = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const running = useRef(false);

  // Limpa timeouts ao desmontar
  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
      timeouts.current = [];
    };
  }, []);

  // Função principal de animação
  const animate = (i: number) => {
    if (!running.current) return;
    if (i >= tokens.length) {
      onDone?.();
      if (loop) {
        const t = setTimeout(() => {
          setOut('');
          setIdx(0);
          animate(0);
        }, 900);
        timeouts.current.push(t);
      }
      return;
    }
    const char = tokens[i];
    const extraPause = punctuationPause[char] ?? 0;

    // erro e correção ocasionais
    if (misprintChance > 0 && Math.random() < misprintChance && /\S/.test(char)) {
      const wrong = pickMistakeChar();
      const t1 = setTimeout(() => setOut((p) => p + wrong), randomDelay(avgSpeed, variance));
      const t2 = setTimeout(
        () => setOut((p) => p.slice(0, -1)),
        randomDelay(avgSpeed, variance) + 120
      );
      const t3 = setTimeout(
        () => {
          setOut((p) => p + char);
          setIdx(i + 1);
          animate(i + 1);
        },
        randomDelay(avgSpeed, variance) + 220
      );
      timeouts.current.push(t1, t2, t3);
      return;
    }

    // digitação normal
    const t = setTimeout(
      () => {
        setOut((p) => p + char);
        setIdx(i + 1);
        animate(i + 1);
      },
      randomDelay(avgSpeed + extraPause, variance)
    );
    timeouts.current.push(t);
  };

  // Sempre anima ao montar ou quando texto muda
  useEffect(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    setOut('');
    setIdx(0);
    running.current = true;

    if (instant) {
      setOut(text);
      setIdx(tokens.length);
      onDone?.();
      if (loop) {
        const t = setTimeout(() => {
          setOut('');
          setIdx(0);
        }, 1000);
        timeouts.current.push(t);
      }
      return;
    }

    const t = setTimeout(() => animate(0), Math.max(0, startDelay));
    timeouts.current.push(t);
    return () => {
      running.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, instant, loop, startDelay, avgSpeed, variance, misprintChance, punctuationPause]);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {out}
      {showCursor && <BlinkCursor paused={idx >= tokens.length && !loop} />}
    </span>
  );
}

function BlinkCursor({ paused }: { paused: boolean }) {
  return (
    <span
      className={`inline-block w-[0.6ch] select-none ${paused ? 'opacity-40' : 'animate-pulse'}`}
      style={{ borderRight: '2px solid currentColor', transform: 'translateY(1px)' }}
      aria-hidden="true"
    />
  );
}
