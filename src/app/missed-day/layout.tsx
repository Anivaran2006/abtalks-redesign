import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Streak Broken | AbTalks",
  description: "Your streak was broken, but you can recover it.",
};

export default function MissedDayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
