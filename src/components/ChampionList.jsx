import React from 'react';
import PropTypes from 'prop-types';

export default function ChampionList(props){
  return(
    <div>
      <style jsx>{`







      `}</style>
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
  championList = PropTypes.array
}
