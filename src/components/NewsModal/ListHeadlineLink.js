import React from 'react';

const ListHeadlineLink = (props) => <p><a role="button" name={props.id} onClick={props.updateIndex}>{props.title}</a></p>

export default ListHeadlineLink;
