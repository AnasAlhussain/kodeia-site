import { Link } from "react-router-dom";

type Props = {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-kodeia-sky/60 focus:ring-offset-0";
const primary =
  "bg-gradient-to-r from-kodeia-blue to-kodeia-sky text-kodeia-ink shadow-soft hover:brightness-110";
const ghost =
  "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10";

export default function Button({
  to,
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
}: Props) {
  const cls = `${base} ${variant === "primary" ? primary : ghost} ${disabled ? "opacity-60 pointer-events-none" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
