import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import SavedSearch from '../../components/AdvancedOptions/SavedSearch';
import { deleteSearch } from '../../actions/SaveSearch';
import { fetchNews } from '../../actions/News';

class LoadSavedSearches extends Component {
  constructor() {
    super();
    this.state = {
      start: 0,
      end: 6
    }
  }

  pageForward = () => {
    this.setState((prevState) => {
      return {
        start: prevState.start+6,
        end: prevState.end+6
      }
    })
  }

  pageBackward = () => {
    this.setState((prevState) => {
      return {
        start: prevState.start-6,
        end: prevState.end-6
      }
    })
  }

  deleteSearch = (event) => {
    event.preventDefault();
    this.props.deleteSearch(event.target.name);
  }

  loadSavedSearch = (event) => {
    event.preventDefault();
    const targetSearch = this.props.userInfo.user.searches.filter(search => {
      return search.id == event.target.name
    })[0]
    const searchTerms = {
      q: targetSearch.q,
      startDate: targetSearch.start_date,
      endDate: targetSearch.end_date,
    }
    this.props.fetchNews(searchTerms);
  }

  render() {
    const savedSearchCopy = this.props.userInfo.user.searches
    const savedSearchList = savedSearchCopy.sort((a, b) => b.id - a.id).slice(this.state.start, this.state.end).map(search => {
      return <SavedSearch key={search.id} id={search.id} query={search.q} startDate={search.start_date} endDate={search.end_date} deleteSearch={this.deleteSearch} loadSavedSearch={this.loadSavedSearch} />
    })

    const backButton = this.state.start > 0 ? <button onClick={this.pageBackward}>&larr; back</button> : null

    const forwardButton = this.state.end < this.props.userInfo.user.searches.length ? <button onClick={this.pageForward}>next &rarr;</button> : null

    return (
      <div className="options-section">
        <fieldset>
          <legend>Load Saved Search</legend>
          {savedSearchList}
          <p className="nav">
            {backButton}
            {forwardButton}
          </p>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, { fetchNews, deleteSearch })(LoadSavedSearches);
