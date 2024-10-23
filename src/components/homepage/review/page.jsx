"use client"
import React, { useEffect } from 'react';

function Reviews() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1729537680181';
    script.setAttribute('theme', 'light');
    script.setAttribute('footer', 'true');
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
    script.setAttribute('brandStyle', '%7B%22sidebar_background%22%3A%22white%22%2C%22sidebar_text%22%3A%22%23070707%22%2C%22brand_button_text_color%22%3A%22%23080808%22%2C%22brand_main_color%22%3A%22%23a87b04%22%2C%22brand_button_border_radius%22%3A%228px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230707071a%22%2C%22brand_button_hover%22%3A%22rgb(193%2C%20141%2C%205)%22%2C%22brand_button_active%22%3A%22rgb(143%2C%20105%2C%203)%22%2C%22brand_main_color_opacity%22%3A%22%23a87b041a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23F6F8F7%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fwww.thereviewbooster.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Flogin.thereviewbooster.com%2Fpowered.png%22%7D');
    
    // Append the script to the div with the specified id
    document.getElementById('wid_1729537680181').appendChild(script);
  }, []); // Empty dependency array to ensure it runs once after the component mounts

  return (
    <div>
      {/* Placeholder for the widget */}
      <div id="wid_1729537680181"></div>
    </div>
  );
}

export default Reviews;
