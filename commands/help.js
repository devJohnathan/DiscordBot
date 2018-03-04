const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpEmbed = new Discord.RichEmbed()
  .setDescription("Commands List Help")
  .setColor("#59606b")
  .addField("Member Commands", "help, serverinfo, botinfo, userinfo, report, doggo, cat, 8ball")
  .addField("Mod Commands", "addrole, removerole, kick, warn, warnlevel, ban, tempmute, say, clear");
  try{
    await message.author.send(helpEmbed);
    message.react("👍")
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod commands.");
  }

  message.reply("Check your DMs!")

}

module.exports.help = {
  name: "help"
}
