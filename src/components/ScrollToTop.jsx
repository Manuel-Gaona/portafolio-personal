import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior; // guarda lo que hubiera
    root.style.scrollBehavior = "auto"; // desactiva smooth SOLO para esta llamada
    window.scrollTo({ top: 0, left: 0 }); // instantáneo
    root.style.scrollBehavior = prev; // restaura
  }, [pathname]);

  return null;
}

export default ScrollToTop;
