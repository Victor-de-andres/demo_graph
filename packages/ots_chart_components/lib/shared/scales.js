import { scaleLinear, scaleBand } from 'd3-scale';

const verticalScaleLinear = (height, maxValue) =>
    scaleLinear().domain([0, maxValue]).range([height, 0]);

const horizontalScaleLinear = (numberItems, width) =>
    scaleLinear().domain([0, numberItems]).range([0, width]);

const horizontalScaleBand = (label, width) =>
    scaleBand().domain(label).range([0, width]);

export { verticalScaleLinear, horizontalScaleLinear, horizontalScaleBand };
