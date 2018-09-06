
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.id === "478949150340153358") return;
	if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

	let helpEmbed = new Discord.RichEmbed()
	.addField("Commands", "User Commands", true)
	.addField("Other", "Commands", true)
    	.addField("!help", "Help Command", true)
   	.addField("!invite", "Makes Invite", true)
    	.addField("!report", "Report player", true)
    	.addField("!info", "Show Info", true)
    	.addField("!fn", "Tracks a user")
	.setFooter("You executed the !help command with ScrimBot!")
   	.setColor(6812512);

	message.channel.sendEmbed(helpEmbed);
  
}

module.exports.help = {
  name: "help"
}
