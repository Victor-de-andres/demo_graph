import { axisBottom } from 'd3-axis';
import { horizontalScaleLinear, horizontalScaleBand } from './scales';

const drawXAxis = (...params) => {
    const [
        d3Container,
        height,
        width,
        numItems,
        margins,
        numberXTicks,
        seriesLabel,
    ] = [...params];

    d3Container
        .append('g')
        .attr(
            'transform',
            `translate(${margins.left}, ${height - margins.bottom})`
        )
        .style('color', 'var(--neutral5)')
        .call(
            axisBottom(
                horizontalScaleLinear(
                    numItems - 1,
                    width - margins.left - margins.right
                )
            )
                .ticks(numberXTicks)
                .tickFormat((d, i) => (seriesLabel ? seriesLabel[i] : i))
        );
};

const drawXAxisBand = (...params) => {
    const [d3Container, height, width, label, margins, numberXTicks] = [
        ...params,
    ];
    d3Container
        .append('g')
        .attr(
            'transform',
            `translate(${margins.left}, ${height - margins.bottom})`
        )
        .style('color', 'var(--neutral5)')
        .call(
            axisBottom(
                horizontalScaleBand(label, width - margins.left - margins.right)
            )
                .tickSize(0)
                .tickPadding(5)
        );
};

const drawGridXAxis = (...params) => {
    const [d3Container, height, width, numItems, margins, numberXTicks] = [
        ...params,
    ];
    d3Container
        .append('g')
        .attr(
            'transform',
            `translate(${margins.left}, ${height - margins.bottom})`
        )
        .style('color', 'var(--neutral2)')
        .call(
            axisBottom(
                horizontalScaleLinear(
                    numItems - 1,
                    width - margins.left - margins.right
                )
            )
                .ticks(numberXTicks)
                .tickFormat('')
                .tickSize(-height + margins.top + margins.bottom)
        );
};

export { drawXAxis, drawXAxisBand, drawGridXAxis };
