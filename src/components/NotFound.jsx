import { Link } from "react-router-dom";
import { btnPrimary, container } from "../utils/ui";

export default function NotFound() {
  return (
    <section className={`${container} pb-14 pt-10 sm:pb-[72px] sm:pt-14`}>
      <div className="mx-auto max-w-[480px] rounded-[26px] border border-line bg-white px-7 py-14 text-center shadow-soft">
        <div className="mb-3.5 text-6xl leading-none" aria-hidden="true">🍽️</div>
        <h2 className="mb-2 font-display text-[1.8rem] font-bold text-ink">Page not found</h2>
        <p className="mb-6 text-muted">Sorry, we couldn't find that page.</p>
        <Link to="/menu" className={btnPrimary}>
          Go to Menu
        </Link>
      </div>
    </section>
  );
}
