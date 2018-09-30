import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/News';

// reminder: only renders if search is active

class SearchNavBox extends Component {

  backOneWeek = (event) => {
    const newStart = moment(this.props.searchInfo.currentSearch.startDate).subtract(1, 'weeks').format("YYYY-MM-DD")
    const newEnd = moment(newStart).add(1, 'days').format("YYYY-MM-DD")
    const newSearchTerms = {
      q: this.props.searchInfo.currentSearch.q,
      startDate: newStart,
      endDate: newEnd
    }
    this.props.fetchNews(newSearchTerms);
  }

  backOneDay = (event) => {
    const newStart = moment(this.props.searchInfo.currentSearch.startDate).subtract(1, 'days').format("YYYY-MM-DD")
    const newEnd = moment(newStart).add(1, 'days').format("YYYY-MM-DD")
    const newSearchTerms = {
      q: this.props.searchInfo.currentSearch.q,
      startDate: newStart,
      endDate: newEnd
    }
    this.props.fetchNews(newSearchTerms);
  }

  forwardOneDay = (event) => {
    const newStart = moment(this.props.searchInfo.currentSearch.startDate).add(1, 'days').format("YYYY-MM-DD")
    const newEnd = moment(newStart).add(1, 'days').format("YYYY-MM-DD")
    const newSearchTerms = {
      q: this.props.searchInfo.currentSearch.q,
      startDate: newStart,
      endDate: newEnd
    }
    this.props.fetchNews(newSearchTerms);
  }

  forwardOneWeek = (event) => {
    const newStart = moment(this.props.searchInfo.currentSearch.startDate).add(1, 'weeks').format("YYYY-MM-DD")
    const newEnd = moment(newStart).add(1, 'days').format("YYYY-MM-DD")
    const newSearchTerms = {
      q: this.props.searchInfo.currentSearch.q,
      startDate: newStart,
      endDate: newEnd
    }
    this.props.fetchNews(newSearchTerms);
  }

  render() {
    return (
      <fieldset>
        <legend>Browse Results Over Time</legend>
        <button onClick={this.backOneWeek}>&larr; 1 Week</button>
        <button onClick={this.backOneDay}>&larr; 1 Day</button>
        <button onClick={this.forwardOneDay}>1 Day &rarr;</button>
        <button onClick={this.forwardOneWeek}>1 Week &rarr;</button>
      </fieldset>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { fetchNews })(SearchNavBox);
