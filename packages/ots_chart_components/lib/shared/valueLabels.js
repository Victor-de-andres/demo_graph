import {
    verticalScaleLinear,
    horizontalScaleLinear,
    horizontalScaleBand,
} from './../shared/scales';

const showLabel = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleLinear(
        data.numItems - 1,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    d3Container
        .selectAll('.value-label')
        .data(data.data)
        .enter()
        .append('text')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .attr('x', (d, i) => {
            const valueXScale = xScale(i);
            const numCharacters = valueXScale.toString().length;
            const lengthPxText = (data.fontSize / 0.75) * (numCharacters / 2); // Convert point to pixel
            return valueXScale - lengthPxText / 2;
        })
        .attr('dx', 0)
        .attr('y', (d) => yScale(d))
        .attr('dy', -8)
        .style('font-size', `${data.fontSize}px`)
        .style('fill', data.fontColor || data.colors)
        .text((d) => {
            return d;
        });
};

const showLabelBand = (d3Container, height, width, margins, data) => {
    const centerLabel = (bandWidth) => {
        return bandWidth / 2 - (data.fontSize / 12) * 9;
    };

    const xScale = horizontalScaleBand(
        data.seriesLabel,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    d3Container
        .selectAll('.value-label')
        .data(data.seriesData)
        .enter()
        .append('text')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .attr(
            'x',
            (d, i) =>
                xScale(data.seriesLabel[i]) + centerLabel(xScale.bandwidth())
        )
        .attr('dx', 0)
        .attr('y', (d) => yScale(d))
        .attr('dy', -6)
        .style('font-size', `${data.fontSize}px`)
        .style('fill', data.fontColor)
        .text((d) => d);
};

export { showLabel, showLabelBand };
