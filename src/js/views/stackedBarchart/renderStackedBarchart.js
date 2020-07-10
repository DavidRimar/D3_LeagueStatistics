import addColorKeys from "./addColorKeys.js";
import addTooltip from "./addTooltip.js";
import addTicks from "./addTicks.js";

/**
 * UPDATE TICKS FUNCTION
 *
 * @param {any} axis
 * @param {string} id
 * @param {number} duration
 */
const updateTicks = (axis, id, duration) => {
  d3.select(`#axis__${id}`)
    .transition()
    .duration(duration)
    .call(axis);
};

/**
 * GET MAX PASSES FUNCTION
 *
 * @param {any} layeredData
 * @return {number}
 */
const getMaxValue = layeredData => {
  const lastLayer = layeredData[layeredData.length - 1];
  const lastLayerArray = [];
  lastLayer.forEach(element => {
    lastLayerArray.push(element[1]);
  });
  const maxValue = d3.max(lastLayerArray);
  return maxValue;
};

/**
 *
 * @property {any[]} dataset Text that goes above the dropdown
 * @property {ChartHandlers} handlers
 *
 * @param {Props} param0
 */

const renderStackedBarchart = (
  containerDomId,
  dataSet,
  keys,
  customLabels,
  customColorScales,
  handlers
) => {
  // MARGIN, WIDTH, HEIGHT
  const margin = {
    top: 35,
    right: 35,
    bottom: 35,
    left: 35
  };
  const width = 550 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;
  const svgWidth = 550 + margin.left + margin.right;
  const svgHeight = 550 + margin.top + margin.bottom;
  const transitionDuraton = 850;

  // COLOR SCALES
  const colorScales = customColorScales;

  // LABELS VARIABLE
  const colorKeyLabels = customLabels;

  // STACKED DATA
  console.log("Filtered data from renderStackedBarchart: ", dataSet);
  const stackKeys = keys;
  const stack = d3.stack().keys(stackKeys);
  const layeredData = stack(dataSet);
  console.log("layered data", layeredData);

  // GET MAX VALUE
  const maxValue = getMaxValue(layeredData);
  console.log("max value", maxValue);

  // X, Y RANGE
  const yScale = d3.scaleLinear().rangeRound([height, 0]);

  const xScale = d3
    .scaleBand()
    .rangeRound([0, width])
    .padding(0.38);

  // X, Y DOMAIN (the data that is mapped to the range)
  yScale.domain([0, maxValue]); // NEED A MAX HERE

  xScale.domain(
    dataSet.map(d => {
      return d.GAMEWEEK_ID;
    })
  );

  // DEFINE AXES
  const xAxis = d3.axisBottom().scale(xScale);
  const yAxis = d3.axisLeft().scale(yScale);

  // CONTAINER DOM ELEMENT
  const container = d3.select(`#stackedBarChart__${containerDomId}`);

  // Create chart if it does not already exist
  if (container.property("childNodes").length === 0) {
    // ADD SVG CONTAINER TO TARGET DOM ELEMENT
    const svgContainer = container
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
      .classed("svg-content", true);
    //.attr("width", width + margin.left + margin.right)
    //.attr("height", height + margin.top + margin.bottom);

    svgContainer
      .append("g")
      .attr("id", "svg__container__g")
      .attr("transform", `translate(${margin.left + 30},${margin.top})`)
      .style("stroke", "grey");

    // ADD TICKS
    addTicks(
      svgContainer,
      xAxis,
      "g__x",
      `x__${containerDomId}`,
      `translate(${margin.left + 30},${height + 45})`,
      "GAMEWEEK",
      width / 2,
      40,
      0
    );

    addTicks(
      svgContainer,
      yAxis,
      "g__y",
      `y__${containerDomId}`,
      `translate(${margin.left + 30}, ${margin.top})`,
      "PASSES COMPLETED (per game)",
      -40,
      svgHeight / 2.5,
      -90
    );

    // ADD COLOR KEYS & LABELS
    addColorKeys(colorKeyLabels, colorScales);

    // ADD TOOLTIP (hidden)
    addTooltip(svgContainer, containerDomId);
  }

  const containerGroup = container.select("svg > g");

  // CREATE LAYER GROUPS AND ADD COLOR
  containerGroup
    .selectAll(".layer__group")
    .data(layeredData)
    .enter()
    .append("g")
    .attr("class", "layer__group")
    .attr("id", (d, i) => {
      return `layer__group__${i + 1}`;
    })
    .style("fill", (d, i) => {
      return colorScales[i];
    });

  ///// GUP PATTERN STARTS //////
  const layers = container.selectAll(".layer__group");

  // DATA BIND
  const rects = layers.selectAll("rect").data(d => d);

  // ENTER PHASE
  rects
    .enter()
    .append("rect")
    .attr("class", "rect")
    .attr("x", d => {
      return xScale(d.data.GAMEWEEK_ID); //what is d.data.fullname ==> well, data is an object containing our data
    })
    .attr("y", d => {
      return yScale(d[1]); // starting position of the rectangle
    })
    .attr("width", xScale.bandwidth())
    .attr("height", d => {
      return yScale(d[0]) - yScale(d[1]); // length of the rectangle
    })
    .on("mouseover", (d, i, nodes) => {
      handlers.handleMouseOver(d, i, nodes, containerDomId);
    })
    .on("mouseout", (d, i, nodes) => {
      handlers.handleMouseOut(d, i, nodes, containerDomId);
    })
    .on("mousemove", (d, i, nodes) => {
      handlers.handleMouseMove(d, i, nodes, containerDomId);
    });

  // UPDATE PHASE
  rects
    //.selectAll(".rect") // thats why the "change" works:
    .transition()
    .duration(transitionDuraton)
    .attr("x", d => {
      return xScale(d.data.GAMEWEEK_ID); //what is d.data.fullname ==> well, data is an object containing our data
    })
    .attr("y", d => {
      return yScale(d[1]); // starting position of the rectangle
    })
    .attr("width", xScale.bandwidth())
    .attr("height", d => {
      return yScale(d[0]) - yScale(d[1]); // length of the rectangle
    });
  //.style("fill", "pink")

  // EXIT PHASE: NO HAPPENING: NO RELEVANT BC SAME DATA FOR EACH UPDATE
  // layers.exit().remove();

  // UPDATE TICKS
  updateTicks(yAxis, `y__${containerDomId}`, transitionDuraton);
};

export default renderStackedBarchart;
