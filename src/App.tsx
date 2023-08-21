import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/modules/navigation';
import AppFooter from 'components/elements/AppFooter';
import ContentWrapper from 'components/modules/contentWrapper';
import NewContent from 'components/modules/newContent';

import { AppStyled } from 'App.styled';
import { MainStyled } from 'styles/components/Main.styled';

function App() {
  return (
    <AppStyled>
      <Navigation />
      <MainStyled>
        <Routes>
          <Route path='/' element={<NewContent />} />
          <Route path='/article/:id' element={<ContentWrapper />} />
        </Routes>
        <AppFooter />
      </MainStyled>
    </AppStyled>
  );
}

export default App;
