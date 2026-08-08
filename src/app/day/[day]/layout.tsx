import { Metadata } from "next";

export function generateMetadata({ params }: { params: { day: string } }): Metadata {
  return {
    title: `Day ${params.day || 12} Challenge | AbTalks`,
    description: `Complete your coding challenge for Day ${params.day || 12} to build your streak.`,
  };
}

export default function DayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
