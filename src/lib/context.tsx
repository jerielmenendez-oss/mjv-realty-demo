"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Lang } from "./types";

interface AppContextValue {
  lang: Lang;
  toggleLang: () => void;
  callPanelOpen: boolean;
  callPropertyId: string | null;
  openCallPanel: (propertyId: string) => void;
  closeCallPanel: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const [callPanelOpen, setCallPanelOpen] = useState(false);
  const [callPropertyId, setCallPropertyId] = useState<string | null>(null);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const openCallPanel = useCallback((propertyId: string) => {
    setCallPropertyId(propertyId);
    setCallPanelOpen(true);
  }, []);

  const closeCallPanel = useCallback(() => {
    setCallPanelOpen(false);
    setCallPropertyId(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        toggleLang,
        callPanelOpen,
        callPropertyId,
        openCallPanel,
        closeCallPanel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
