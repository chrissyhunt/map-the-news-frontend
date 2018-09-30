import React from 'react';

const Headline = (props) => {
  return (
      <h4><a role="button" onClick={props.handleHeadlineClick} name={props.source}>{props.newsInfo.title}</a></h4>
  )
}

export default Headline;
