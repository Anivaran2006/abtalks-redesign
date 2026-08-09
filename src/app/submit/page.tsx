"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SubmissionForm } from "@/components/features/forms/SubmissionForm";
import { useAppContext } from "@/context/AppContext";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useSearchParams, useRouter } from "next/navigation";

import { Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

function SubmitContent() {
  const { submittedDays, submittedToday } = useAppContext();
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextDay = submittedDays.length + 1;

  const rawParam = searchParams.get("day");
  const parsedParam = rawParam ? parseInt(rawParam, 10) : NaN;
  const requestedDay = !isNaN(parsedParam) && parsedParam > 0 ? parsedParam : nextDay;

  const isCompleted = submittedDays.includes(requestedDay);
  const isNextLocked = requestedDay === nextDay && submittedToday;
  const isFutureLocked = requestedDay > nextDay;

  if (isCompleted || isNextLocked || isFutureLocked) {
    return (
      <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-40 lg:pb-10">
        <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <span className="font-bold text-sm tracking-widest uppercase text-amber-400">
            Submission Unavailable
          </span>
          <div className="w-10 h-10" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto w-full">
          {isCompleted ? (
            <>
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Already Submitted</h3>
              <p className="text-sm text-zinc-400 mb-6">
                You have already submitted proof of work for Day {requestedDay}.
              </p>
            </>
          ) : isNextLocked ? (
            <>
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unlocks Tomorrow</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Great job completing today&apos;s challenge! Day {requestedDay} unlocks on the next calendar day.
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-zinc-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Challenge Locked</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Day {requestedDay} is currently locked. Complete your active challenges first!
              </p>
            </>
          )}

          <Link href="/dashboard" className="w-full">
            <Button className="w-full bg-white text-indigo-950 hover:bg-zinc-200">
              Return to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-[family-name:var(--font-geist-sans)] pb-40 lg:pb-10">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <span className="font-bold text-sm tracking-widest uppercase text-indigo-400">
          Submit Proof (Day {requestedDay})
        </span>
        <div className="w-10 h-10" />
      </div>

      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center max-w-2xl mx-auto w-full pt-12">
        <SubmissionForm dayNumber={requestedDay} />
      </div>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <AuthGuard>
      <React.Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
        <SubmitContent />
      </React.Suspense>
    </AuthGuard>
  );
}
