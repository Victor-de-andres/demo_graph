import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { select } from 'd3-selection';

import { d3Element } from './shared/element';
import { maxValueSeries, maxNumItems } from './shared/dataValues';
import { drawGridYAxis, drawYAxis } from './shared/verticalAxis';
import { drawXAxisBand } from './shared/horizontalAxis';
import { showLabelBand } from './shared/valueLabels';

import { drawGroupBars } from './graphs/groupBars';

export const OtsGroupBarsChart = (props) => {
    const {
        seriesData,
        seriesLabel,
        yAxis,
        gridYAxis,
        numberYTicks,
        maxValueYGrid,
        xAxis,
        numberXTicks,
        colors,
        uniqueColor,
        showValues,
        fontSize,
        fontColor,
    } = {
        ...props,
    };
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
                drawXAxisBand(
                    d3GraphComponent,
                    height,
                    width,
                    seriesLabel,
                    margins,
                    numberXTicks
                );

            // Draw Bars
            drawGroupBars(d3GraphComponent, height, width, margins, {
                seriesData,
                seriesLabel,
                maxValue,
                numItems,
                colors: uniqueColor ? Array(numItems).fill(colors[0]) : colors,
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

OtsGroupBarsChart.propTypes = {
    seriesData: PropTypes.array.isRequired,
    seriesLabel: PropTypes.array.isRequired,
    topMargin: PropTypes.number,
    rightMargin: PropTypes.number,
    bottomMargin: PropTypes.number,
    leftMargin: PropTypes.number,
    yAxis: PropTypes.bool,
    gridYAxis: PropTypes.bool,
    numberYTicks: PropTypes.number,
    maxValueYGrid: PropTypes.number,
    xAxis: PropTypes.bool,
    numberXTicks: PropTypes.number,
    colors: PropTypes.array,
};

OtsGroupBarsChart.defaultProps = {
    topMargin: 10,
    rightMargin: 10,
    bottomMargin: 20,
    leftMargin: 30,
    yAxis: true,
    gridYAxis: true,
    xAxis: true,
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
};
