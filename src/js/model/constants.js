export const TEAMS = {
  T1: "Garrowland United",
  T2: "Vanatallin FC",
  T3: "Bellevue Sharks",
  T4: "Niangolang DC",
  T5: "Fancy United",
  T6: "Dunnyland Sunnyside",
  T7: "Black Norwood",
  T8: "Coal City",
  T9: "West Woodwasp",
  T10: "Bergerund United",
  T11: "South Preston Saints",
  T12: "Vagabundos AFC",
  T13: "Hollytown FC",
  T14: "Thornton AFC",
};

// AERIAL PASSES
export const AERIAL_PASSES_LABELS = ["defensive", "middle", "offensive"];
export const AERIAL_PASSES_KEYS = [
  "PASSES_DEFENSIVE",
  "PASSES_MIDDLE",
  "PASSES_OFFENSIVE",
];

// DIRECTION PASSES
export const DIRECTION_PASSES_LABELS = ["backward", "lateral", "forward"];
export const DIRECTION_PASSES_KEYS = [
  "PASSES_BACKWARD",
  "PASSES_LATERAL",
  "PASSES_FORWARD",
];

// SHOTS
export const SHOTS_LABELS = [
  "shots__six",
  "shots__eighteen",
  "shots__twentyfour",
];
export const SHOTS_KEYS = ["SHOTS_6_YARD", "SHOTS_18_YARD", "SHOTS_24_YARD"];

// BLOCKS
export const BLOCKS_LABELS = [
  "blocks__keeper",
  "blocks__six",
  "blocks__eighteen",
  "blocks__twentyfour",
];
export const BLOCKS_KEYS = [
  "BLOCKS_KEEPER",
  "BLOCKS_6_YARD",
  "BLOCKS_18_YARD",
  "BLOCKS_24_YARD",
];

// COLOR SCALES
export const COLOR_SCALES_GOLD = ["#a67c00", "#ffbf00", "#ffdc73"];
export const COLOR_SCALES_ORCHID = ["#4B0082", "#9932CC", "#DA70D6"];
export const COLOR_SCALES_RED = ["#7A032B", "#CB1753", "#FF7CA8", "#FFE6EF"];
export const COLOR_SCALES_GREEN = ["#098415", "#5CD749", "#B7FF98"];

// IDs
export const STACKEDCHART_IDs = {
  AERIAL: "passes__aerial",
  DIRECTION: "passes__direction",
  SHOTS: "shots",
  BLOCKS: "blocks",
};

export const TEAM_DROPDOWN_IDs = {
  AERIAL: "dropdown__teams__aerial",
  DIRECTION: "dropdown__teams__direction",
  SHOTS: "dropdown__teams__shots",
  BLOCKS: "dropdown__teams__blocks",
};

// CHART SPECIFIC VARIABLES (export as object)
export const CHART_SPEC_AERIAL = {
  containerDomId: STACKEDCHART_IDs.AERIAL,
  stackKeys: AERIAL_PASSES_KEYS,
  customLabels: AERIAL_PASSES_LABELS,
  customColors: COLOR_SCALES_GOLD,
};

export const CHART_SPEC_DIRECTION = {
  containerDomId: STACKEDCHART_IDs.DIRECTION,
  stackKeys: DIRECTION_PASSES_KEYS,
  customLabels: DIRECTION_PASSES_LABELS,
  customColors: COLOR_SCALES_ORCHID,
};

export const CHART_SPEC_SHOTS = {
  containerDomId: STACKEDCHART_IDs.SHOTS,
  stackKeys: SHOTS_KEYS,
  customLabels: SHOTS_LABELS,
  customColors: COLOR_SCALES_GREEN,
};

export const CHART_SPEC_BLOCKS = {
  containerDomId: STACKEDCHART_IDs.BLOCKS,
  stackKeys: BLOCKS_KEYS,
  customLabels: BLOCKS_LABELS,
  customColors: COLOR_SCALES_RED,
};
