import { verticalScaleLinear, horizontalScaleLinear } from './../shared/scales';

const drawDots = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleLinear(
        data.numItems - 1,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    d3Container
        .selectAll('.dot')
        .data(data.data)
        .enter()
        .append('circle')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .attr('fill', data.colors)
        .attr('cx', (d, i) => xScale(i))
        .attr('cy', (d) => yScale(d))
        .attr('r', data.stroke * 4);
};

export { drawDots };
