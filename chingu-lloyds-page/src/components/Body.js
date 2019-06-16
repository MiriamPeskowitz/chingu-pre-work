import React from 'react';
import RiskReportTechnology from './RiskReportTechnology';
import Reports from './Reports';
import Text from './Text';
import '../App.css';

const Body = () => {
  return (
    <div>
      <RiskReportTechnology />
      <Text />
      <Reports />
    </div>
  )
}
export default Body;