import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(AppRouter);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./AppRouter', () => render(require('./AppRouter').default));