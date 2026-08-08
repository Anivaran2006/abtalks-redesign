"use client";

import * as React from "react";
import { MessageSquare } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export default function ChatPage() {
  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center max-w-xl mx-auto w-full pt-12">
      <EmptyState 
        icon={MessageSquare}
        title="Community Chat"
        description="Connect with other developers, ask questions, and share your wins. The community chat is unlocking soon!"
        actionLabel="Back to Dashboard"
        onAction={() => window.location.href = "/dashboard"}
        variant="indigo"
      />
    </div>
  );
}
