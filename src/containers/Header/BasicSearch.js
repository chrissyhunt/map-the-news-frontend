import React from 'react';
import moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchNewsMode, clearActiveNewsSource } from '../../actions/Application';
import { fetchNews } from '../../actions/News';

class BasicSearch extends Component {
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
    this.props.setSearchNewsMode();
    this.props.clearActiveNewsSource();
    this.props.fetchNews(this.state.searchTerms);
  }

  render() {
    return (
      <form onSubmit={e => this.handleOnSubmit(e)}>
        <input type="text" placeholder="Enter a topic or keyword..." name="q" className="searchbar" value={this.state.searchTerms.q} onChange={e => this.handleOnChange(e)}/>
        <input type="submit" value="Go" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchInfo: state.searchInfo
  }
}

export default connect(mapStateToProps, { fetchNews, setSearchNewsMode, clearActiveNewsSource })(BasicSearch);
