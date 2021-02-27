import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/components/Header';
import Store from './pages/Store';
import Purchases from './pages/Purchases';
import GetCoins from './pages/GetCoins';
import { UserProvider } from './components/Context/UserContext';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <UserProvider>
        <GlobalStyles/>
          <Header />
          <Switch>
            <Route exact path="/" component={Store} exact/>
            <Route path="/purchases" component={Purchases}/>
            <Route path="/getcoins" component={GetCoins}/>
          </Switch>
    </UserProvider>
    </Router>
  );
}; 

export default App;