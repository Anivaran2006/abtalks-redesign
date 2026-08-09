"use client";

import * as React from "react";
import { Hero } from "@/components/features/landing/Hero";
import { TrustSection } from "@/components/features/landing/TrustSection";
import { TimelineSection } from "@/components/features/landing/TimelineSection";
import { FeaturesSection } from "@/components/features/landing/FeaturesSection";
import { CTASection } from "@/components/features/landing/CTASection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-zinc-100 overflow-x-hidden">
      {/* Full-bleed hero section with its own internal responsive layout */}
      <Hero />

      {/* Constrained content sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <TrustSection />
        <TimelineSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}
