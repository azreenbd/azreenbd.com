// Auto-highlights a card in each grid marked with data-highlight:
//   "cycle" - steps through the cards in turn; resumes after the pointer has been away for a while
//   "first" - keeps the first card lit until the visitor first hovers the grid
// Touch devices have no hover, so both light whichever card crosses the middle of the screen,
// unless the grid also has data-no-scroll-highlight (small cards cross it too fast to read well).

const INTERVAL = 4000; // ms each card stays highlighted while cycling

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const touch = matchMedia("(hover: none)").matches;

function setup(grid: HTMLElement) {
  const cards = [...grid.children] as HTMLElement[];
  const cycle = grid.dataset.highlight === "cycle";
  let current = -1;

  function activate(i: number) {
    cards[current]?.removeAttribute("data-active");
    current = i;
    cards[current]?.setAttribute("data-active", "");
  }

  if (touch) {
    if ("noScrollHighlight" in grid.dataset) return;
    grid.setAttribute("data-auto", "");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const i = cards.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) activate(i);
          else if (i === current) activate(-1);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" } // the middle 20% of the viewport
    );
    cards.forEach((card) => observer.observe(card));
    return;
  }

  let timer = 0;
  let resume = 0;
  let visible = false;
  let hovered = false;

  // Runs only while the grid is on screen and not hovered, and always restarts from the first card.
  function sync() {
    const run = visible && !hovered;
    const running = grid.hasAttribute("data-auto");
    if (run && !running) {
      grid.setAttribute("data-auto", "");
      activate(0);
      if (cycle && cards.length > 1) {
        timer = window.setInterval(() => activate((current + 1) % cards.length), INTERVAL);
      }
    } else if (!run && running) {
      clearInterval(timer);
      grid.removeAttribute("data-auto");
      activate(-1);
    }
  }

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  observer.observe(grid);

  // Listening on the grid, not each card, stops the highlight flashing back on in the gaps.
  grid.addEventListener("pointerenter", () => {
    clearTimeout(resume);
    hovered = true;
    sync();
    if (!cycle) observer.disconnect();
  });
  if (!cycle) return;
  grid.addEventListener("pointerleave", () => {
    resume = window.setTimeout(() => {
      hovered = false;
      sync();
    }, INTERVAL / 2);
  });
}

if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>("[data-highlight]").forEach(setup);
}
