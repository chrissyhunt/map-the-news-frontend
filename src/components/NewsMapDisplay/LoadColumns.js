import React from 'react';

const LoadColumns = (props) => {
  return (
    <div className="columns-container">
      <div className="col col1"><h3>Very Liberal</h3></div>
      <div className="col col2"><h3>Leans Liberal</h3></div>
      <div className="col col3"><h3>Neutral or Minimal Bias</h3></div>
      <div className="col col4"><h3>Leans Conservative</h3></div>
      <div className="col col5"><h3>Very Conservative</h3></div>
    </div>
  )
}

export default LoadColumns;
