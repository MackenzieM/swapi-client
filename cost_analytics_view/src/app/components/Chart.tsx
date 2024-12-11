import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import { FilmExpense, StarshipExpense } from "../client/cost-api-client.ts";

export const sortDataByMode = (apiData: FilmExpense[], sortMode: string) => {
    apiData.sort((a, b) => {
        switch (sortMode) {
            case "episode_id":
                return a.film[sortMode] - b.film[sortMode];
            case "release_date":
                return Date.parse(a.film[sortMode]) - Date.parse(b.film[sortMode]);
        }
        return 0;
    });
};

export const formatChartData = (apiData: FilmExpense[]): any[] => {
    return apiData.map((expense) => {
        const filmData: any = {
            film: expense.film
        };
        let totalCost = 0;
        expense.starships.forEach((starship: StarshipExpense) => {
            const cost = parseInt(starship.cost);
            if (!isNaN(cost)) {
                totalCost += cost;
                // shipNames.add(starship.name);
            }
        });
        filmData.cost = totalCost
        return filmData;
    });
};

const Chart = (apiData: FilmExpense[], sortMode: string) => {
    let data: any[] = [];
    // const shipNames: Set<string> = new Set<string>();
    if (apiData) {
        sortDataByMode(apiData, sortMode);
        data = formatChartData(apiData);
    }
    const BarChart = (data: any[]) => {
        return (<ResponsiveBar
            data={data}
            keys={['cost']}
            indexBy={(exp) => exp.film.name}
            margin={{top: 50, right: 80, bottom: 150, left: 80}}
            valueScale={{type: 'symlog'}}
            valueFormat={'>-e'}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'dark2'}}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                tickSize: 10,
                tickPadding: 5,
                tickRotation: -0,
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 5,
                format: '>-g'
            }}
            groupMode={"grouped"}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -40,
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            labelSkipWidth={20}
            labelSkipHeight={12}
            labelPosition={"middle"}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.8
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 100,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in film: " + e.indexValue}
        ></ResponsiveBar>);
    }
    return (<div className={"chartWrapper"}>
        { BarChart(data) }
    </div>);
}

export default Chart;