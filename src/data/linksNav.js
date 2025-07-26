import { AiFillHome } from "react-icons/ai";
import { RiGitRepositoryFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";

export const linksNav = [
  {
    label: "Inicio",
    icon: AiFillHome,
    to: "/",
  },
  {
    label: "Repositorios",
    icon: RiGitRepositoryFill,
    to: "/repositorios",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    to: "https://github.com/Manuel-Gaona",
    isExternal: true,
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    to: "https://www.linkedin.com/in/mgaonahdz",
    isExternal: true,
  },
  {
    label: "CV",
    icon: PiReadCvLogo,
    to: "/cv-manuel-gaona.pdf",
    isExternal: true,
  },
];
