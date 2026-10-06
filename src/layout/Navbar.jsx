import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaBars, FaChevronDown, FaQrcode, FaShoppingCart, FaTimes, FaUtensils } from "react-icons/fa";
import { categories } from "../data/categories";
import { focusRing } from "../utils/ui";

const linkBase = `inline-flex cursor-pointer items-center justify-between gap-2 rounded-full border-0 px-4 py-3 text-[0.93rem] font-medium no-underline transition md:justify-center md:py-2 ${focusRing}`;
const linkIdle = "bg-transparent text-white/80 hover:bg-white/10 hover:text-white";
const linkActive = "bg-accent/25 text-orange-200";

export default function Navbar() {
  const count = useSelector((state) => state.cartArr.length);
  const [open, setOpen] = useState(false); // mobile menu
  const [dropdown, setDropdown] = useState(false); // categories dropdown
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef(null);
  const { pathname } = useLocation();

  // close menus when the page changes
  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  // shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // click outside closes the dropdown
  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropdown(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkClass = ({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_10px_28px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[66px] max-w-[1200px] items-center gap-5 px-4 sm:px-5 md:h-[72px]">
        <Link to="/menu" className={`inline-flex items-center gap-3 rounded-xl ${focusRing}`} aria-label="Foodie - go to menu">
          <span className="grid size-[42px] flex-none place-items-center rounded-[13px] bg-linear-to-br from-accent to-[#ff8a3d] text-[1.05rem] text-white shadow-[0_8px_18px_rgba(255,107,53,0.4)]">
            <FaUtensils />
          </span>
          <span className="flex flex-col leading-[1.1]">
            <strong className="font-display text-[1.4rem] tracking-wide text-white">Foodie</strong>
            <small className="mt-[3px] hidden text-[0.62rem] uppercase tracking-[0.18em] text-white/60 sm:block">
              Universal Experience
            </small>
          </span>
        </Link>

        <nav
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full max-h-[calc(100vh-66px)] flex-col gap-1 overflow-y-auto border-b border-white/10 bg-ink px-5 pb-5 pt-3 shadow-[0_24px_36px_rgba(0,0,0,0.35)] md:static md:ml-auto md:flex md:max-h-none md:flex-row md:items-center md:gap-1.5 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <NavLink to="/menu" end className={linkClass}>
            Menu
          </NavLink>

          <div className="relative" ref={dropRef}>
            <button
              type="button"
              className={`${linkBase} w-full ${dropdown ? linkActive : linkIdle}`}
              aria-expanded={dropdown}
              onClick={() => setDropdown((v) => !v)}
            >
              Categories
              <FaChevronDown className={`text-[0.65rem] transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`${dropdown ? "grid animate-pop-in" : "hidden"} mt-1 grid-cols-1 gap-0.5 rounded-2xl bg-white/5 p-2 min-[420px]:grid-cols-2 md:absolute md:left-0 md:top-[calc(100%+12px)] md:mt-0 md:min-w-60 md:grid-cols-1 md:bg-white md:shadow-lift`}
            >
              {categories.map((c) => (
                <Link
                  key={c.path}
                  to={c.path}
                  className={`flex items-center gap-3 rounded-[10px] px-3.5 py-2.5 text-[0.92rem] font-medium text-white no-underline transition hover:bg-white/10 hover:text-gold md:text-ink md:hover:bg-sage-soft md:hover:text-sage-dark ${focusRing}`}
                >
                  <span>{c.emoji}</span> {c.title}
                </Link>
              ))}
            </div>
          </div>

          <a href="#contact" className={`${linkBase} ${linkIdle}`}>
            Contact
          </a>
          <Link to="/" className={`${linkBase} ${linkIdle} !justify-start border !border-white/20 md:!justify-center`}>
            <FaQrcode /> Scan
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2.5 md:ml-0">
          <Link
            to="/cart"
            className={`relative inline-flex items-center gap-2 rounded-full bg-linear-to-br from-accent to-[#ff8a3d] px-4 py-3 text-[0.92rem] font-semibold text-white no-underline shadow-[0_8px_20px_rgba(255,107,53,0.4)] transition hover:-translate-y-0.5 sm:px-[18px] sm:py-2.5 ${focusRing}`}
            aria-label={`Cart with ${count} items`}
          >
            <FaShoppingCart />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-[7px] grid h-[22px] min-w-[22px] place-items-center rounded-full border-2 border-ink bg-white px-1 text-[0.72rem] font-bold text-accent-dark">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className={`grid size-11 cursor-pointer place-items-center rounded-xl border border-white/20 bg-transparent text-lg text-white transition hover:border-white/40 hover:bg-white/10 md:hidden ${focusRing}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
