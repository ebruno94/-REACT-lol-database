import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewChampionForm from './NewChampionForm';
import Error404 from './Error404';
import ChampionList from './ChampionList';

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
        <Route component={<Error404/>} />
      </Switch>
      <Footer/>
    </div>
  );
}
