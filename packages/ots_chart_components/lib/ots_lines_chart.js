import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { select } from 'd3-selection';

import { d3Element } from './shared/element';
import { maxValueSeries, maxNumItems } from './shared/dataValues';
import { drawYAxis, drawGridYAxis } from './shared/verticalAxis';
import { drawXAxis, drawGridXAxis } from './shared/horizontalAxis';
import { showLabel } from './shared/valueLabels';

import { drawLine } from './graphs/lines';
import { drawDots } from './graphs/dots';

export const OtsLinesChart = (props) => {
    const {
        seriesData,
        seriesLabel,
        type,
        yAxis,
        gridYAxis,
        numberYTicks,
        maxValueYGrid,
        xAxis,
        gridXAxis,
        numberXTicks,
        colors,
        showValues,
        stroke,
        dots,
        fontSize,
        fontColor,
    } = { ...props };
    const margins = {
        top: props.topMargin,
        right: props.rightMargin,
        bottom: props.bottomMargin,
        left: props.leftMargin,
    };
    const d3Component = useRef(null);

    useEffect(() => {
        if (d3Component.current) {
            let height = d3Component.current.offsetHeight;
            let width = d3Component.current.offsetWidth;

            const maxValue = maxValueYGrid || maxValueSeries(seriesData);
            const numItems = maxNumItems(seriesData);

            const d3GraphComponent = d3Element(
                select(d3Component.current),
                height,
                width
            );

            // Draw Grids
            gridYAxis &&
                drawGridYAxis(
                    d3GraphComponent,
                    height,
                    width,
                    maxValue,
                    margins,
                    numberYTicks
                );
            gridXAxis &&
                drawGridXAxis(
                    d3GraphComponent,
                    height,
                    width,
                    numItems,
                    margins,
                    numberXTicks
                );

            // Draw Axis
            yAxis &&
                drawYAxis(
                    d3GraphComponent,
                    height,
                    maxValue,
                    margins,
                    numberYTicks
                );
            xAxis &&
                drawXAxis(
                    d3GraphComponent,
                    height,
                    width,
                    numItems,
                    margins,
                    numberXTicks,
                    seriesLabel
                );

            // Draw Lines Series
            seriesData.forEach((data, idx) => {
                drawLine(d3GraphComponent, height, width, margins, {
                    type,
                    data,
                    maxValue,
                    numItems,
                    colors: colors[idx],
                    stroke,
                });

                if (dots)
                    drawDots(d3GraphComponent, height, width, margins, {
                        data,
                        maxValue,
                        numItems,
                        colors: colors[idx],
                        stroke,
                    });

                if (showValues) {
                    showLabel(d3GraphComponent, height, width, margins, {
                        data,
                        maxValue,
                        numItems,
                        colors: colors[idx],
                        fontSize,
                        fontColor,
                    });
                }
            });
        }
    }, [d3Component]);

    return (
        <div
            style={{
                display: 'block',
                height: '100%',
                width: '100%',
            }}
            ref={d3Component}
        />
    );
};

OtsLinesChart.propTypes = {
    seriesData: PropTypes.array.isRequired,
    seriesLabel: PropTypes.array,
    type: PropTypes.oneOf([
        'curveLinear',
        'curveMonotoneX',
        'curveNatural',
        'curveStep',
        'curveStepAfter',
        'curveStepBefore',
    ]),
    yAxis: PropTypes.bool,
    gridYAxis: PropTypes.bool,
    numberYTicks: PropTypes.number,
    maxValueYGrid: PropTypes.number,
    xAxis: PropTypes.bool,
    gridXAxis: PropTypes.bool,
    numberXTicks: PropTypes.number,
    colors: PropTypes.array,
    showValues: PropTypes.bool,
    stroke: PropTypes.number,
    dots: PropTypes.bool,
    fontSize: PropTypes.number,
    fontColor: PropTypes.string,
};

OtsLinesChart.defaultProps = {
    type: 'curveLinear',
    topMargin: 10,
    rightMargin: 10,
    bottomMargin: 20,
    leftMargin: 30,
    yAxis: true,
    gridYAxis: true,
    xAxis: true,
    gridXAxis: true,
    colors: [
        '#1aa992',
        '#ff0099',
        '#00aaee',
        '#ff7a00',
        '#547d93',
        '#00c3db',
        '#ff3f0f',
        '#c3d100',
        '#0057a7',
        '#fae400',
        '#0082c5',
        '#43a047',
        '#5f58b8',
        '#89bc00',
        '#89bc00',
    ],
    showValues: false,
    stroke: 1,
    dots: false,
    fontSize: 12,
};
