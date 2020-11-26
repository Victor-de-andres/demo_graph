import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { select } from 'd3-selection';

import { d3Element } from './shared/element';
import { drawCircular } from './graphs/circular';

export const OtsCircularChart = (props) => {
    const { seriesData, colors, internalRadius } = { ...props };

    const d3Component = useRef(null);

    useEffect(() => {
        if (d3Component.current) {
            let height = d3Component.current.offsetHeight;
            let width = d3Component.current.offsetWidth;

            const d3GraphComponent = d3Element(
                select(d3Component.current),
                height,
                width
            );

            drawCircular(d3GraphComponent, height, width, {
                seriesData,
                internalRadius,
                colors: colors,
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

OtsCircularChart.propTypes = {
    seriesData: PropTypes.array.isRequired,
    internalRadius: PropTypes.number,
    colors: PropTypes.array,
};

OtsCircularChart.defaultProps = {
    internalRadius: 0,
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
