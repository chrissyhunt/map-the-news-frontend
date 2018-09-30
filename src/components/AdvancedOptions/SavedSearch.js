import React from 'react';
import moment from 'moment';

const SavedSearch = (props) => {
  const startDate = moment(props.startDate).format("M/D/YYYY")
  const endDate = moment(props.endDate).format("M/D/YYYY")

  // This may be redundant as News API no longer
  // returns results for same day searches [9/26/2018]
  const dateRange = startDate === endDate ? startDate : `${startDate} - ${endDate}`

  return (
    <p className="list"><input type="button" value="x" onClick={props.deleteSearch} name={props.id} /> <a role="button" name={props.id} onClick={props.loadSavedSearch}>{props.query}</a> <span className="date-range">{dateRange}</span></p>
  )
}

export default SavedSearch;
