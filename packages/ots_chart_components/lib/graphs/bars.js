import { verticalScaleLinear, horizontalScaleBand } from './../shared/scales';

const drawBars = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleBand(
        data.seriesLabel,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    d3Container
        .selectAll('.bar')
        .data(data.seriesData)
        .enter()
        .append('rect')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .attr('x', (d, i) => xScale(data.seriesLabel[i]) + 4)
        .attr('y', (d) => yScale(d))
        .attr(
            'height',
            (d) => height - margins.top - margins.bottom - yScale(d)
        )
        .attr('width', (d) => xScale.bandwidth() - 4)
        .style('fill', (d, i) => data.colors[i]);
};

export { drawBars };
