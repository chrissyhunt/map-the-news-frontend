import React from 'react';

const LoadRows = (props) => {
  return (
    <React.Fragment>
      <div className="row green-row"><h3>Fact Reporting</h3></div>
      <div className="row yellow-row"><h3>Complex Analysis & Opinion</h3></div>
      <div className="row orange-row"><h3>Incomplete Story</h3></div>
      <div className="row red-row"><h3>Frequent Propaganda & Misinformation</h3></div>
    </React.Fragment>
  )
}

export default LoadRows;
