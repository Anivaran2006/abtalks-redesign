"use client";

import * as React from "react";
import { MessageSquare } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();
  return (
    <AuthGuard>
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center max-w-xl mx-auto w-full pt-12">
        <EmptyState 
          icon={MessageSquare}
          title="Community Chat"
          description="Connect with other developers, ask questions, and share your wins. The community chat is unlocking soon!"
          actionLabel="Back to Dashboard"
          onAction={() => router.push("/dashboard")}
          variant="indigo"
        />
      </div>
    </AuthGuard>
  );
}
