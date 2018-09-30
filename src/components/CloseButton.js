import React from 'react';

const CloseButton = (props) => {
  return (
    <div class="close-button"><a role="button" onClick={props.closeModal}>[X]</a></div>
  )
}

export default CloseButton;
