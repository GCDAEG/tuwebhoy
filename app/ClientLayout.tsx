"use client";

import ReactLenis from "lenis/react";
import PageLoader from "./PageLoader";
import { SectionNavbar } from "@/components/layout/Nav";
import { FooterSection } from "@/components/layout/Footer";
import WhatsAppChatInput from "@/components/ui/WhatsAppChatInput";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root>
      <PageLoader />
      <SectionNavbar />
      {children}
      <WhatsAppChatInput />
      <FooterSection />
    </ReactLenis>
  );
}
