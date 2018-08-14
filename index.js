const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("to your commands!", {type: "LISTENING"});
});

bot.on("guildMemberAdd", function(member) {
	member.guild.channels.find("name", "chat").sendMessage(member.toString() + "Welcome to Small Scrims Discord!");
    member.addRole(member.guild.roles.find("name", "Scrimmer"));
});



bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = "!";
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	
	if(cmd === `${prefix}region`){
	message.channel.send("NA-East - Press Eggplant - NA-West - Press Clap Emoji - EU - Press Heart Emoji")
	.then(() => message.react(":eggplant:" + ":clap:" + ":heart:"))
	.catch(() => console.error("Failed"));

	
	return;
}
	
	


	if(cmd === `${prefix}hacked`) {
	let hackedEmbed = new Discord.RichEmbed()
	.addField("Hacked", "The reason the previous discord was hacked is because Pulse is an idiot and leaked the token :cry:")
	.setColor("6812512");

	message.channel.sendEmbed(hackedEmbed);

	return;
}
	
	

	

	if(cmd === `${prefix}starting` && message.member.hasPermissions()) {
	let startingEmbed = new Discord.RichEmbed()
	.addField("ScrimBot", "Scrims starting soon! @everyone")
	.setColor("6812512");

	message.channel.sendEmbed(startingEmbed);
	
	return;
}



	if(cmd === `${prefix}invite`) {
	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "Heres a fresh invite link to this discord server!", true)
	.addField("Link", "https://discord.gg/ggPntHV", true)
	.setColor("6812512");
	
	message.channel.sendEmbed(inviteEmbed);
	
	
	return;
}

	if(cmd === `${prefix}help`) {
	
	let helpEmbed = new Discord.RichEmbed()
	.addField("Help", "You are able to @ Pulse or Flip for help, you can also Direct Message them", true)
	.addField("Commands", "Here are a list of ScrimBot commands", false)
    	.addField("Help", "!help", false)
    	.addField("Ping", "!ping", false)
   	.addField("Invite", "!invite", false)
    	.addField("Starting", "!starting", false)
   	.setColor(6812512);

	message.channel.sendEmbed(helpEmbed);
	
	return;
}

	


	if(cmd === `${prefix}report`){
	
	let rUser = message.guild.member(message.mentions.users.first) || message.guild.members.get(args[0]);
	if(!rUser) return message.channel.send("Couldn't find the specified user.");
	
	let reason = args.join(" ").slice(22);

	let reportEmbed = new Discord.RichEmbed()
	.setDescription("Reports")
	.setColor("6812512")
	.addField("Reported User", `${rUser} with ID: ${rUser.id}`)
	.addField("Reported By", `${message.author} with ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", reason);

	let reportschannel = message.guild.channels.find(`name`, "reports");
	if(!reportschannel) return message.channel.send("Couldn't find reports channel");
	
	message.delete().catch(O_o=>{});
	reportschannel.send(reportEmbed);


	return;
}






	if(cmd === `${prefix}info`) {

	let sicon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setDescription("Server Information")
	.setColor("6812512")
	.setThumbnail(sicon)
	.addField("Server Name", message.guild.name)
	.addField("Created On", message.guild.createdAt)
	.addField("You joined", message.member.joinedAt);



	return message.channel.send(serverembed);

}


	if(cmd === `${prefix}botinfo`){
		let bicon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setDescription("Bot Information")
		.setColor("6812512")
		.setThumbnail(bicon)
		.addField("Bot Name", bot.user.username)
		.addField("Created On", bot.user.createdAt);

		return message.channel.send(botembed);
};




bot.login(process.env.BOT_TOKEN);})
