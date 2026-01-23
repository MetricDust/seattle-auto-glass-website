import { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  // Inherits default title/description from layout, but can be overridden here if needed.
  // We'll rely on the comprehensive default in layout.tsx for the home page, 
  // but explicitly setting the canonical alternate if needed or specific high-priority keywords.
  title: "Seattle Auto Glass LLC | Premium Windshield Repair & Replacement",
  description: "Expert windshield repair and replacement in Seattle. Mobile service, insurance approved, lifetime guarantee. Call (206) 886-6240 for a free quote.",
};

export default function Home() {
  return <HomeContent />;
}
