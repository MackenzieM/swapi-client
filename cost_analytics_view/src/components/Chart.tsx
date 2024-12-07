import React from "react";
import { ResponsiveBar } from '@nivo/bar'

const hardCodedTestData: any[] = [
    {
        "country": "AD",
        "hot dog": 140,
        "hot dogColor": "hsl(261, 70%, 50%)",
        "burger": 44,
        "burgerColor": "hsl(168, 70%, 50%)",
        "sandwich": 181,
        "sandwichColor": "hsl(212, 70%, 50%)",
        "kebab": 66,
        "kebabColor": "hsl(275, 70%, 50%)",
        "fries": 138,
        "friesColor": "hsl(75, 70%, 50%)",
        "donut": 34,
        "donutColor": "hsl(50, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 36,
        "hot dogColor": "hsl(109, 70%, 50%)",
        "burger": 44,
        "burgerColor": "hsl(37, 70%, 50%)",
        "sandwich": 7,
        "sandwichColor": "hsl(268, 70%, 50%)",
        "kebab": 77,
        "kebabColor": "hsl(16, 70%, 50%)",
        "fries": 54,
        "friesColor": "hsl(200, 70%, 50%)",
        "donut": 163,
        "donutColor": "hsl(141, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 60,
        "hot dogColor": "hsl(173, 70%, 50%)",
        "burger": 88,
        "burgerColor": "hsl(41, 70%, 50%)",
        "sandwich": 144,
        "sandwichColor": "hsl(168, 70%, 50%)",
        "kebab": 128,
        "kebabColor": "hsl(49, 70%, 50%)",
        "fries": 77,
        "friesColor": "hsl(294, 70%, 50%)",
        "donut": 55,
        "donutColor": "hsl(90, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 93,
        "hot dogColor": "hsl(322, 70%, 50%)",
        "burger": 48,
        "burgerColor": "hsl(140, 70%, 50%)",
        "sandwich": 23,
        "sandwichColor": "hsl(94, 70%, 50%)",
        "kebab": 168,
        "kebabColor": "hsl(201, 70%, 50%)",
        "fries": 7,
        "friesColor": "hsl(72, 70%, 50%)",
        "donut": 115,
        "donutColor": "hsl(110, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 89,
        "hot dogColor": "hsl(246, 70%, 50%)",
        "burger": 112,
        "burgerColor": "hsl(233, 70%, 50%)",
        "sandwich": 92,
        "sandwichColor": "hsl(113, 70%, 50%)",
        "kebab": 104,
        "kebabColor": "hsl(67, 70%, 50%)",
        "fries": 159,
        "friesColor": "hsl(47, 70%, 50%)",
        "donut": 78,
        "donutColor": "hsl(6, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 83,
        "hot dogColor": "hsl(56, 70%, 50%)",
        "burger": 119,
        "burgerColor": "hsl(305, 70%, 50%)",
        "sandwich": 92,
        "sandwichColor": "hsl(227, 70%, 50%)",
        "kebab": 105,
        "kebabColor": "hsl(353, 70%, 50%)",
        "fries": 146,
        "friesColor": "hsl(1, 70%, 50%)",
        "donut": 164,
        "donutColor": "hsl(199, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 37,
        "hot dogColor": "hsl(292, 70%, 50%)",
        "burger": 92,
        "burgerColor": "hsl(255, 70%, 50%)",
        "sandwich": 68,
        "sandwichColor": "hsl(316, 70%, 50%)",
        "kebab": 23,
        "kebabColor": "hsl(72, 70%, 50%)",
        "fries": 16,
        "friesColor": "hsl(81, 70%, 50%)",
        "donut": 169,
        "donutColor": "hsl(29, 70%, 50%)"
    }
];

const Chart = () => {
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
            indexBy="country"
            margin={{top: 50, right: 130, bottom: 50, left: 60}}
            padding={0.3}
            valueScale={{type: 'linear'}}
            indexScale={{type: 'band', round: true}}
            colors={{scheme: 'nivo'}}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
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
                legend: 'country',
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
            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
        ></ResponsiveBar></>;
        console.log(responsiveBar);
        return responsiveBar;
    }
    return (<div className={"chartWrapper"}>
        { BarChart(hardCodedTestData) }
    </div>);
}

export default Chart;