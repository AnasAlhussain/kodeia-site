import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Sidan finns inte – KODEIA</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-7 shadow-soft">
        <h1 className="text-2xl font-bold text-white">Sidan finns inte</h1>
        <p className="mt-3 text-white/75">
          Länken du följde verkar vara fel eller så har sidan flyttats.
        </p>
        <div className="mt-6">
          <Button to="/">Gå till Home</Button>
        </div>
      </div>
    </>
  );
}
