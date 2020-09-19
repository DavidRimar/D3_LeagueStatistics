/**
 * All possible teams in the League: It is to refer to it in leagueStatistics
 */
type Teams =
  | "Garrowland United"
  | "Vanatallin FC"
  | "Bellevue Sharks"
  | "Niangolang DC"
  | "Fancy Unted"
  | "Dunnyland Sunnyside"
  | "Black Norwood"
  | "Coal City"
  | "West Woodwasp"
  | "Bergerund United"
  | "South Preston Saints"
  | "Vagabundos AFC"
  | "Hollytown FC"
  | "Thornton AFC";

type Outcomes = "WIN" | "DRAW" | "LOSS";

/**
 * Processed Model's data structure
 */
interface Model {
  leagueStatistics: LeagueStatistics[];
}

/**
 * LeagueStatistics data structure
 */
interface LeagueStatistics {
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

type FilterByTeam = (
  teamSelection: string,
  leagueStatistics: LeagueStatistics[],
) => LeagueStatistics[];
