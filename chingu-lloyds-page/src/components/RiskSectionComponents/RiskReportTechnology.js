import React from 'react';
import ShareButton from './ShareButton';
import '../../App.css';

const RiskReportTechnology = () => {
  return (
    <div className="risk-report-technology-container">
      <section className="risk-report-technology">
        <h5>Risk Reports > Technology </h5>
        <h1 className="taking-control">Taking Control</h1>
        <div>
          <p className="taking-control-text">How artificial intelligence and robots create new risks and opportunities for insurance and society</p>
          <ShareButton />
        </div>
      </section>
    </div>
  )
}
export default RiskReportTechnology;