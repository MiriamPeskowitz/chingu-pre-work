import React from 'react';
import DownloadButton from './DownloadButton';
import '../../App.css';

const ReportAI= () => {
  return (
    <div className="report-container">
      <div className="report-image">
        <img src="https://www.lloyds.com/~/media/files/news-and-insight/risk-insight/2019/taking-control-thumb.png" alt="report cover page" />
      </div>
      <div className="report-title-and-description" >
        <h2 className="title">Taking control: artificial intelligence and insurance</h2>
        <p className="description">This report identifies four risks areas for AI: trust and transparency, ethics, security and safety. It highlights that as artificial intelligence systems become more complex, cyber breaches are likely to have an even greater impact. The report also explores new business opportunities for insurers from developing new products for companies using the AI to applying the technology to improve insurance processes and deliver better value.</p>
         <DownloadButton />
      </div>    
    </div>
    )
}
export default ReportAI; 

// will have image , title, description, download button 
// div for image 
// div for title, description, button


