"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isHydrated } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!isHydrated) return;

    if (!isAuthenticated) {
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }, [isAuthenticated, isHydrated, router, pathname]);

  if (!isHydrated || !authorized) {
    return <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white">
      <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
    </div>;
  }

  return <>{children}</>;
}
