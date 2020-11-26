import { axisLeft } from 'd3-axis';
import { verticalScaleLinear } from './scales';

const drawYAxis = (...params) => {
    const [d3Container, height, maxValue, margins, numberYTicks] = [...params];
    d3Container
        .append('g')
        .attr('id', 'verticalTicks')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .style('color', 'var(--neutral5)')
        .call(
            axisLeft(
                verticalScaleLinear(
                    height - margins.top - margins.bottom,
                    maxValue
                )
            ).ticks(numberYTicks)
        );
};

const drawGridYAxis = (...params) => {
    const [d3Container, height, width, maxValue, margins, numberYTicks] = [
        ...params,
    ];
    d3Container
        .append('g')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .style('color', 'var(--neutral2)')
        .call(
            axisLeft(
                verticalScaleLinear(
                    height - margins.top - margins.bottom,
                    maxValue
                )
            )
                .tickFormat('')
                .tickSize(-width + margins.left + margins.right)
                .ticks(numberYTicks)
        );
};

export { drawYAxis, drawGridYAxis };
