"use client";

import Link from "next/link";
import { useApp } from "@/lib/context";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useApp();
  const tr = t(lang);
  return (
    <footer className="bg-charcoal text-ivory/75">
      <div className="mx-auto max-w-[1440px] px-5 py-14 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><Link href="#inicio" className="font-serif text-3xl text-white">MJV <span className="text-sand">Realty</span></Link><p className="mt-4 max-w-sm text-sm leading-6 text-white/45">{lang === "es" ? "Tecnología que nunca duerme. Servicio humano que nunca se pierde." : "Technology that never sleeps. Human service that never gets lost."}</p></div>
          <div><p className="mb-4 text-[10px] uppercase tracking-[.2em] text-sand">{lang === "es" ? "Explora" : "Explore"}</p><div className="space-y-3 text-sm"><Link className="block hover:text-white" href="#propiedades">{tr.nav.listings}</Link><Link className="block hover:text-white" href="#experiencia">Concierge 24/7</Link><Link className="block hover:text-white" href="#contacto">{tr.nav.contact}</Link></div></div>
          <div><p className="mb-4 text-[10px] uppercase tracking-[.2em] text-sand">Social</p><div className="space-y-3 text-sm"><a className="block hover:text-white" href="https://www.facebook.com/mvicente?locale=es_LA" target="_blank" rel="noopener noreferrer">Facebook ↗</a><a className="block hover:text-white" href="https://www.instagram.com/mjv.realty/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a className="block hover:text-white" href="https://www.tiktok.com/@mjv.realty" target="_blank" rel="noopener noreferrer">TikTok ↗</a></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} MJV Realty</span><span className="rounded-full border border-sand/25 px-3 py-1.5 text-sand">{tr.footer.demo}</span></div>
      </div>
    </footer>
  );
}
