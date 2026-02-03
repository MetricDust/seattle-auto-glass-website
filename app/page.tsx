import { Metadata } from "next";
import HomeContent from "./HomeContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Seattle's Finest Windshield Rock Chip Specialists | Seattle Auto Glass LLC",
  description: "Seattle Auto Glass LLC: Seattle's finest windshield rock chip specialists. We offer fast, mobile auto glass repair and replacement with a lifetime guarantee. Call (206) 886-1092 for a free quote!",
};
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seattle Auto Glass LLC",
    "image": "https://seattleautoglass.com/images/logo.png",
    "@id": "https://seattleautoglass.com",
    "url": "https://seattleautoglass.com",
    "telephone": "206-886-1092",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Seattle Area",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6062,
      "longitude": -122.3321
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/seattleautoglass",
      "https://www.instagram.com/seattleautoglass"
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
