import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../../src/containers/App';
import { Provider } from 'react-redux';
import { store } from '../../src/state/store';

storiesOf('Welcome', module).add(
  'to Nelson Omuto Github Search Storybook',
  () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
);
