import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewChampionForm from './NewChampionForm';
import Error404 from './Error404';
import ChampionList from './ChampionList';


export default function App(){

  function importAll(r){
    let images = {}
    r.keys().map((item, index) => { images[item.replace('../', '')] = r(item); });
    return images;
  }
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

  let masterChampionList = [
    {
      image: images['./Irelia.png'],
      name: 'Irelia, the Blade Dancer',
      role: 'Fighter'
    },
    {
      image: images['./Kaisa.png'],
      name: 'Kaisa, Daughter of the Void',
      role: 'Marksman'
    },
    {
      image: images['./Ryze.png'],
      name: 'Ryze, the Rune Mage',
      role: 'Mage'
    },
    {
      image: images['./Talon.png'],
      name: 'Talon, the Blade\'s Shadow',
      role: 'Assassin'
    },
    {
      image: images['./Yasuo.png'],
      name: 'Yasuo, the Unforgiven',
      role: 'Figher'
    }
  ];

  return(
    <div>
      <style jsx global>{`
          html{
            padding: 100px;
          }

          body{
            font-family: monospace;
            border: 2px solid black;
            padding: 50px;
          }


      `}</style>
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
