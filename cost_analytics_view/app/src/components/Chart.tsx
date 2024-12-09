import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import CostApiClient, {FilmExpense, StarshipExpense} from "../client/cost-api-client.ts";

const hardCodedTestData: any[] = [
    {
        "film": "AD",
        "hot dog": 140,
        "burger": 44,
        "sandwich": 181,
        "kebab": 66,
        "fries": 138,
        "donut": 34,
    },
    {
        "film": "AE",
        "hot dog": 36,
        "burger": 44,
        "sandwich": 7,
        "kebab": 77,
        "fries": 54,
        "donut": 163,
    },
    {
        "film": "AF",
        "hot dog": 60,
        "burger": 88,
        "sandwich": 144,
        "kebab": 128,
        "fries": 77,
        "donut": 55,
    },
    {
        "film": "AG",
        "hot dog": 93,
        "burger": 48,
        "sandwich": 23,
        "kebab": 168,
        "fries": 7,
        "donut": 115,
    },
    {
        "film": "AI",
        "hot dog": 89,
        "burger": 112,
        "sandwich": 92,
        "kebab": 104,
        "fries": 159,
        "donut": 78,
    },
    {
        "film": "AL",
        "hot dog": 83,
        "burger": 119,
        "sandwich": 92,
        "kebab": 105,
        "fries": 146,
        "donut": 164,
    },
    {
        "film": "AM",
        "hot dog": 37,
        "burger": 92,
        "sandwich": 68,
        "kebab": 23,
        "fries": 16,
        "donut": 169,
    }
];

const Chart = (apiData: FilmExpense[]) => {
    console.log(apiData);
    const data: any[] = [];
    const shipNames: Set<string> = new Set<string>();
    if (apiData) {
        apiData.forEach((expense) => {
            const filmData: any = {
                film: expense.film
            };
            let totalCost = 0;
            expense.starships.forEach((starship: StarshipExpense) => {
                const cost = parseInt(starship.cost);
                if (!isNaN(cost)) {
                    totalCost += cost;
                    shipNames.add(starship.name);
                }
            });
            filmData['cost'] = totalCost
            data.push(filmData);
        });
    }
    const BarChart = (data: any[], keys: string[]) => {
        console.log(data);
        return (<ResponsiveBar
            data={data}
            keys={['cost']}
            indexBy="film"
            margin={{top: 50, right: 130, bottom: 100, left: 150}}
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
            axisBottom={{
                tickSize: 10,
                tickPadding: 5,
                tickRotation: -90,
                legend: 'cost',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 5,
                format: '>-g'
            }}
            groupMode={"grouped"}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -40,
                legend: 'film',
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
            layout={"horizontal"}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 75,
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
        { BarChart(data, Array.from(shipNames)) }
    </div>);
}

export default Chart;