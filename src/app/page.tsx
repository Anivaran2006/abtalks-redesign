"use client";

import * as React from "react";
import { Hero } from "@/components/ui/Hero";
import { TrustSection } from "@/components/ui/TrustSection";
import { TimelineSection } from "@/components/ui/TimelineSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col p-6 font-[family-name:var(--font-geist-sans)] text-zinc-100 overflow-x-hidden">
      <Hero />
      <TrustSection />
      <TimelineSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
