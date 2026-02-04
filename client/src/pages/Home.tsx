import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import TextType from "../components/react-bits/TextType";
import CountUp from "../components/react-bits/CountUp";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import TeamCarousel from "../components/home/TeamCarousel";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>KODEIA – Konsult & Utbildning</title>
        <meta
          name="description"
          content="KODEIA är ett konsultföretag inom webb och digital utveckling vi utbildar också i YH-skolor och hjälper verksamheter med kvalitet & förbättring."
        />
        <link rel="canonical" href="https://kodeia.se" />
      </Helmet>

      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 shadow-soft sm:p-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            <span className="h-2 w-2 rounded-full bg-kodeia-sky" />
            Konsult • Utbildning • YH-stöd
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
          >
            {"{ KODEIA }"}  digital kraft för{" "}
            <span className="bg-gradient-to-r from-kodeia-sky via-white to-kodeia-blue bg-clip-text text-transparent">
              verksamheter
            </span>{" "}
            och{" "}
            <span className="text-white">
              <TextType
                words={["webbprojekt", "utbildningar", "YH-kvalitet"]}
                className="text-white"
              />
            </span>
          </motion.h1>

          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Vi hjälper verksamheter att hitta smarta lösningar inom webb och digital utveckling och vi gör utbildningar bättre genom stöd till yrkeshögskolor och arbetsmarknadsutbildningar.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button to="/kontakt">Kontakta oss</Button>
            <Button to="/tjanster" variant="ghost">
              Se våra tjänster
            </Button>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Antal timmar vi lärt ut</div>
              <div className="mt-1 text-2xl font-extrabold">
                <CountUp to={2400} suffix="+" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Genomförda uppdrag</div>
              <div className="mt-1 text-2xl font-extrabold">
                <CountUp to={120} suffix="+" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-white/60">Nöjda samarbeten</div>
              <div className="mt-1 text-2xl font-extrabold">
                <CountUp to={60} suffix="+" />
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-kodeia-sky/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-kodeia-blue/15 blur-3xl" />
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-white">Teamet</h2>
          <p className="mt-2 text-white/70">
            Vi kombinerar modern utveckling med pedagogik och kvalitetssäkring. Här är några av oss.
          </p>
          <div
  className="relative w-full"
  style={{ touchAction: "pan-y" }}  // tillåt vertikal scroll
>
  <TeamCarousel />
</div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">Det som vi kan : </h2>
          

          <div className="mt-6 grid gap-4">
            <Card title="Webb & digital utveckling">
              Från nya webbplatser till förbättring av befintliga system. Fokus på prestanda, tillgänglighet och konvertering.
              <div className="mt-4">
                <Button to="/tjanster/webb" variant="ghost">Läs mer</Button>
              </div>
            </Card>
            <Card title="Utbildningar i YH-skolor">
              Föreläsningar och kursupplägg inom webb, frontend och moderna arbetssätt praktiskt, tydligt och relevant.
              <div className="mt-4">
                <Button to="/tjanster/utbildningar" variant="ghost">Läs mer</Button>
              </div>
            </Card>
            <Card title="Stöd för YH & arbetsmarknadsutbildningar">
              Utveckla och kvalitetssäkra er verksamhet: processer, dokumentation, uppföljning och förbättringsarbete.
              <div className="mt-4">
                <Button to="/tjanster/yh-stod" variant="ghost">Läs mer</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
