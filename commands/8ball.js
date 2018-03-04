const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  //.8ball <question asdfasdf>
  if(!args[2]) return message.reply("Please ask a full question!");
  let replies = ["Yes.", "Nah fam.", "wtf? IDK.", "Ask me later homie", "Oh hell yeah", "Hmm... Maybe", "I know you are, but what am I?", "I am not allowed to answer that"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ");

  let ballEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballEmbed);

}

module.exports.help = {
  name: "8ball"
}
