const Discord = require("discord.js");


const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready Sir!");
});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("to your commands!", {type: "LISTENING"});
});





bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "chat").sendMessage(member.toString() + "Welcome to Small Scrims Discord!");
    member.addRole(member.guild.roles.find("name", "Scrimmer"));
});



bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;

      case "help":
    var embed = new Discord.RichEmbed()
    .addField("Help", "You are able to @ Pulse or Flip for help, or DM them.", true)
    .addField("Commands", "Here are a list of ScrimBot commands", true)
    .addField(" ", "!help", true)
    .addField(" ", "!ping", true)
    .addField(" ", "!starting", true)
    .addField("More coming soon!")
    .setColor(6812512)
    message.channel.sendEmbed(embed);
        break;

    
        case "starting":
    if(!message.member.hasPermissions())
        var embed2 = new Discord.RichEmbed()
        .addField("ScrimBot", "Scrims starting soon! @everyone", true)
        .setColor(6812512)
        message.channel.sendEmbed(embed2);
        break;

        default:
        message.channel.sendMessage("Invalid Command Sir!");
        }

});

bot.login(process.env.BOT_TOKEN);
