import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import DarkenBackground from '../../components/DarkenBackground';
import CloseButton from '../../components/CloseButton';
import FeaturedStoryDetails from '../../components/NewsModal/FeaturedStoryDetails';
import MoreNews from '../../components/NewsModal/MoreNews';
import { clearActiveNewsSource } from '../../actions/Application';

class NewsModal extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }

  updateIndex = (event) => {
    event.preventDefault();
    this.setState({
      activeIndex: event.target.name
    })
  }

  closeModal = (event) => {
    event.preventDefault();
    this.props.clearActiveNewsSource();
  }

  render() {
    const activeNewsSource = this.props.application.activeNewsSource
    const newsItems = this.props.newsItems.allNews[activeNewsSource]
    const sourceName = this.props.newsItems.allNews[activeNewsSource][0].source.name
    return (
      <React.Fragment>
        <DarkenBackground closeModal={this.closeModal} />
        <div className="news-detail-modal">
          <CloseButton closeModal={this.closeModal} />
          <FeaturedStoryDetails headline={newsItems[this.state.activeIndex].title} description={newsItems[this.state.activeIndex].description} url={newsItems[this.state.activeIndex].url}/>
          <MoreNews sourceName={sourceName} newsItems={newsItems} updateIndex={this.updateIndex} />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
    application: state.application
  }
}

export default connect(mapStateToProps, { clearActiveNewsSource })(NewsModal);
