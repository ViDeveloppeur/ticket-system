const { readdirSync } = require("fs");
const { join } = require("path");
const eventDir = join(__dirname, "..", "events");

module.exports.run = (bot) => {
    const eventFiles = readdirSync(eventDir);

    for(const eventFile of eventFiles) {
        const event = require(`${eventDir}/${eventFile}`);
        const eventName = eventFile.split(".").shift();
        bot.on(eventName, event.bind(null, bot));
        delete require.cache[require.resolve(`${eventDir}/${eventFile}`)];
    }
    bot.events = eventFiles.length;
    console.log(`Loaded ${eventFiles.length} events !`);
}