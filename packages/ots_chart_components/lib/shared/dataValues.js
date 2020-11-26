const maxValueSeries = (data) => {
    let maxValue = 0;
    data.forEach((element) => {
        maxValue =
            Math.max(...element) > maxValue ? Math.max(...element) : maxValue;
    });
    return maxValue;
};

const maxNumItems = (data) => {
    let numItems = 0;
    data.forEach((element) => {
        numItems = element.length > numItems ? element.length : numItems;
    });
    return numItems;
};

const serieGroup = (data) => {
    return data.map((element, idx) => `__GroupSerie${idx}`);
};

export { maxValueSeries, maxNumItems, serieGroup };
