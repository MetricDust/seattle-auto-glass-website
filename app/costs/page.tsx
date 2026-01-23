import { Metadata } from "next";
import CostsContent from "./CostsContent";

export const metadata: Metadata = {
  title: "Windshield Repair Costs | Seattle Auto Glass LLC",
  description:
    "Understand the factors affecting windshield chip repair costs. We provide competitive pricing for auto glass repair.",
};

export default function CostsPage() {
  return <CostsContent />;
}
