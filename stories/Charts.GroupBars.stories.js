import React from 'react';

import { OtsGroupBarsChart } from '../packages/ots_chart_components/lib/ots_groupbars_charts';

export default {
    title: 'IA/Graphs/Group_Bars',
    component: OtsGroupBarsChart,
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
        <OtsGroupBarsChart {...args} />
    </div>
);

export const Group_Bars = Template.bind({});
Group_Bars.args = {
    seriesData: [
        [152, 154, 89, 400, 240],
        [98, 47, 20, 230, 140],
        [75, 89, 29, 130, 160],
    ],
    seriesLabel: ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Eco'],
    topMargin: 20,
};
