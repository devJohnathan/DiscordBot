const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const botCreator = "Johnathan Gonzalez";
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on('guildCreate', guild => {
  let systemChannel = guild.channels.find(`name`, "general");
  systemChannel.send(`Hello, I'm Thalia. Thanks for inviting me to your server! Type .help at anytime for a list of all my commands! :alien:`);
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("on the Planet Paradise", {type: "Playing"});
});

bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server!`);

  let welcomechannel = member.guild.channels.find(`name`, "general");
  welcomechannel.send(`Welcome ${member}! Don't forget to leave your guns at the door :gun:`);
});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} left the server.`);

  let welcomechannel = member.guild.channels.find(`name`, "general");
  welcomechannel.send(`R.I.P :skull: ${member} has dipped from the server`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(botconfig.token);
