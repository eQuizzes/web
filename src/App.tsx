import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './hooks/usePersistedState';

import dark from './assets/styles/themes/dark';

import Landing from './pages/Landing';

import DefaultStyles from './assets/styles/default';

function App() {
  const [theme] = usePersistedState<DefaultTheme>('theme', dark);

  return (
    <ThemeProvider theme={theme}>
      <DefaultStyles />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
