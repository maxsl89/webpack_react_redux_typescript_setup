import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { App } from './../components/App';

test('renders the correct content', () => {
  // Render a react component to the DOM
  const { getByText, getByLabelText } = render(<App />);

  getByText('React Typescript Todo List');
  getByLabelText('What needs to be done?');
  getByText('Add Task');
});

test('allows users to add items to their list', async () => {
  const { getByText, getByLabelText } = render(<App />);
  const todoText = 'RTL Presentation Slides';
  const input = getByLabelText('What needs to be done?');
  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(getByText('Add Task'));

  await waitFor(() => getByText(todoText));
  await waitFor(() => getByText('Delete'));
});
