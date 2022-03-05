import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@app/core/services/queryClient';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@app/core/config/routes';
import { CountProvider, useCount } from '@app/core/context/Count';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <CountProvider> */}
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      {/* </CountProvider> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
