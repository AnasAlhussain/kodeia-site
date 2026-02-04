import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-kodeia-ink/40 ">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/kodeia-logo.png" alt="" className="h-8 w-auto opacity-90" />
            <div>
              <div className="font-semibold tracking-widest text-white">{"{ KODEIA }"}</div>
              <div className="text-white/60">Konsult & utbildningar </div>
              
            </div>
            
          </div>
          

          <div className="flex flex-wrap gap-4">
            <Link className="hover:text-white" to="/tjanster">Tjänster</Link>
            <Link className="hover:text-white" to="/om-oss">Om oss</Link>
            <Link className="hover:text-white" to="/kontakt">Kontakta oss</Link>
            
          </div>
        </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <div className=" text-white font-bold">Kontakt oss :</div>
          <div className="mt-2">Email: info@kodeia.se</div>
          <div className="mt-1">Telefon: +46 73 029 66 44</div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} KODEIA. Alla rättigheter förbehållna.</div>
          
          
        </div>
      </div>
    </footer>
  );
}


