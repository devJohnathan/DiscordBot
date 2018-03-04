const Discord = require("discord.js");
const botCreator = "Johnathan Gonzalez";

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#c6cbff")
  .setThumbnail(bicon)
  .addField("My Bot Name", bot.user.username)
  .addField("My Creator", botCreator)
  .addField("Created On", bot.user.createdAt);

  return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
