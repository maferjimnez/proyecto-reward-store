import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/components/Header';
import Store from './pages/Store';
import Purchases from './pages/Purchases';
import GetCoins from './pages/GetCoins';
import { UserProvider } from './components/Context/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
        <GlobalStyles/>
        <Router>
          <Header />
          {/* <Switch> */}
            <Route path="/" component={Store} exact/>
            <Route path="/store" component={Store}/>
            <Route path="/purchases" component={Purchases}/>
            <Route path="/getcoins" component={GetCoins}/>
          {/* </Switch> */}
        </Router>
    </UserProvider>
  );
}; 

export default App;