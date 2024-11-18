import React from "react";

const JsonLd = () => {
  const jsonLdScripts = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "BCabs® Customer Reviews: Discover what customers are saying about BCabs Kochi Taxi Service",
      "description":
        "Go through genuine reviews and experiences from people who've chosen Bcabs for their travel needs. From daily commutes to special journeys, find out how Bcabs is making a difference in travel comfort and convenience. Share your own story and join our community of satisfied customers.",
      "thumbnailUrl": "https://img.youtube.com/vi/95MXNUlm22M/sddefault.jpg",
      "uploadDate": "2023-11-17T08:00:00+08:00",
      "duration": "PT1M48S",
      "publisher": {
        "@type": "Organization",
        "name": "bcabs",
        "url": "https://www.bcabs.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bcabs.com/images/assets/bcabs-logo.png",
          "width": 300,
          "height": 60,
        },
      },
      "contentUrl": "https://www.youtube.com/watch?v=95MXNUlm22M",
      "embedUrl": "https://www.bcabs.com/",
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "BCabs®️ #CustomerReviews: True and real experiences of #KeralaTourPackage guests",
      "description":
        "Discover what our customers are saying! Dive into authentic reviews and experiences from real users. Learn about the impact our service/product has made in their lives and make an informed decision. Your trust is our priority. Share your own experience and join our community of satisfied customers.",
      "thumbnailUrl": "https://img.youtube.com/vi/exCuiobQYPM/sddefault.jpg",
      "uploadDate": "2023-11-19T08:00:00+08:00",
      "duration": "PT1M15S",
      "publisher": {
        "@type": "Organization",
        "name": "bcabs",
        "url": "https://www.bcabs.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bcabs.com/images/assets/bcabs-logo.png",
          "width": 300,
          "height": 60,
        },
      },
      "contentUrl": "https://www.youtube.com/watch?v=exCuiobQYPM",
      "embedUrl": "https://www.bcabs.com/",
    },
    // Add the rest of your JSON-LD objects here similarly...
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
