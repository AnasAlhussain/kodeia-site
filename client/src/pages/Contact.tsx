import { Helmet } from "react-helmet-async";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/ui/Button";
import { ContactForm, ContactSchema } from "../lib/contactSchema";

export default function Contact() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const formStart = useMemo(() => Date.now(), []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  useEffect(() => {
    setErrorMsg(null);
  }, []);

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending");
    setErrorMsg(null);

    const payload = {
      ...data,
      phone: data.phone || "",
      website: data.website || "", // honeypot
      formMs: Date.now() - formStart, // time-on-form spam signal
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json?.error || "Något gick fel. Försök igen.");
        return;
      }

      reset();
      navigate("/tack");
    } catch {
      setStatus("error");
      setErrorMsg("Något gick fel. Kontrollera din anslutning och försök igen.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Kontakta oss KODEIA</title>
        <meta
          name="description"
          content="Kontakta KODEIA för webbkonsulting, utbildningar i YH-skolor eller stöd i kvalitetssäkring. Skicka ett meddelande via formuläret."
        />
        <link rel="canonical" href="/kontakt" />
      </Helmet>

      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-white">Kontakta oss</h1>
        <p className="mt-3 text-white/70">
          Berätta kort om vad ni behöver hjälp med så återkommer vi så snart vi kan.
        </p>

        {/* <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-soft">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            Honeypot (spam-skydd)
            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" {...register("website")} />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/80">Namn</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-kodeia-sky/50"
                  placeholder="Ditt namn"
                  {...register("name")}
                />
                {errors.name && <div className="mt-1 text-xs text-red-200">{errors.name.message}</div>}
              </div>

              <div>
                <label className="text-sm text-white/80">Email</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-kodeia-sky/50"
                  placeholder="namn@foretag.se"
                  {...register("email")}
                />
                {errors.email && <div className="mt-1 text-xs text-red-200">{errors.email.message}</div>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/80">Telefon (valfritt)</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-kodeia-sky/50"
                  placeholder="+46 ..."
                  {...register("phone")}
                />
              </div>

              <div>
                <label className="text-sm text-white/80">Ämne</label>
                <input
                  className="mt-1 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-kodeia-sky/50"
                  placeholder="T.ex. ny webbplats"
                  {...register("subject")}
                />
                {errors.subject && <div className="mt-1 text-xs text-red-200">{errors.subject.message}</div>}
              </div>
            </div>

            <div>
              <label className="text-sm text-white/80">Meddelande</label>
              <textarea
                className="mt-1 min-h-[150px] w-full resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-kodeia-sky/50"
                placeholder="Beskriv vad ni vill uppnå, tidsplan och ev. länkar."
                {...register("message")}
              />
              {errors.message && <div className="mt-1 text-xs text-red-200">{errors.message.message}</div>}
            </div>

            {status === "error" && (
              <div className="rounded-2xl border border-red-200/30 bg-red-200/10 p-3 text-sm text-red-100">
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs text-white/55">
                Formuläret har validering och spam-skydd (honeypot + tidskontroll).
              </div>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Skickar..." : "Skicka"}
              </Button>
            </div>
          </form>
        </div> */}

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <div className=" text-white font-bold">Alternativ kontakt</div>
          <div className="mt-2">Email: info@kodeia.se</div>
          <div className="mt-1">Telefon: +46 73 029 66 44</div>
        </div>
      </div>
    </>
  );
}
