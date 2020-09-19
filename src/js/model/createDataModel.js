/**
 * @param {RawGameWeekStats[]} rawGameweekStatsData
 * @returns {Model}
 */
const createDataModel = rawGameweekStatsData => {
  const leagueStatistics = rawGameweekStatsData.map(row => row);
  return {
    leagueStatistics: leagueStatistics,
  };
};

export default createDataModel;
