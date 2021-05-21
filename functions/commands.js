const { join } = require("path"),
  filePath = join(__dirname, "..", "commands");

const functions = require("../functions/functions.js");

module.exports.run = (bot) => {
  functions.loadCommands(bot, `${filePath}/Utilities/`);
  functions.loadCommands(bot, `${filePath}/Administration/`);
};
