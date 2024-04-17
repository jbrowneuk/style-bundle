"use strict";

const fs = require("fs");
const path = require("path");
const sass = require("sass");

const scssFiles = ["palette", "styles"];

/** Generates the CSS output by rendering the SCSS source */
function generateCSS(inputFilename, outputFilename) {
  console.log("Rendering", inputFilename);
  const options = {
    loadPaths: [__dirname],
    style: "compressed"
  };

  const result = sass.compile(inputFilename, options);
  if (!result) {
    return console.error("Rendering failed");
  }

  try {
    console.log("Writing to", outputFilename);
    fs.writeFileSync(outputFilename, result.css, { encoding: "utf-8" });
  } catch (err) {
    return console.error(err);
  }

  console.log("Done");
}

const outputDir = path.resolve(__dirname, "..");
scssFiles.forEach((scssFile) => {
  console.log("Rendering CSS for", scssFile, "stylesheet");
  const fileSrc = path.resolve(__dirname, scssFile + ".scss");
  const fileDest = path.resolve(outputDir, scssFile + ".css");
  generateCSS(fileSrc, fileDest);
});

console.log("Generation complete");
