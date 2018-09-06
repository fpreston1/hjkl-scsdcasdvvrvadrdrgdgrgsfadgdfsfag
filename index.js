const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const apikey = process.env.APIKEY;
const Fortnite = require("fortnite");
const YTDL = require("ytdl-core");
const opusscript = require("opusscript");
const xp = require("./xp.json");
const fs = require("fs");

// fs.readdir("./commands/", (err, files) => {
// if(err) console.log(err);
	
// 	let jsfile = files.filter(f => f.split(".").pop() === "js")
// 	if(jsfile.length <= 0){
// 	console.log("Couldnt find commands.");
// 	return;
// 	}
	
// 	jsfile.forEach((f, i) => {
// 		let props = require(`./commands/${f}`);
// 		console.log(`${f} loaded!`);
		
// 		bot.commands.set(props.help.name, props);
// 	});
// });

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
	
	let xpAdd = Math.floor(Math.random() * 7) + 8;
	
	const xp = require("./xp.json");
	if(!xp[message.author.id]){
	xp[message.author.id] = {
	xp: 0,
		level: 1
	};
	}
	
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level * 300;
	xp[message.author.id].xp = curxp + xpAdd;
	
	if(nxtLvl <= xp[message.author.id].xp){
	xp[message.author.id].level = curlvl + 1;
	let lvlup = new Discord.RichEmbed()
	.setTitle("Level Up")
	.setDescription("**You have leveled up!**")
	.addField("New Level! ✅", curlvl + 1)
	.setColor(6812512);
		
	message.reply(lvlup).then(msg => msg.delete(5000));

	}
	const fs = require("fs");
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
		
		if(err) console.log(err)
	});
	
	
	if(message.channel.id === "481865517393510402") {
		if(message.content || banMSG.includes(`!`)) {
			message.delete();
		}
	}
	if(message.channel.id === "486337146106675202" && message.member.roles.find(r => r.name === "Scrim Staff")){
		if(message.content.includes("-")){
		message.delete();
		message.channel.send("------------------------------------------");
		let servericon = bot.user.displayAvatarURL;
		let hosticon = message.author.displayAvatarURL;
		let announcement = new Discord.RichEmbed()
		.setTitle("Announcement!")
		.setThumbnail(servericon)
		.setDescription("**Join Snipe Countdown in 10 Minutes!**")
		.addField("Snipes are starting soon!", "*Be sure to join the talk channel!*", true)
		.setFooter("Please be ready", hosticon)
		.setTimestamp()
		.setColor(16760937);
			
		await message.channel.send(announcement);
			
		message.channel.send("------------------------------------------");
		}
	   
	   }
	if(message.channel.id === "482044199504707584"){
		if(message.content || banMSG.includes(`!`)){
			message.delete();
		}
	}
	
	if(message.channel.id === "478949150340153358"){
	if(message.content === "!start" && message.member.roles.find(r => r.name === "Scrim Staff")){
		message.reply("Please use the #scrim-chat channel for that!").then(msg => msg.delete(2000));
		
		return;
	   	
	   }
// 	if(message.content === "!dead"){
// 	if(!message.guild.roles.find(r => r.name === "Dead")) return;
// 	message.member.addRole(message.guild.roles.find(r => r.name === "Dead"));
// 	const channel = message.guild.channels.find("name", "scrim-last3");
// 	const oldEmbed = message.embeds[0];
		
// 		const allCodeRoles = message.guild.roles
// 		.find(r => r.name === "Dead");
// 		const SPLIT_LENGTH = 25;
// 		const splitCodeRoles = [];
// 		for(const codeRoles of splitCodeRoles) {
// 			let newEmbed = new Discord.RichEmbed()
// 			.setColor("#ff0000")
// 			.setTitle("Dead Players");
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				newEmbed.setDescription(membersString);
// 				oldEmbed.edit(newEmbed);
// 			}
// 		}	
// 	}
		
	
	let scrimChannel3 = message.guild.channels.find(`name`, "last3-pulse");

	if(message.content && !banMSG.includes(` `) && banMSG.length < 4 && banMSG.length > 2 && !banMSG.includes(`!`) && !banMSG.includes(`.`) && !banMSG.includes(`/`)) {
	message.delete();
	}else{
	message.delete();
	}
	//yeet
	let code = message.content.toUpperCase();
	if(message.content === "!cls" && message.member.roles.find(r => r.name === "Scrim Staff")){
		message.channel.bulkDelete(10);
// 		if(message.guild.roles.find(r => r.name === "Dead")){
// 		message.guild.roles.find(role => role.name === "Dead").delete("yeet");

		   
// 		   }
	}
// 	if(message.content === "!dead"){
// 	message.member.addRole(message.guild.roles.find(r => r.name === "Dead"));
// 	let members = [];
// 	if(message.guild.roles.find(r => r.name === "Dead")){
// 	message.guild.roles.find(r => r.name === "Dead").members.forEach(member =>{
// 		members.push(member.tag)
// 	});
// 	}
//  	let role = message.guild.roles.find(r => r.name === "Dead")
//  	let result = role.members.map(m => m.user.tag).join("\n")
//  	let dead = new Discord.RichEmbed()
//  	.setTitle("Dead Players")
//  	.setDescription(result)
//  	.setColor();
// 	let last3chan = message.guild.channels.find("name", "scrim-last3");
// 	last3chan.bulkDelete(1);
// 	const tm = ms => new Promise(res => setTimeout(res, ms))
// 	await tm(300);
		
// 	const allCodeRoles1 = message.guild.roles
// 		.filter(r => r.name === "Dead");
// 		const SPLIT_LENGTH1 = 25;
// 		const splitCodeRoles1 = [];
// 		for(let i = 0; i < allCodeRoles1.length; i += SPLIT_LENGTH1){
// 			splitCodeRoles1.push(allCodeRoles1.slice(i, i + SPLIT_LENGTH1));
// 		}
// 		for(const codeRoles of splitCodeRoles1) {
// 			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Dead Players");
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				eb.setDescription(membersString);
// 			}
// 		}
			
	
	
	
	
	
// 	}
	
	let scrimrole = message.guild.roles.find(`name`, code);
	if(message.member.roles.has(scrimrole)) return message.author.send("You already typed in a game code!");
	if(code.length != 3) return;
	

	let nickname = message.member.nickname;
	if(scrimrole){
	
	message.member.addRole(message.guild.roles.find("name", code))
	}
	if(!scrimrole){
		try {
			scrimrole = await message.guild.createRole({
				name: `${code}`,
				color: 6812512,
				permissions:[]
				
			})
			message.member.addRole(message.guild.roles.find("name", code));

			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(scrimrole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
				});


			});

		}catch(e){
			console.log(e.stack);
		}


		const eOut = ms => new Promise(res => setTimeout(res, ms))
		await eOut(70000);
		
		

		message.guild.roles.find(role => role.name === code).delete("yeet");
		
		
		
		
		}
