import { verticalScaleLinear, horizontalScaleBand } from '../shared/scales';
import { serieGroup } from './../shared/dataValues';

const drawGroupBars = (d3Container, height, width, margins, data) => {
    const xScale = horizontalScaleBand(
        data.seriesLabel,
        width - margins.right - margins.left
    );

    const yScale = verticalScaleLinear(
        height - margins.top - margins.bottom,
        data.maxValue
    );

    const groupXScale = horizontalScaleBand(
        serieGroup(data.seriesData), // Series de datos, se construye array etiquetas propio. __GroupSerie<indice>
        xScale.bandwidth() - 4
    );

    for (
        let graphBarIdx = 0, numberBars = data.seriesData.length;
        graphBarIdx < numberBars;
        graphBarIdx++
    ) {
        d3Container
            .selectAll('.bar')
            .data(data.seriesData[graphBarIdx])
            .enter()
            .append('rect')
            .attr('transform', `translate(${margins.left}, ${margins.top})`)
            .attr(
                'x',
                (d, i) =>
                    xScale(data.seriesLabel[i]) +
                    groupXScale(`__GroupSerie${graphBarIdx}`)
            )
            .attr('y', (d) => yScale(d))
            .attr(
                'height',
                (d) => height - margins.top - margins.bottom - yScale(d)
            )
            .attr('width', groupXScale.bandwidth())
            .style('fill', (d, i) => data.colors[graphBarIdx]);
    }
};

export { drawGroupBars };
