import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux and persist
import { Provider } from 'react-redux'
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

// react-querry
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()



ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>,
  document.getElementById('root')
);
