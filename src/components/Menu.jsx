import { Link } from "react-router-dom";
import { FaArrowRight, FaCreditCard, FaQrcode, FaUtensils } from "react-icons/fa";
import { categories } from "../data/categories";
import SafeImage from "./SafeImage";
import { btnOutlineLight, btnPrimary, container, eyebrowDark, eyebrowLight, heroBg } from "../utils/ui";

const steps = [
  { icon: <FaQrcode />, title: "Scan", text: "Scan the QR code at your table to open our menu." },
  { icon: <FaUtensils />, title: "Choose", text: "Pick your favourite dishes from 8 delicious categories." },
  { icon: <FaCreditCard />, title: "Pay & Enjoy", text: "Pay from your phone and relax while we prepare your food." },
];

function MenuPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={`relative overflow-hidden ${heroBg} pb-28 pt-16 text-center text-white sm:pb-32 sm:pt-24`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_320px_at_12%_18%,rgba(255,107,53,0.35),transparent_70%),radial-gradient(520px_340px_at_90%_85%,rgba(145,172,143,0.5),transparent_70%)]" />
        <div className={`${container} relative z-10`}>
          <span className={`${eyebrowLight} animate-fade-up`}>Welcome to Foodie</span>
          <h1 className="mx-auto mb-4 mt-5 max-w-[820px] animate-fade-up font-display text-[2.3rem] font-bold leading-[1.15] [animation-delay:100ms] sm:text-6xl">
            Yeah! Make Your Order <em className="text-gold">Delicious</em>
          </h1>
          <p className="mx-auto mb-8 max-w-[620px] animate-fade-up italic text-white/80 [animation-delay:200ms] sm:text-lg">
            “Food is our common ground, a universal experience that transcends borders.”
          </p>
          <div className="flex animate-fade-up flex-wrap justify-center gap-3.5 [animation-delay:300ms]">
            <a href="#categories" className={btnPrimary}>
              Explore Menu <FaArrowRight />
            </a>
            <Link to="/cart" className={btnOutlineLight}>
              View Cart
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5 sm:mt-14 sm:gap-3.5" aria-hidden="true">
            {categories.map((c, i) => (
              <span
                key={c.path}
                style={{ animationDelay: `${(i % 3) * 0.6}s` }}
                className="grid size-12 animate-float place-items-center rounded-full border border-white/15 bg-white/10 text-2xl motion-reduce:animate-none sm:size-[58px] sm:text-[1.7rem]"
              >
                {c.emoji}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-px -inset-x-[5%] h-14 bg-page [border-radius:50%_50%_0_0/100%_100%_0_0]" />
      </section>

      {/* ---------- Categories ---------- */}
      <section id="categories" className={`${container} pb-14 pt-10 sm:pb-[72px] sm:pt-14`}>
        <div className="mx-auto mb-11 max-w-[640px] text-center">
          <span className={eyebrowDark}>Our Menu</span>
          <h2 className="mb-2.5 mt-3.5 font-display text-[1.9rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
            What are you craving today?
          </h2>
          <p className="text-muted">Pick a category to see all the dishes and add them to your cart.</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(262px,1fr))] gap-6">
          {categories.map((c) => (
            <Link
              to={c.path}
              key={c.path}
              className="group flex flex-col overflow-hidden rounded-[22px] border border-line bg-white text-ink no-underline shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="relative h-48 overflow-hidden bg-sage-soft">
                <SafeImage
                  src={c.imgSrc}
                  alt={c.title}
                  emoji={c.emoji}
                  className="size-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3.5 left-3.5 grid size-[46px] place-items-center rounded-full bg-white text-[1.35rem] shadow-[0_6px_16px_rgba(0,0,0,0.18)]">
                  {c.emoji}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
                <h3 className="mb-2 text-xl font-bold text-ink">{c.title}</h3>
                <p className="mb-[18px] line-clamp-3 text-sm text-muted">{c.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-[0.92rem] font-semibold text-accent-dark">
                  View Menu <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="border-t border-line bg-white pb-20 pt-[72px]">
        <div className={container}>
          <div className="mx-auto mb-11 max-w-[640px] text-center">
            <span className={eyebrowDark}>How it works</span>
            <h2 className="mt-3.5 font-display text-[1.9rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
              Order in three easy steps
            </h2>
          </div>
          <div className="mx-auto grid max-w-[520px] gap-6 md:max-w-none md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-[22px] border border-line bg-page px-6 pb-[30px] pt-[34px] text-center">
                <span className="absolute left-5 top-3 font-display text-[2.6rem] font-bold leading-none text-sage/50">
                  {i + 1}
                </span>
                <span className="mx-auto mb-[18px] grid size-[66px] place-items-center rounded-full bg-linear-to-br from-accent to-[#ff8a3d] text-[1.4rem] text-white shadow-[0_12px_24px_rgba(255,107,53,0.35)]">
                  {s.icon}
                </span>
                <h3 className="mb-1.5 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="text-[0.92rem] text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuPage;
