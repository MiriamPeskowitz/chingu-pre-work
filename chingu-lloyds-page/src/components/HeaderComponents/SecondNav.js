import React from 'react';
import '../../App.css';

const SecondNavBar = () => {
  return (
    <nav className="second-nav-container">
      <ul className="nav2">
        <li className="gray"><a href="https://www.lloyds.com/news-and-risk-insight" target="_blank" rel="noopener noreferrer" alt="news and risk insight"> News and risk insight</a></li>
        <li className="blue"> <a href="https://www.lloyds.com/market-directory" target="_blank" rel="noopener noreferrer" alt="market directory">Market directory</a></li>
        <li className="blue"> <a href="https://www.lloyds.com/market-resources" target="_blank" rel="noopener noreferrer" alt="market resources">Market resources</a></li>
        <li className="blue"><a href="https://www.lloyds.com/tools-and-systems" target="_blank" rel="noopener noreferrer" alt="tools and systems"> Tools and systems</a></li> 
        <li className="blue"><a href="https://www.lloyds.com/lloyds-around-the-world" target="_blank" rel="noopener noreferrer" alt="lloyds around the world"> Lloyds around the world</a></li>
      </ul>
    </nav>  
  )
}
export default SecondNavBar;