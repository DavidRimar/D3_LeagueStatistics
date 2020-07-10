const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

/**
 * ADD COLOR KEYS FUNCTION
 *
 * @param {array[]} labels
 */
const addColorKeys = (labels, colorScales) => {
  // ADD COLOR TO bc__color divs
  console.log("addColorKeys logs first color", typeof `${colorScales[0]}`);
  d3.select(`#bc__color__${labels[0]}`).style(
    "background-color",
    `${colorScales[0]}`
  );

  d3.select(`#bc__color__${labels[1]}`).style(
    "background-color",
    `${colorScales[1]}`
  );

  d3.select(`#bc__color__${labels[2]}`).style(
    "background-color",
    `${colorScales[2]}`
  );

  // ADD LABELS to bc__label divs
  if (labels[0] == "offensive") {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[0])} Third`);

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[1])} Third`);

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[2])} Third`);
  } else {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[0])} Direction`);

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[1])} Direction`);

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[2])} Direction`);
  }
};

export default addColorKeys;
