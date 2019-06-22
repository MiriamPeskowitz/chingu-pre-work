import React from 'react';
import FooterNavbar from './FooterNavbar';
import FooterSocialShare from './FooterSocialShare';
import FooterCopyrightText from './FooterCopyrightText';
import '../../App.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sections-holder">
        <FooterNavbar /><br />
        <FooterSocialShare />
        <FooterCopyrightText />
      </div>
    </div>
  )
}
export default Footer; 