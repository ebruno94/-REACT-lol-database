import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <div>
      <style jsx>{`
          .header{
            text-align: center;
          }






      `}</style>
      <div className="header">
        <h1>Game Spotlight</h1>
        <hr/>
        <Link to='/'>Home</Link> | <Link to='/newchampion'>New Champion</Link>
      </div>
    </div>
  );
}
