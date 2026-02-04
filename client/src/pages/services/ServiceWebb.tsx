import { Helmet } from "react-helmet-async";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function ServiceWebb() {
  return (
    <>
      <Helmet>
        <title>Webb & digital utveckling – KODEIA</title>
        <meta
          name="description"
          content="Webbkonsulting från KODEIA: modern webb, UX, prestanda och SEO. Vi bygger lösningar som är tydliga, snabba och enkla att förvalta."
        />
        <link rel="canonical" href="/tjanster/webb" />
      </Helmet>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-white">Webb & digital utveckling</h1>
        <p className="mt-3 text-white/70">
          Vi hjälper er att bygga, förbättra och förvalta webblösningar  med fokus på tydlighet, prestanda och resultat.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Card title="Ny webbplats">
            Design + utveckling med modern stack (React, Vite, API). Struktur som gör det enkelt att växa och ranka i sök.
          </Card>
          <Card title="Optimering & SEO">
            Core Web Vitals, struktur, metadata, interna länkar och innehåll som svarar på användarens frågor.
          </Card>
          <Card title="UX & konvertering">
            Flöden, tydlig copy, CTA och förbättringar baserat på användarbeteende.
          </Card>
          <Card title="Rådgivning">
            Teknisk strategi, arkitektur, kodgranskning och förbättring av teamets arbetssätt.
          </Card>
        </div>

        <div className="mt-8">
          <Button to="/kontakt">Kontakta oss om webb</Button>
        </div>
      </div>
    </>
  );
}
