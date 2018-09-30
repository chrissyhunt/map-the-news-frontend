import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ViewModeSelector from './ViewModeSelector';
import AdvancedSearchBox from './AdvancedSearchBox';
import LoadSavedSearches from './LoadSavedSearches';
import SearchNavBox from './SearchNavBox';
import DarkenBackground from '../../components/DarkenBackground';
import { deactivateSearchOptionsBox } from '../../actions/Application';

class AdvancedOptions extends Component {

  closeAdvancedOptions = (event) => {
    event.preventDefault();
    this.props.deactivateSearchOptionsBox();
  }

  render() {
    return (
      <React.Fragment>
      <div className="options">
        <div className="options-section">
          <ViewModeSelector topStoriesMode={this.props.application.topStoriesMode} />
          {this.props.searchInfo.searchActive && <SearchNavBox />}
        </div>
        {!this.props.application.topStoriesMode && <AdvancedSearchBox />}
        {!this.props.application.topStoriesMode && <LoadSavedSearches />}
      </div>
      <DarkenBackground closeModal={this.closeAdvancedOptions} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
    searchInfo: state.searchInfo,
    application: state.application
  }
}

export default connect(mapStateToProps, { deactivateSearchOptionsBox })(AdvancedOptions);
