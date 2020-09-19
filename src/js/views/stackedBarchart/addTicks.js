/**
 * ADD TICKS FUNCTION
 *
 * @param {any} graph
 * @param {any} axis
 * @param {string} className
 * @param {string} transformValue
 * @param {string} axisLabelText
 * @param {any} positionX
 * @param {any} positionY
 */
const addTicks = (
  graph,
  axis,
  className,
  id,
  transformValue,
  axisLabelText,
  positionX,
  positionY,
  rotateAngle,
) => {
  const doubleUnderscore = "__";
  let axisLabel = "";
  // LOGIC TO DIFFERENTIATE MORE GRANULAR CHART IDs (which include underscores)
  // if underscore present
  if (axisLabelText.includes(doubleUnderscore) === true) {
    // use the first part for the ID as a label
    const underScoreIndex = axisLabelText.indexOf(doubleUnderscore);
    axisLabel =
      axisLabelText.substring(0, underScoreIndex).toUpperCase() + " (PER GAME)";
  } else {
    // if underscore not present => use the entire ID
    axisLabel = axisLabelText.toUpperCase();
  }

  graph
    .append("g")
    .attr("id", `axis__${id}`)
    .attr("class", `axis__${className}`)
    .attr("transform", transformValue)
    .call(axis)
    .append("text")
    .attr(
      "transform",
      `translate(${positionX},${positionY}) rotate(${rotateAngle})`,
    )
    .style("text-anchor", "middle")
    .text(`${axisLabel}`)
    .attr("fill", "black")
    .attr("font-weight", "bold")
    .attr("font-size", "17px");
};

export default addTicks;
