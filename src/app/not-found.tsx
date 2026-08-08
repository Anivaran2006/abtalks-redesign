import * as React from "react";
import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-6">
      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-500/20 blur-[50px] rounded-full" />
        <div className="relative w-24 h-24 rounded-3xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-xl shadow-indigo-500/10 mb-4 mx-auto animate-bounce duration-3000">
          <Ghost className="w-10 h-10 text-indigo-400" />
        </div>
      </div>
      
      <div className="space-y-2 max-w-sm">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">404 - Lost in Space</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          The page you are looking for has drifted into the void. It might have been moved or deleted.
        </p>
      </div>

      <Link href="/dashboard">
        <Button variant="primary" className="h-12 px-8 gap-2 shadow-lg shadow-indigo-600/20">
          <ArrowLeft className="w-4 h-4" /> Return to Dashboard
        </Button>
      </Link>
    </div>
  );
}
