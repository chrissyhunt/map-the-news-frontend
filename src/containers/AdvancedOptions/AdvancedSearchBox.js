import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { clearSearch, saveSearch } from '../../actions/SaveSearch';
import { fetchNews } from '../../actions/News';

class AdvancedSearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerms : {
        q: '',
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment().add(1, 'days').format("YYYY-MM-DD")
      }
    }
  }

  componentDidMount() {
    if (this.props.searchInfo.searchActive) {
      this.setState({
        searchTerms: this.props.searchInfo.currentSearch
      })
    }
  }

  handleOnChange = event => {
    this.setState({
      searchTerms: {
        ...this.state.searchTerms,
        [event.target.name]: event.target.value
      }
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.fetchNews(this.state.searchTerms);
  }

  saveSearch = () => {
    this.props.saveSearch(this.state.searchTerms);
  }

  clearSearch = () => {
    this.props.clearSearch();
    this.setState({
      searchTerms: {
        q: '',
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment().add(1, 'days').format("YYYY-MM-DD")
      }
    })
  }

  render() {
    return (
      <div className="options-section">
        <form onSubmit={this.handleOnSubmit}>
          <fieldset>
            <legend>Search the news</legend>

            <div className="form-section full-width">
              <label>Enter a topic or keyword:</label><br />
              <input type="text" name="q" onChange={this.handleOnChange} value={this.state.searchTerms.q}/>
            </div>

            <div className="form-section half-width left-half">
              <label>Select a start date:</label><br />
              <input type="date" name="startDate" onChange={this.handleOnChange} value={this.state.searchTerms.startDate}/>
            </div>

            <div className="form-section half-width right-half">
              <label>Select an end date:</label>
              <input type="date" name="endDate" onChange={this.handleOnChange} value={this.state.searchTerms.endDate}/>
            </div>

            <div className="form-section half-width left-half">
              <input type="submit" value="Search" />
            </div>

            <div className="form-section half-width right-half right">
              <input type="button" value="Save" onClick={this.saveSearch} />
              <input type="button" value="Clear" onClick={this.clearSearch} />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newsItems: state.newsItems,
    newsSourceList: state.newsSourceList,
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { fetchNews, saveSearch, clearSearch })(AdvancedSearchBox);
