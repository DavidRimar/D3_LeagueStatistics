/**
 * HANDLE MOUSEOVER FUNCTION
 * @param {any} d
 * @param {any} i
 * @param {any} nodes
 * @param {any} containerDomId // identify the tooltip uniquely
 */
const handleMouseOver = (d, i, nodes, containerDomId) => {
  // HIGHLIGHT
  d3.select(nodes[i]).classed("rect__highlight", true);

  // TOOLTIP: tootlip <g> display will default to "block"
  const tooltipParent = d3.select(`g.tooltip__group__${containerDomId}`);
  tooltipParent.style("display", null);
};

/**
 * HANDLE MOUSEOUT FUNCTION
 * @param {any} d
 * @param {any} i
 * @param {any} nodes
 * @param {any} containerDomId // identify the tooltip uniquely
 */
const handleMouseOut = (d, i, nodes, containerDomId) => {
  // REMOVE HIGHLIGHT
  d3.select(nodes[i]).classed("rect__highlight", false);

  // TOOLTIP: Hide tooltip <g>
  const tooltipParent = d3.select(`g.tooltip__group__${containerDomId}`);
  tooltipParent.style("display", "none");
};

/**
 * HANDLE MOUSE MOVE FUNCTION
 * @param {any} d
 * @param {any} i
 * @param {any} nodes
 * @param {string} containerDomId // identify the tooltip uniquely
 */
const handleMouseMove = (d, i, nodes, containerDomId) => {
  // TOOLTIP: translate the tooltip <g> following the mouse position
  const tooltipParent = d3.select(`g.tooltip__group__${containerDomId}`);
  const xPosition = d3.mouse(nodes[i])[0] + 40;
  const yPosition = d3.mouse(nodes[i])[1] + 10;
  tooltipParent.attr(
    "transform",
    "translate(" + xPosition + "," + yPosition + ")",
  );
  tooltipParent.select("text").text(d[1] - d[0]);
};

// CONSOLIDATE HANDLERS INTO AN OBJECT
export const chartHandlers = {
  handleMouseOver: handleMouseOver,
  handleMouseOut: handleMouseOut,
  handleMouseMove: handleMouseMove,
};
