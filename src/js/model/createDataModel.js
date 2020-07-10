/**
 * @param {RawGameweekStats} rawGameweekStatsData
 * @returns {Model}
 */
const createDataModel = (rawGameweekStatsData) => {

  // equivalently: Parse each club, combining them with the gameweekStats Data
  // rawLearningProvidersData is the rawClubDetails data
  const leagueStatistics = rawGameweekStatsData.map(row => row)
  ///////////////////////////////////////////////////////////////////////////////////////
  return {
    leagueStatistics: leagueStatistics,
  }
}

export default createDataModel
