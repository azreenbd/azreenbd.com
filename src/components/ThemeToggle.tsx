import { useEffect, useState } from "react";
import { FaCircleHalfStroke, FaMoon, FaSun } from "react-icons/fa6";

type Mode = "system" | "light" | "dark";

const ICONS = {
  system: FaCircleHalfStroke,
  light: FaSun,
  dark: FaMoon,
};

function readMode(): Mode {
  if (typeof localStorage === "undefined") return "system";
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "system";
}

function applyMode(mode: Mode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = mode === "dark" || (mode === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    setMode(readMode());

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (readMode() === "system") applyMode("system");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function nextMode(): Mode {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const order: Mode[] = prefersDark
      ? ["system", "light", "dark"]
      : ["system", "dark", "light"];
    return order[(order.indexOf(mode) + 1) % order.length];
  }

  function cycle() {
    const next = nextMode();
    setMode(next);
    applyMode(next);
    try {
      if (next === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", next);
      }
    } catch {}
  }

  const Icon = ICONS[mode];

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${mode} (click to change)`}
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-fg-muted transition-colors hover:border-brand hover:text-brand">
      <Icon size={16} />
    </button>
  );
}
