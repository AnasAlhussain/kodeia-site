export default function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft ${className}`}>
      {title && <div className="text-base font-semibold text-white">{title}</div>}
      <div className={title ? "mt-3 text-white/75" : "text-white/75"}>{children}</div>
    </div>
  );
}