// 		let arr = [1,2,3,4,5,6,7,8,9,10];
// 		const SPLIT_LENGTH = 3;
// 		const splits = [];
// 		let i = 0;
// 		for(i=0; i<arr.length; i += SPLIT_LENGTH) {
// 			splits.push(arr.slice(i, i+SPLIT_LENGTH))
// 		}
		
// 		let rolename = code;
// 		const codeRoles = message.guild.roles.filter(r => /^\w{3}$/.test(r.name));
// 		let eb = new Discord.RichEmbed()
// 		.setColor(6812512);
// 		codeRoles.forEach( role => {
// 			const membersString = role.members.map(m => m.user.tag).join("\n");
// 			eb.addField(role.name, membersString, true)
// 		})
// 		message.channel.send(eb);

		
		
// 		let rolesEmbed = new Discord.RichEmbed()
// 		.setTitle("Game Information")
// 		.addField(code ,membersWithRole.join("\n"), true)
// 		.setFooter("Hosted with Small Scrims Discord")
// 		.setTimestamp()
// 		.setColor(6812512);
		
// 		return message.channel.send(rolesEmbed);
	}
	   
// 	if(message.channel.id === "478949150340153358") {
// 	let scrimChannel3 = message.guild.channels.find(`name`, "last3-pulse");
// 	let scriml3Embed = new Discord.RichEmbed()
// 	.setTitle(message.content)
// 	.setDescription(message.author)
// 	.setFooter(message.createdAt)
// 	.setColor(6812512);
// 	if(message.content && !banMSG.includes(` `) && banMSG.length < 4 && banMSG.length > 2 && !banMSG.includes(`!`) && !banMSG.includes(`.`) && !banMSG.includes(`/`)) {
// 	scrimChannel3.send(scriml3Embed);
// 	message.delete();
// 	}else{
// 	message.delete();
// 	message.author.send("**Please ONLY send last3 Digits in the scrim-last3 Channel!**");
// 	}
// 	}
	

	
	if(cmd === `${prefix}region`){
	message.reply("Error.");

	
	
	

	
	return;
}
	if(cmd === `${prefix}nae` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "NA-E"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to NA-E");


	return;
	}
	if(cmd === `${prefix}naw` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "NA-W"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to NA-W");


	return;
	}
	if(cmd === `${prefix}eu` && message.channel.id === "481865517393510402") {
	message.member.addRole(message.guild.roles.find("name", "Ranking"));
	message.member.addRole(message.guild.roles.find("name", "EU"));
	message.member.removeRole(message.guild.roles.find("name", "Starter"));
	message.author.send("Your region has been set to EU");


	return;
	}
	if(cmd === `${prefix}helpme` && message.channel.id === "482044199504707584"){
		message.author.send("Your name and rank have not been set, please contact an admin for assistance.");
		message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		message.member.removeRole(message.guild.roles.find("name", "Ranking"));
	
	return;
	}
	
	
	if(cmd === `${prefix}nickname` && message.channel.id != "478949150340153358") {
		
		let username = args.slice(0).join(" ");
		message.delete();
		if(!username) return message.channel.send("Please enter your Fortnite name.").then(msg => msg.delete(2000));
		if(username.length > 16) return message.channel.send("Fortnite nicknames ONLY please.").then(msg => msg.delete(2000));
		if(username.includes("*")) return message.channel.send("Cant do that.").then(msg => msg.delete(2000));
		if(username.includes("[")) return message.channel.send("Cant do that.").then(msg => msg.delete(2000));
		if(username.includes("]")) return message.channel.send("Cant do that.").then(msg => msg.delete(2000));
		if(username.length < 3) return message.channel.send("Cant do that.").then(msg => msg.delete(2000));
		message.member.setNickname(username);
		message.reply(`All set! Your nickname has been changed to "${username}"`).then(msg => msg.delete(2000));
	
	return;
	}
	if(cmd === `${prefix}rankme` && message.channel.id === "482044199504707584"){
		const Client = require("fortnite");
		const fortnite = new Client(process.env.APIKEY);
		


		let username = args.slice(0).join(" ") || message.author.username;
		let platform = "pc";
		let gamemode = "solo";
		
		if(args[0] === "ninja" || args[0] === "tsm_myth" || args[0] === "tsm_hamlinz" || args[0] === "tsm_daequan") return message.author.send("Stop that!");
		
		
		if(!username) return message.reply("Please set a CORRECT fortnite nickname!, or do **!helpme**").then(msg => msg.delete(2000));
		
		
		let data = fortnite.user(username, platform).then(data => {
			let stats = data.stats;
			
			if(gamemode === `solo`) {
				let solostats = stats.solo;
				let score = solostats.score;
				let kd = solostats.kd;
				let matches = solostats.matches;
				let kills = solostats.kills;
				let wins = solostats.wins;
				let top3 = solostats.top_3;
				message.member.setNickname(username);
				if(kd >= 5 && kd < 10){
                   	 message.member.addRole(message.guild.roles.find("name", "Insane"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking"));
             	   	}else if(kd >= 10) {
				 message.member.addRole(message.guild.roles.find("name", "Pros"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking"));
				 }else if(kd >= 2 && kd < 3) {
					  message.member.addRole(message.guild.roles.find("name", "Skilled"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking"));
					  }else if(kd > 1 && kd < 2)  {
						   message.member.addRole(message.guild.roles.find("name", "Decent"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking"));
						   }else if(kd <= 1) {
							    message.member.addRole(message.guild.roles.find("name", "Noob"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking"));
							    }else if(kd >= 3 && kd < 5){
								    message.member.addRole(message.guild.roles.find("name", "Great"));
					message.member.addRole(message.guild.roles.find("name", "Scrimmer"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Ranking")); 
								     
								     }
              	 

				let soloEmbed = new Discord.RichEmbed()
				.setTitle("Fortnite Tracker Solo Stats")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins, true)
				.addField("Kills", kills, true)
				.addField("Score", score, true)
				.addField("Matches Played", matches, true)
				.addField("Top 3s", top3, true)
				.addField("KD", kd, true);


		
		
				return message.reply(" Rank set sir!").then(msg => msg.delete(2000));
			
		}
		})
	
		
	
		return;
	}
	
	
	//if(cmd === `${prefix}pee`){
	//		var servers = {};
//
//		function Play(connection, message) {
//	const YTDL = require("ytdl-core");
//
//	var server = servers[message.guild.id];
//	
//	server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
//	
//	server.queue.shift();
//	
//	server.dispatcher.on("end", function() {
//		if(server.queue[0]){
//			Play(connection, message)
//		}else{
//	 connection.disconnect();
//		}
//
//	});
//}
//
//		const YTDL = require("ytdl-core");
//	const FFMPEG = require("ffmpeg-binaries");
//	const opusscript = require("opusscript");
//		if(message.member.voiceChannel)
//		{
//			if(!message.guild.voiceConnection)
//			{
//				
//				var server = servers[message.guild.id];
//				message.member.voiceChannel.join()
//				.then(connection => {
//					var servers = {};
//					var server = servers[message.guild.id];
//					message.reply("Joined");
//					servers[message.guild.is].queue.push(args);
//					Play(connection, message);
//				})
//			}
//		}else{
//			message.reply("Please be in a voice channel");
//		}
//	
//		return;
//	}
	
	
//	if(cmd === `${prefix}pl` && message.member.hasPermissions("ADMINISTRATOR")) {
//		var servers = {};
//		function play(connection, message) {
//	const YTDL = require("ytdl-core");
//
//	var server = servers[message.guild.id];
//	
//	server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
//	
//	server.queue.shift();
//	
//	server.dispatcher.on("end", function() {
//		if(server.queue[0]) play(connection, message);
//		else connection.disconnect();
//	});
//	}
//		if(!args[0]) {
//			message.channel.send("Provide link pls");
//			return;
//		}
//		if(!message.member.voiceChannel) {
//			message.channel.send("You must be in a voice channel");
//			return;
//		}
//		if(!servers[message.guild.id]) servers[message.guild.id] = {
//			queue: []
//		};
//		var server = servers[message.guild.id];
//		
//		server.queue.push(args[0]);
//		
//		if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
//			play(connection, message);
//		});
//		
//		return;
//	}
//	if(cmd === `${prefix}st` && message.member.hasPermissions("ADMINISTRATOR")){
//		var server = servers[message.guild.id];
//		
//		if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
//		
//		return;
//	}
	
	
	


	
	if(cmd === `${prefix}test` && message.member.hasPermissions("ADMINISTRATOR")) {
	const agree = "";
	const disagree = "";

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
		var servers = {};

	
	function Play(connection, message) {
	const YTDL = require("ytdl-core");
		var server = servers[message.guild.id];
		server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
		server.queue.shift();
		server.dispatcher.on("end", function(){
		if(server.queue[0]){
		Play(connection,message);
		}else{
		connection.disconnect();
		}
		});
		
	}
	
	
	if(cmd === `${prefix}pp` && message.member.hasPermissions("ADMINISTRATOR")){
	var servers = {};
		if(message.member.voiceChannel)
		{
		if(!message.guild.voiceConnection)
		{
			if(!servers[message.guild.id]){
				
				servers[message.guild.id] = {queue: []}
			   
			   }
			
			message.member.voiceChannel.join()
			.then(connection => {
				var server = servers[message.guild.id];
				message.reply("Joined!!").then(msg => msg.delete(1000));
				server.queue.push(args[0]);
				Play(connection, message);
			})
		}
	}else{
	message.reply("You must be in a voice channel!").then(msg => msg.delete(1000));
	}
		
	return;
	}
	
// 	if(cmd === `${prefix}show` && message.member.permissions.has("ADMINISTRATOR")){
// 			const allCodeRoles = message.guild.roles
// 		.filter(r => (/^\w{3}$/).test(r.name))
// 		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
// 		.array();
// 		const SPLIT_LENGTH = 25;
// 		const splitCodeRoles = [];
// 		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
// 			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
// 		}
// 		for(const codeRoles of splitCodeRoles) {
// 			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Game Information").setFooter("Small Scrims Discord").setTimestamp();
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				eb.addField(`ID: ${role.name}`, membersString, true);
// 			}
// 			let last3chan = message.guild.channels.find(`name`, "scrim-last3");

// 			last3chan.send(eb);
			
			
// 			last3chan.overwritePermissions(message.guild.id, {
// 			SEND_MESSAGES: false
// 			})
			
// 		}
		
// 		return;
// 	}





	if(cmd === `${prefix}start` && message.member.roles.find(r => r.name === "Scrim Staff")) {
		
	
		
	//const yeetTim = ms => new Promise(res => setTimeout(res, ms))
	//await yeetTim(2000);
	//	var servers = {};
	//	if(message.member.voiceChannel)
	//	{
	//	if(!message.guild.voiceConnection)
	//	{
	//		if(!servers[message.guild.id]){
	//			
	//			servers[message.guild.id] = {queue: []}
	//		   
	//		   }
	//		
	//		message.member.voiceChannel.join()
	//		.then(connection => {
	//			var server = servers[message.guild.id];
	//			message.reply("Joined!!").then(msg => msg.delete(1000));
	//			server.queue.push(args[0] || "https://www.youtube.com/watch?v=erKU_Ro-poM&feature=youtu.be");
	//			Play(connection, message);
	//		})
	//	}
	//}else{
	//message.reply("You must be in a voice channel!").then(msg => msg.delete(1000));
	//}
		
//	await yeetTim(15000);
//	if(message.guild.voiceConnection){
//			message.guild.voiceConnection.disconnect();
//		}else{
//		message.reply("Cannot do that.").then(msg => msg.delete(2000));
//	}
//	

	
	if(message.guild.roles.find(role => role.name === "Dead")){
	message.guild.roles.find(role => role.name === "Dead").delete("oh");
	}
	let scrimlast3chan = message.guild.channels.find(`name`, "scrim-last3");
		scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: false
	})
	let nficon = bot.user.displayAvatarURL;
	let negicon = message.author.displayAvatarURL;
	let todaysDate = new Date();
	let infoScrimEmbed = new Discord.RichEmbed()
	.setTitle("Small Scrims Community Scrim Info", nficon)
	.addField("Hosted by:", message.author)
	.addField("Loading Content", "Load content by pressing `Ready` wait for Loading Content to be at 100%, then press cancel.")
	.addField("Rules:", "**Using C4, Clingers and Third Partying in top 10 are now allowed**!, please obey the rules while scrimming. Also please report players with !report, and do not publicly announce it.")
	.setFooter(`Match lead by ${message.author.username}`, negicon)
	.setTimestamp()
	.setColor(4702463);
	
	scrimlast3chan.send(infoScrimEmbed);

	
	//let startingEmbed = new Discord.RichEmbed()
	//.setTitle("Small Scrims Discord")
	//.setThumbnail(nficon)
	//.addField("Alert:", "- A scrim match is starting very soon! @everyone")
	//.addField("Instructions:", "- We will countdown from 3 sec and you will ready up on go.")
	//.setFooter(message.author.displayAvatarURL, ` Match lead by ${message.author}`)
	//.setColor(6812512);
		
	

//	scrimlast3chan.send(startingEmbed);
		

		
	
	const startTimeout = ms => new Promise(res => setTimeout(res, ms))
	await startTimeout(9000);
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})	
		
		
		
	let startEmbed = new Discord.RichEmbed()
	.setTitle("**Waiting for server IDs...**")
	.setDescription("You have 61 seconds to type your Last3!")
	.addField("Please enter the last 3 digits of your server!", "When in-game you can find this in the top left corner of your screen.")
	.setColor(6812512);
	const end3Time = Date.now() + 1000 * 61;
	const sent3Message = await scrimlast3chan.send(startEmbed);
	let now3;
	while( (now3 = Date.now()) < end3Time ) {
		let minsRemaining = (end3Time - now3) / (1000);
		minsRemaining = Math.floor(minsRemaining);
		startEmbed.setDescription(`You have *${minsRemaining}* seconds to type your Last3!`)
		sent3Message.edit(startEmbed);
		await startTimeout(5000);
	}
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})
	message.delete().catch(O_o=>{});
	const allCodeRoles = message.guild.roles
		.filter(r => (/^\w{3}$/).test(r.name))
		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
		.array();
		const SPLIT_LENGTH = 25;
		const splitCodeRoles = [];
		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
		}
		for(const codeRoles of splitCodeRoles) {
			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Game Information").setFooter(`[Live] With ${allCodeRoles.length} matches.`);
			for(const role of codeRoles) {
				const membersString = role.members.map(m => m.user.tag).join("\n");
				eb.addField(`ID: ${role.name}`, membersString, true);
			}
			let last3chan = message.guild.channels.find(`name`, "scrim-last3");

			last3chan.send(eb);
			
			last3chan.overwritePermissions(message.guild.id, {
			SEND_MESSAGES: false
			})
			
		}
		
		

		

	let nextgameEmbed = new Discord.RichEmbed()
	.setTitle("**Next snipe in approx...**")
	.setDescription("*25 Minutes*")
	.setColor(13859315);
// 	const allCodeRoles = message.guild.roles
// 		.filter(r => (/^\w{3}$/).test(r.name))
// 		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
// 		.array();
// 		const SPLIT_LENGTH = 25;
// 		const splitCodeRoles = [];
// 		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
// 			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
// 		}
// 		for(const codeRoles of splitCodeRoles) {
// 			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Game Information").setFooter(`[Live] With ${allCodeRoles.length} matches.`);
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				eb.addField(`ID: ${role.name}`, membersString, true);
// 			}
// 			let last3chan = message.guild.channels.find(`name`, "scrim-last3");

// 			last3chan.send(eb);
			
// 			last3chan.overwritePermissions(message.guild.id, {
// 			SEND_MESSAGES: false
// 			})
			
// 		}
	let last3chan = message.guild.channels.find(`name`, "scrim-last3");
	
	last3chan.overwritePermissions(message.guild.id, {
			SEND_MESSAGES: false
			})
	last3chan.send("*Chat locked...*");
		
	await startTimeout(3000);
		const agree = "";
	const disagree = "";

	let testEmbed = new Discord.RichEmbed()
	.setTitle("[Poll] Should We Restart?")
	.setDescription("Please vote below.")
	.setFooter("Note: The host will decide a restart!")
	.setColor(16097625);
	let msg = await last3chan.send(testEmbed);
	await msg.react(agree);
	msg.react(disagree);
	
	
		
		
		
	const endTime = Date.now() + 1000 * 60 * 25;
	const sentMessage = await scrimlast3chan.send(nextgameEmbed);
	let now;
// 		let dead = new Discord.RichEmbed()
// 	.setTitle("Dead Players")
// 	.setColor("#ff0000");
		
// 	last3chan.send(dead);
// 	message.guild.createRole({
// 				name: "Dead",
// 				color: "#ff0000",
// 				permissions:[]
				
// 			})
// 	last3chan.overwritePermissions("Dead", {
// 					SEND_MESSAGES: false,
// 					ADD_REACTIONS: false
// 				});
	
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
	
	if(cmd === `${prefix}leave` && message.member.hasPermission("ADMINISTRATOR")){
		if(message.guild.voiceConnection){
			message.guild.voiceConnection.disconnect();
		}else{
		message.reply("Cannot do that.").then(msg => msg.delete(2000));
		}
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
	.addField(`${args[0] || `\u200b`}`, `*${args[1] || `\u200b`}*`, true)
	.addField(`${args[2] || `\u200b`}`, `*${args[3] || `\u200b`}*`, true)
	.addField(`${args[4] || `\u200b`}`, `*${args[5] || `\u200b`}*`, true)
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

	const agree = "";
	const disagree = "";

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
				if(message.channel.id === "482044199504707584") return;

		if(message.channel.id === "481865517393510402") return;
	let hackedEmbed = new Discord.RichEmbed()
	.addField("Hacked", "The reason the previous discord was hacked is because Pulse is an idiot and leaked the token :cry:")
	.setColor(6812512);

	message.channel.send(hackedEmbed);
	
	return;
}
	if(cmd === `${prefix}fn` && message.channel.id != "478949150340153358") {
	const Client = require("fortnite");
	const fortnite = new Client(process.env.APIKEY);	
		
		
	if(message.channel.id === "482044199504707584") return;

	if(message.channel.id === "481865517393510402") return;
	
	
	let username = args.slice(1).join(" ") || message.member.nickname;
	let platform = "pc";
	let gamemode = args[0] || "lifetime";
		
	if(!args[0]) return message.reply("Format !fn <solo,duo,squad,lifetime> <username>") && message.channel.send("To set your rank type !fn solo (your fortnite name) WITHOUT the brackets!");
		

		
	
	
	if(args[0] === "help") return message.reply("Format !fn <solo, duo, squad, lifetime> <username>");
	
	if(args[0] != "lifetime" && args[0] != "solo" && args[0] != "duo" && args[0] != "squad") return message.reply("Format !fn <solo,duo,squad,lifetime> <username>");	
		
		let data = fortnite.user(username, platform).then(data => {
			let stats = data.stats;
			
			if(gamemode === `solo`) {
				let solostats = stats.solo;
				let score = solostats.score;
				let kd = solostats.kd
				let matches = solostats.matches;
				let kills = solostats.kills;
				let wins = solostats.wins;
				let player = data.username;
				
				let soloEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Solo Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true)
				.addField("Player", player, true);
// 				if(message.author.nickname === username){
// 				   if(kd >= 10){
// 					   const proRole = message.guild.roles.find(r => r.name === "Pro");
// 				      if(message.member.roles.has(proRole)){
// 					      return;
// 					 }else{
// 					 message.member.addRole(message.guild.roles.find("name", "Pro"));
// 					message.member.removeRole(message.guild.roles.find("name", "Noob"));
// 						message.member.removeRole(message.guild.roles.find("name", "Decent"));
// 						message.member.removeRole(message.guild.roles.find("name", "Great"));
// 						message.member.removeRole(message.guild.roles.find("name", "Insane"));
// 						message.member.removeRole(message.guild.roles.find("name", "Skilled"));
// 					 }
// 				      }else if(kd >= 2 && kd < 3){
// 				      const skilledRole = message.guild.roles.find(r => r.name === "Skilled");
// 					      if(message.member.roles.has(skilledRole)){
// 						 return;
// 						 }else{
// 						 message.member.addRole(message.guild.roles.find("name", "Skilled"));
// 						message.member.removeRole(message.guild.roles.find("name", "Noob"));
// 						message.member.removeRole(message.guild.roles.find("name", "Decent"));
// 						message.member.removeRole(message.guild.roles.find("name", "Great"));
// 						message.member.removeRole(message.guild.roles.find("name", "Insane"));
// 							message.member.removeRole(message.guild.roles.find("name", "Pro"));
// 						 }
// 				      }else if(kd < 2 && kd > 1){
// 					       const decentRole = message.guild.roles.find(r => r.name === "Decent");
// 					      if(message.member.roles.has(decentRole)){
// 						 return;
// 						 }else{
// 						 message.member.addRole(message.guild.roles.find("name", "Decent"));
// 						message.member.removeRole(message.guild.roles.find("name", "Noob"));
// 						message.member.removeRole(message.guild.roles.find("name", "Skilled"));
// 						message.member.removeRole(message.guild.roles.find("name", "Great"));
// 						message.member.removeRole(message.guild.roles.find("name", "Insane"));
// 							message.member.removeRole(message.guild.roles.find("name", "Pro"));
// 						 }
// 					       }else if(kd <= 1){
// 						       const noobRole = message.guild.roles.find(r => r.name === "Noob");
// 						       if(message.member.roles.has(noobRole)){
// 							  return;
// 							  }else{
// 							   message.member.addRole(message.guild.roles.find("name", "Noob"));
// 						message.member.removeRole(message.guild.roles.find("name", "Decent"));
// 						message.member.removeRole(message.guild.roles.find("name", "Skilled"));
// 						message.member.removeRole(message.guild.roles.find("name", "Great"));
// 						message.member.removeRole(message.guild.roles.find("name", "Insane"));
// 							message.member.removeRole(message.guild.roles.find("name", "Pro"));
// 							  }
							
// 							}else if(kd >= 3 && kd < 5){
// 							const greatRole = message.guild.roles.find(r => r.name === "Great");
// 								if(message.member.roles.has(greatRole)){
// 								   return;
// 								   }else{
// 								    message.member.addRole(message.guild.roles.find("name", "Great"));
// 						message.member.removeRole(message.guild.roles.find("name", "Decent"));
// 						message.member.removeRole(message.guild.roles.find("name", "Skilled"));
// 						message.member.removeRole(message.guild.roles.find("name", "Noob"));
// 						message.member.removeRole(message.guild.roles.find("name", "Insane"));
// 							message.member.removeRole(message.guild.roles.find("name", "Pro"));
// 								   }
// 							}
// 				}
				
				if(kd >= 5 && kd < 10 && username === message.member.nickname){
                   	 message.member.addRole(message.guild.roles.find("name", "Insane"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Insane**!");

             	   	}else if(kd >= 10 && username === message.member.nickname) {
				 message.member.addRole(message.guild.roles.find("name", "Pros"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Pros**!");

				 }else if(kd >= 2 && kd < 3 && username === message.member.nickname) {
					  message.member.addRole(message.guild.roles.find("name", "Skilled"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Skilled**!");
					  }else if(kd < 2 && kd > 1 && username === message.member.nickname)  {
						   message.member.addRole(message.guild.roles.find("name", "Decent"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Decent**!");
						   }else if(kd <= 1 && username === message.member.nickname) {
							    message.member.addRole(message.guild.roles.find("name", "Noob"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Great"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.author.send("Your rank has been set to **Noob**!");
							    }else if(kd >= 3 && kd < 5 && username === message.member.nickname){
								    message.member.addRole(message.guild.roles.find("name", "Great"));
		   	 message.member.removeRole(message.guild.roles.find("name", "Pros"));
			message.member.removeRole(message.guild.roles.find("name", "Insane"));
			message.member.removeRole(message.guild.roles.find("name", "Skilled"));
			message.member.removeRole(message.guild.roles.find("name", "Decent"));
			message.member.removeRole(message.guild.roles.find("name", "Noob"));
			message.author.send("Your rank has been set to **Great**!");
								     
								     }
			
			
				
				
						if(kd >= 5 && kd < 10){
				
                   	 message.reply(`${data.username} is in the **INSANE** rank!`);
             	   	}else if(kd >= 10) {
				message.reply(`${data.username} is in the **PROs** rank!`);
				 }else if(kd >= 2 && kd < 3) {
					 message.reply(`${data.username} is in the **SKILLED** rank!`);
					  }else if(kd < 2 && kd > 1)  {
						 message.reply(`${data.username} is in the **DECENT** rank!`);
						   }else if(kd <= 1) {
							  message.reply(`${data.username} is in the **NOOB** rank!`);
							    }else if(kd >= 3 && kd < 5){
								   message.reply(`${data.username} is in the **GREAT** rank!`);
								     
								     }
              	 
				
				return message.channel.send(soloEmbed);
			}else if(gamemode === `duo`){
				let duostats = stats.duo;
				let score = duostats.score;
				let kd = duostats.kd;
				let matches = duostats.matches;
				let kills = duostats.kills;
				let wins = duostats.wins;
				
				let duoEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Duo Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true);
				
				message.reply("Your rank is set based on **SOLO** stats.");
				return message.channel.send(duoEmbed);
			}else if(gamemode === `squad`) {
				let squadstats = stats.squad;
				let score = squadstats.score;
				let kd = squadstats.kd;
				let matches = squadstats.matches;
				let kills = squadstats.kills;
				let wins = squadstats.wins;
				
				let squadEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Squad Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins ,true)
				.addField("Kills", kills ,true)
				.addField("Score", score ,true)
				.addField("Matches Played", matches ,true)
				.addField("KD Ratio", kd ,true);
				
				message.reply("Your rank is set based on **SOLO** stats.");

				return message.channel.send(squadEmbed);
			}else{
				let lifetime = stats.lifetime;
				let score = lifetime[6]["Score"];
				let mplayed = lifetime[7]["Matches Played"];
				let wins = lifetime[8]["Wins"];
				let winper = lifetime[9]["Win Percentage"];
				let kills = lifetime[10]["Kills"];
				let kd = lifetime[11]["KD Ratio"];
				
				let lifetimeEmbed = new Discord.RichEmbed()
				.setTitle("**TRN Lifetime Stats**")
				.setAuthor(`Stats for ${data.username}`)
				.setColor(6812512)
				.addField("Wins", wins, true)
				.addField("Kills", kills, true)
				.addField("Score", score, true)
				.addField("Matches Played", mplayed, true)
				.addField("KD Ratio", kd, true)
				.addField("Win Percentage", winper, true);
				
				message.reply("Your rank is set based on **SOLO** stats.");

				
				return message.channel.send(lifetimeEmbed);
			}
		
								  
		}).catch(e => {
			console.log(e);
			message.channel.send("Couldnt find username!")
		});
		
				
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
		if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

	let inviteEmbed = new Discord.RichEmbed()
	.addField("Invite Link", "https://discord.gg/ggPntHV")
	.setColor(6812512);
	
	message.channel.send(inviteEmbed);
	
	
	return;
}
	

	if(cmd === `${prefix}help` && message.channel.id != "478949150340153358") {
			if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

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
    	.addField("!fn", "Tracks a user")
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


	return;
}





	if(cmd === `${prefix}info` && message.channel.id != "478949150340153358") {
		if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

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
	
	if(cmd === `${prefix}level`){
	if(args[0]) return;
	if(!xp[message.author.id]){
	xp[message.author.id] = {
		xp: 0,
		level: 1
	};
	}
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvlXp = curlvl * 300;
	let difference = nxtLvlXp - curxp;
		
	let lvlEmbed = new Discord.RichEmbed()
	.setColor(7239035)
	.setTitle(`**Hey ${message.author.username}!**`)
	.setDescription("This is a level system based on chatter.")
	.addField("Your level is currently", `${curlvl} `, true)
	.addField("Your XP is currently", `${curxp} `, true)
	.setFooter(`You only need ${difference} XP to level up!`, message.author.displayAvatarURL);
		
	message.reply(lvlEmbed);
		
		
		
		
		return;
	}
	
	if(cmd === `${prefix}t`){
	let error = new Discord.RichEmbed()
	.setTitle("Invalid Usage!")
	.setDescription("Correct Usage: *!t kick | !t invite | !t create | !t disband | !t join | !t leave*")
	.addField("**NOTE:**", "Remember, for this to work properly, please set a nickname, with !nickname (your fortnite name) without brackets.")
	.setColor(6812512);
	if(!args[0]) return message.reply(error);   
	if(args[0] === "create"){
	if(message.member.nickname.includes("[" && "]")){
	message.reply("You are already in a team!");
		return;
	}
	if(!args[1]) return;
	if(args[1].length <= 3) return message.reply("More than 3 letters please.");
	if(args[1].includes("nigg")) return message.reply("Stop that!");
	if(args[1]){
	message.member.setNickname(`[*${args[1].toUpperCase()}] ${message.member.nickname}`);
	message.reply(`Team ${args[1]} Created!`);
	}
	
	}
	if(args[0] === "disband"){
	if(!args[1]) return message.reply("Please use !t disband (team name) without brackets.");
	if(!message.member.nickname.includes(`${args[1].toUpperCase()}]`)) return message.reply("Cant do that.");
	if(message.member.nickname.includes("[" && args[1] && "*")){
	if(args[1]){
	message.member.setNickname(message.member.nickname.split(/ +/g).splice(1).join(" "));
	message.reply(`You have disbanded **${args[1].toUpperCase()}**`);
	
	}else{
	return message.reply("!t disband (team name) without brackets!");
	}
	}
	}
	if(args[0] === "invite"){
	let ruser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
	if(!ruser) return message.reply("Please select a person to invite");
		
	if(ruser){
	ruser.addRole(message.guild.roles.find("name", "Invited"));
	message.reply(`${ruser} has been invited.`).then(msg => msg.delete(20000));
	message.reply(`${ruser}, you have 20 seconds to do !t join (team name) without brackets`).then(msg => msg.delete(20000));
	const tm = ms => new Promise(res => setTimeout(res, ms))
	await tm(20000);
	ruser.removeRole(message.guild.roles.find("name", "Invited"));
	}
	
	}
	//if(args[0] === "join" && args[1] > 3 && message.member.roles.has(message.guild.roles.find("name", "Invited"))){
	//if(message.member.nickname.includes("[")) return message.reply("You are already in a team.");
	//if(!args[1]) return message.reply("!t join (team name) without brackets.");
	//message.member.setNickname(`[${args[1].toUpperCase()}] ${message.member.nickname}`);
	//message.reply(`You have joined ${args[1].toUpperCase()}`);
	//}
	if(args[0] === "kick"){
	if(!args[2]) return message.reply("Try !t kick (@user) (team) without brackets.");
	let ruser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
	if(ruser) return message.reply("Try !t kick (@user) (team) without brackets.");
	if(args[0] === "kick" && ruser && args[2]){
	if(ruser.nickname.includes("[") && ruser.nickname.includes(args[2].toUpperCase())){
	ruser.setNickname(message.member.nickname.split(/ +/g).splice(2).join(" "));
	message.reply(`${ruser} has been kicked from ${args[2]}`);
	}
	}
	}
	if(args[0] === "join"){
	let invited = message.guild.roles.find(r => r.name === "Invited");
	if(!message.member.nickname) return message.reply("Please set a nickname with !nickname (fortnite name) without brackets.");
	if(!args[1]) return message.reply("!t join (team name) without brackets.");
	if(message.member.nickname.includes("[")) return message.reply("You are in a team, do !t disband or !t leave");
	if(!message.member.roles.find(r => r.name === "Invited")) return message.reply("Sorry, i cant do that.");
	if(args[1].length > 3){
	message.member.setNickname(`[${args[1].toUpperCase()}] ${message.member.nickname}`);
	message.reply(`You have joined ${args[1].toUpperCase()}`);
	message.member.removeRole(message.guild.roles.find(r => r.name === "Invited"));
	
	}else{
	message.reply("Error.");
	}
	}
	if(args[0] === "leave"){
	
	if(!args[1]) return message.reply("Usage !t leave (team name) without brackets.");
	
	if(!message.member.nickname.includes(`${args[1]}]`)) return message.reply("You cannot leave a team that you're not in.");
	if(message.member.nickname.includes("*")) return message.reply("The owner of a team must use !t disband");
		
	message.member.setNickname(message.member.nickname.split(/ +/g).splice(1).join(" "));
	message.reply(`You have left **${args[1]}**.`);
	
	
	}

		
		
	   return;
	   }
	
	if(cmd === `${prefix}team`){
	message.reply("Please use !t");
	
	}
	
// 	if(cmd === `${prefix}dead` && message.channel.id === "478949150340153358"){
// 	message.member.addRole(message.guild.roles.find(r => r.name === "Dead"));
// 	let members = [];
// 	message.guild.roles.find(r => r.name === "Dead").members.forEach(member =>{
// 		members.push(member.tag)
// 	});
// 	let result = members.join("\n")
// 	let dead = new Discord.RichEmbed()
// 	.setTitle("Dead Players")
// 	.setDescription(result)
// 	.setColor();
		
	
// 	let last3chan = message.guild.channels.find("name", "scrim-last3");
// 	last3chan.bulkDelete(1);
// 	const tm = ms => new Promise(res => setTimeout(res, ms))
// 	await tm(300);
	
// 	last3chan.send(dead);
	
// 	return;
// 	}
	
// 	if(cmd === `${prefix}dead`){
// 		if(message.channel.id != "478949150340153358") return;
// 		if(!message.guild.roles.find(r => r.name === "Dead")) return;
// 	   	message.member.addRole(message.guild.roles.find(r => r.name === "Dead"));
// 		const channel = message.guild.channels.find("name", "scrim-last3");
// 		const oldEmbed = message.embeds[0];
		
// 		const allCodeRoles = message.guild.roles
// 		.filter(r => r.name === "Dead");
// 		const SPLIT_LENGTH = 25;
// 		const splitCodeRoles = [];
// 		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
// 			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
// 		}
// 		for(const codeRoles of splitCodeRoles) {
// 			let newEmbed = new Discord.RichEmbed()
// 			.setColor("#ff0000")
// 			.setTitle("Dead Players");
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				newEmbed.setDescription(membersString);
// 				oldEmbed.edit(newEmbed);
// 			}
// 		}	
	

		
		
		
// 	   return;
// 	   }
	
	



	if(cmd === `${prefix}botinfo` && message.channel.id != "478949150340153358"){
				if(message.channel.id === "481865517393510402") return;
		if(message.channel.id === "482044199504707584") return;

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
