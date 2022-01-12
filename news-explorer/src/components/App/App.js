import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(true);

  const [userName, setUserName] = React.useState('Elise');

  return (
    <div className="content">
      <Header isLoggedIn={loggedIn} userName={userName}/>
      <Main />        
      {/* <Footer /> */}
    </div>
  );
}

export default App;
