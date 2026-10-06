import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaLock, FaTrashAlt } from "react-icons/fa";
import { cart, remove_item, remove_one } from "../toolkit/action";
import { formatINR, parsePrice } from "../utils/price";
import { btnGhost, btnPrimary, container, focusRing, heroBg } from "../utils/ui";
import SafeImage from "./SafeImage";
import Stepper from "./Stepper";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // group identical dishes into one line with a quantity
  const lines = [];
  cartItems.forEach((item) => {
    const line = lines.find((l) => l.item.id === item.id);
    if (line) line.qty += 1;
    else lines.push({ item, qty: 1 });
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + parsePrice(item.price), 0);

  const handlePaymentSuccess = () => {
    navigate("/success");
  };

  return (
    <>
      <section className={`relative overflow-hidden ${heroBg} pb-10 pt-7 text-white sm:pt-10`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(460px_260px_at_90%_0%,rgba(255,107,53,0.32),transparent_70%)]" />
        <div className={`${container} relative`}>
          <nav className="mb-5 flex items-center gap-2.5 text-sm text-white/65" aria-label="Breadcrumb">
            <Link to="/menu" className="text-white/85 no-underline hover:text-gold">Menu</Link>
            <span>/</span>
            <span aria-current="page">My Cart</span>
          </nav>
          <h1 className="animate-fade-up font-display text-[2rem] font-bold leading-tight sm:text-[2.7rem]">My Cart</h1>
          <p className="mt-1.5 text-white/80">Review your order before you pay.</p>
        </div>
      </section>

      <section className={`${container} pb-14 pt-10 sm:pb-[72px] sm:pt-14`}>
        {lines.length === 0 ? (
          <div className="mx-auto max-w-[480px] animate-fade-up rounded-[26px] border border-line bg-white px-7 py-14 text-center shadow-soft">
            <div className="mb-3.5 text-6xl leading-none" aria-hidden="true">🛒</div>
            <h2 className="mb-2 font-display text-[1.8rem] font-bold text-ink">Your cart is empty</h2>
            <p className="mb-6 text-muted">Please add some items.</p>
            <Link to="/menu" className={btnPrimary}>
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-[30px] lg:grid-cols-[1fr_370px]">
            <div className="grid gap-4">
              {lines.map(({ item, qty }) => {
                const name = item.name.trim();
                return (
                  <article
                    key={item.id}
                    className="grid animate-fade-up grid-cols-[78px_1fr] items-center gap-3.5 rounded-[20px] border border-line bg-white p-3.5 shadow-[0_6px_18px_rgba(31,42,55,0.06)] transition-shadow duration-200 hover:shadow-soft sm:grid-cols-[96px_1fr_auto] sm:gap-[18px]"
                  >
                    <div className="size-[78px] overflow-hidden rounded-2xl bg-sage-soft sm:size-24">
                      <SafeImage src={item.image} alt={name} fallbackClassName="text-3xl" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-[1.05rem] font-semibold text-ink">{name}</h3>
                      <span className="inline-block rounded-full bg-sage-soft px-3 py-1 text-[0.72rem] font-semibold text-sage-dark">
                        {item.category}
                      </span>
                      <span className="mt-2 block text-sm text-muted">{formatINR(parsePrice(item.price))} each</span>
                    </div>
                    <div className="col-span-full flex items-center justify-between gap-2.5 sm:col-span-1 sm:justify-start sm:gap-[18px]">
                      <Stepper
                        qty={qty}
                        label={name}
                        onMinus={() => dispatch(remove_one(item.id))}
                        onPlus={() => dispatch(cart(item))}
                      />
                      <strong className="flex-1 text-right text-[1.08rem] text-ink sm:min-w-[84px] sm:flex-none">
                        {formatINR(parsePrice(item.price) * qty)}
                      </strong>
                      <button
                        type="button"
                        className={`grid size-[38px] cursor-pointer place-items-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white ${focusRing}`}
                        aria-label={`Remove ${name}`}
                        onClick={() => {
                          dispatch(remove_item(item.id));
                          toast.error("Item removed", { autoClose: 1000, position: "bottom-right" });
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </article>
                );
              })}
              <div className="mt-2 flex flex-wrap gap-3">
                <button type="button" className={btnGhost} onClick={() => navigate(-1)}>
                  ← To Recent Page
                </button>
                <Link to="/menu" className={btnGhost}>
                  Back to Menu
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-line bg-white p-[26px] shadow-soft lg:sticky lg:top-24">
              <h2 className="mb-[18px] font-display text-[1.4rem] font-bold text-ink">Order Summary</h2>
              <div className="flex justify-between py-2 text-muted">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex justify-between py-2 text-muted">
                <span>Subtotal</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
              <div className="mb-[22px] mt-3 flex items-center justify-between border-t border-dashed border-sage pt-4 font-semibold text-ink">
                <span>Total Price</span>
                <strong className="text-[1.6rem] text-accent-dark">{formatINR(totalPrice)}</strong>
              </div>
              <button type="button" className={`${btnPrimary} w-full !py-3.5`} onClick={handlePaymentSuccess}>
                <FaLock /> Pay Now
              </button>
              <p className="mt-3.5 text-center text-[0.8rem] text-muted">Fast, contactless checkout</p>
            </aside>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
