//////////////////////////
// we have 2 files:
// 1. "CLUB DETAILS" : 1-TO-1 i.e. 1 club per row
// 2. "GAMEWEEK STATISTICS" : MANY-TO-1 i.e. many rows per club, 1 row per gameweek
// we also have a constant for the CLUBs (may not be needed)
//////////////////////////

/**
 * @param Club
 * @param {RawClubDetails} clubDetails
 * @param {RawGameweekStats} gameweekStats

 * @returns {LeagueStatistics}
 */
const parseClubStatistics = (clubDetails, gameweekStats) => {
  // Destructure data in the `club-details.csv` file
  const {
    CLUB_NAME,
    CLUB_ID,
    CLUB_STADIUM_NAME,
    CLUB_STADIUM_CITY,
    CLUB_STADIUM_STREET,
    CLUB_STADIUM_CAPACITY,
    CLUB_CHAIRMAN,
    CLUB_ESTABLISHED_YEAR
  } = clubDetails;

  const CLUB_ID = parseInt(clubDetails.CLUB_ID, 10);
  const CLUB_NAME = parseInt(clubDetails.CLUB_NAME, 10);

  const GAMEWEEK_STATS = gameweekStats.filter(
    document => document.CLUB_ID === CLUB_ID
  );

  return {
    // return what the typings specified for LeagueStatistics inteface
    club_name: d.CLUB_NAME,
    club_id: d.CLUB_ID,
    gameweek_id: d.GAMEWEEK_ID,
    gameweek_id_num: d.GAMEWEEK_ID_NUM,
    passes_offensive: d.PASSES_OFFENSIVE,
    passes_middle: d.PASSES_MIDDLE,
    passes_defensive: d.PASSES_DEFENSIVE,
    passes_forward: d.PASSES_FORWARD,
    passes_lateral: d.PASSES_LATERAL,
    passes_backward: d.PASSES_BACKWARD,
    outcome: d.OUTCOME,
    opposition: d.OPPOSITION
  };
};

export default parseClubStatistics;
