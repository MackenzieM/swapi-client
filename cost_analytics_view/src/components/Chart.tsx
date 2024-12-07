import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import CostApiClient, {CostApiResponse, StarshipExpense} from "../client/cost-api-client.ts";

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

const Chart = (apiData: CostApiResponse) => {
    const data: any[] = [];
    if (apiData && apiData.starships) {
        const filmData: any = {
            film: apiData.film
        };
        apiData.starships.forEach((starship: StarshipExpense) => {
           filmData[starship.name] = starship.cost
        });
    }

    const BarChart = (data: any[]) => {
        console.log(data);
        const responsiveBar = <><ResponsiveBar
            data={data}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="film"
            margin={{top: 50, right: 130, bottom: 50, left: 60}}
            padding={0.3}
            valueScale={{type: 'linear'}}
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
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'film',
                legendPosition: 'middle',
                legendOffset: 32,
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40,
                truncateTickAt: 0
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
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
        ></ResponsiveBar></>;
        console.log(responsiveBar);
        return responsiveBar;
    }
    return (<div className={"chartWrapper"}>
        { BarChart(data) }
    </div>);
}

export default Chart;