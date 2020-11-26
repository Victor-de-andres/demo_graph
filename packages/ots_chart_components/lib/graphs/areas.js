import { verticalScaleLinear, horizontalScaleLinear } from '../shared/scales';
import { area } from 'd3-shape';

const drawArea = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleLinear(
        data.numItems - 1,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    const graphArea = area()
        .x((d, i) => xScale(i))
        .y0(yScale(0))
        .y1((d) => yScale(d));

    d3Container
        .append('path')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .datum(data.data)
        .style('stroke', 'none')
        .style('opacity', 0.5)
        .style('stroke-width', data.stroke)
        .style('fill', data.colors)
        .attr('d', graphArea);
};

export { drawArea };
