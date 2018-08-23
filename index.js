const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const apikey = process.env.APIKEY;
const Fortnite = require("fortnite");



bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("to your commands!", {type: "LISTENING"});
});

//bot.on("guildMemberAdd", member) {
//	   member.addRole(bot.guild.roles.find("name", "Starter"));
//
//	member.guild.channels.find("name", "choose-region").sendMessage(member.toString() + " Please choose your region here!");
//	member.guild.channels.find("name", "choose-platform").sendMessage(member.toString() + " Please choose your platform!");
//	const starterrankTime = ms => new Promise(res => setTimeout(res, ms))
//	await starterrankTime(20);
//	let chooseregion = message.guild.channels.find(`name`, "choose-region");
//	chooseregion.bulkDelete(1);
//	let chooseplatform = message.guild.channels.find(`name`, "choose-platform");
//	chooseplatform.bulkDelete(1);
//
//		
//});

bot.on('guildMemberAdd', member => {
		let platChannel = member.guild.channels.find('name', 'choose-platform');
		var role = member.guild.roles.find('name', 'Starter');

	
	member.addRole(role);
	
	member.guild.channels.find('name', 'choose-platform').sendMessage(member.toString() + " Set platform!");
	platChannel.bulkDelete(1);
	

	

});




bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = "!";
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let banMSG = message.content.toUpperCase();
	if(message.channel.id === "481865517393510402") {
		if(message.content || banMSG.includes(`!`)) {
			message.delete();
		}
	}
	if(message.channel.id === "478949150340153358") {
	let scrimChannel3 = message.guild.channels.find(`name`, "last3-pulse");
	let scriml3Embed = new Discord.RichEmbed()
	.setTitle(message.content)
	.setDescription(message.author)
	.setFooter(message.createdAt)
	.setColor(6812512);
	if(message.content && !banMSG.includes(` `) && banMSG.length < 4 && banMSG.length > 2 && !banMSG.includes(`!`) && !banMSG.includes(`.`) && !banMSG.includes(`/`)) {
	scrimChannel3.send(scriml3Embed);
	message.delete();
	}else{
	message.delete();
	message.author.send("**Please ONLY send last3 Digits in the scrim-last3 Channel!**");
	}
	}
	

	
	if(cmd === `${prefix}region`){
	message.reply("Error.");

	
	
	

	
	return;
}
	if(cmd === `${prefix}nae` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
	message.member.addRole(message.guild.roles.find("name", "NAE"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to NAE");


	return;
	}
	if(cmd === `${prefix}naw` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
	message.member.addRole(message.guild.roles.find("name", "NAW"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to NAW");


	return;
	}
	if(cmd === `${prefix}eu` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
	message.member.addRole(message.guild.roles.find("name", "EU"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to EU");


	return;
	}
	if(cmd === `${prefix}nickname` && message.channel.id != "478949150340153358") {
		if(!args[0]) return message.channel.send("Please enter your Fortnite name.");
		if(args[0].length > 16) return message.channel.send("Fortnite nicknames ONLY please.");
		message.member.setNickname(args[0]);
		message.reply(` All set! Your nickname has been changed to "${args[0]}"`);
	return;
	}
	if(cmd === `${prefix}ftest`) {
		const Fortnite = require("fortnite");
		const fkey = process.env.APIKEY;
		const fortnite = new Fortnite(fkey);
		
		let username = args[0];
		let platform = args[2].toLowerCase() || "pc";
		if(!username) return message.reply("Please enter a username!");
		let data = fortnite.user(username, platform).then(data => {
			let stats = data.stats;
			
			let lifetime = stats.lifetime;
			let score = lifetime[6]["Score"];
			let mplayed = lifetime[7]["Matches Played"];
			let wins = lifetime[8]["Wins"];
			let winper = lifetime[9]["Win %"];
			let kills = lifetime[10]["Kills"];
			let kd = lifetime[11]["KD"];
			
			let ftestEmbed = new Discord.RichEmbed()
			.setTitle("Fortnite Lifetime Stats")
			.setAuthor(data.username)
			.setColor(6812512)
			.addField("Wins", wins, true)
			.addField("Kills", kills, true)
			.addField("Score", score, true)
			.addField("Matches Played", mplayed, true)
			.addField("KD Ratio", kd, true)
			.addField("Win Percentage", winper, true);
			
			return message.channel.send(ftestEmbed);
		})
		
		
		return;
	}
	
	if(cmd === `${prefix}fn`) {
		const Fortnite = require('fortnite');
		const apikey = process.env.APIKEY;
		let ft = new Fortnite(apikey);

		message.delete();
		
		
		let username = args[0];
		let platform = args[1] || "pc";
	

		let data = ft.user(username, platform).then(data => {
			let stats = data.lifetimeStats;
			let kills = stats.find(s => s.stat == 'kills');
			let wins = stats.find(s => s.stat == 'wins');
			let kd = stats.find(s => s.stat == 'kd');
			let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
			let tPlayed = stats.find(s => s.stat == 'timePlayed');
			let asTime = stats.find(s => s.stat == 'avgSurvivalTime');
			
			let fntEmbed = new Discord.RichEmbed()
			.setTitle("Fortnite Stats")
			.setAuthor(data.username)
			.setColor(6812512)
			.addField("Kills", kills.value, true)
			.addField("Wins", wins.value, true)
			.addField("KD", kd.value, true)
			.addField("Matches Played", mPlayed.value, true)
			.addField("Time Played", tPlayed.value, true)
			.addField("Average Survival Time", asTime.value, true);
			
			message.channel.send(fntEmbed);
			
		}).catch(e => {
			console.log(e);
			message.channel.send("Couldn't find user");
		});

		
		return;
	}

//	if(cmd === `${prefix}fortnite` && message.member.hasPermissions("ADMINISTRATOR")) {
//	let platform;
//	let username;
//
//	if(!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send("**Please include the platform < pc xbox psn >**");
//	if(!args[1]) return message.channel.send("**Please include the username**");
//
//	platform = args.shift();
//	username = args.join(' ');
//	const Fortnite = require('fortnite');
//
//	const stats = new Fortnite(process.env.APIKEY);
//
//	stats.getInfo(username, platform).then( data => { 
//	const fnEmbed = new Discord.RichEmbed()
//	.addField('Top Placement', `**Top 3s:** *${data.lifetimeStats[0].value}*\n**Top 5s** *${data.lifetimeStats[1].value}*\n**Top6s:** *${data.lifetimeStats[3].value}*\n**Top 12s:** *${data.lifetimeStats[4].value}*\n**Top 25s:** *${data.lifetimeStats[5].value}*`)
//	.addField('Total Score', data.lifetimeStats[6].value)
//	.addField('Matches Played', data.lifetimeStats[7].value, true)
//	.addField('Wins', data.lifetimeStats[8].value, true)
//	.addField('Win Percentage', data.lifetimeStats[9].value, true)
//	.addField('Kills', data.lifetimeStats[10].value, true)
//	.addField('KD', data.lifetimeStats[11].value, true)
//	.addField('Kills Per Minute', data.lifetimeStats[12].value, true)
//	.addField('Time Played', data.lifetimeStats[13].value, true)
//	.addField('Average Survival Time', data.lifetimeStats[14].value, true)
//	.setColor(6812512);
//		
//	message.channel.send(fnEmbed);
//	})
//
//	.catch(error => {
//	message.channel.send('Username not found!');
//	})
//	return;
//}


	
	if(cmd === `${prefix}test` && message.member.hasPermissions("ADMINISTRATOR")) {
	const agree = "👍";
	const disagree = "👎";

	let testEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("Should we restart?")
	.setFooter("Note: The host will decide a restart!")
	.setColor(6812512);
	let msg = await message.channel.send(testEmbed);
	await msg.react(agree);
	msg.react(disagree);
		
	

	const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 20000});
	let gaymanEmbed = new Discord.RichEmbed()
	.setTitle("Voting Completed!")
	.setDescription("Here are the results!")
	.addField("\u200b", `${agree}:  ${reactions.get(agree).count-1}`)
	.addField("\u200b", `${disagree}:  ${reactions.get(disagree).count-1}`)
	.setColor(6812512);
	
	message.channel.send(gaymanEmbed);
		
		
		
	if(reactions.get(agree) >= reactions.get(disagree)) {
	let agEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("Majority would like a restart, it is up to the host for games to reset, please wait.")
	.setFooter("Poll completed")
	.setColor(6812512);
		
	message.channel.send(agEmbed);
	}else{
	let disEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("The match will NOT restart!")
	.setFooter("Poll completed")
	.setColor(6812512);
		
	message.channel.send(disEmbed);
}
		
	


	
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
		

	
	let scrimlast3chan = message.guild.channels.find(`name`, "scrim-last3");
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})
	scrimlast3chan.send("*Chat is now unlocked!*");
	let nficon = bot.user.displayAvatarURL;
	let negicon = message.author.displayAvatarURL;
	let todaysDate = new Date();
	let infoScrimEmbed = new Discord.RichEmbed()
	.setTitle("Small Scrims Community Scrim Info", nficon)
	.addField("Hosted by:", message.author)
	.addField("Loading Content", "Load content by pressing `Ready` wait for Loading Content to be at 100%, then press cancel.")
	.addField("Rules:", "Using C4, Clingers and Third Partying in top 10 are bannable, please obey the rules while scrimming. Also please report players with !report, and do not publicly announce it.")
	.setFooter(`Match lead by ${message.author.username}`, negicon)
	.setTimestamp()
	.setColor(4702463);
	
	scrimlast3chan.send(infoScrimEmbed);

	
	//let startingEmbed = new Discord.RichEmbed()
	//.setTitle("Small Scrims Discord")
	//.setThumbnail(nficon)
	//.addField("Alert:", "- A scrim match is starting very soon! @everyone")
	//.addField("Instructions:", "- We will countdown from 3 sec and you will ready up on go.")
	//.setFooter(message.author.displayAvatarURL, `🔴 Match lead by ${message.author}`)
	//.setColor(6812512);
		
	

//	scrimlast3chan.send(startingEmbed);
		

		
	
	const startTimeout = ms => new Promise(res => setTimeout(res, ms))
	await startTimeout(9000);
		
		
		
		
	let startEmbed = new Discord.RichEmbed()
	.setTitle("**Waiting for server IDs...**")
	.addField("Please enter the last 3 digits of your server!", "When in-game you can find this in the top left corner of your screen.")
	.setColor(6812512);
	scrimlast3chan.send(startEmbed);
	message.delete().catch(O_o=>{});
		
	await startTimeout(15000);
	let nextgameEmbed = new Discord.RichEmbed()
	.setTitle("**Next snipe in approx...**")
	.setDescription("*25 Minutes*")
	.setColor(13859315);
	
		
	const endTime = Date.now() + 1000 * 60 * 25;
	const sentMessage = await scrimlast3chan.send(nextgameEmbed);
	let now;
	while( (now = Date.now()) < endTime ) {
		let minsRemaining = (endTime - now) / (1000 * 60);
		minsRemaining = Math.floor(minsRemaining);
		nextgameEmbed.setDescription(`*${minsRemaining} Minutes.*`)
		sentMessage.edit(nextgameEmbed);
		await startTimeout(1000 * 60);
	}
		
	
	return;
}

	if(cmd === `${prefix}cls` && message.member.hasPermissions("ADMINISTRATOR")) {
	message.channel.bulkDelete(10);
	message.channel.send(`Cleared recent messages.`).then(msg => msg.delete(1000));
	
	return;
}


	//if(cmd === `${prefix}end` && message.member.hasPermissions("ADMINISTRATOR")) {
	//message.channel.bulkDelete(10);
	//message.channel.send(`Scrims Ended....`).then(msg => msg.delete(1000));
	//let endEmbed = new Discord.RichEmbed()
	//.addField("Game Info", "Games have now ended, please type !iWon if you Won your Match.")
	//.setColor(6812512);

	//message.channel.send(endEmbed);

	//message.channel.overwritePermissions(message.guild.id, {
	//SEND_MESSAGES: true
	//})
	//message.channel.send("*Chat is now unlocked!*");
		
	
		
	//return;
//}
	

	

	if(cmd === `${prefix}last3` && message.member.hasPermissions("ADMINISTRATOR")) {

	let last3chan = message.guild.channels.find(`name`, "scrim-last3");
	let sayEmbed = new Discord.RichEmbed()
	.setTitle("Current Servers:")
	.addField(`${args[0] || `\u200b`}`, `*${args[1] || `\u200b`}*`)
	.addField(`${args[2] || `\u200b`}`, `*${args[3] || `\u200b`}*`)
	.addField(`${args[4] || `\u200b`}`, `*${args[5] || `\u200b`}*`)
	.addField(`${args[6] || `\u200b`}`, `*${args[7] || `\u200b`}*`, true)
	.addField(`${args[8] || `\u200b`}`, `*${args[9] || `\u200b`}*`, true)
	.addField(`${args[10] || `\u200b`}`, `*${args[11] || `\u200b`}*`, true)
	.addField(`${args[12] || `\u200b`}`, `*${args[13] || `\u200b`}*`, true)
	.addField(`${args[14] || `\u200b`}`, `*${args[15] || `\u200b`}*`, true)
	.setFooter("Scrims hosted by Small Scrims Discord")
	.setColor(13328335);

	last3chan.send(sayEmbed);
	message.delete()
	.catch(console.error);
		
	let memeout = ms => new Promise(res => setTimeout(res, ms))
	await memeout(2000);
	last3chan.send("*Chat locked...*");
	
	
		
	last3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: false
	})
		
	const timeout = ms => new Promise(res => setTimeout(res, ms))
	await timeout(7000);

	const agree = "👍";
	const disagree = "👎";

	let testEmbed = new Discord.RichEmbed()
	.setTitle("[Poll] Should We Restart?")
	.setDescription("Please vote below.")
	.setFooter("Note: The host will decide a restart!")
	.setColor(16097625);
	let msg = await last3chan.send(testEmbed);
	await msg.react(agree);
	msg.react(disagree);
		
	

	const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 20000});
	let gaymanEmbed = new Discord.RichEmbed()
	.setTitle("Voting Completed!")
	.setDescription("Here are the results!")
	.addField("\u200b", `${agree}:  ${reactions.get(agree).count-1}`, true)
	.addField("\u200b", `${disagree}:  ${reactions.get(disagree).count-1}`, true)
	.setColor(2124763);
	
	last3chan.send(gaymanEmbed);

	
	
		
	if(reactions.get(agree).count >= reactions.get(disagree).count) {
	let agEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("The games will not restart unless the host does !restart")
	.setFooter("Poll completed")
	.setColor(6812512);
		
	last3chan.send(agEmbed);
		
	}else if(reactions.get(disagree) >= reactions.get(agree)){
	let disEmbed = new Discord.RichEmbed()
	.setTitle("[Poll]")
	.setDescription("The match will NOT restart!")
	.setFooter("Poll completed")
	.setColor(6812512);
		
	last3chan.send(disEmbed);
		

}
		
	const tm = ms => new Promise(res => setTimeout(res, ms))
	await tm(7000);
	last3chan.bulkDelete(2);
		
	

		
	
		



	
	return;
}

	if(cmd === `${prefix}ac` && message.member.hasPermissions("ADMINISTRATOR")) {
	let acEmbed = new Discord.RichEmbed()
	.setTitle("Admin Commands")
    	.addField("\u200b", "!last3")
  	.addField("\u200b", "!starting")
    	.addField("\u200b", "!cls")
  	.addField("\u200b", "!start")
    	.addField("\u200b", "!say")
   	.addField("\u200b", "!end")
   	.addField("\u200b", "!restart")
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
	let lastchann = message.guild.channels.find(`name`, "scrim-last3");
	let ksenfEmbed = new Discord.RichEmbed()
	.setTitle("Game Info")
	.addField(`ID: ${args[0]}`, args[1])
	.setFooter("Scrims hosted by Small Scrims Discord")
	.setColor(13328335);

	lastchann.send(ksenfEmbed);
	message.delete()
	.catch(console.error);
	
	return;	
}	

	if(cmd === `${prefix}hacked` && message.channel.id != "478949150340153358") {
	let hackedEmbed = new Discord.RichEmbed()
	.addField("Hacked", "The reason the previous discord was hacked is because Pulse is an idiot and leaked the token :cry:")
	.setColor(6812512);

	message.channel.send(hackedEmbed);

	return;
}
	
	

	

