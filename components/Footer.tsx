import Image from "next/image";
import { asset } from "@/lib/paths";

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-14">
      <div className="container-page flex flex-col items-center gap-8 border-t border-gold/10 pt-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <Image src={asset("/logo/mark-white.png")} alt="Raah-e-Bahisht" width={22} height={22} className="opacity-80" />
          <div className="leading-tight">
            <span className="block font-serif text-sm text-ivory/80">Raah-e-Bahisht</span>
            <span className="block text-[0.7rem] text-ivory/40">A journey of faith</span>
          </div>
        </div>

        <p className="text-xs text-ivory/40">© 2026 Raah-e-Bahisht. All rights reserved.</p>

        <div className="flex gap-6 text-xs text-ivory/50">
          <a href={asset("/privacy/")} className="hover:text-ivory/80">Privacy Policy</a>
          <a href={asset("/terms/")} className="hover:text-ivory/80">Terms</a>
          <a href="mailto:official.rahebahish@gmail.com" className="hover:text-ivory/80">Contact</a>
        </div>
      </div>
    </footer>
  );
}
