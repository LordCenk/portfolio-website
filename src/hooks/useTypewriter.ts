"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through `words`, typing and deleting each one, like the animated
 * role text under the name on the reference portfolio.
 */
export function useTypewriter(words: string[], speed = 90, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const atFullWord = !deleting && text === current;
    const atEmpty = deleting && text === "";

    if (atFullWord) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (atEmpty) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
