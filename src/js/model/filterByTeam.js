/**
 * STACKED BARCHART
 * 1. Team selection is stored
 * 2. gameweeks data is filtered based on the stored value
 * 3. the filtered data is passed in to the renderStackedRowChart function
 *
 * @param {leagueStatistics} leagueStatistics // this is our data
 * @param {string} value
 * @returns {void}
 */

// filter model for garrowland team
// model is an array of objects
const filterByTeam = (value, leagueStatistics) => {

  // collect relevant elements into an array
  const filteredArray = [];

  // iterate through each object in the array
  leagueStatistics.forEach((element) => { // if it is the chosen team
    if (element.CLUB_NAME === value) {
      // push the element to the new array of objects
      filteredArray.push(element);
    };
  });
  // return final filtered array with 12 objects
  return filteredArray;

};

export default filterByTeam
