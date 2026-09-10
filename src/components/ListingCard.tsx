"use client";

import Image from "next/image";
import type { Listing } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import { t } from "@/lib/i18n";
import { useApp } from "@/lib/context";

interface Props {
  listing: Listing;
  onDetails: (listing: Listing) => void;
}

export default function ListingCard({ listing, onDetails }: Props) {
  const { lang, openCallPanel } = useApp();
  const tr = t(lang);
  const img = listing.images[0];

  return (
    <article className="property-card group overflow-hidden rounded-[1.4rem] border border-charcoal/10 bg-white shadow-[0_18px_50px_rgba(24,24,20,.07)]">
      <button type="button" onClick={() => onDetails(listing)} className="relative block w-full text-left">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand-light">
          <Image src={img.src} alt={img.alt[lang]} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-charcoal/75 px-3 py-1 text-[9px] font-semibold uppercase tracking-[.17em] text-ivory backdrop-blur">
            {tr.listing.demoLabel}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-ivory px-3 py-1 text-[10px] font-semibold uppercase tracking-[.15em] text-charcoal">
            {listing.type === "venta" ? tr.listing.sale : tr.listing.rent}
          </span>
          <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[.18em] text-white/85">{listing.neighborhood} · {listing.municipality}</p>
        </div>
      </button>

      <div className="p-5">
        <button type="button" onClick={() => onDetails(listing)} className="w-full text-left">
          <h3 className="font-serif text-[1.35rem] font-medium leading-tight text-charcoal transition group-hover:text-sea-dark">{listing.title[lang]}</h3>
        </button>
        <p className="mt-3 font-serif text-2xl text-charcoal">{formatPrice(listing.price, listing.type, tr.listing.monthAbbr)}</p>
        <div className="mt-4 flex items-center gap-3 border-y border-charcoal/8 py-3 text-xs uppercase tracking-[.08em] text-charcoal/55">
          <span>{listing.bedrooms} {lang === "es" ? "hab." : "beds"}</span><span>·</span>
          <span>{listing.bathrooms} {lang === "es" ? "baños" : "baths"}</span><span>·</span>
          <span>{listing.sqft.toLocaleString()} ft²</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button type="button" onClick={() => onDetails(listing)} className="rounded-full border border-charcoal/20 px-4 py-3 text-xs font-semibold uppercase tracking-[.12em] transition hover:bg-charcoal hover:text-ivory">{tr.listing.details}</button>
          <button type="button" onClick={() => openCallPanel(listing.id)} className="rounded-full bg-sea-dark px-4 py-3 text-xs font-semibold uppercase tracking-[.12em] text-white transition hover:bg-charcoal">{tr.listing.callNow}</button>
        </div>
      </div>
    </article>
  );
}
