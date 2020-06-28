import React, { useCallback } from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn/Index';
// import SignUp from './pages/SignUp/Index';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      {/* <SignUp /> */}
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
