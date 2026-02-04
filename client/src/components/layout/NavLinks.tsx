import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors";
const active = "text-white";

export default function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-7">
      <NavLink to="/" onClick={onClick} className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
        Home
      </NavLink>
      <NavLink to="/tjanster" onClick={onClick} className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
        Tjänster
      </NavLink>
      <NavLink to="/om-oss" onClick={onClick} className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
        Om oss
      </NavLink>
      <NavLink to="/kontakt" onClick={onClick} className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
        Kontakta oss
      </NavLink>
    </div>
  );
}
