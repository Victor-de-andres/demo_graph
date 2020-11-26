import React from 'react';

import { OtsAreasChart } from '../packages/ots_chart_components/lib/ots_areas_chart';

export default {
    title: 'IA/Graphs/Areas',
    component: OtsAreasChart,
    decorators: [
        (Story) => (
            <div
                style={{
                    width: '500px',
                    height: '500px',
                    display: 'block',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template = (args) => (
    /* Component container */
    <OtsAreasChart {...args} />
);

export const Areas = Template.bind({});
Areas.args = {
    seriesData: [
        [0, 154, 89, 400, 240],
        [98, 47, 20, 230, 140],
        [75, 89, 29, 130, 160],
    ],
    numberXTicks: 4,
};

export const AreasWithDots = Template.bind({});
AreasWithDots.args = {
    seriesData: [[98, 47, 20, 230, 140]],
    seriesLabel: ['Norte', 'Sur', 'Oeste', 'Este', 'S/C'],
    topMargin: 30,
    yAxis: false,
    gridYAxis: false,
    gridXAxis: false,
    xAxis: true,
    numberXTicks: 4,
    dots: true,
    stroke: 1,
    showValues: true,
};
