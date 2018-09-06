const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

		if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;
    if(message.channel.id === "478949150340153358") return;

	let sicon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setColor(6812512)
	.setThumbnail(sicon)
	.addField("Server Name", message.guild.name, true)
	.addField("Created On", message.guild.createdAt, true)
	.addField("You joined", message.member.joinedAt, true)
	.addField("You", message.author, false);



	return message.channel.send(serverembed);

  
}

module.exports.help = {
  name: "info"
}
