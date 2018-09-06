const Discord = require("discord.js");
const token = process.env.BOT_TOKEN;
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
 
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("to your commands!", {type: "LISTENING"});
});
 
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
 
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});
 
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
	const bot = new Discord.Client({disableEveryone: true});
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let banMSG = message.content.toUpperCase();
	let commandfile = bot.commands(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message.args);
	
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
		
	
	let scrimChannel3 = message.guild.channels.find(`name`, "last3-pulse");

	if(message.content && !banMSG.includes(` `) && banMSG.length < 4 && banMSG.length > 2 && !banMSG.includes(`!`) && !banMSG.includes(`.`) && !banMSG.includes(`/`)) {
	message.delete();
	}else{
	message.delete();
	}
	let code = message.content.toUpperCase();
	if(message.content === "!cls" && message.member.roles.find(r => r.name === "Scrim Staff")){
		message.channel.bulkDelete(10);

	}

	
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

		

		

	}
	   

	

	
	if(cmd === `${prefix}region`){
	message.reply("Error.");

	
	
	

	
	return;
}
});


bot.login(token);
