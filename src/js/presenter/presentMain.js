import renderStackedBarchart from "../views/stackedBarchart/renderStackedBarchart.js"; // THE VIEW
import filterByTeam from "../model/filterByTeam.js"; // THE MODEL
import renderTeamDropdown from "../views/dropdown/renderTeamDropdown.js";
import * as constants from "../model/constants.js";
import { chartHandlers } from "./presentStackedBarchart.js";

/**
 * HANDLE TEAM CHANGE (StackedBarchart DIRECTION)
 * 1. gameweeks data is filtered based on the stored value
 * 2. Call renderStackedBarChart function with arguments
 *
 * // @param {Model} leagueStatistics // this is our data
 * // @param {string} value
 * // @returns {void}
 */
export const handleTeamChangeDirection = (value, leagueStatistics) => {
  // 1.
  const filteredDataSet = filterByTeam(value, leagueStatistics);
  // 2.
  renderStackedBarchart(
    constants.STACKEDCHART_IDs.DIRECTION,
    filteredDataSet,
    constants.DIRECTION_PASSES_KEYS,
    constants.DIRECTION_PASSES_LABELS,
    constants.COLOR_SCALES_ORCHID,
    chartHandlers
  );
};

/**
 * HANDLE TEAM CHANGE (StackedBarchart AERIAL)
 * 1. gameweeks data is filtered based on the stored value
 * 2. Call renderStackedBarChart function with arguments
 *
 * // @param {Model} leagueStatistics // this is our data
 * // @param {string} value
 * // @returns {void}
 */
export const handleTeamChangeAerial = (value, leagueStatistics) => {
  // 1.
  const filteredDataSet = filterByTeam(value, leagueStatistics);
  // 2.
  renderStackedBarchart(
    constants.STACKEDCHART_IDs.AERIAL,
    filteredDataSet,
    constants.AERIAL_PASSES_KEYS,
    constants.AERIAL_PASSES_LABELS,
    constants.COLOR_SCALES_GOLD,
    chartHandlers
  );
};

/**
 * HANDLE CHART INIT
 * 1. Set default value for dropdown
 * 2. Dataset is filtered based on the default value
 * 3. Call renderStackedBarChart functions with arguments
 *
 * // @param {Model} leagueStatistics // this is our data
 * // @param {string} value
 * // @returns {void}
 */
export const initViews = leagueStatistics => {
  //// RENDER DROPDOWN(s) ////
  // Dropdown: AERIAL
  renderTeamDropdown({
    containerDOMElementID: constants.TEAM_DROPDOWN_IDs.AERIAL,
    dropdownValues: Object.entries(constants.TEAMS),
    labelText: "Select Your Team",
    data: leagueStatistics,
    handlers: {
      /** @param {string} value */
      /** @param {leagueStatistics[]} leagueStatistic */
      handleChange: (value, leagueStatistics) => {
        handleTeamChangeAerial(value, leagueStatistics);
      }
    }
  });

  // Dropdown: DIRECTION
  renderTeamDropdown({
    containerDOMElementID: constants.TEAM_DROPDOWN_IDs.DIRECTION,
    dropdownValues: Object.entries(constants.TEAMS),
    labelText: "Select Your Team",
    data: leagueStatistics,
    handlers: {
      /** @param {string} value */
      /** @param {leagueStatistics[]} leagueStatistic */
      handleChange: (value, leagueStatistics) => {
        handleTeamChangeDirection(value, leagueStatistics);
      }
    }
  });
  // RENDER CHART(s)
  // 1.
  const defaultValue = "Garrowland United";
  // 2.
  const filteredDataSet = filterByTeam(defaultValue, leagueStatistics);
  // 3.
  renderStackedBarchart(
    constants.STACKEDCHART_IDs.AERIAL,
    filteredDataSet,
    constants.AERIAL_PASSES_KEYS,
    constants.AERIAL_PASSES_LABELS,
    constants.COLOR_SCALES_GOLD,
    chartHandlers
  );
  renderStackedBarchart(
    constants.STACKEDCHART_IDs.DIRECTION,
    filteredDataSet,
    constants.DIRECTION_PASSES_KEYS,
    constants.DIRECTION_PASSES_LABELS,
    constants.COLOR_SCALES_ORCHID,
    chartHandlers
  );
};
