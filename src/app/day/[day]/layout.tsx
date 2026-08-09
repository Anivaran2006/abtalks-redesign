import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ day: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Day ${resolvedParams.day || 12} Challenge | AbTalks`,
    description: `Complete your coding challenge for Day ${resolvedParams.day || 12} to build your streak.`,
  };
}

export default function DayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
