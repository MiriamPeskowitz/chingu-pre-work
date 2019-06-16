import React from 'react';
import TopNav from './TopNav';
import SecondNav from './SecondNav';
import '../App.css';

const Header = () => {
  return (
   <header> 
    <nav className="top-nav-container">
      <TopNav />
      <SecondNav />
    </nav>
  </header>
  )
}
export default Header;