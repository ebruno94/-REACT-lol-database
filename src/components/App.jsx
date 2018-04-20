import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function App(){
  let masterChampionList = [
    {}
  ];

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><ChampionList championList={masterChampionList}/>}/>
        <Route path='/newchampion' render={()=><NewChampionForm/>} />
        <Route component={<Error404/>}
      </Switch>
      <Footer/>
    </div>
  );
}
