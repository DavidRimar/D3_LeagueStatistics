/**
 * INITIALISE TOOLTIP FUNCTION
 *
 * @param {any} svgContainer // parent container to the tooltip <g>
 * @param {any} containerDomId // identify the tooltip uniquely
 */
const addTooltip = (svgContainer, containerDomId) => {
  // ADD <g> TO PARENT CONTAINER
  var tooltip = svgContainer
    .append("g")
    .attr("class", `tooltip__group__${containerDomId}`)
    .style("display", "none");

  // ADD <rect> TO <g>
  tooltip
    .append("rect")
    .attr("width", 50)
    .attr("height", 20)
    .attr("fill", "white")
    .style("opacity", 0.5);

  // ADD <text> TO <g>
  tooltip
    .append("text")
    .attr("x", 25)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "bold");
};

export default addTooltip;
