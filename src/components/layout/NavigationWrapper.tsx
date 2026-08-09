"use client";

import { usePathname } from "next/navigation";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import { DesktopNav } from "./DesktopNav";

export function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavigation = ["/login", "/signup", "/"].includes(pathname);

  if (hideNavigation) {
    return (
      <div className="relative z-10 flex flex-col flex-1 min-h-screen">
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-1 min-h-screen">
      {/* Desktop sidebar — hidden on mobile */}
      <DesktopNav />

      {/* Main content column */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Mobile/tablet top bar — hidden on lg+ (sidebar takes over) */}
        <TopBar className="lg:hidden" />

        <main className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>

        {/* Mobile bottom nav — hidden on lg+ */}
        <BottomNav className="lg:hidden" />
      </div>
    </div>
  );
}
