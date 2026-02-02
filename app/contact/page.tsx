import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote | Seattle Auto Glass LLC",
  description:
    "Get a free quote for windshield repair or replacement in Seattle. Call (206) 886-1092 or fill out our online form. Fast, mobile service available.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Seattle Auto Glass LLC | Get a Free Quote",
    description: "Need windshield repair? Contact us today for a free quote. We offer mobile service throughout Seattle.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
