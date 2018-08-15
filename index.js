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


const Fortnite = require("fortnite");
const stats = new Fortnite(process.env.TRN);





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
	exports.run = (client, message, args, tools) => {
	let platform;
	let username;

	if(!["pc", "xbl", "psn"].includes(args[0])) return message.channel.send("**Please include platform!: `!fortnite <platform> <name>`**");
	if(!args[1]) return message.channel.send("**Please include the username: `!fortnite [ pc | xbl | psn ] <name>`**");

	platform = args.shift();
	username = args.join(" ");

	stats.getInfo(username, platform).then( data => {
	

	const statEmbed = new Discord.RichEmbed()
	.setColor(6812512)
	.setTitle(`Stats for ${data.username}`)
	.setDescription(`**Top Placement**\n\n**Top 3s:** *${data.lifetimeStats[0].value}*\n**Top 5s** *${data.lifetimeStats[1].value}*\n**Top 6s:** *${data.lifetimeStats[3].value}*\n**Top 12s:** *${data.lifetimestats[4].value}*\n**Top 25s:** *${data.lifetimeStats[5].value*}*`, true)
	.addField("Total Score", data.lifetimeStats[6].value, true)
	.addField("Matches Played", data.lifetimeStats[7].value, true)
	.addField("Wins", data.lifetimeStats[8].value, true)
	.addField("Win Percentage", data.lifetimeStats[9].value, true)
	.addField("Kills", data.lifetimeStats[10].value, true)
	.addField("K/D", data.lifetimeStats[11].value, true)
	
	message.channel.send(statEmbed);
	
	
})

	.catch(error => {

	message.channel.send("Username not found!");
})
	
}


	return;
}

	if(cmd === `${prefix}iwon`) {
	message.reply("won, is this true Pulse? (Y/N)");
	
	
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
	let endEmbed = new Discord.RichEmbed()
	.addField("Game Info", "Games have now ended, please type !iWon if you Won your Match.")
	.setColor(6812512);

	message.channel.send(endEmbed);
	
	return;
}

	if(cmd === `${prefix}say` && message.member.hasPermissions("ADMINISTRATOR")) {
	const sayMessage = args.join(" ");
	message.delete().catch(O_o=>{});
	message.channel.send(sayMessage);
	
	
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
  	.addField("!starting", "Starting Scrims", true)
    	.addField("!ping", "Ping Command", true)
    	.addField("!cls", "Clears messages(10)", true)
   	.addField("!invite", "Makes Invite", true)
  	.addField("!start", "Start Scrims", true)
    	.addField("!report", "Report player", true)
    	.addField("!end", "End Scrims", true)
    	.addField("!info", "Show Info", true)
    	.addField("!say", "Control Bot", true)
    	.addField("!botinfo", "Show Bot Info")
    	.addField("!hacked", "Old Discord")
    	.addField("!region", "Sets ur region")
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
