// Full-screen loading overlay shown for a moment after a successful scan.
const Spinner = () => (
  <div
    className="fixed inset-0 z-50 grid place-items-center bg-ink/60 backdrop-blur-sm"
    role="status"
    aria-live="polite"
  >
    <div className="grid animate-pop-in place-items-center gap-4 rounded-3xl bg-white/10 px-10 py-8 ring-1 ring-white/20">
      <svg className="size-16 animate-spin" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle cx="33" cy="33" r="28" fill="none" strokeWidth="6" className="stroke-white/20" />
        <circle
          cx="33"
          cy="33"
          r="28"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="60 120"
          className="stroke-accent"
        />
      </svg>
      <p className="text-sm font-medium tracking-wide text-white/90">Opening the menu…</p>
    </div>
  </div>
);

export default Spinner;
