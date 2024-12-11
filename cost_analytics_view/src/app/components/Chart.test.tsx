import { render, screen } from '@testing-library/react';
import * as React from "react";
import Chart, {formatChartData, sortDataByMode} from "./Chart"
import {FilmExpense} from "../client/cost-api-client.ts";

describe("chart", () => {
   test("renders without error when empty array in data", () => {
       render(Chart([], "episode_id"));

       const chart = screen.getByRole("application");
       expect(chart).toBeInTheDocument();
   });

    test("renders without error when data provided", () => {
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
        render(Chart(mockedData, "episode_id"));

        const chart = screen.getByRole("application");
        expect(chart).toBeInTheDocument();
    });

    describe('sortDataByMode', () => {
        const mockedData: FilmExpense[] = [
            {
                film: {
                    name: "movie 1",
                    episode_id: 5,
                    release_date: "2000-01-01"
                },
                starships: [
                    {
                        name: "george",
                        cost: "1000"
                    }
                ]
            },
            {
                film: {
                    name: "movie 2",
                    episode_id: 1,
                    release_date: "2010-01-01"
                },
                starships: [
                    {
                        name: "lucas",
                        cost: "5000"
                    }
                ]
            }
        ];
        test("sorts by episode id", () => {
            sortDataByMode(mockedData, "episode_id");

            expect(mockedData[0].film.name).toEqual("movie 2");
        });

        test("sorts by release date", () => {
            sortDataByMode(mockedData, "release_date");

            expect(mockedData[0].film.name).toEqual("movie 1");
        });
    });

    describe('formatChartData', () => {
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
                    },
                    {
                        name: "lucas",
                        cost: "5000"
                    }
                ]
            },
            {
                film: {
                    name: "movie 2",
                    episode_id: 1,
                    release_date: "2010-01-01"
                },
                starships: [
                    {
                        name: "lucas",
                        cost: "5000"
                    }
                ]
            }
        ];

        test('calculates the correct total cost for a film', () => {
            const actual = formatChartData(mockedData);
            expect(actual[0].cost).toEqual(6000);
            expect(actual.length).toEqual(mockedData.length);
        });

        test('gracefully skips unknown costs', () => {
            mockedData[0].starships[0].cost = "unknown";
            const actual = formatChartData(mockedData);
            expect(actual[0].cost).toEqual(5000);
            expect(actual.length).toEqual(mockedData.length);
        });
    });
});