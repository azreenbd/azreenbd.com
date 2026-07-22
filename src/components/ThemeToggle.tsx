import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

// Reads the class set by the inline no-FOUC script in BaseLayout.
function isDark() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => setDark(isDark()), []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-fg-muted transition-colors hover:border-brand hover:text-brand"
    >
      {dark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}
