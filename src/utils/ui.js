// Shared Tailwind class strings, so every button / hero looks the same on every page.

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const btnBase =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border px-6 py-3 text-[0.95rem] font-semibold leading-tight no-underline transition duration-200 hover:-translate-y-0.5 " +
  focusRing;

export const btnSm = "!px-4 !py-2.5 !text-[0.85rem]";

export const btnPrimary =
  btnBase +
  " border-transparent bg-linear-to-br from-accent to-[#ff8a3d] text-white shadow-[0_10px_22px_rgba(255,107,53,0.35)] hover:brightness-105 hover:shadow-[0_14px_28px_rgba(255,107,53,0.45)]";

export const btnGhost =
  btnBase + " border-line bg-white text-ink hover:border-accent hover:text-accent-dark";

export const btnLight = btnBase + " border-transparent bg-white text-ink hover:bg-sage-soft";

export const btnOutlineLight =
  btnBase + " border-white/50 bg-transparent text-white hover:border-white hover:bg-white/10";

// dark slate -> forest green banner used on Home, Menu, category pages, QR page
export const heroBg = "bg-linear-to-br from-ink via-deep to-forest";

export const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-5";

export const eyebrowLight =
  "inline-block rounded-full bg-white/10 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold";
export const eyebrowDark =
  "inline-block rounded-full bg-sage-soft px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-sage-dark";
