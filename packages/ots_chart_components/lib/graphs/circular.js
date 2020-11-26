import { pie, arc } from 'd3-shape';

function convertData(data) {
    return data.map((value) => {
        return { value };
    });
}

const drawCircular = (d3Container, height, width, data) => {
    var seriesData = convertData(data.seriesData);

    var radius = Math.min(height, width) / 2;

    const arcData = arc().outerRadius(data.internalRadius).innerRadius(radius);

    const pieGraph = pie()
        .sort(null)
        .value(function (d) {
            return d.value;
        });

    var svg = d3Container
        .append('g')
        .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
        .selectAll('.pie')
        .data(pieGraph(seriesData))
        .enter()
        .append('g')
        .append('path')
        .attr('d', arcData)
        .style('fill', function (d, i) {
            return data.colors[i];
        });
};

export { drawCircular };
