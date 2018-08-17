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

	if(cmd === `${prefix}fortnite`) {
	message.reply("BOOM!");
	const apikey = require(process.env.APIKEY);
	const fortnite = require("fortnite");
	const ft = new Fortnite(process.env.APIKEY);
	
	let username = args[0]
	let platform = args[1] || "pc";

	let data = ft.getInfo(username, platform).then(data => {

		let stats = data.lifetimeStats;

		let kills = stats.find(s => s.stat == "kills");
		let wins = stats.find(s => s.stat == "wins");
		let kd = stats.find(s => s.stat == "kd");
		let mPlayed = stats.find(s => s.stat == "matchesPlayed");
		let tPlayed = stats.find(s => s.stat == "timePlayed");

		let fortniteEmbed = new Discord.RichEmbed()
		.setTitle("Fortnite Stats")
		.setAuthor(data.username)
		.setColor()
		.addField("Kills", kills.value, true)
		.addField("Wins", wins.value, true)
		.addField("KD", kd.value, true)
		.addField("Matches Played", mPlayed.value, true)
		.addField("Time Played", tPlayed.value, true);

		message.channel.send(fortniteEmbed);

	
	}).catch(e => {
	console.log(e);
	message.channel.send("Couldnt find user");
	});
	
	return;
}

	if(cmd === `${prefix}iwon`) {
	message.reply("won, is this true? (Y/N)");
	
	
	return;
}
	
	if(cmd === `${prefix}test`) {
	const agree = "👍";
	const disagree = "👎";

	let testEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("Should we restart?")
	.setFooter("Note: The host will decide a restart!")
	.setColor(6812512);
	let msg = await message.channel.send(testEmbed);
	await msg.react(agree);
	await msg.react(disagree);
		
	

	const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 15000});
	let gaymanEmbed = new Discord.RichEmbed()
	.setTitle("Voting Completed!")
	.setDescription("Here are the results!")
	.addField("\u200b", `${agree}:  ${reactions.get(agree).count-1}`)
	.addField("\u200b", `${disagree}:  ${reactions.get(disagree).count-1}`)
	.setColor(6812512);
	
	message.channel.send(gaymanEmbed);
		
	


	
	return;
}


	if(cmd === `${prefix}yes` && message.member.hasPermissions("ADMINISTRATOR")){
	message.channel.send("Congrats on the win! Your stats will be displayed on the leaderboards!");
	
	return;
}

	if(cmd === `${prefix}no` && message.member.hasPermissions("ADMINISTRATOR")) {
	message.channel.send("Please do not lie about wins, this will get you banned.");
	
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
	message.channel.bulkDelete(10);
	message.channel.send(`Scrims Ended....`).then(msg => msg.delete(1000));
	let endEmbed = new Discord.RichEmbed()
	.addField("Game Info", "Games have now ended, please type !iWon if you Won your Match.")
	.setColor(6812512);

	message.channel.send(endEmbed);

		
	return;
}

	

	if(cmd === `${prefix}last3` && message.member.hasPermissions("ADMINISTRATOR")) {

	let last3chan = message.guild.channels.find(`name`, "scrim-last3");
	let sayEmbed = new Discord.RichEmbed()
	.setTitle("Game Info")
	.addField(`ID: ${args[0]}`, args[1])
	.setFooter("Scrims hosted by Small Scrims Discord")
	.setColor(6812512);

	last3chan.send(sayEmbed);
	message.delete()
	.catch(console.error);

	last3chan.send("Chat is now locked...");



	
	return;
}

	if(cmd === `${prefix}ac` && message.member.hasPermissions("ADMINISTRATOR")) {
	let acEmbed = new Discord.RichEmbed()
	.setTitle("Admin Commands")
    	.addField(" ", "!last3")
  	.addField(" ", "!starting")
    	.addField(" ", "!cls")
  	.addField(" ", "!start")
    	.addField(" ", "!say")
   	.addField(" ", "!end")
   	.addField(" ", "!restart")
	.setFooter("All commands made by Pulse")
   	.setColor(6812512);

	message.channel.send(acEmbed);
	
	
	return;
}

	if(cmd === `${prefix}restart` && message.member.hasPermissions("ADMINISTRATOR")) {
	message.channel.bulkDelete(4);
	message.channel.send("Matches will now restart!").then(msg => msg.delete(10000));
	return;
}

	if(cmd === `${prefix}say` && message.member.hasPermissions("ADMINISTRATOR")) {
	
	
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
	.addField("Commands", "User Commands", true)
	.addField("Other", "Commands", true)
    	.addField("!help", "Help Command", true)
    	.addField("!ping", "Ping Command", true)
   	.addField("!invite", "Makes Invite", true)
    	.addField("!report", "Report player", true)
    	.addField("!info", "Show Info", true)
    	.addField("!botinfo", "Show Bot Info")
    	.addField("!hacked", "Old Discord")
    	.addField("!region", "Sets ur region")
    	.addField("!fortnite", "Tracks a user")
	.setFooter("You executed the !help command with ScrimBot!")
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
	.addField("You", message.author, false);



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
