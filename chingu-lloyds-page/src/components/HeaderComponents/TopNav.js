import React from 'react';
import TopNavLloydsLogo from './TopNavLloydsLogo';
import SearchBar from './SearchBar';
import '../App.css';

const TopNav = () => {
  return (
    <ul className="top-nav-container">
      <li><TopNavLloydsLogo /></li>
      <li><a href="https://www.lloyds.com/about-lloyds" target="_blank" rel="noopener noreferrer">About</a></li>
       <li><a href="https://www.lloyds.com/about-lloyds" target="_blank" rel="noopener noreferrer">@About</a></li>
      <li><a href="https://www.lloyds.com/about-lloyds/value_proposition_broker" alt="Info for brokers"> Brokers</a></li>
      <li><a href="https://www.lloyds.com/about-lloyds/value_proposition_broker" alt="Info for coverholders "> Coverholders</a></li>
      <li><a href="https://www.lloyds.com/about-lloyds/value_proposition_insurer" alt="Info for Insurers"> Insurer</a></li> 
      <li><a href="https://www.lloyds.com/policyholder" alt="Info for Policyholders"> Policyholders</a></li>
      <li><a href="https://www.lloyds.com/careers" alt="More about Careers at Lloyds"> Careers</a></li>
      <li><a href="https://www.lloyds.com/investor-relations" alt="More about investor relations">Investor relations</a></li>
      <li><a href="https://www.lloyds.com/contact-us" alt="Contact"> Contact</a></li>
      <li><a href="https://secure.lloyds.com/login?ReturnUrl=%2f%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fwww.lloyds.com%252f%26wctx%3drm%253d0%2526id%253d82f189f3-737f-45bb-b4bc-d2a470ec0ac0%2526ru%253dhttps%25253a%25252f%25252fwww.lloyds.com%25252fcontact-us%26wct%3d2019-06-16T03%253a26%253a09Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fwww.lloyds.com%2f&wctx=rm%3d0%26id%3d82f189f3-737f-45bb-b4bc-d2a470ec0ac0%26ru%3dhttps%253a%252f%252fwww.lloyds.com%252fcontact-us&wct=2019-06-16T03%3a26%3a09Z" target="_blank" rel="noopener noreferrer" alt="Login or register"> Login/register</a></li>
      <li><SearchBar /></li>  
    </ul>
  ) 
}
export default TopNav;