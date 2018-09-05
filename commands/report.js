const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "481865517393510402") return;
	if(message.channel.id === "482044199504707584") return;

	let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!rUser) return message.channel.send("Couldn't find the specified user.");
	
	let reason = args.join(" ").slice(22);

	let reportEmbed = new Discord.RichEmbed()
	.setDescription("Reports")
	.setColor(6812512)
	.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
	.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", reason);


	let reportschannel = message.guild.channels.find(`name`, "reports");
	if(!reportschannel) return message.channel.send("Couldn't find reports channel");
	
	message.delete().catch(O_o=>{});
	message.reply("Your report has been sent!");
	reportschannel.send(reportEmbed);
  
  
}

module.exports.help = {
  name: "report"
}
