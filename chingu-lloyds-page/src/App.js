import React from 'react';
import Header from './components/HeaderComponents/Header';
import RiskSectionOutline from './components/RiskSectionComponents/RiskSection';
import Footer from './components/FooterComponents/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <RiskSectionOutline /> 
      <Reports />
      <Footer /> 
    </React.Fragment>   
  );
}

export default App;
