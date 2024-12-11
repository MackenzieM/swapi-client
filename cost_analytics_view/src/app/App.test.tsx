import { render, screen } from '@testing-library/react';
import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App.tsx";
import { FilmExpense } from "./client/cost-api-client.ts";

describe("without data state", () => {
  test('renders static page', () => {
    render(<App/>);
    const header = screen.getByText(/Galactic Spending Report/i);
    expect(header).toBeInTheDocument();
  });

  test('renders loading indicator', () => {
    render(<App/>)

    const progressIndicator = screen.getByRole("progressbar");
    expect(progressIndicator).toBeInTheDocument();
  });
});

describe("mocked data successfully response", () => {
  let fetchMock: any = undefined;
  const mockedData: FilmExpense[] = [
    {
      film: {
        name: "movie 1",
        episode_id: 1,
        release_date: "2000-01-01"
      },
      starships: [
        {
          name: "george",
          cost: "1000"
        }
      ]
    }
  ];

  beforeEach(() => {
    fetchMock = jest.spyOn(global, "fetch")
        .mockImplementation(() => Promise.resolve({
          ok: true,
          status: 200,
          json: async () => mockedData
        } as Response));

  });
  test('renders chart when data provided', () => {
    render(<App/>)

    const chronologyToggler = screen.getByText(/Toggle Chronology/i);
    expect(chronologyToggler).toBeInTheDocument();
    const chart = screen.getByRole("application");
    expect(chart).toBeInTheDocument();
  });
});
