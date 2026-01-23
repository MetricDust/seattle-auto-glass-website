import { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Seattle Auto Glass LLC",
  description:
    "Common questions about windshield repair, costs, and insurance. Find answers about rock chip repair and when to choose professional service.",
};

export default function FAQPage() {
  return <FAQContent />;
}
