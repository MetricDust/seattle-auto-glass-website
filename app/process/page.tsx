import { Metadata } from "next";
import ProcessContent from "./ProcessContent";

export const metadata: Metadata = {
  title: "Auto Glass Repair Process | Seattle Auto Glass LLC",
  description:
    "Learn about our professional windshield repair process. From initial assessment to resin application and polishing, we ensure quality results.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  return <ProcessContent />;
}
