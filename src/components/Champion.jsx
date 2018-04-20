import React from 'react';
import PropTypes from 'prop-types';

export default function Champion(props){
  return(
    <div>
      <div className="container">
        <img src={props.image}/>
        <h3>Name: {props.name}</h3>
        <h4>Role: {props.role}</h4>
      </div>
    </div>
  );
}

Champion.propTypes={
  image: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string
};