//	if(cmd === `${prefix}starting` && message.member.hasPermissions("ADMINISTRATOR")) {
//	let nficon = bot.user.displayAvatarURL;
//	let startingEmbed = new Discord.RichEmbed()
//	.setTitle("Small Scrims Discord")
//	.setThumbnail(nficon)
//	.addField("Alert!", "A scrim match is starting very soon! @everyone")
//	.addField("Instructions", "In the Snipe Countdown channel, a countdown will be held, press Ready on go.")
//	.setFooter(`Match hosted by ${message.author} >> Today at ${message.createdAt}`)
//	.setColor(6812512);

//	message.channel.send(startingEmbed);
	
//	return;
//}



	if(cmd === `${prefix}invite` && message.channel.id != "478949150340153358") {
	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "https://discord.gg/ggPntHV")
	.setColor(6812512);
	
	message.channel.send(inviteEmbed);
	
	
	return;
}

	if(cmd === `${prefix}help` && message.channel.id != "478949150340153358") {
	
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
	
	//if(cmd === `${prefix}l3`) {
	//let lastUser = args[0];
	//if(!lastUser) return;
	
	//let lasttEmbed = new Discord.RichEmbed()
	//.setTitle(`${lastUser}`)
	//.setDescription(`${message.author}`)
	//.setColor(6812512);



	//let lastChannel = message.guild.channels.find(`name`, "last3-pulse");
	//if(!lastChannel) return message.channel.send("Couldn't find channel");
	
	//message.delete().catch(O_o=>{});
	//lastChannel.send(lasttEmbed);

	//return;
//}

	


	if(cmd === `${prefix}report` && message.channel.id != "478949150340153358"){
	
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





	if(cmd === `${prefix}info` && message.channel.id != "478949150340153358") {

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


	if(cmd === `${prefix}botinfo` && message.channel.id != "478949150340153358"){
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
