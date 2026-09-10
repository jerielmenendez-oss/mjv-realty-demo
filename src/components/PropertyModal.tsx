"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Listing } from "@/lib/types";
import { useApp } from "@/lib/context";
import { formatPrice } from "@/lib/utils";
import { t } from "@/lib/i18n";

export default function PropertyModal({ listing, onClose }: { listing: Listing | null; onClose: () => void }) {
  const { lang, openCallPanel } = useApp();
  const tr = t(lang);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!listing) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [listing, onClose]);

  if (!listing) return null;
  const current = listing.images[imageIndex];

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-charcoal/75 p-0 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-labelledby="property-title">
      <button className="fixed inset-0 cursor-default" onClick={onClose} aria-label={lang === "es" ? "Cerrar detalles" : "Close details"} />
      <section className="relative mx-auto min-h-screen max-w-6xl overflow-hidden bg-ivory shadow-2xl sm:min-h-0 sm:rounded-[1.75rem]">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-charcoal/80 text-xl text-white backdrop-blur transition hover:bg-charcoal" aria-label={lang === "es" ? "Cerrar" : "Close"}>×</button>
        <div className="grid lg:grid-cols-[1.2fr_.8fr]">
          <div className="relative min-h-[48vh] bg-charcoal lg:min-h-[760px]">
            <Image src={current.src} alt={current.alt[lang]} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" priority />
            <div className="absolute inset-x-0 bottom-0 flex gap-2 overflow-x-auto bg-gradient-to-t from-black/70 p-5 pt-16">
              {listing.images.map((image, index) => (
                <button type="button" key={image.src} onClick={() => setImageIndex(index)} className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${index === imageIndex ? "border-white" : "border-transparent opacity-70"}`} aria-label={`${tr.listing.gallery} ${index + 1}`}>
                  <Image src={image.src} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 sm:p-10 lg:overflow-y-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-sea-dark">{tr.listing.demoLabel}</p>
            <h2 id="property-title" className="mt-3 font-serif text-4xl leading-[1.05] text-charcoal">{listing.title[lang]}</h2>
            <p className="mt-3 text-sm uppercase tracking-[.15em] text-charcoal/45">{listing.neighborhood}, {listing.municipality}</p>
            <p className="mt-6 font-serif text-3xl">{formatPrice(listing.price, listing.type, tr.listing.monthAbbr)}</p>
            <div className="mt-6 grid grid-cols-3 gap-2 border-y border-charcoal/10 py-5 text-center">
              <div><b className="block font-serif text-xl">{listing.bedrooms}</b><span className="text-[10px] uppercase tracking-wider text-charcoal/45">{tr.listing.bedrooms}</span></div>
              <div><b className="block font-serif text-xl">{listing.bathrooms}</b><span className="text-[10px] uppercase tracking-wider text-charcoal/45">{tr.listing.bathrooms}</span></div>
              <div><b className="block font-serif text-xl">{listing.sqft.toLocaleString()}</b><span className="text-[10px] uppercase tracking-wider text-charcoal/45">ft²</span></div>
            </div>
            <p className="mt-7 leading-7 text-charcoal/68">{listing.description[lang]}</p>
            <h3 className="mt-8 font-serif text-2xl">{tr.listing.amenities}</h3>
            <div className="mt-4 flex flex-wrap gap-2">{listing.amenities.map((amenity) => <span key={amenity} className="rounded-full border border-charcoal/12 bg-white px-3 py-2 text-xs text-charcoal/65">{amenity}</span>)}</div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10 bg-charcoal p-6 text-ivory">
              <p className="text-[10px] uppercase tracking-[.2em] text-sand">{tr.listing.videoTour}</p>
              <div className="mt-4 flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full border border-white/25">▶</span><p className="text-sm text-white/65">{tr.listing.videoPlaceholder}</p></div>
            </div>
            <div className="mt-8 rounded-2xl bg-sea-dark p-6 text-white">
              <p className="font-serif text-2xl">{lang === "es" ? "¿Quieres conocerla?" : "Want to see it?"}</p>
              <p className="mt-2 text-sm text-white/70">{lang === "es" ? "El concierge de demostración está disponible ahora mismo." : "The demo concierge is available right now."}</p>
              <button type="button" onClick={() => { onClose(); openCallPanel(listing.id); }} className="mt-5 w-full rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-charcoal transition hover:bg-charcoal hover:text-white">{tr.listing.callNow}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
