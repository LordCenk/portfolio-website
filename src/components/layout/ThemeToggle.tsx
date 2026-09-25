"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const emptySubscribe = () => () => {};

// Avoids a hydration mismatch: the theme is unknown on the server, so we
// report "not mounted yet" during SSR and the first client render.
function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDark = hasMounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-7 w-14 shrink-0 items-center rounded-full transition-colors",
        isDark ? "bg-brand-blue" : "bg-zinc-300"
      )}
    >
      <span
        className={cn(
          "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
          isDark ? "translate-x-8" : "translate-x-1"
        )}
      />
    </button>
  );
}
