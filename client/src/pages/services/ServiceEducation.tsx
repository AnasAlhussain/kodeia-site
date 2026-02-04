import { Helmet } from "react-helmet-async";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

export default function ServiceEducation() {
  return (
    <>
      <Helmet>
        <title>Utbildningar i YH-skolor – KODEIA</title>
        <meta
          name="description"
          content="KODEIA håller utbildningar i YH-skolor: webb, frontend och moderna arbetssätt. Praktiskt, arbetslivsnära och tydligt."
        />
        <link rel="canonical" href="/tjanster/utbildningar" />
      </Helmet>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-extrabold text-white">Utbildningar i YH-skolor</h1>
        <p className="mt-3 text-white/70">
          Vi utbildar med fokus på verkliga case, tydlig pedagogik och relevans mot arbetsmarknaden.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Card title="Frontend & webb">
            .Net, C#, Azure, HTML/CSS/JS, React, API-integration, prestanda och best practices.
          </Card>
          <Card title="Arbetssätt & kvalitet">
            Agilt, kodgranskning, testning, dokumentation och hållbara utvecklingsflöden.
          </Card>
          <Card title="Workshops">
            Intensiva pass med uppgifter, feedback och konkreta verktyg  anpassat efter kursmål.
          </Card>
          <Card title="Handledningsstöd">
            Stöd till lärare/handledare med material, bedömningsunderlag och förbättringar i upplägg.
          </Card>
        </div>

        <div className="mt-8">
          <Button to="/kontakt">Kontakta oss om utbildning</Button>
        </div>
      </div>
    </>
  );
}
