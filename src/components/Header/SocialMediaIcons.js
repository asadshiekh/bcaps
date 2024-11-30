import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaGoogle, FaTwitter } from 'react-icons/fa';

const SocialMediaIcons = () => (
  <div className="flex justify-around items-center p-4 border-t border-b">
    <a href="https://www.facebook.com/bcabs/" target='_blank' className="text-lg"><FaFacebookF /></a>
    <a href="https://twitter.com/bcabsrideeasy/" target='_blank' className="text-lg"><FaTwitter /></a>
    <a href="https://maps.app.goo.gl/yHhNHxfk6uctkh7z6" target='_blank' className="text-lg"><FaGoogle /></a>
    <a href="https://in.pinterest.com/bcabsrideeasy/" target='_blank' className="text-lg"><FaPinterestP /></a>
    <a href="https://instagram.com/bcabs_taxi" target='_blank' className="text-lg"><FaInstagram /></a>
  </div>
);

export default SocialMediaIcons;
