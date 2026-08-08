"use client";

import * as React from "react";
import { Hero } from "@/components/features/landing/Hero";
import { TrustSection } from "@/components/features/landing/TrustSection";
import { TimelineSection } from "@/components/features/landing/TimelineSection";
import { FeaturesSection } from "@/components/features/landing/FeaturesSection";
import { CTASection } from "@/components/features/landing/CTASection";

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
