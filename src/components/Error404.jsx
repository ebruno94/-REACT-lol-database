import React from 'react';
import {Link} from 'react-router-dom';

export default function Error404(){
  return(
    <div>
      <h1>The page you are looking for does not exist!</h1>
      <h2>Click <Link to="/">here</Link> to return home</h2>
    </div>
  );
}
