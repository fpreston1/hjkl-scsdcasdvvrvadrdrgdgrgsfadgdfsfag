const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id != "482044199504707584") return;
 message.author.send("Your name and rank have not been set, please contact an admin for assistance.");
		message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		message.member.removeRole(message.guild.roles.find("name", "Ranking"));

  
}

module.exports.help = {
  name: "helpme"
}
