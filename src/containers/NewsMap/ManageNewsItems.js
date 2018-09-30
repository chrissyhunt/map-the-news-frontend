import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';

class ManageNewsItems extends Component {

  render() {
    const newsCards = this.props.newsSourceList.map(source => {
      if (this.props.newsItems.allNews[source] && this.props.newsItems.allNews[source].length > 0) {
        return <NewsCard newsInfo={this.props.newsItems.allNews[source]} source={source} key={source}/>
      } else {
        return null
      }
    })

    return (
      <div>
        {newsCards}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
  }
}

export default connect(mapStateToProps)(ManageNewsItems);
