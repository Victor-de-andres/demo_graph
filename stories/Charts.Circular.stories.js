import React from 'react';

import { OtsCircularChart } from '../packages/ots_chart_components/lib/ots_circular_chart';

export default {
    title: 'IA/Graphs/Circular',
    component: OtsCircularChart,
};

const Template = (args) => (
    /* Component container */
    <div
        style={{
            width: '500px',
            height: '250px',
            display: 'block',
        }}
    >
        <OtsCircularChart {...args} />
    </div>
);

export const Pie = Template.bind({});
Pie.args = {
    seriesData: [0, 154, 89, 400, 240],
};

export const Donut = Template.bind({});
Donut.args = {
    seriesData: [0, 154, 89, 400, 240],
    internalRadius: 80,
};
