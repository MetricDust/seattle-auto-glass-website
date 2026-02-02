import { Metadata } from "next";
import InsuranceContent from "./InsuranceContent";

export const metadata: Metadata = {
  title: "Auto Glass Insurance Claims | Seattle Auto Glass LLC",
  description:
    "Learn about insurance coverage for windshield repairs. We help with claims processing and work with all major insurance providers.",
  alternates: {
    canonical: "/insurance",
  },
};

export default function InsurancePage() {
  return <InsuranceContent />;
}
