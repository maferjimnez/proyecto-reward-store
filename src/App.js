import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/components/Header';
import Hero from './components/Hero/components/Hero';
import Main from './components/Main/components/Main';
import { UserProvider } from './components/Context/UserContext';

function App() {
  return (
    <UserProvider>
      <GlobalStyles/>
      <Header />
      <Hero />
      <Main />
    </UserProvider>
  );
}

export default App;
