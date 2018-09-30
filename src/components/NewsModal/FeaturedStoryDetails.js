import React from 'react';

const FeaturedStoryDetails = (props) => {
  return (
    <div className="news-detail">
      <h1>{props.headline}</h1>
      <p>{props.description}</p>
      <a href={props.url} className="button" target="_blank">Read the Full Story</a>
    </div>
  )
}

export default FeaturedStoryDetails;
