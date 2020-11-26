import React from 'react';

import { OtsBarsChart } from '../packages/ots_chart_components/lib/ots_bars_charts';

export default {
    title: 'IA/Graphs/Bars',
    component: OtsBarsChart,
};

const Template = (args) => (
    /* Component container */
    <div
        style={{
            width: '500px',
            height: '300px',
            display: 'block',
        }}
    >
        <OtsBarsChart {...args} />
    </div>
);

export const Bars = Template.bind({});
Bars.args = {
    seriesData: [74, 154, 89, 400, 240],
    seriesLabel: ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Eco'],
    topMargin: 20,
    fontSize: 10,
};

export const BarsWithOutAxis = Template.bind({});
BarsWithOutAxis.args = {
    seriesData: [74, 154, 89, 400, 240],
    seriesLabel: ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Eco'],
    gridYAxis: false,
    yAxis: false,
    topMargin: 20,
    fontSize: 10,
};
