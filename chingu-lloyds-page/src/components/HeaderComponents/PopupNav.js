import React from 'react';
import '../../App.css';
//refactor so it's generic and can hold data for all the 2d nav popups 
const Popup = () => {
  return (
      <h3> News and Risk Insight </h3>
      <div><hr /></div>
      <section>
        <ul>
            <div className="column-one"> 
               <li>Press Releases</li>
               <li>Events </li>
               <li>City Risk Index </li>
               <li>Future at Lloyd's </li>
            </div>
            <div className="column-two">
              <li>News </li>
              <li>Lloyd's subsidiary in Brussels </li>
              <li>Consumer alerts </li>
            </div>
            <div className="column-three">
              <li>Risk reports </li>
              <li>Lloyd's lab </li>
              <li>Media centre-0 </li>
            </div>
        </ul>

      </section>


    )
}

export default Popup;