"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { useApp } from "@/lib/context";
import { t } from "@/lib/i18n";
import { listings } from "@/lib/listings";
import { cn } from "@/lib/utils";

type CallState = "idle" | "connecting" | "connected" | "speaking" | "ended";

export default function CallPanel() {
  const { lang, callPanelOpen, callPropertyId, closeCallPanel } = useApp();
  const tr = t(lang);
  const property = listings.find((item) => item.id === callPropertyId);
  const [callState, setCallState] = useState<CallState>("idle");
  const [showTourForm, setShowTourForm] = useState(false);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [liveMode, setLiveMode] = useState(false);
  const [tourData, setTourData] = useState({ name: "", date: "", time: "" });
  const timers = useRef<number[]>([]);
  const vapiRef = useRef<Vapi | null>(null);

  const clearTimers = useCallback(() => { timers.current.forEach(window.clearTimeout); timers.current = []; }, []);
  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "es" ? "es-US" : "en-US";
    utterance.rate = 0.96;
    window.speechSynthesis.speak(utterance);
  }, [lang]);

  const resetAndClose = useCallback(async () => {
    clearTimers();
    window.speechSynthesis?.cancel();
    if (vapiRef.current) { try { vapiRef.current.stop(); } catch {} vapiRef.current = null; }
    setCallState("idle"); setShowTourForm(false); setTourSubmitted(false); setLiveMode(false);
    setTourData({ name: "", date: "", time: "" });
    closeCallPanel();
  }, [clearTimers, closeCallPanel]);

  useEffect(() => {
    if (!callPanelOpen) return;
    const handleEsc = (event: KeyboardEvent) => { if (event.key === "Escape") void resetAndClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [callPanelOpen, resetAndClose]);

  const handleStartCall = useCallback(async () => {
    setCallState("connecting");
    const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
    const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "0af4f756-17d6-4018-8fa9-9780c97f5728";
    if (publicKey) {
      try {
        const vapi = new Vapi(publicKey);
        vapiRef.current = vapi;
        vapi.on("call-start", () => { setLiveMode(true); setCallState("connected"); });
        vapi.on("speech-start", () => setCallState("speaking"));
        vapi.on("speech-end", () => setCallState("connected"));
        vapi.on("call-end", () => { setCallState("ended"); setShowTourForm(true); });
        await vapi.start(assistantId, { variableValues: { propertyTitle: property?.title[lang] || "consulta general", propertyLocation: property ? `${property.neighborhood}, ${property.municipality}` : "Puerto Rico" } });
        return;
      } catch { vapiRef.current = null; }
    }
    const greeting = lang === "es" ? `Hola, soy el concierge virtual de MJV Realty. Puedo orientarte sobre ${property?.title.es || "nuestras propiedades de demostración"}. ¿Qué te gustaría conocer?` : `Hi, I'm MJV Realty's virtual concierge. I can guide you through ${property?.title.en || "our demo properties"}. What would you like to know?`;
    timers.current.push(window.setTimeout(() => setCallState("connected"), 750));
    timers.current.push(window.setTimeout(() => { setCallState("speaking"); speak(greeting); }, 1250));
    timers.current.push(window.setTimeout(() => setCallState("connected"), 6200));
  }, [lang, property, speak]);

  const answer = (kind: "price" | "amenities" | "tour") => {
    if (!property) return;
    const text = kind === "price"
      ? (lang === "es" ? `El precio de demostración es ${property.type === "alquiler" ? `${property.price.toLocaleString()} dólares al mes` : `${property.price.toLocaleString()} dólares`}.` : `The demo price is ${property.price.toLocaleString()} dollars${property.type === "alquiler" ? " per month" : ""}.`)
      : kind === "amenities"
        ? (lang === "es" ? `Entre sus amenidades se incluyen ${property.amenities.slice(0,3).join(", ")}.` : `Featured amenities include ${property.amenities.slice(0,3).join(", ")}.`)
        : (lang === "es" ? "Perfecto. Puedes dejar tu día y hora preferidos aquí. En esta demostración no se añadirá nada a un calendario real." : "Perfect. You can leave your preferred day and time here. This demo will not add anything to a real calendar.");
    setCallState("speaking"); speak(text);
    if (kind === "tour") setShowTourForm(true);
    timers.current.push(window.setTimeout(() => setCallState("connected"), 4500));
  };

  const handleEndCall = () => {
    clearTimers(); window.speechSynthesis?.cancel();
    if (vapiRef.current) { vapiRef.current.stop(); vapiRef.current = null; }
    setCallState("ended"); setShowTourForm(true);
  };

  if (!callPanelOpen) return null;
  return <>
    <button className="fixed inset-0 z-[60] bg-charcoal/65 backdrop-blur-sm" onClick={() => void resetAndClose()} aria-label={lang === "es" ? "Cerrar asistente" : "Close assistant"} />
    <aside role="dialog" aria-modal="true" aria-labelledby="call-title" className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-[470px] flex-col overflow-y-auto bg-ivory shadow-2xl">
      <div className="flex items-start justify-between border-b border-charcoal/10 p-5"><div><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-sea-dark">Disponible 24/7</p><h2 id="call-title" className="mt-1 font-serif text-2xl">{tr.call.title}</h2>{property && <p className="mt-1 text-xs text-charcoal/45">{property.title[lang]}</p>}</div><button onClick={() => void resetAndClose()} className="grid size-10 place-items-center rounded-full border border-charcoal/15 text-xl" aria-label="Close panel">×</button></div>
      <div className="flex flex-1 flex-col items-center p-6">
        <div className="w-full rounded-xl border border-gold/20 bg-gold/8 p-3 text-xs leading-5 text-charcoal/60"><b className="text-charcoal">{liveMode ? "Vapi Live" : tr.call.demoMode}:</b> {liveMode ? (lang === "es" ? "Conexión de voz activa." : "Live voice connection active.") : tr.call.demoNote}</div>
        <div className="relative my-9 grid size-32 place-items-center">
          <span className={cn("absolute inset-0 rounded-full bg-sea/20", (callState === "connecting" || callState === "speaking") && "animate-ping")} />
          <span className="absolute inset-3 rounded-full border border-sea/25" />
          <div className={cn("relative grid size-24 place-items-center rounded-full text-4xl text-white transition", callState === "ended" ? "bg-charcoal/45" : "bg-sea-dark")}>⌕</div>
        </div>
        <p aria-live="polite" className="min-h-6 text-xs font-semibold uppercase tracking-[.16em] text-charcoal/55">{callState === "connecting" && tr.call.connecting}{callState === "connected" && tr.call.connected}{callState === "speaking" && tr.call.speaking}{callState === "ended" && tr.call.ended}</p>
        {callState === "idle" && <button onClick={() => void handleStartCall()} className="mt-5 w-full rounded-full bg-sea-dark px-5 py-4 text-xs font-semibold uppercase tracking-[.14em] text-white hover:bg-charcoal">{tr.call.start}</button>}
        {(callState === "connected" || callState === "speaking") && <div className="mt-6 w-full"><p className="mb-3 text-center text-xs text-charcoal/45">{lang === "es" ? "Prueba una pregunta" : "Try a question"}</p><div className="grid grid-cols-3 gap-2"><button onClick={() => answer("price")} className="rounded-xl border border-charcoal/12 bg-white px-2 py-3 text-xs">{lang === "es" ? "Precio" : "Price"}</button><button onClick={() => answer("amenities")} className="rounded-xl border border-charcoal/12 bg-white px-2 py-3 text-xs">{lang === "es" ? "Amenidades" : "Amenities"}</button><button onClick={() => answer("tour")} className="rounded-xl border border-charcoal/12 bg-white px-2 py-3 text-xs">{lang === "es" ? "Visita" : "Tour"}</button></div><button onClick={handleEndCall} className="mt-4 w-full rounded-full border border-red-700/20 px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-red-700">{tr.call.end}</button></div>}
        {showTourForm && !tourSubmitted && <form onSubmit={(event) => { event.preventDefault(); setTourSubmitted(true); }} className="mt-7 w-full space-y-3 border-t border-charcoal/10 pt-6"><h3 className="font-serif text-xl">{tr.call.tourForm}</h3><label className="sr-only" htmlFor="tour-name">{tr.call.tourName}</label><input id="tour-name" required value={tourData.name} onChange={(e) => setTourData({...tourData,name:e.target.value})} placeholder={tr.call.tourName} className="w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-sm"/><div className="grid grid-cols-2 gap-2"><input type="date" required value={tourData.date} onChange={(e) => setTourData({...tourData,date:e.target.value})} aria-label={tr.call.tourDate} className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm"/><input type="time" required value={tourData.time} onChange={(e) => setTourData({...tourData,time:e.target.value})} aria-label={tr.call.tourTime} className="rounded-xl border border-charcoal/15 bg-white px-3 py-3 text-sm"/></div><button className="w-full rounded-full bg-charcoal py-3 text-xs font-semibold uppercase tracking-[.12em] text-white">{tr.call.tourSubmit}</button><p className="text-center text-[10px] text-charcoal/40">{tr.call.tourDisclaimer}</p></form>}
        {tourSubmitted && <div className="mt-7 w-full rounded-2xl border border-sea/25 bg-sea/10 p-5 text-center"><p className="font-medium text-sea-dark">✓ {tr.call.tourSuccess}</p><p className="mt-2 text-[10px] text-charcoal/45">{tr.call.tourDisclaimer}</p></div>}
      </div>
    </aside>
  </>;
}
