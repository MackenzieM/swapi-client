import { render, screen } from '@testing-library/react';
import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App.tsx";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
