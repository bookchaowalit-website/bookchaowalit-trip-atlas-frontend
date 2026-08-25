import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trip Atlas — Route Planning Desk",
  description: "An illustrative itinerary desk for choosing a route and planning the next stop.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
