import React from 'react';
import FooterNavbar from './FooterNavbar';
import FooterSocialShare from './FooterSocialShare';

const Footer = () => {
  return (
    <div className="footer-container">
      <FooterNavbar />
      <FooterSocialShare />
      <section className="copyright">
        <p>Lloyd's Copyright 2019 </p>
        <p>Lloyd's is a registered trademark of the Society of Lloyd's. Lloyd's is authorised under the Financial Services and Markets Act 2000.</p>
      </section>
    </div>
  )
}
export default Footer; 