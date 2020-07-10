/**
 *
 * @typedef Props
 * @property {string} containerDOMElementID
 * @property {[string|number, string][]} dropdownValues Data populating the dropdown
 *                                            as an object of key-value pairs
 * @property {string} labelText Text that goes above the dropdown
 * @property {ChartHandlers} [handlers]
 *
 * @param {Props} param0
 */
const renderTeamDropdown = ({
  containerDOMElementID,
  dropdownValues,
  labelText,
  data,
  handlers
}) => {
  const dropdownID = `${containerDOMElementID}__dropdown`;

  const container = d3.select(`#${containerDOMElementID}`);

  // If no child nodes are present in container.
  if (container.property("childNodes").length === 0) {
    // Create <label> tag element for the dropdown
    container
      .append("label")
      .attr("for", dropdownID)
      .text(labelText)
      .attr("vertical-align", "text-bottom");

    // Create <select> tag element for the dropdown
    container
      .append("select")
      .attr("id", dropdownID)
      .attr("name", containerDOMElementID);
  }

  // SELECT THE <select> part of the container
  const dropdownSelect = container.select("select");

  // Removes all options and adds a default empty first option to the dropdown
  /*
  dropdownSelect.selectAll("option").remove();
  dropdownSelect
    .append("option")
    .attr("disabled", true)
    .attr("selected", true)
    .attr("value", true)
    .text("Select a team");
  */

  // Populate the dropdown with options from the data where its value is the key
  const dropdownOptions = dropdownSelect
    .selectAll("option")
    .data(dropdownValues, d => d);

  dropdownOptions
    .enter()
    .append("option")
    .text(entry => entry[1])
    .attr("value", entry => entry[1]);

  // Append control logic for when the dropdown is changed by the user
  if (handlers && handlers.handleChange) {
    dropdownSelect.on("change", () => {
      const value = d3.select(`#${dropdownID}`).property("value");
      handlers.handleChange(value, data);
    });
  }
};

export default renderTeamDropdown;
