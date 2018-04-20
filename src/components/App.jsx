import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewChampionForm from './NewChampionForm';
import Error404 from './Error404';
import ChampionList from './ChampionList';
import {bg} from '../assets/images/bg.png';


export default function App(){

  function importAll(r){
    let images = {};
    r.keys().map((item) => { images[item.replace('../', '')] = r(item); });
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
    },
    {
      image: images['./Evelynn.png'],
      name: 'Evelynn, Agony\'s Embrace',
      role: 'Assassin'
    },
    {
      image: images['./AurelionSol.png'],
      name: 'Aurelion Sol, the Star Forger',
      role: 'Mage'
    },
    {
      image: images['./Illaoi.png'],
      name: 'Illaoi, the Kraken Priestess',
      role: 'Fighter'
    }
  ];

  return(
    <div>
      <style jsx global>{`
          html{
            padding: 100px;
            background-image: url(${bg});
          }

          body{
            font-family: monospace;
            border: 2px solid black;
            padding: 50px;
            box-shadow: 0px 0px 15px black;
            background: white;
          }


      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' render={()=><ChampionList championList={masterChampionList}/>}/>
        <Route path='/newchampion' render={()=><NewChampionForm/>} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </div>
  );
}
