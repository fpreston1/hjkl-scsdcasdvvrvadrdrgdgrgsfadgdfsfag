const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.channel.id === "478949150340153358") return;
  
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


  
}

module.exports.help = {
  name: "nickname"
}
