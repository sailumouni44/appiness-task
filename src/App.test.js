import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

test('renders App component lables', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/email/i)).toBeInTheDocument();
  expect(getByText(/password/i)).toBeInTheDocument();
  expect(getByText(/submit/i)).toBeInTheDocument();
});