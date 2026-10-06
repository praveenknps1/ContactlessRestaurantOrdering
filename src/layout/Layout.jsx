import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Wraps every page except Home ("/") and the QR code page with the shared navbar + footer.
export default function Layout() {
  const { pathname } = useLocation();

  // always start a new page from the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Navbar />
      <main className="w-full flex-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
