"use client";

import { useState } from "react";
import Link from "next/link";
import { useApp } from "@/lib/context";
import { t } from "@/lib/i18n";

export default function Header() {
  const { lang, toggleLang, openCallPanel } = useApp();
  const tr = t(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [["#inicio", tr.nav.home], ["#propiedades", tr.nav.listings], ["#contacto", tr.nav.contact]];
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10" aria-label="Main navigation">
        <Link href="#inicio" className="flex items-baseline gap-2" aria-label="MJV Realty - Inicio"><span className="font-serif text-2xl tracking-tight">MJV</span><span className="text-[9px] uppercase tracking-[.28em] text-sand">Realty</span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {items.map(([href,label]) => <Link key={href} href={href} className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/65 transition hover:text-white">{label}</Link>)}
          <button onClick={toggleLang} className="rounded-full border border-white/25 px-3 py-2 text-[10px] uppercase tracking-[.14em] hover:bg-white hover:text-charcoal" aria-label={`Switch to ${lang === "es" ? "English" : "Español"}`}>{tr.nav.language}</button>
          <button onClick={() => openCallPanel("1")} className="rounded-full bg-ivory px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[.14em] text-charcoal transition hover:bg-sea-light">{lang === "es" ? "Concierge 24/7" : "24/7 concierge"}</button>
        </div>
        <button className="grid size-10 place-items-center md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation menu"><span className="text-xl">{menuOpen ? "×" : "☰"}</span></button>
      </nav>
      {menuOpen && <div className="border-t border-white/10 bg-charcoal px-5 py-5 md:hidden">{items.map(([href,label]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/10 py-3 text-xs uppercase tracking-[.15em] text-white/75">{label}</Link>)}<button onClick={() => { toggleLang(); setMenuOpen(false); }} className="mt-4 rounded-full border border-white/25 px-4 py-2 text-xs">{tr.nav.language}</button></div>}
    </header>
  );
}
