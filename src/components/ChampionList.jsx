import React from 'react';
import PropTypes from 'prop-types';
import Champion from './Champion';

export default function ChampionList(props){
  return(
    <div>
      <style jsx>{`







      `}</style>
      <h1>Here are some of the many champions in the League!</h1>
      <div className='container'>
        <div className='box'>
          {props.championList.map((champ, index)=>
            <Champion
              image = {champ.image}
              name = {champ.name}
              role = {champ.role} />
          )}
        </div>
      </div>
    </div>
  );
}

ChampionList.propTypes = {
  championList: PropTypes.array
}
