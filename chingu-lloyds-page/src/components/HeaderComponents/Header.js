import React from 'react';
import TopNav from './TopNav';
import SecondNav from './SecondNav';
import '../../App.css';

const Header = () => {
  return (
   <header> 
    <nav className="header-container">
      <TopNav />
      <SecondNav />
    </nav>
  </header>
  )
}
export default Header;

//WORK ON THIS< TO SEPARATE AND SIZE THE 2 NAVBARS. WILL BE GOOD TO FEEL REALLY COMFORTABLE WITH NAVBARS, TOO. 