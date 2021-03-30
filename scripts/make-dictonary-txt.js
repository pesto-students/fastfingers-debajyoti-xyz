const path = require("path");
const fs = require("fs");
const util = require("util");
const dictonary = require("../data/dictionary.json");

// const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

const DEST_FILENAME = path.join(__dirname, "..", "public", "dictionary.text");

async function main() {
  const dictonaryText = dictonary.join(',');
  await fsWriteFile(DEST_FILENAME, dictonaryText);
}

main()
  .then(() => {
    console.info(
      "Successfully generated dictionary text file at %s",
      DEST_FILENAME
    );
  })
  .catch((error) => {
    console.error("Error generating dictionary text file");
    console.error(error);
  });
