import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUtensils } from "react-icons/fa";
import QRimg from "./QRcode.png";
import { btnPrimary, heroBg } from "../utils/ui";

function QRcode() {
  const navigate = useNavigate();

  return (
    <div className={`relative grid min-h-screen place-items-center overflow-hidden p-6 ${heroBg}`}>
      <div className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 size-80 rounded-full bg-sage/35 blur-3xl" />

      <div className="relative w-full max-w-[440px] animate-fade-up rounded-[28px] bg-white px-7 pb-8 pt-[34px] text-center shadow-lift">
        <div className="mb-5 inline-flex items-center gap-3 text-left">
          <span className="grid size-[42px] flex-none place-items-center rounded-[13px] bg-linear-to-br from-accent to-[#ff8a3d] text-[1.05rem] text-white shadow-[0_8px_18px_rgba(255,107,53,0.4)]">
            <FaUtensils />
          </span>
          <span className="flex flex-col leading-[1.1]">
            <strong className="font-display text-[1.4rem] tracking-wide text-ink">Foodie</strong>
            <small className="mt-[3px] text-[0.62rem] uppercase tracking-[0.18em] text-muted">Universal Experience</small>
          </span>
        </div>
        <h1 className="font-display text-[2rem] font-bold leading-tight text-ink">Use this QR code</h1>
        <p className="mt-1.5 text-muted">Take a snap &amp; use it!</p>
        <div className="mx-auto mb-6 mt-[22px] inline-block rounded-[22px] border-2 border-dashed border-sage bg-white p-3.5">
          <img src={QRimg} alt="QRcode" className="h-auto w-full max-w-[260px] rounded-xl" />
        </div>
        <div>
          <button type="button" className={btnPrimary} onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back to Scan
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRcode;
