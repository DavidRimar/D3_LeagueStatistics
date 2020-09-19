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
  d3.select(`#bc__color__${labels[0]}`).style(
    "background-color",
    `${colorScales[0]}`,
  );

  d3.select(`#bc__color__${labels[1]}`).style(
    "background-color",
    `${colorScales[1]}`,
  );

  d3.select(`#bc__color__${labels[2]}`).style(
    "background-color",
    `${colorScales[2]}`,
  );

  if (labels[3]) {
    console.log("label 3: ", labels[3]);
    d3.select(`#bc__color__${labels[3]}`).style(
      "background-color",
      `${colorScales[3]}`,
    );
  }

  // ADD LABELS to bc__label divs
  if (labels[0] === "defensive") {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[0])} Third`);

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[1])} Third`);

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[2])} Third`);
  } else if (labels[0] === "backward") {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[0])} Direction`);

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[1])} Direction`);

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text(`Passes In ${capitalize(labels[2])} Direction`);
  } else if (labels[0] === "shots__six") {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text("Shots In 6-Yard Box");

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text("Shots In 18-Yard Box");

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text("Shots Outside 18-Yard Box");
  } else {
    d3.select(`#bc__label__${labels[0]}`)
      .append("text")
      .text("Blocks By Keeper");

    d3.select(`#bc__label__${labels[1]}`)
      .append("text")
      .text("Blocks In 6-Yard Box");

    d3.select(`#bc__label__${labels[2]}`)
      .append("text")
      .text("Blocks In 18-Yard Box");

    d3.select(`#bc__label__${labels[3]}`)
      .append("text")
      .text("Blocks Outside 18-Yard Box");
  }
};

export default addColorKeys;
