import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../../app/store';
import Dashboard from './index';

test('renders Dashboard component lables', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  expect(getByText(/Name/i)).toBeInTheDocument();
  expect(getByText(/Age/i)).toBeInTheDocument();
  expect(getByText(/Gender/i)).toBeInTheDocument();
  expect(getByText(/Email/i)).toBeInTheDocument();
  expect(getByText(/Phone No./i)).toBeInTheDocument();
});
