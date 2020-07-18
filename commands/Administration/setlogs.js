const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const dateFormat = require("dateformat");
const color = JSON.parse(fs.readFileSync(`Storage/color.json`, `utf8`));

exports.run = async (bot, message, args, functions) => {

let channel = message.mentions.channels.first();
if(!channel || channel.type !== "text") return functions.errorEmbed(message, message.channel, "Veuillez un salon texte.");

let channelFetched = message.guild.channels.cache.find(c => c.id === channel.id);
if(!channelFetched || channelFetched.type !== "text") return functions.errorEmbed(message, message.channel, "Veuillez un salon texte.");

let embed = new Discord.MessageEmbed()
.setAuthor(`✅ | Salon Définit`)
.setColor(color.none)
.setTimestamp()
.setFooter(`Ticket System`, bot.user.displayAvatarURL())
.addField(`Salon définit`, channelFetched, true)
.addField(`Définit par`, message.author, true)
.addField(`Date`, `\`${dateFormat(new Date(), "dd/mm/yyyy - HH:MM:ss")}\``, true);

db.set(`logs_${message.guild.id}`, channelFetched.id);
channelFetched.send(message.author, {embed: embed});
functions.successEmbed(message, message.channel, `Le salon de \`logs\` a été défini sur ${channelFetched}`);

}

exports.help = {
    name: "setlogs",
    aliases: ['logs', 'channel']
}