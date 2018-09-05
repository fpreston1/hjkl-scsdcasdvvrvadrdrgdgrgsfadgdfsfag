const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "481865517393510402") return;
message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "EU"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to EU");

  
}

module.exports.help = {
  name: "eu"
}
