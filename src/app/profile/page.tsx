"use client";

import * as React from "react";
import { User } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export default function ProfilePage() {
  return (
    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center max-w-xl mx-auto w-full pt-12">
      <EmptyState 
        icon={User}
        title="Your Profile"
        description="We're crafting a beautiful new way to showcase your stats, achievements, and GitHub integrations. Coming very soon."
        actionLabel="Back to Dashboard"
        onAction={() => window.location.href = "/dashboard"}
        variant="default"
      />
    </div>
  );
}
