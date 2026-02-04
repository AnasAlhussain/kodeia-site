import { Helmet } from "react-helmet-async";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function ServiceYH() {
  return (
    <>
      <Helmet>
        <title>Stöd för YH & arbetsmarknadsutbildningar – KODEIA</title>
        <meta
          name="description"
          content="KODEIA hjälper YH-skolor och arbetsmarknadsutbildningar att utveckla och kvalitetssäkra sin verksamhet: processer, uppföljning och förbättring."
        />
        <link rel="canonical" href="/tjanster/yh-stod" />
      </Helmet>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-white">Stöd för YH & arbetsmarknadsutbildningar</h1>
        <p className="mt-3 text-white/70">
          Vi stöttar er i att utveckla och kvalitetssäkra verksamheten så att ni kan leverera bättre utbildning och resultat.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Card title="Kvalitetssystem">
            Tydliga rutiner, ansvar, uppföljning och förbättringscykler som fungerar i vardagen.
          </Card>
          <Card title="Processer & dokumentation">
            Från planering till genomförande: mallar, arbetssätt och struktur som gör det lätt att lyckas.
          </Card>
          <Card title="Uppföljning & analys">
            Stöd i att samla in feedback, analysera resultat och omsätta insikter till konkreta förbättringar.
          </Card>
          <Card title="Verksamhetsutveckling">
            Workshops med ledning/team för målbild, prioriteringar och genomförandeplan.
          </Card>
        </div>

        <div className="mt-8">
          <Button to="/kontakt">Kontakta oss om YH-stöd</Button>
        </div>
      </div>
    </>
  );
}
