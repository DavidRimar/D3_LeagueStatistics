const renderStackedBarchart = (dataSet) => {
  // Define stack key
  console.log("Raw data: ", dataSet);

  const stackKeys = ["passes_offensive", "passes_middle", "passes_defensive"];

  // MARGIN, WIDTH, HEIGHT
  const margin = {
    top: 10,
    right: 100,
    bottom: 20,
    left: 10
  };
  const width = 560 - margin.left - margin.right;
  const height = 840 - margin.top - margin.bottom;

  // X, Y RANGE
  const xScale = d3.scaleLinear().rangeRound([0, width]);

  const yScale = d3.scaleBand().rangeRound([height, 0]).padding(0.79);

  // X, Y DOMAIN (the data that is mapped to the range)
  xScale.domain([0, 900]);

  yScale.domain(
    dataSet.map((d) => {
      return d.gameweek_id;
    })
  );

  // COLOR SCALES
  const colorScales = ["red", "yellow", "blue"];

  // ADD SVG CONTAINER TO TARGET DOM ELEMENT
  const svgContainer = d3
    .select("#stackedBarChart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)
    .style("stroke", "red");

  // Define stack method
  const stack = d3.stack().keys(stackKeys);
  //console.log("stack", stack)

  // Define layered dataset (a series)
  const layeredData = stack(dataSet);

  // inspect layeredData
  console.log("layered data", layeredData);
  //console.log("layered data [0]", layeredData[0])

  ///// GUP PATTERN STARTS //////

  // Enter phase 1: For the g elements with class .layer (that dont exist yet), append g with that class and assign colors to each layer
  const layer = svgContainer
    .selectAll(".layer")
    .data(layeredData)
    .enter()
    .append("g")
    .attr("class", "layer")
    .style("fill", (d, i) => {
      return colorScales[i];
    });
  // Enter phase 2??? not sure which phase it looks like update but we enter: enter rectangles for the layered data per Institution using dataSet
  layer
    .selectAll("rect")
    .data((d) => d)
    .enter()
    .append("rect")
    .attr("y", (d) => {
      return yScale(d.data.gameweek_id); //what is d.data.fullname ==> well, data is an object containing our data
    })
    .attr("x", (d) => {
      return xScale(d[0]); // every d looks like this: [start, end] e.g. [0, 25] => so d[0] is saying: start the rect from position d[0] and width is controlled by "width"
    })
    .attr("height", yScale.bandwidth())
    .attr("width", (d) => {
      return xScale(d[1]) - xScale(d[0]);
    });

  d3.selectAll("rect").on("click", function () {
    d3.select(this).style("fill", "orange");
    console.log(d.data.gameweek_id + d.data.club_name);
  });

  // UPDATE PHASE
  // THIS WONT TAKE EFFECT WITHOUT ONCHANGE FUNCTION
  // update phase: when new data is passed in, add thick red margin for 3 seconds
  layer
    .selectAll("g")
    .style("stroke", "red")
    .style("stroke-width", 5)
    .transition()
    .duration(3000)
    .style("stroke-width", 0);

  // exit phase with transition in 4 seconds, add grey stroke and remove
  layer
    .selectAll("g")
    .exit()
    .transition()
    .duration(4000)
    .style("stroke-width", 5)
    .style("stroke", "grey")
    .remove();
};

export default renderStackedBarchart;

/* //////// TOOLTIP PART //////////////
  const div = d3
    .select("#stackedBarChart")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
*/

/*  //////// AXES PART //////////////
    const yAxis = d3.axisRight().scale(yScale)
    svg
      .append("g")
      .attr("class", "axis axis--y")
      .attr("transform", `translate(${width},0)`)
      .call(yAxis)

    // append axes to SVG
    const xAxis = d3
      .axisBottom()
      .scale(xScale)
      .tickValues([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);

      svg
        .append("g")
        .attr("class", "axis axis--x")
        .attr("transform", `translate(0,${height})`)
        .call(xAxis);
*/

/* /////// MOUSEOVER EVENTS //////////////
// this is saying, x start postion is given, how long the rect should be?, well, eit should be the end - start
.on("mouseover", (d) => {
  div.transition().duration(100).style("opacity", 0.99);

  // add html div
  div
    .text(d[1] - d[0])
    .style("left", d3.event.pageX + "px")
    .style("top", d3.event.pageY - 28 + "px");
});
//.on("mouseout", () => {
//  // say None when mouse out
//  div.html("None")
//})
*/
