import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNews from '../SavedNews/SavedNews';
import card1Path from "../../images/card1.jpg";
import card2Path from "../../images/card2.jpg";
import card3Path from "../../images/card3.jpg";

function App() {

  //To-DO: make loggedin and cards lists as contexts

  const [loggedIn, setLoggedIn] = React.useState(true);

  const [userName, setUserName] = React.useState('Elise');

  const cards = [
    {image: `${card1Path}`, 
    date: "November 4, 2020", 
    title: "Everyone Needs a Special 'Sit Spot' in Nature", 
    text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
    the idea of having a special "sit spot" has stuck with me. This advice, which Louv 
    attributes to nature educator Jon Young, is for both adults and children to find...`, 
    source: "TREEHUGGER"}, 
    {image: `${card2Path}`, 
    date: "February 19, 2019", 
    title: "Nature makes you better", 
    text: `We all know how good nature can make us feel. We have known it for millennia: 
    the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`, 
    source: "NATIONAL GEOGRAPHIC"}, 
    {image: `${card3Path}`, 
    date: "October 19, 2020", 
    title: "Grand Teton Renews Historic Crest Trail", 
    text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
    took place on October 1, 1933, and marked the first step in the realization of a plan 
    whereby the hiker will be...`, 
    source: "NATIONAL PARKS TRAVELER"},
    {image: `${card3Path}`, 
    date: "October 19, 2020", 
    title: "Grand Teton Renews Historic Crest Trail", 
    text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
    took place on October 1, 1933, and marked the first step in the realization of a plan 
    whereby the hiker will be...`, 
    source: "NATIONAL PARKS TRAVELER"},
]

const savedCards = [
  {image: `${card1Path}`, 
  date: "November 4, 2020", 
  title: "Everyone Needs a Special 'Sit Spot' in Nature", 
  text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
  the idea of having a special "sit spot" has stuck with me. This advice, which Louv 
  attributes to nature educator Jon Young, is for both adults and children to find...`, 
  source: "TREEHUGGER"}, 
  {image: `${card2Path}`, 
  date: "February 19, 2019", 
  title: "Nature makes you better", 
  text: `We all know how good nature can make us feel. We have known it for millennia: 
  the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`, 
  source: "NATIONAL GEOGRAPHIC"}, 
  {image: `${card3Path}`, 
  date: "October 19, 2020", 
  title: "Grand Teton Renews Historic Crest Trail", 
  text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
  took place on October 1, 1933, and marked the first step in the realization of a plan 
  whereby the hiker will be...`, 
  source: "NATIONAL PARKS TRAVELER"},
  {image: `${card3Path}`, 
  date: "October 19, 2020", 
  title: "Grand Teton Renews Historic Crest Trail", 
  text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
  took place on October 1, 1933, and marked the first step in the realization of a plan 
  whereby the hiker will be...`, 
  source: "NATIONAL PARKS TRAVELER"},
  {image: `${card3Path}`, 
  date: "October 19, 2020", 
  title: "Grand Teton Renews Historic Crest Trail", 
  text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
  took place on October 1, 1933, and marked the first step in the realization of a plan 
  whereby the hiker will be...`, 
  source: "NATIONAL PARKS TRAVELER"}
]

  return (
    <div className="content">
      <Header isLoggedIn={loggedIn} userName={userName}/>
      {/* <Main isLoggedIn={loggedIn}/> cards={cards} savedCards={savedCards} */}
      <SavedNews cards={cards} savedCards={savedCards} />        
      <Footer />
    </div>
  );
}

export default App;
