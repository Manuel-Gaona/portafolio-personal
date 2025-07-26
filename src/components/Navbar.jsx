import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
// import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconG } from "../icons/IconsGaona";
import { useState } from "react";
import { linksNav } from "../data/linksNav";

function LinksNavbar({ dark, toggleTheme, setMenuOpen }) {
  return (
    <>
      {/* eslint-disable no-unused-vars */}
      {linksNav.map(({ label, icon: Icon, to, isExternal }) => (
        <li
          key={label}
          className="hover:text-secondary rounded-4xl p-2 px-3 transition hover:bg-violet-400/10"
          onClick={() => setMenuOpen && setMenuOpen(false)}
        >
          {isExternal ? (
            <a
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Icon className="mx-1 inline-block" />
              {label}
            </a>
          ) : (
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center ${isActive ? "text-secondary font-semibold" : ""}`
              }
            >
              <Icon className="mx-1 inline-block" />
              {label}
            </NavLink>
          )}
        </li>
      ))}
      <li className="hover:text-secondary rounded-4xl p-2 transition hover:bg-violet-400/10">
        <a
          onClick={() => {
            toggleTheme();
            setMenuOpen && setMenuOpen(false);
          }}
          className="flex cursor-pointer items-center"
        >
          {dark ? (
            <>
              <FiMoon className="mx-1 inline-block" />
            </>
          ) : (
            <>
              <FiSun className="mx-1 inline-block" />
            </>
          )}
        </a>
      </li>
    </>
  );
}

function Navbar({ dark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 w-screen bg-neutral-200 text-black shadow-lg/80 shadow-neutral-200 transition-colors duration-700 dark:bg-neutral-900 dark:text-white dark:shadow-neutral-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <NavLink to="/">
          <div className="hover:text-secondary flex items-center">
            <IconG fontSize={64} className="sm:hidden" />
            <h1 className="hidden font-bold sm:block lg:text-lg">
              Manuel Gaona
            </h1>
          </div>
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hover:bg-secondary me-3 flex items-center justify-center rounded-md bg-transparent p-1.5 md:hidden"
        >
          <GiHamburgerMenu className="inline-block text-lg" />
        </button>
        <ul className="me-4 hidden items-center md:flex md:space-x-2">
          <LinksNavbar dark={dark} toggleTheme={toggleTheme} />
        </ul>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-30 bg-black opacity-80 backdrop-blur md:hidden"
              onClick={() => setMenuOpen(false)}
            ></div>
            <div className="fixed inset-y-0 right-0 z-40 w-64 bg-neutral-200 p-4 shadow-lg transition-transform duration-700 md:hidden dark:bg-neutral-900">
              <button
                onClick={() => setMenuOpen(false)}
                className="hover:text-secondary mb-4 flex w-full items-center justify-end text-sm text-neutral-600 dark:text-neutral-300"
              >
                Cerrar ✕
              </button>
              <ul className="flex flex-col space-y-4">
                <LinksNavbar
                  dark={dark}
                  toggleTheme={toggleTheme}
                  setMenuOpen={setMenuOpen}
                />
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
