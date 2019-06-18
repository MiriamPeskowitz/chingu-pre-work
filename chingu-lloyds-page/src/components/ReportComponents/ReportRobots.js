import React from 'react';
import DownloadButton from './DownloadButton';
import '../../App.css';

const ReportRobots= () => {
  return (
    <div className="report-container">
      <div className="report-image">
      <img src="https://www.lloyds.com/~/media/files/news-and-insight/risk-insight/2019/robots-thumbnail.png" alt="report cover page" />
      </div>
      <div className="report-title-and-description" >
        <h2 className="title">Taking control:robots and risk</h2>
        <p className="description">In the future millions of jobs could be taken over by increasingly sophisticated robots or cobots (“collaborative robots”), according to various predictions. This report explores robotics potential to significantly change the risk landscape in many parts of the economy, including: manufacturing, agriculture, healthcare and retail. It also explores the opportunity for insurers to collaborate with clients as data from cobots will provide a much greater understanding of risk and offer opportunities for improved risks and pricing models.</p>
         <DownloadButton />
      </div>
     
    </div>
    )
}
export default ReportRobots; 
