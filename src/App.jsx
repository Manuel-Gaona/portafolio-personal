import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Repositorios from "./pages/Repositorios";
import ProyectoDetalles from "./pages/ProyectoDetalle";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useLayoutEffect, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
  };
  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-neutral-100 text-black transition-colors duration-700 dark:bg-neutral-800 dark:text-white">
      <Router>
        <ScrollToTop />
        <Navbar dark={dark} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositorios" element={<Repositorios />} />
            <Route path="/proyecto/:id" element={<ProyectoDetalles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
