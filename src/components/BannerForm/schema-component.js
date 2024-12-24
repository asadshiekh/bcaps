import React from "react";

const JsonLd = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "bcabs",
        item: "https://www.bcabs.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "book-now",
        item: "https://www.bcabs.com/book-now/",
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: [
      "https://schema.org/TaxiService",
      "https://schema.org/TravelAgency",
    ],
    image: ["https://www.bcabs.com/images/assets/bcabs-logo.png"],
    "@id": "https://www.bcabs.com/",
    name: "BCabs",
    alternatename: "Taxi service in Kerala",
    legalName: "BTransport Solutions Private Limited",
    description:
      "B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles...",
    priceRange: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "BTransport Solutions Private Limited, PRA-167, Pallissery Rd, Chakkalakkal, Palarivattom, Kochi, Ernakulam, Kerala 682025",
      addressLocality: "Ernakulam, Kerala",
      addressRegion: "Kerala",
      postalCode: "682025",
      addressCountry: "INDIA",
    },
    hasMap: "https://maps.app.goo.gl/uiCkCW5rvLSh5ZQc8",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.9978491,
      longitude: 76.3124201,
    },
    url: "https://www.bcabs.com/",
    telephone: "+919895118877",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      ratingCount: "889",
    },
  };

  const organizationSchema = {
    "@context": "http://www.schema.org",
    "@type": "Organization",
    "@id": "https://www.bcabs.com/",
    additionalType: [
      "https://schema.org/TaxiService",
      "https://schema.org/TravelAgency",
    ],
    url: "https://www.bcabs.com/",
    logo: {
      "@type": "ImageObject",
      "@id": "#logo",
      contentUrl: "https://www.bcabs.com/images/assets/bcabs-logo.png",
      url: "https://www.bcabs.com/images/assets/bcabs-logo.png",
    },
    name: "BCabs",
    alternatename: "Taxi service in Kerala",
    legalName: "BTransport Solutions Private Limited",
    description:
      "B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles...",
    sameAs: [
      "https://www.facebook.com/bcabs/",
      "https://x.com/bcabsrideeasy/",
      "https://in.pinterest.com/bcabsrideeasy/",
      "https://www.instagram.com/bcabs_taxi/",
      "https://www.youtube.com/@bcabs",
      "https://maps.app.goo.gl/uiCkCW5rvLSh5ZQc8",
    ],
    image: {
      "@type": "ImageObject",
      "@id": "#image",
      contentUrl:
        "https://www.bcabs.com/_next/image?url=%2Fimages%2Fassets%2Fkerala-tour-package.png&w=640&q=75",
      url: "https://www.bcabs.com/_next/image?url=%2Fimages%2Fassets%2Fkerala-tour-package.png&w=640&q=75",
    },
    telephone: "+91 9895 11 88 77",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91 9895 11 88 77",
      email: "bcabs@bintel.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};

export default JsonLd;
