import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SubmissionForm } from "@/components/ui/SubmissionForm";

export default function SubmitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-32">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/challenge/12">
          <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <span className="font-bold text-sm tracking-widest uppercase text-indigo-400">
          Submit Proof
        </span>
        <div className="w-10 h-10" />
      </div>

      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center max-w-2xl mx-auto w-full pt-12">
        <SubmissionForm />
      </div>
    </div>
  );
}
