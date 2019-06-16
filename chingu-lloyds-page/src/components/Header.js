import React from 'react';

import TopNav from './TopNav';
import SecondNav from './SecondNav';
import TopNavLloydsLogo from './TopNavLloydsLogo';


import '../App.css';

const Header = () => {
  return (
   //contains topnav and lloydslogo and search
   <header> 
    <nav classname="top-nav-container">
      <TopNav />
      <SecondNav />
     
    </nav>
  </header>
  )
}
export default Header;