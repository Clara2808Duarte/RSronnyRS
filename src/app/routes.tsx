import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Servicos from "../pages/Servicos";
import ComoFunciona from "../pages/ComoFunciona";
import Simulacao from "../pages/Simulacao";
import Depoimentos from "../pages/Depoimentos";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Root() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F8F4EE", minHeight: "100vh" }}>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: Sobre },
      { path: "servicos", Component: Servicos },
      { path: "como-funciona", Component: ComoFunciona },
      { path: "simulacao", Component: Simulacao },
      { path: "depoimentos", Component: Depoimentos },
    ],
  },
]);
