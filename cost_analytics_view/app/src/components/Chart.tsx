import React from "react";
import { ResponsiveBar } from '@nivo/bar'
import { FilmExpense, StarshipExpense } from "../client/cost-api-client.ts";

const Chart = (apiData: FilmExpense[]) => {
    const data: any[] = [];
    // const shipNames: Set<string> = new Set<string>();
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
                    // shipNames.add(starship.name);
                }
            });
            filmData['cost'] = totalCost
            data.push(filmData);
        });
    }
    const BarChart = (data: any[]) => {
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
        { BarChart(data) }
    </div>);
}

export default Chart;