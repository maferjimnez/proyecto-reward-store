import React from 'react';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header/components/Header';
import Hero from './components/Hero/components/Hero';
import Main from './components/Main/components/Main';

function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <Hero />
      <Main />
    </>
  );
}

export default App;
