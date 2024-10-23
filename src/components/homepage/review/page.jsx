"use client";
import React, { useEffect } from 'react';

function Reviews() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1729703733560';
    script.setAttribute('theme', 'light');
    script.setAttribute('footer', 'false');
    script.setAttribute('widget-type', 'carousel');
    script.setAttribute('token', '66f5992cfd46571789c19a77');
    script.setAttribute('apiurl', 'https://server.onlinereviews.tech/api/v0.0.9');
    script.setAttribute('stats', 'false');
    script.setAttribute('addReview', 'false');
    script.setAttribute('profile-pic', 'true');
    script.setAttribute('review-name', 'true');
    script.setAttribute('positive-stars', 'true');
    script.setAttribute('wl', 'true');
    script.setAttribute('wlndig', 'https://go.thereviewbooster.com/bcabs');
    script.setAttribute('lang', 'us');

    // Append the script to the div with the specified id
    document.getElementById('wid_1729703733560').appendChild(script);
  }, []); // Empty dependency array to ensure it runs once after the component mounts

  return (
    <div>
      {/* Placeholder for the widget */}
      <div id="wid_1729703733560"></div>
    </div>
  );
}

export default Reviews;
