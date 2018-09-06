const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.channel.id === "478949150340153358") return;

if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "https://discord.gg/ggPntHV")
	.setColor(6812512);
	
	message.channel.send(inviteEmbed);
  
}

module.exports.help = {
  name: "invite"
}
