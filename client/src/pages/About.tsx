import { Helmet } from "react-helmet-async";
import Card from "../components/ui/Card";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Om oss – KODEIA</title>
        <meta
          name="description"
          content="Lär känna KODEIA: vi är ett digitalt företag som älskar att utbilda. Vi hjälper verksamheter med webb och stöttar YH-skolor med utveckling och kvalitet."
        />
        <link rel="canonical" href="https://kodeia.se/om-oss" />
      </Helmet>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-white">Om oss</h1>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <p className="text-white/80">
            <span className="font-semibold text-white">Hej! Det är vi som är {"{ KODEIA }"}!</span>{" "}
              är ett digitalt företag som älskar att utbilda!
          </p>
          <p className="mt-3 text-white/75">
            Vi brinner för att skapa smarta och hållbara lösningar inom webb, och för att höja kvaliteten på utbildningar som gör verklig skillnad.
            Därför samarbetar vi med yrkeshögskolor och arbetsmarknadsutbildningar för att utveckla, stärka och kvalitetssäkra deras verksamhet
            med fokus på både dagens behov och morgondagens kompetenser.
          </p>
          <p className="mt-3 text-white/75">
            Våra kunder kommer från alla samhällets sektorer. Många av dem finns inom ideell och offentlig verksamhet.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-white">Våra aktiviteter</h2>
        <p className="mt-2 text-white/70">
          Exempel på vad vi gör i praktiken från utbildning till förbättringsarbete.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card title="Utbildning & handledning">
            Kursmoment, workshops och handledning i YH-skolor med fokus på verkliga case och arbetsmarknadens behov.
          </Card>
          <Card title="Webbkonsulting">
            Design, utveckling och förbättring av webbplatser och webbtjänster modern teknik, tydlig struktur och bra UX.
          </Card>
          <Card title="Kvalitet & processer">
            Stöd i kvalitetssäkring, uppföljning och förbättringsarbete rutiner som håller över tid.
          </Card>
          <Card title="Samverkan & partnerarbete">
            Samarbete med verksamheter, utbildningsaktörer och ideell/offentlig sektor för att skapa effekt och värde.
          </Card>
        </div>
      </div>
    </>
  );
}
