import renderStackedBarchart from "../views/stackedBarchart/renderStackedBarchart.js"; // THE VIEW
import renderTeamDropdown from "../views/dropdown/renderTeamDropdown.js"; // THE VIEW
import filterByTeam from "../model/filterByTeam.js"; // THE MODEL
import * as constants from "../model/constants.js"; // THE MODEL
// import { CHART_SPEC_AERIAL, CHART_SPEC_DIRECTION } from "../model/constants.js"; // THE MODEL
import { chartHandlers } from "./presentStackedBarchart.js"; // Chart-specific Handlers
import createDataModel from "../model/createDataModel.js";

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
    filteredDataSet,
    constants.CHART_SPEC_DIRECTION,
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
    filteredDataSet,
    constants.CHART_SPEC_AERIAL,
    chartHandlers
  );
};

/**
 * INIT CHARTs
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
  // RENDER CHART(s) (default)
  // 1.
  const defaultValue = "Garrowland United";
  // 2.
  const filteredDataSet = filterByTeam(defaultValue, leagueStatistics);
  // 3.
  renderStackedBarchart(
    filteredDataSet,
    constants.CHART_SPEC_AERIAL,
    chartHandlers
  );
  renderStackedBarchart(
    filteredDataSet,
    constants.CHART_SPEC_DIRECTION,
    chartHandlers
  );
};

// jQuery in an object literal
export const setAnimation = (() => {
  const clickNavItem = function() {
    const navLinks = $(".nav-link");
    // SCROLLSPY (animated)
    navLinks.on("click", function(e) {
      console.log("This is happening");
      // Check for a hash value
      if (this.hash !== "") {
        // Prevent default behavior
        e.preventDefault();

        // Store hash
        const hash = this.hash;

        // Animate smooth scroll
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - 55
          },
          950,
          function() {
            // Add hash to URL after scroll
            window.location.hash = hash - 55;
          }
        );
      }
    });
  };

  return {
    setScrollspy: clickNavItem
  };
})();

// initialiseApp function
export const initialiseApp = (error, rawGameweeksData) => {
  if (error) {
    console.error(`There is an error when loading the data`, error);
    return;
  }
  // INSTANTIATE DATA MODEL
  const model = createDataModel(rawGameweeksData);
  const leagueStatistics = model.leagueStatistics;

  // INSTANTIATE VIEWS
  initViews(leagueStatistics);

  // SET ANIMATION
  setAnimation.setScrollspy();
};
