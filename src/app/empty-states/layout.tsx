import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empty States | AbTalks",
  description: "Showcase of empty state designs.",
};

export default function EmptyStatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
