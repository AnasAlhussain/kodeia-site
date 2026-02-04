import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";

export default function Thanks() {
  return (
    <>
      <Helmet>
        <title>Tack! – KODEIA</title>
        <meta name="description" content="Tack för ditt meddelande. Vi återkommer så snart vi kan." />
        <link rel="canonical" href="/tack" />
      </Helmet>

      <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <h1 className="text-3xl font-extrabold text-white">Tack!</h1>
        <p className="mt-3 text-white/75">
          Vi har tagit emot ditt meddelande och återkommer så snart vi kan.
        </p>
        <div className="mt-6 flex gap-3">
          <Button to="/">Tillbaka till Home</Button>
          <Button to="/tjanster" variant="ghost">Se tjänster</Button>
        </div>
      </div>
    </>
  );
}
