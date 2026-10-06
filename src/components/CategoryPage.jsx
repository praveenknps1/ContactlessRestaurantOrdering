import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaArrowRight, FaPlus, FaShoppingCart } from "react-icons/fa";
import { cart, remove_one } from "../toolkit/action";
import { formatINR, parsePrice } from "../utils/price";
import { btnGhost, btnLight, btnPrimary, btnSm, container, heroBg } from "../utils/ui";
import SafeImage from "./SafeImage";
import Stepper from "./Stepper";

// One reusable, professionally styled page for every food category.
export default function CategoryPage({ title, tagline, emoji, items }) {
  const cartArr = useSelector((state) => state.cartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const qtyOf = (id) => cartArr.filter((i) => i.id === id).length;
  const total = cartArr.reduce((sum, i) => sum + parsePrice(i.price), 0);

  const add = (item) => {
    dispatch(cart(item));
    toast.success(`${item.name.trim()} added to cart`, { autoClose: 1200, position: "bottom-right" });
  };

  return (
    <>
      <section className={`relative overflow-hidden ${heroBg} pb-10 pt-7 text-white sm:pb-14 sm:pt-10`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(460px_260px_at_90%_0%,rgba(255,107,53,0.32),transparent_70%)]" />
        <div className={`${container} relative`}>
          <nav className="mb-5 flex items-center gap-2.5 text-sm text-white/65" aria-label="Breadcrumb">
            <Link to="/menu" className="text-white/85 no-underline hover:text-gold">Menu</Link>
            <span>/</span>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="flex animate-fade-up items-center gap-4 sm:gap-[22px]">
            <span className="grid size-[66px] flex-none place-items-center rounded-[18px] border border-white/20 bg-white/10 text-[2rem] sm:size-[88px] sm:rounded-3xl sm:text-[2.7rem]" aria-hidden="true">
              {emoji}
            </span>
            <div>
              <h1 className="font-display text-[2rem] font-bold leading-tight sm:text-[2.7rem]">{title}</h1>
              <p className="mt-1.5 text-white/80">{tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${container} pb-14 pt-10 sm:pb-[72px] sm:pt-14`}>
        <div className="mb-6 flex items-center justify-between gap-3">
          <h2 className="font-display text-[1.7rem] font-bold text-ink">Choose your favourites</h2>
          <span className="whitespace-nowrap rounded-full bg-sage-soft px-3.5 py-1 text-[0.8rem] font-semibold text-sage-dark">
            {items.length} items
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:gap-6">
          {items.map((item, index) => {
            const qty = qtyOf(item.id);
            const name = item.name.trim();
            return (
              <article
                key={item.id}
                style={{ animationDelay: `${index * 70}ms` }}
                className="group flex animate-fade-up flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="relative h-32 overflow-hidden bg-sage-soft sm:h-48">
                  <SafeImage
                    src={item.image}
                    alt={name}
                    emoji={emoji}
                    className="size-full object-cover transition duration-500 group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[0.72rem] font-semibold text-ink shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3.5 pt-3 sm:px-[18px] sm:pb-[18px] sm:pt-4">
                  <h3 className="mb-3.5 text-[0.95rem] font-semibold text-ink sm:text-[1.08rem]">{name}</h3>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[1.1rem] font-bold text-accent-dark sm:text-[1.3rem]">
                      {formatINR(parsePrice(item.price))}
                    </span>
                    {qty === 0 ? (
                      <button type="button" className={`${btnPrimary} ${btnSm}`} onClick={() => add(item)}>
                        <FaPlus /> Add
                      </button>
                    ) : (
                      <Stepper qty={qty} label={name} onMinus={() => dispatch(remove_one(item.id))} onPlus={() => add(item)} />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-11 text-center">
          <button type="button" className={btnGhost} onClick={() => navigate("/menu")}>
            ← Back to Menu
          </button>
        </div>
      </section>

      {cartArr.length > 0 && (
        <div
          role="status"
          className="fixed inset-x-0 bottom-3 z-40 mx-auto flex w-[min(560px,calc(100%-28px))] animate-slide-up items-center justify-between gap-3 rounded-[20px] bg-ink py-3 pl-4 pr-3.5 text-white shadow-[0_20px_44px_rgba(0,0,0,0.38)] sm:bottom-5 sm:pl-[22px]"
        >
          <div className="flex items-center gap-3 text-[0.95rem]">
            <FaShoppingCart className="text-accent" />
            <span>
              <strong>{cartArr.length}</strong> {cartArr.length === 1 ? "item" : "items"} · {formatINR(total)}
            </span>
          </div>
          <Link to="/cart" className={`${btnLight} ${btnSm}`}>
            View Cart <FaArrowRight />
          </Link>
        </div>
      )}
    </>
  );
}
