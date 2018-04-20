import React from 'react';
import PropTypes from 'prop-types';
import Champion from './Champion';
import {v4} from 'uuid';

export default function ChampionList(props){
  return(
    <div>
      <style jsx>{`
        .container{
          display: grid;
          grid-template-columns: auto auto auto auto;
          padding: 10px;
        }

        .box{
          border: 1px solid black;
          padding: 10px;
          margin: 10px;
          text-align: center;
          box-shadow: 0px 0px 15px black;
        }


        .title{
          text-align:center;
        }



      `}</style>
      <h1 className="title">Here are some of the many champions in the League!</h1>
      <hr/>
      <div className='container'>
        {props.championList.map((champ)=>
          <div className='box'>
            <Champion
              image = {champ.image}
              name = {champ.name}
              role = {champ.role}
              key = {v4()} />
          </div>
        )}
      </div>
    </div>
  );
}

ChampionList.propTypes = {
  championList: PropTypes.array
};
