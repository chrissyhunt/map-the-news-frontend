import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setTopStoriesMode, setSearchNewsMode } from '../../actions/Application';
import { getTopHeadlines } from '../../actions/News';

class ViewModeSelector extends Component {
  constructor() {
    super();
    this.state = {
      topStoriesMode: true,
      searchMode: false
    }
  }

  componentDidMount() {
    if (!this.props.application.topStoriesMode) {
      this.setState({
        topStoriesMode: false,
        searchMode: true
      })
    }
  }

  setTopStoriesMode = () => {
    this.props.setTopStoriesMode();
    this.props.getTopHeadlines();
    this.setState({
      topStoriesMode: true,
      searchMode: false
    })
  }

  setSearchMode = () => {
    this.props.setSearchNewsMode();
    this.setState({
      topStoriesMode: false,
      searchMode: true
    })
  }

  render() {
    return (
      <fieldset>
        <legend>Select view mode</legend>
        <label><input type="radio" name="view" id="topStoriesMode" checked={this.state.topStoriesMode} onClick={this.setTopStoriesMode} /> Top Headlines</label>
        <label><input type="radio" name="view" id="searchMode" checked={this.state.searchMode} onClick={this.setSearchMode} /> Search by Topic</label>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, { setTopStoriesMode, setSearchNewsMode, getTopHeadlines })(ViewModeSelector);
