const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

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
	.addField("Your level is currently", `${curlvl} 👈`, true)
	.addField("Your XP is currently", `${curxp} 👈`, true)
	.setFooter(`You only need ${difference} XP to level up!`, message.author.displayAvatarURL);
		
	message.reply(lvlEmbed);

  
}

module.exports.help = {
  name: "level"
}
