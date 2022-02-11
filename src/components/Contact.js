import React from 'react';

const Contact = props => {
  return (
    <div className="friend-item">
      <div>
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
      </div>
      {props.isDeletable ? <button>Delete</button> : null}
    </div>
  );
};

export default Contact;
