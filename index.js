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
	message.reply("Command not set - Ask Admin to set Region");

	

	
	return;
}

	if(cmd === `${prefix}iwon`) {
	message.reply("won, is this true Pulse? (Y/N)");
	if(message.content === "${prefix}yes" && message.member.hasPermissions("ADMINISTRATOR")){
	message.channel.send("Congrats to" + message.author + "for winning!");
	message.channel.send("Your score will be set on the leaderboards.");
	
	}
	
	
	return;
}



	if(cmd === `${prefix}start` && message.member.hasPermissions("ADMINISTRATOR")) {
	let startEmbed = new Discord.RichEmbed()
	.addField("Bot", "Type your last 3 digits in chat now!")
	.setColor(6812512);
	message.channel.send(startEmbed);
	message.delete().catch(O_o=>{});

	
	return;
}

	if(cmd === `${prefix}cls` && message.member.hasPermissions("ADMINISTRATOR")) {
	message.channel.bulkDelete(10);
	message.channel.send(`Cleared recent messages.`).then(msg => msg.delete(1000));
	
	return;
}

	if(cmd === `${prefix}end` && message.member.hasPermissions("ADMINISTRATOR")) {
	let endEmbed = new Discord.RichEmbed()
	.addField("Game Info", "Games have now ended, please type !iWon if you Won your Match.")
	.setColor(6812512);

	message.channel.send(endEmbed);
	
	return;
}
	
	

	if(cmd === `${prefix}hacked`) {
	let hackedEmbed = new Discord.RichEmbed()
	.addField("Hacked", "The reason the previous discord was hacked is because Pulse is an idiot and leaked the token :cry:")
	.setColor(6812512);

	message.channel.send(hackedEmbed);

	return;
}
	
	

	

	if(cmd === `${prefix}starting` && message.member.hasPermissions("ADMINISTRATOR")) {
	let startingEmbed = new Discord.RichEmbed()
	.addField("ScrimBot", "Scrims starting soon! @everyone")
	.setColor(6812512);

	message.channel.send(startingEmbed);
	
	return;
}



	if(cmd === `${prefix}invite`) {
	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "https://discord.gg/ggPntHV")
	.setColor(6812512);
	
	message.channel.send(inviteEmbed);
	
	
	return;
}

	if(cmd === `${prefix}help`) {
	
	let helpEmbed = new Discord.RichEmbed()
	.addField("Help", "You are able to @ Pulse or Flip for help.")
	.addField("Commands", "Here are a list of commands")
    	.addField("Help", "!help - You literally typed it")
    	.addField("Ping", "!ping - Command for pinging")
   	.addField("Invite", "!invite - Makes an invite")
    	.addField("Starting", "!starting - Start Scrims")
    	.addField("Region", "!region - Sets your region")
    	.addField("Report", "!report - Report a player")
    	.addField("Info", "!info - Shows your info")
    	.addField("BotInfo", "!botinfo - Shows ScrimBot info!")
    	.addField("Hacked", "!hacked - Shows important info!")
    	.addField("Clear", "!cls - Clears recent messages")
   	.setColor(6812512);

	message.channel.sendEmbed(helpEmbed);
	
	return;
}

	


	if(cmd === `${prefix}report`){
	
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


	return;
}





	if(cmd === `${prefix}info`) {

	let sicon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setColor(6812512)
	.setThumbnail(sicon)
	.addField("Server Name", message.guild.name, true)
	.addField("Created On", message.guild.createdAt, true)
	.addField("You joined", message.member.joinedAt, true)
	.addField("You", message.reply("BOOM!"), false);



	return message.channel.send(serverembed);

}


	if(cmd === `${prefix}botinfo`){
		let bicon = bot.user.displayAvatarURL;
		let botembed = new Discord.RichEmbed()
		.setDescription("Bot Information")
		.setColor(6812512)
		.setThumbnail(bicon)
		.addField("Bot Name", bot.user.username)
		.addField("Created On", bot.user.createdAt);

		return message.channel.send(botembed);

	}
});




bot.login(process.env.BOT_TOKEN);
