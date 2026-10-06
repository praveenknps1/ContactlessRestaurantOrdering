import React, { useState, useRef } from "react";
import Reader2Wrapper from "./QRScannerWrapper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaCamera, FaQrcode, FaUtensils } from "react-icons/fa";
import Spinner from "./loading"; // Import your spinner component
import SafeImage from "./SafeImage";
import { btnPrimary, focusRing } from "../utils/ui";

const QRScannerComponent = () => {
  const [data, setData] = useState(null);
  const [isBackCamera, setIsBackCamera] = useState(true); // State to toggle front/back camera
  const [showSpinner, setShowSpinner] = useState(false); // State to control spinner visibility
  const isProcessingScan = useRef(false); // Ref to handle debounce
  const navigate = useNavigate(); // Get the navigate function from React Router

  const handleScan = (result) => {
    if (result && !isProcessingScan.current) {
      isProcessingScan.current = true; // Block further scans temporarily
      setData(result.text);

      // Show spinner and success notification
      setShowSpinner(true);
      toast.success("Scanned successfully!", {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
      });

      // Navigate to the menu page
      setTimeout(() => {
        setShowSpinner(false); // Hide spinner
        navigate("/menu");
        isProcessingScan.current = false; // Reset the flag
      }, 3000); // Allow the toast to show before navigation
    }
  };

  const handleError = (error) => {
    console.error(error);
    toast.error("Failed to scan the QR code.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const toggleCamera = () => {
    setIsBackCamera(!isBackCamera);
  };

  return (
    <div className="min-h-screen bg-page">
      {showSpinner && <Spinner />}

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-3">
        {/* ---------- Left Section: Text and Image ---------- */}
        <section className="relative flex flex-col items-center justify-center gap-5 overflow-hidden bg-linear-to-br from-ink via-deep to-deep px-6 py-14 text-center text-white sm:px-10">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-accent/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full bg-sage/25 blur-3xl" />

          <div className="relative flex animate-fade-up items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-linear-to-br from-accent to-[#ff8a3d] text-lg shadow-[0_8px_18px_rgba(255,107,53,0.4)]">
              <FaUtensils />
            </span>
            <span className="text-left leading-tight">
              <strong className="block font-display text-2xl tracking-wide">Foodie</strong>
              <small className="text-[0.62rem] uppercase tracking-[0.2em] text-white/60">
                Universal Experience
              </small>
            </span>
          </div>

          <h1 className="relative animate-fade-up font-display text-3xl font-bold leading-tight [animation-delay:100ms] sm:text-4xl lg:text-[2.5rem]">
            Welcome Foodie's to universal experience
          </h1>
          <p className="relative max-w-md animate-fade-up leading-relaxed text-white/80 [animation-delay:200ms] sm:text-lg">
            Scan the QR code to explore our delicious menu and discover your next meal! We are
            excited to serve you!
          </p>
          <div className="relative h-56 w-full max-w-sm animate-fade-up overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.4)] ring-4 ring-white/10 transition duration-500 [animation-delay:300ms] hover:scale-[1.03] sm:h-64">
            <SafeImage
              src="https://tse3.mm.bing.net/th/id/OIP.ihmdFUsOYb-UXsWgZMaeMAHaHa?rs=1&pid=ImgDetMain"
              alt="Delicious food"
              emoji="🍲"
            />
          </div>
        </section>

        {/* ---------- Middle Section: QR Scanner ---------- */}
        <section className="relative flex flex-col items-center justify-center gap-5 bg-linear-to-b from-sage to-[#a8c0a6] px-6 py-14 text-center text-ink sm:px-10">
          <h1 className="animate-fade-up font-display text-3xl font-bold sm:text-4xl lg:text-[2.5rem]">
            Scan here 👇🏻
          </h1>

          <div className="relative w-full max-w-[340px] animate-fade-up rounded-[28px] bg-white/90 p-3.5 shadow-lift ring-1 ring-white/60 [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-2xl bg-ink">
              <Reader2Wrapper
                delay={300}
                onError={handleError}
                onScan={handleScan}
                className="w-full"
                constraints={{
                  video: {
                    facingMode: isBackCamera ? "environment" : "user",
                  },
                }}
              />
              {/* scanner frame + moving scan line (decoration only) */}
              <div className="pointer-events-none absolute inset-0">
                <span className="absolute left-3 top-3 size-8 rounded-tl-xl border-l-4 border-t-4 border-accent" />
                <span className="absolute right-3 top-3 size-8 rounded-tr-xl border-r-4 border-t-4 border-accent" />
                <span className="absolute bottom-3 left-3 size-8 rounded-bl-xl border-b-4 border-l-4 border-accent" />
                <span className="absolute bottom-3 right-3 size-8 rounded-br-xl border-b-4 border-r-4 border-accent" />
                <span className="absolute inset-x-5 h-0.5 animate-scan rounded-full bg-accent shadow-[0_0_14px_3px_rgba(255,107,53,0.65)] motion-reduce:hidden" />
              </div>
            </div>
            <p className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-muted">
              <span className="size-2 animate-pulse rounded-full bg-sage-dark" />
              Point your camera at the QR code
            </p>
          </div>

          <div className="flex w-full max-w-[340px] animate-fade-up flex-col gap-3 [animation-delay:300ms]">
            <button className={`${btnPrimary} w-full animate-pulse-ring`} onClick={() => navigate("/Qrcode")}>
              <FaQrcode /> Click for QRcode
            </button>
            <button
              className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-ink/20 bg-white/60 px-6 py-3 text-[0.95rem] font-semibold text-ink backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white ${focusRing}`}
              onClick={toggleCamera}
            >
              <FaCamera /> Switch to {isBackCamera ? "Front" : "Back"} Camera
            </button>
          </div>
        </section>

        {/* ---------- Right Section: Logo ---------- */}
        <section className="relative flex flex-col items-center justify-center gap-6 overflow-hidden bg-linear-to-bl from-ink via-deep to-deep px-6 py-14 text-center text-white sm:px-10">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-sage/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-20 size-72 rounded-full bg-accent/25 blur-3xl" />

          <h1 className="relative animate-fade-up font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.5rem]">
            We are ready to make delicious
          </h1>
          <div className="relative h-56 w-full max-w-sm animate-fade-up overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.4)] ring-4 ring-white/10 transition duration-500 [animation-delay:150ms] hover:scale-[1.03] sm:h-64">
            <SafeImage
              src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=1380&t=st=1708370581~exp=1708371181~hmac=91fb8612d27b3745ecbf9194f415b60970ed4f6266c71c333eb8ea5c2a5435be"
              alt="Delicious food"
              emoji="🍽️"
            />
          </div>
          <div className="relative flex animate-float gap-3 text-2xl motion-reduce:animate-none" aria-hidden="true">
            <span>🍕</span>
            <span>🍛</span>
            <span>🍗</span>
            <span>🥤</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QRScannerComponent;
