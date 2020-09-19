/**
 * @type {FilterByTeam}
 */

const filterByTeam = (value, leagueStatistics) => {
  // collect relevant elements into an array
  const filteredArray = [];

  // iterate through each object in the array
  leagueStatistics.forEach(element => {
    // if it is the chosen team
    if (element.CLUB_NAME === value) {
      // push the element to the new array of objects
      filteredArray.push(element);
    }
  });
  // return final filtered array with 12 objects
  return filteredArray;
};

export default filterByTeam;
