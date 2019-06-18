import React from 'react';
import ReportAI from "./ReportAI";
import ReportRobots from "./ReportRobots";
import '../../App.css';

const Reports = () => {
  return (
    <div>
      <ReportAI />
      <ReportRobots />
    </div>
  )
}
export default Reports;

//note: the two report pages can be refactored into one template, with the data in a seed file or an API. Redundant but okay for now. 

//MAKE THIS RESPONSIVE 