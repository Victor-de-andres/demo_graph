import { verticalScaleLinear, horizontalScaleLinear } from './../shared/scales';
import {
    line,
    curveLinear,
    curveMonotoneX,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape';

const drawLine = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleLinear(
        data.numItems - 1,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    let typeCurve;
    switch (data.type) {
        case 'curveLinear':
            typeCurve = curveLinear;
            break;
        case 'curveMonotoneX':
            typeCurve = curveMonotoneX;
            break;
        case 'curveNatural':
            typeCurve = curveNatural;
            break;
        case 'curveStep':
            typeCurve = curveStep;
            break;
        case 'curveStepAfter':
            typeCurve = curveStepAfter;
            break;
        case 'curveStepBefore':
            typeCurve = curveStepBefore;
            break;
        default:
            typeCurve = curveLinear;
            break;
    }

    const graphLine = line()
        .x((d, i) => xScale(i))
        .y((d) => yScale(d))
        .curve(typeCurve);

    d3Container
        .append('path')
        .attr('transform', `translate(${margins.left}, ${margins.top})`)
        .datum(data.data)
        .style('stroke', data.colors)
        .style('stroke-width', data.stroke)
        .style('fill', 'none')
        .attr('d', graphLine);
};

export { drawLine };
