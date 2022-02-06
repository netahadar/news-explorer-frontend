import React from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { LoggedInContext } from "../../context/LoggdInContext";
import newsApi from "../../utils/NewsApi";
import * as auth from "../../utils/auth";
import mainApi from "../../utils/MainApi";

function App() {
  const [isMobile, setIsMobile] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    _id: "",
  });
  const [token, setToken] = React.useState(localStorage.getItem("jwt"));
  const [cardIndex, setCardIndex] = React.useState(3); // index for use in slice method in search results block
  const [isShowMoreActive, setIsShowMoreActive] = React.useState(true);

  //Login / register errors states
  const [resError, setResError] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  //Popups open/close states
  const [isTootipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

  //Cards states
  const [cards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [cardKeyword, setCardKeyword] = React.useState("");

  //Sections appearance states
  const [isNewsOpen, setIsNewsOpen] = React.useState(false);
  const [isPreloaderOpen, setIsPreloaderOpen] = React.useState(false);
  const [isErrorMessageOpen, setIsErrorMessageOpen] = React.useState(false);

  const history = useHistory();

  //Event listener for screen resize
  React.useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  //Check for screen size on mounting
  React.useEffect(() => {
    handleScreenResize();
  }, []);

  //Close popups via Escape key
  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        closeAllPopups();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  //Close popup by clicking the area outside its borders
  React.useEffect(() => {
    const closeByClickOutside = (e) => {
      if (e.target.classList.contains("popup")) {
        closeAllPopups();
      }
    };

    document.addEventListener("click", closeByClickOutside);

    return () => document.removeEventListener("keydown", closeByClickOutside);
  }, []);

  //Show recent search results
  React.useEffect(() => {
    const recoveredCards = localStorage.getItem("cards");

    if (recoveredCards) {
      setCards(JSON.parse(recoveredCards));
      setIsNewsOpen(true);
    }
  }, []);

  //Retrive keyword to allow user keep saving cards after refresh
  React.useEffect(() => {
    if (localStorage.getItem("keyword")) {
      setCardKeyword(localStorage.getItem("keyword"));
    }
  }, []);

  // Update mainApi headers with new token
  React.useEffect(() => {
    mainApi._headers = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  }, [token]);

  // Get user info
  React.useEffect(() => {
    if (token) {
      mainApi.getUserInfo().then((res) => {
        if (res) {
          setCurrentUser({
            name: res.name,
            _id: res._id,
          });
          setLoggedIn(true); //keep the user logged in
        }
      });
    }
  }, [token]);

  //Get saved cards from server
  React.useEffect(() => {
    if (token) {
      mainApi
        .getSavedCards()
        .then((res) => {
          setSavedCards(res);
        })
        .catch(console.log);
    }
  }, [token]);

  function handleScreenResize() {
    if (window.innerWidth > 745) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }

  function handleSignInClick() {
    closeAllPopups();
    setIsSignInPopupOpen(true);
  }

  function handleSignUpClick() {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  }

  function handleRegister(values, resetForm) {
    auth
      .register(values)
      .then(() => {
        resetForm();
        setIsSignUpPopupOpen(false);
        setIsTooltipPopupOpen(true);
      })
      .catch((err) => {
        setResError(err.message);
        setIsError(true);
      });
  }

  function handleLogin(values, resetForm) {
    auth
      .authorize(values)
      .then((res) => {
        setToken(res);
        setLoggedIn(true);
        resetForm();
        history.push("/");
        closeAllPopups();
      })
      .catch((err) => {
        setResError(err.message);
        setIsError(true);
      });
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function handleMenuClick() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsTooltipPopupOpen(false);
    setIsError(false); //Hide error message when mooving between Login and Register popups
  }

  function handleSearch(keyword) {
    setCardKeyword(keyword); //Save keyword for use in handleSaveCard
    setIsNewsOpen(false); //Close results block between searches
    setIsPreloaderOpen(true);
    newsApi
      .getArticles(keyword) //Get articles from news API
      .then((res) => {
        setCards(res.articles);
        if (res.articles.length !== 0) {
          localStorage.setItem("cards", JSON.stringify(res.articles)); //save cards in local storage for next mounting
        } else {
          localStorage.removeItem("cards"); //If no articles found- clear local storage
        }
        setIsPreloaderOpen(false);
        setIsNewsOpen(true);
      })
      .catch((err) => {
        setIsPreloaderOpen(false);
        setIsErrorMessageOpen(true); //Show error message block
        localStorage.removeItem("cards");
        console.log(err);
      });
  }

  function handleShowMoreClick() {
    if (cards.length - cardIndex <= 3) {
      setIsShowMoreActive(false);
      setCardIndex(cards.length);
    } else {
      setCardIndex(cardIndex + 3);
    }
  }

  function handleCardButtonClick(card, isSaved) {
    loggedIn
      ? mainApi //If user is logged in- send api request
          .changeCardSaveStatus(card, isSaved, cardKeyword)
          .then((res) => {
            if (!res.message) {
              const savedCard = {
                _id: res._id,
                description: res.text,
                publishedAt: res.date,
                source: { name: res.source },
                title: res.title,
                urlToImage: res.image,
                keyword: res.keyword,
                link: res.link,
              };
              setSavedCards([...savedCards, savedCard]);
            } else {
              setSavedCards((cardsList) =>
                cardsList.filter((item) => item._id !== card._id)
              );
            }
          })
          .catch(console.log)
      : setIsSignInPopupOpen(true); //Else - open login popup
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        <div className="content">
          <Header
            isMobile={isMobile}
            onSignInClick={handleSignInClick}
            onMenuClick={handleMenuClick}
            onClose={closeAllPopups}
            isNavOpen={isMenuPopupOpen}
            onLogOut={handleLogOut}
          />
          <Switch>
            <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
              <SavedNews
                cards={cards}
                savedCards={savedCards}
                onCardButtonClick={handleCardButtonClick}
              />
            </ProtectedRoute>
            <Route path="/">
              <Main
                cards={cards}
                savedCards={savedCards}
                onSearch={handleSearch}
                isNewsOpen={isNewsOpen}
                isPreloaderOpen={isPreloaderOpen}
                isErrorMessageOpen={isErrorMessageOpen}
                isShowMoreActive={isShowMoreActive}
                cardIndex={cardIndex}
                onShowMoreClick={handleShowMoreClick}
                onCardButtonClick={handleCardButtonClick}
              />
            </Route>
          </Switch>
          <Footer />
          <Login
            isOpen={isSignInPopupOpen}
            onClose={closeAllPopups}
            onSignUpClick={handleSignUpClick}
            onSubmit={handleLogin}
            isError={isError}
            resError={resError}
          />
          <Register
            isOpen={isSignUpPopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleRegister}
            onSignInClick={handleSignInClick}
            isError={isError}
            resError={resError}
          />
          <InfoTooltip
            isOpen={isTootipPopupOpen}
            onClose={closeAllPopups}
            isMobile={isMobile}
            onSignInClick={handleSignInClick}
          />
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
