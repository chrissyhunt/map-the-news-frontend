import React from 'react';
import ListHeadlineLink from './ListHeadlineLink';

const MoreNews = (props) => {

  const newsItems = props.newsItems.map((item, index) => {
    return <ListHeadlineLink title={item.title} id={index} updateIndex={props.updateIndex} />
  })

  return (
    <div className="news-menu">
      <p className="modal-menu">More from {props.sourceName}:</p>
      {newsItems}
    </div>
  )
}

export default MoreNews;
