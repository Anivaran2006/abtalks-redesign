"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavigation = ["/login", "/signup", "/"].includes(pathname);

  return (
    <div className="relative z-10 flex flex-col flex-1">
      {!hideNavigation && <TopBar />}
      <main className="flex-1 pb-24">
        {children}
      </main>
      {!hideNavigation && <BottomNav />}
    </div>
  );
}
