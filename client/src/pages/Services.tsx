import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Tjänster – KODEIA</title>
        <meta
          name="description"
          content="KODEIA erbjuder webbkonsulting, utbildningar i YH-skolor och stöd för YH/arbetsmarknadsutbildningar för utveckling och kvalitetssäkring."
        />
        <link rel="canonical" href="https://kodeia.se/tjanster" />
      </Helmet>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-white">Tjänster</h1>
        

        <div className="mt-7 grid gap-4">
          <Card title="Webb & digital utveckling">
            <ul className="mt-2 list-disc pl-5">
              <li>Ny webbplats, redesign eller optimering</li>
              <li>Prestanda, tillgänglighet och SEO</li>
              <li>Teknisk rådgivning och implementation</li>
            </ul>
            <div className="mt-4">
              <Button to="/tjanster/webb" variant="ghost">Läs mer</Button>
            </div>
          </Card>

          <Card title="Utbildningar i YH-skolor">
            <ul className="mt-2 list-disc pl-5">
              <li>Frontend, webb, moderna arbetssätt</li>
              <li>Pedagogiska upplägg + arbetslivsnära övningar</li>
              <li>Material, uppgifter och bedömningsstöd</li>
            </ul>
            <div className="mt-4">
              <Button to="/tjanster/utbildningar" variant="ghost">Läs mer</Button>
            </div>
          </Card>

          <Card title="Stöd för YH & arbetsmarknadsutbildningar">
            <ul className="mt-2 list-disc pl-5">
              <li>Kvalitetssäkring och förbättringsarbete</li>
              <li>Processer, uppföljning och dokumentation</li>
              <li>Stöd i utveckling av verksamhet och leverans</li>
            </ul>
            <div className="mt-4">
              <Button to="/tjanster/yh-stod" variant="ghost">Läs mer</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
