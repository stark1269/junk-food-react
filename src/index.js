import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from 'redux/store';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    bgc: '#00000070',
    error: '#ef4e13',
    success: '#92dd19',
    current: '#5900a3',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename='/junk-food-react'>
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);