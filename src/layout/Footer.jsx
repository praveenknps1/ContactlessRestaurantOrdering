import { Link } from "react-router-dom";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaUtensils } from "react-icons/fa";
import { categories } from "../data/categories";

const heading =
  "mb-5 text-base font-semibold text-white after:mt-2 after:block after:h-[3px] after:w-9 after:rounded-sm after:bg-accent after:content-['']";
const footLink =
  "inline-block text-white/70 no-underline transition duration-200 hover:translate-x-1 hover:text-gold";
const social =
  "grid size-10 place-items-center rounded-full bg-white/10 text-sm text-white no-underline transition duration-200 hover:-translate-y-0.5 hover:bg-accent";

export default function Footer() {
  return (
    <footer id="contact" className="flex-none border-t-4 border-accent bg-[#17202a] text-white/70">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-9 px-5 pb-8 pt-12 sm:grid-cols-2 sm:gap-11 sm:pt-16 lg:grid-cols-[1.6fr_1fr_1.2fr_1.4fr]">
        <div>
          <div className="inline-flex items-center gap-3">
            <span className="grid size-[42px] flex-none place-items-center rounded-[13px] bg-linear-to-br from-accent to-[#ff8a3d] text-[1.05rem] text-white shadow-[0_8px_18px_rgba(255,107,53,0.4)]">
              <FaUtensils />
            </span>
            <span className="flex flex-col leading-[1.1]">
              <strong className="font-display text-[1.4rem] tracking-wide text-white">Foodie</strong>
              <small className="mt-[3px] text-[0.62rem] uppercase tracking-[0.18em] text-white/60">
                Universal Experience
              </small>
            </span>
          </div>
          <p className="mt-4 max-w-[340px] text-[0.92rem] leading-[1.75]">
            Food is our common ground, a universal experience that transcends borders. Scan, order and enjoy - contactless
            and easy.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a href="#contact" aria-label="Facebook" className={social}>
              <FaFacebookF />
            </a>
            <a href="#contact" aria-label="Instagram" className={social}>
              <FaInstagram />
            </a>
            <a href="#contact" aria-label="Twitter" className={social}>
              <FaTwitter />
            </a>
          </div>
        </div>

        <div>
          <h3 className={heading}>Quick Links</h3>
          <ul className="m-0 list-none p-0 text-[0.93rem]">
            <li className="my-[11px]">
              <Link to="/menu" className={footLink}>Menu</Link>
            </li>
            <li className="my-[11px]">
              <Link to="/cart" className={footLink}>My Cart</Link>
            </li>
            <li className="my-[11px]">
              <Link to="/" className={footLink}>Scan QR Code</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={heading}>Our Menu</h3>
          <ul className="m-0 grid list-none grid-cols-2 gap-x-4 p-0 text-[0.93rem]">
            {categories.map((c) => (
              <li key={c.path} className="my-[11px]">
                <Link to={c.path} className={footLink}>{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={heading}>Contact Us</h3>
          <ul className="m-0 list-none p-0">
            <li className="mb-4 flex items-center gap-3.5">
              <span className="grid size-[42px] flex-none place-items-center rounded-full bg-accent/15 text-[0.95rem] text-accent">
                <FaPhoneAlt />
              </span>
              <div>
                <small className="block text-[0.72rem] uppercase tracking-[0.08em] text-white/50">Toll Free</small>
                <a href="tel:180042421111" className="font-medium text-white no-underline hover:text-gold">
                  1800-4242-1111
                </a>
              </div>
            </li>
            <li className="mb-4 flex items-center gap-3.5">
              <span className="grid size-[42px] flex-none place-items-center rounded-full bg-accent/15 text-[0.95rem] text-accent">
                <FaEnvelope />
              </span>
              <div>
                <small className="block text-[0.72rem] uppercase tracking-[0.08em] text-white/50">Mail</small>
                <a href="mailto:Foodie@gmail.com" className="font-medium text-white no-underline hover:text-gold">
                  Foodie@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-2 border-t border-white/10 px-5 py-5 text-center text-[0.85rem] text-white/50 sm:justify-between sm:text-left">
        <span>© {new Date().getFullYear()} Foodie. All rights reserved.</span>
        <span>Made with ❤ for food lovers</span>
      </div>
    </footer>
  );
}
