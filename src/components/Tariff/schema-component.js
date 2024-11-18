import React from "react";

const JsonLd = () => {
  const structuredDataScripts = [
    {
      "@context": "http://schema.org",
      "@type": "TaxiService",
      "serviceType": "kochi city taxi",
      "additionalType": [
        "https://schema.org/LocalBusiness",
        "https://schema.org/TravelAgency",
        "https://schema.org/AutoRental"
      ],
      "name": "kochi city taxi",
      "image": "https://www.bcabs.com/images/assets/kochi-city-taxi-etios-fleet-2.png",
      "logo": "https://www.bcabs.com/images/assets/bcabs-logo.png",
      "description": "If you are looking for a comfortable and convenient way to travel with your group to Kerala, look no further than BCabs Traveller and Bus rental service at Kochi...",
      "brand": { "@id": "https://www.bcabs.com/#mergenode" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "kochi city taxi",
        "url": "https://www.bcabs.com/kochi-city-taxi/"
      },
      "provider": {
        "@type": "LocalBusiness",
        "name": "BCabs",
        "url": "https://www.bcabs.com/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "ratingCount": "889",
          "bestRating": "5",
          "worstRating": "1"
        },
        "priceRange": "INR",
        "telephone": "+919895118877",
        "image": "https://www.bcabs.com/images/assets/bcabs-logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "BTransport Solutions Private Limited, PRA-167, Pallissery Rd, Chakkalakkal, Palarivattom, Kochi, Ernakulam, Kerala 682025",
          "addressLocality": "Ernakulam, Kerala",
          "addressRegion": "Kerala",
          "postalCode": "682025",
          "addressCountry": "INDIA"
        }
      },
      "areaServed": {
        "@type": "State",
        "name": "Kerala"
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
      "@context": "http://schema.org",
      "@type": "ItemList",
      "additionalType": [
        "https://schema.org/TaxiService",
        "https://schema.org/TravelAgency"
      ],
      "url": "https://www.bcabs.com/kochi-city-taxi/",
      "name": "kochi-city-taxi",
      "description": "We have a combined fleet strength of 750+ vehicles",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Suzuki Dzire",
          "description": "One of the most sought out car for Kochi City Travel and Kerala Tour Packages alike...",
          "image": "https://www.bcabs.com/images/assets/kochi-city-taxi-dzire-flee-1.png",
          "url": "https://www.bcabs.com/kochi-city-taxi/#1"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Toyota Etios",
          "description": "Most ideal vehicle for Kerala Tour Packages...",
          "image": "https://www.bcabs.com/images/assets/kochi-city-taxi-etios-fleet-2.png",
          "url": "https://www.bcabs.com/kochi-city-taxi/#2"
        }
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
          "name": "kochi-city-taxi",
          "item": "https://www.bcabs.com/kochi-city-taxi/"
        }
      ]
    }
  ];

  return (
    <>
      {structuredDataScripts.map((data, index) => (
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
