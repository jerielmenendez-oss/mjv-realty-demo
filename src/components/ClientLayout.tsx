"use client";

import { AppProvider } from "@/lib/context";
import Header from "./Header";
import Footer from "./Footer";
import CallPanel from "./CallPanel";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CallPanel />
    </AppProvider>
  );
}
