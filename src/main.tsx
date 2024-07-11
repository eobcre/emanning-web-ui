import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <QueryClientProvider client={queryClient}>
      <App />
       {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
