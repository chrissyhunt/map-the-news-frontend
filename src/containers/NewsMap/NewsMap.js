import React, { Component } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import LoadRows from '../../components/NewsMapDisplay/LoadRows';
import LoadColumns from '../../components/NewsMapDisplay/LoadColumns';
import ManageNewsItems from './ManageNewsItems';
import NewsModal from '../NewsModal/NewsModal';
import UserSettingsModal from '../UserSettingsModal/UserSettingsModal';
import LoadingSpinner from '../../components/LoadingSpinner';
import { connect } from 'react-redux';
import { getTopHeadlines } from '../../actions/News';

class NewsMap extends Component {

  componentDidMount() {
    if (this.props.application.topStoriesMode && !this.props.application.loading && !this.props.searchInfo.searchActive) {
      this.props.getTopHeadlines();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <HeaderContainer />
          <LoadRows />
          <LoadColumns />
          <ManageNewsItems />
          {this.props.application.activeNewsSource && <NewsModal />}
          {this.props.application.userSettingsBoxOpen && <UserSettingsModal />}
          {this.props.application.loading && <LoadingSpinner message={this.props.application.loading} />}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application,
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { getTopHeadlines })(NewsMap);
