import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clear_cart } from "../toolkit/action";
import { btnPrimary, container } from "../utils/ui";

const REDIRECT_MS = 3000;

const OrderSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // the order is paid: empty the cart, then go back to the menu after 3 seconds
  useEffect(() => {
    dispatch(clear_cart());
    const timer = setTimeout(() => {
      navigate("/menu");
    }, REDIRECT_MS);
    return () => clearTimeout(timer);
  }, [navigate, dispatch]);

  return (
    <section className={`${container} grid place-items-center pb-20 pt-14 sm:pb-[88px] sm:pt-[72px]`}>
      <div className="w-full max-w-[480px] animate-fade-up rounded-[30px] border border-line bg-white px-[22px] pb-8 pt-[38px] text-center shadow-lift sm:px-[34px] sm:pb-10 sm:pt-[46px]">
        <div
          className="mx-auto mb-6 grid size-[108px] animate-pop place-items-center rounded-full bg-linear-to-br from-emerald-400 to-emerald-500 shadow-[0_16px_34px_rgba(16,185,129,0.42)]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 52 52" width="56" height="56">
            <path
              d="M14 27l8 8 16-17"
              fill="none"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="42"
              strokeDashoffset="42"
              className="animate-draw motion-reduce:[stroke-dashoffset:0]"
            />
          </svg>
        </div>
        <h1 className="mb-2.5 font-display text-[2.1rem] font-bold leading-tight text-ink">Payment Successful!</h1>
        <p className="text-muted">Thank you! Your order is confirmed and our kitchen is getting started.</p>
        <div className="mx-auto mb-2.5 mt-7 h-1.5 overflow-hidden rounded-md bg-sage-soft" aria-hidden="true">
          <span
            className="block h-full w-0 animate-fill rounded-md bg-linear-to-r from-accent to-[#ff8a3d] motion-reduce:w-full"
            style={{ animationDuration: `${REDIRECT_MS}ms` }}
          />
        </div>
        <small className="mb-5 block text-muted">Taking you back to the menu…</small>
        <Link to="/menu" className={btnPrimary}>
          Back to Menu now
        </Link>
      </div>
    </section>
  );
};

export default OrderSuccess;
