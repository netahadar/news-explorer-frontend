import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import SigninPopup from "../SigninPopup/SigninPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
import card1Path from "../../images/card1.jpg";
import card2Path from "../../images/card2.jpg";
import card3Path from "../../images/card3.jpg";
import card4Path from "../../images/card4.jpg";
import card5Path from "../../images/card5.jpg";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

function App() {
  //To-DO: make loggedin and cards lists as contexts

  React.useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  function handleScreenResize() {
    if (window.innerWidth > 745) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  const [isMobile, setIsMobile] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(true);

  const [userName, setUserName] = React.useState("Elise");

  const cards = [
    {
      image: `${card1Path}`,
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
    the idea of having a special "sit spot" has stuck with me. This advice, which Louv 
    attributes to nature educator Jon Young, is for both adults and children to find...`,
      source: "TREEHUGGER",
      _id: "1",
    },
    {
      image: `${card2Path}`,
      date: "February 19, 2019",
      title: "Nature makes you better",
      text: `We all know how good nature can make us feel. We have known it for millennia: 
    the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`,
      source: "NATIONAL GEOGRAPHIC",
      _id: "2",
    },
    {
      image: `${card3Path}`,
      date: "October 19, 2020",
      title: "Grand Teton Renews Historic Crest Trail",
      text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
    took place on October 1, 1933, and marked the first step in the realization of a plan 
    whereby the hiker will be...`,
      source: "NATIONAL PARKS TRAVELER",
      _id: "3",
    },
    {
      image: `${card3Path}`,
      date: "October 19, 2020",
      title: "Grand Teton Renews Historic Crest Trail",
      text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
    took place on October 1, 1933, and marked the first step in the realization of a plan 
    whereby the hiker will be...`,
      source: "NATIONAL PARKS TRAVELER",
      _id: "4",
    },
  ];

  const savedCards = [
    {
      image: `${card1Path}`,
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," 
  the idea of having a special "sit spot" has stuck with me. This advice, which Louv 
  attributes to nature educator Jon Young, is for both adults and children to find...`,
      source: "TREEHUGGER",
      keyword: "Nature",
    },
    {
      image: `${card2Path}`,
      date: "February 19, 2019",
      title: "Nature makes you better",
      text: `We all know how good nature can make us feel. We have known it for millennia: 
  the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.`,
      source: "NATIONAL GEOGRAPHIC",
      keyword: "Nature",
    },
    {
      image: `${card4Path}`,
      date: "October 19, 2020",
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      text: `Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation 
      photographers who just completed a project and book they call their love letter to...`,
      source: "NATIONAL GEOGRAPHIC",
      keyword: "Yellowstone",
    },
    {
      image: `${card3Path}`,
      date: "November 4, 2020",
      title: "Grand Teton Renews Historic Crest Trail",
      text: `“The linking together of the Cascade and Death Canyon trails, at their heads, 
  took place on October 1, 1933, and marked the first step in the realization of a plan 
  whereby the hiker will be...`,
      source: "NATIONAL PARKS TRAVELER",
      keyword: "Parks",
    },
    {
      image: `${card5Path}`,
      date: "March 16, 2020",
      title: "Scientists Don't Know Why Polaris Is So Weird",
      text: `Humans have long relied on the starry sky to push into new frontiers, 
      sail to the very edge of the world and find their way back home again. Even animals look to 
      the stars to guide them. `,
      source: "TREEHUGGER",
      keyword: "Photography",
    },
  ];

  return (
    <div className="content">
      <Header isLoggedIn={loggedIn} userName={userName} isMobile={isMobile} />
      <Switch>
        <Route path="/saved-news">
          <SavedNews cards={cards} savedCards={savedCards} userName={userName} />
        </Route>
        <Route path="/">
          <Main isLoggedIn={loggedIn} cards={cards} savedCards={savedCards} />
        </Route>
      </Switch>
      <Footer />
      <SigninPopup />
      <SignupPopup />
      <InfoTooltip isMobile={isMobile} />
      <MobileNavigation isLoggedIn={loggedIn} userName={userName} />
    </div>
  );
}

export default App;
