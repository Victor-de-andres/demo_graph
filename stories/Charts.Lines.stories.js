import React from 'react';

import { OtsLinesChart } from '../packages/ots_chart_components/lib/ots_lines_chart';

export default {
    title: 'IA/Graphs/Lines',
    component: OtsLinesChart,
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
        <OtsLinesChart {...args} />
    </div>
);

export const Lines = Template.bind({});
Lines.args = {
    seriesData: [
        [0, 154, 89, 400, 240],
        [98, 47, 20, 230, 140],
        [75, 89, 29, 130, 160],
    ],
    seriesLabel: ['Norte', 'Sur', 'Oeste', 'Este', 'S/C'],
    maxValueYGrid: 500,
    numberXTicks: 5,
};

export const LinesWithDots = Template.bind({});
LinesWithDots.args = {
    seriesData: [
        [0, 154, 89, 400, 240, 189],
        [98, 47, 20, 230, 140],
        [75, 89, 29, 130, 160],
    ],
    topMargin: 20,
    numberXTicks: 4,
    dots: true,
    showValues: true,
    stroke: 1,
};

export const CurveLine = Template.bind({});
CurveLine.args = {
    seriesData: [
        [187, 154, 89, 400, 189],
        [98, 47, 20, 230, 140],
        [75, 89, 29, 130, 160],
    ],
    type: 'curveNatural',
    yAxis: false,
    gridYAxis: false,
    xAxis: false,
    gridXAxis: false,
};
