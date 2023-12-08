/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
  import('./devtools/ReactronConfig');
}

import React from 'react';
import {Routes, ThemeProvider} from 'shared';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
