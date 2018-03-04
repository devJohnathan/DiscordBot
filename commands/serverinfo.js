const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#c6cbff")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Server Owner", message.guild.owner)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);


  return message.channel.send(serverembed);

}

module.exports.help = {
  name: "serverinfo"
}
