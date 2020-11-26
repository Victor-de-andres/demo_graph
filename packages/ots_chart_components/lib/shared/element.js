const d3Element = (d3Container, height, width) => {
    return d3Container
        .append('svg')
        .attr('height', height)
        .attr('width', width);
};

export { d3Element };
