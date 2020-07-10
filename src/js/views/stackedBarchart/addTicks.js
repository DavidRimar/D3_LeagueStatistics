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
  rotateAngle
) => {
  graph
    .append("g")
    .attr("id", `axis__${id}`)
    .attr("class", `axis__${className}`)
    .attr("transform", transformValue)
    .call(axis)
    .append("text")
    .attr(
      "transform",
      `translate(${positionX},${positionY}) rotate(${rotateAngle})`
    )
    .style("text-anchor", "middle")
    .text(`${axisLabelText}`)
    .attr("fill", "black")
    .attr("font-weight", "bold")
    .attr("font-size", "17px");
};

export default addTicks;
