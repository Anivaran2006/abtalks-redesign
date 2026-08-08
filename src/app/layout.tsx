import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavigationWrapper } from "@/components/layout/NavigationWrapper";
import { AppProvider } from "@/context/AppContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AbTalks | 60-Day Challenge",
  description: "Join the 60-Day Coding Challenge to build habits, scale your skills, and get hired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <AppProvider>
          <div className="max-w-[390px] mx-auto min-h-screen bg-[#09090b] shadow-2xl shadow-indigo-500/10 overflow-x-hidden relative flex flex-col selection:bg-indigo-500/30">
            
            {/* Premium Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
              <div className="absolute top-[-10%] w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen" />
              <div className="absolute bottom-[-10%] w-[400px] h-[400px] bg-fuchsia-500/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <NavigationWrapper>
              {children}
            </NavigationWrapper>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
