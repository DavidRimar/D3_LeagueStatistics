/**
 * From: `gameweekStats.csv`
 */
interface RawGameWeekStats {
  CLUB_NAME: Teams;
  CLUB_ID: number;
  GAMEWEEK_ID: string;
  GAMEWEEK_ID_NUM: number;
  PASSES_OFFENSIVE: number;
  PASSES_MIDDLE: number;
  PASSES_DEFENSIVE: number;
  PASSES_FORWARD: number;
  PASSES_LATERAL: number;
  PASSES_BACKWARD: number;
  SHOTS_6_YARD: number;
  SHOTS_18_YARD: number;
  SHOTS_24_YARD: number;
  BLOCKS_KEEPER: number;
  BLOCKS_6_YARD: number;
  BLOCKS_18_YARD: number;
  BLOCKS_24_YARD: number;
  OUTCOME: Outcomes;
  OPPOSITION: Teams;
}
