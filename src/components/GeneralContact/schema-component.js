import React from "react";

const JsonLd = () => {
  const jsonLdScripts = [
    {
      "@context": "http://www.schema.org",
      "@type": "ContactPage",
      "additionalType": [
        "https://schema.org/TaxiService",
        "https://schema.org/TravelAgency"
      ],
      "name": "Contact Us | BCabs",
      "alternateName": "Taxi service in Kerala",
      "url": "https://www.bcabs.com/general-contact/",
      "image": "https://www.bcabs.com/_next/image?url=%2Fimages%2Fassets%2Fkochi-airport-taxi.jpg&w=1920&q=75",
      "about": {
        "@type": "Organization",
        "name": "BCabs",
        "logo": "https://www.bcabs.com/images/assets/bcabs-logo.png"
      },
      "description":
        "B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles ranging from Suzuki Dzire to Mercedes Benz S-Class including luxury coaches. Currently, BCabs has services at all airports and major cities of Kerala.",
      "mainEntity": {
        "@type": "webpageElement",
        "description":
          "Corporate Office: BTransport Solutions Private Limited PRA-167, Pallissery Rd, Palarivattom Kochi, Kerala 682025, India"
      },
      "sameAs": [
        "https://www.facebook.com/bcabs/",
        "https://x.com/bcabsrideeasy/",
        "https://in.pinterest.com/bcabsrideeasy/",
        "https://www.instagram.com/bcabs_taxi/",
        "https://www.youtube.com/@bcabs",
        "https://maps.app.goo.gl/uiCkCW5rvLSh5ZQc8"
      ]
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "bcabs",
          "item": "https://www.bcabs.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "general-contact",
          "item": "https://www.bcabs.com/general-contact"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "additionalType": [
        "https://schema.org/TaxiService",
        "https://schema.org/TravelAgency"
      ],
      "image": ["https://www.bcabs.com/images/assets/bcabs-logo.png"],
      "@id": "https://www.bcabs.com/",
      "name": "BCabs",
      "alternatename": "Taxi service in Kerala",
      "legalName": "BTransport Solutions Private Limited",
      "description":
        "B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles ranging from Suzuki Dzire to Mercedes Benz S-Class including luxury coaches. Currently, BCabs has services at all airports and major cities of Kerala.",
      "priceRange": "INR",
      "address": {
        "@type": "PostalAddress",
        "streetAddress":
          "BTransport Solutions Private Limited, PRA-167, Pallissery Rd, Chakkalakkal, Palarivattom, Kochi, Ernakulam, Kerala 682025",
        "addressLocality": "Ernakulam, Kerala",
        "addressRegion": "Kerala",
        "postalCode": "682025",
        "addressCountry": "INDIA"
      },
      "hasMap": "https://maps.app.goo.gl/uiCkCW5rvLSh5ZQc8",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.9978491,
        "longitude": 76.3124201
      },
      "url": "https://www.bcabs.com/",
      "telephone": "+919895118877",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "23:59"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "bestRating": "5",
        "ratingCount": "889"
      }
    },
    {
      "@context": "http://www.schema.org",
      "@type": "Organization",
      "@id": "https://www.bcabs.com/",
      "additionalType": [
        "https://schema.org/TaxiService",
        "https://schema.org/TravelAgency"
      ],
      "url": "https://www.bcabs.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "#logo",
        "contentUrl": "https://www.bcabs.com/images/assets/bcabs-logo.png",
        "url": "https://www.bcabs.com/images/assets/bcabs-logo.png"
      },
      "name": "BCabs",
      "alternatename": "Taxi service in Kerala",
      "legalName": "BTransport Solutions Private Limited",
      "description":
        "B-Cabs, started in 2009; is the first and largest professional Taxi - Cab service of Kochi (Cochin) having a fleet of well-maintained and periodically reviewed vehicles ranging from Suzuki Dzire to Mercedes Benz S-Class including luxury coaches. Currently, BCabs has services at all airports and major cities of Kerala.",
      "sameAs": [
        "https://www.facebook.com/bcabs/",
        "https://x.com/bcabsrideeasy/",
        "https://in.pinterest.com/bcabsrideeasy/",
        "https://www.instagram.com/bcabs_taxi/",
        "https://www.youtube.com/@bcabs",
        "https://maps.app.goo.gl/uiCkCW5rvLSh5ZQc8"
      ],
      "image": {
        "@type": "ImageObject",
        "@id": "#image",
        "contentUrl":
          "https://www.bcabs.com/_next/image?url=%2Fimages%2Fassets%2Fkerala-tour-package.png&w=640&q=75",
        "url":
          "https://www.bcabs.com/_next/image?url=%2Fimages%2Fassets%2Fkerala-tour-package.png&w=640&q=75"
      },
      "telephone": "+91 9895 11 88 77",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+91 9895 11 88 77",
        "email": "bcabs@bintel.com"
      }
    }
  ];

  return (
    <>
      {jsonLdScripts.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

export default JsonLd;
