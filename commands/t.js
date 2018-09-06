const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
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
  
}

module.exports.help = {
  name: "t"
}
