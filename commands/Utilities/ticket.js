const Discord = require("discord.js");

exports.run = async (bot, message) => {

if(message && message.deletable) message.delete().catch(e => {});

let embed = new Discord.MessageEmbed()
.setTitle(`Système de Ticket`)
.setColor(bot.color.none)
.setDescription(`Réagissez avec 🎟️ pour créer un ticket.`);
message.channel.send(embed).then(m => {
  m.react('🎟️');
});

}

exports.help = {
    name: "ticket",
    aliases: ['createticket', "t"]
}