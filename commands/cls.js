const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.permissions.has("ADMINISTRATOR")) return;
  
  message.channel.bulkDelete(10);
	message.channel.send(`Cleared recent messages.`).then(msg => msg.delete(1000));

  
}

module.exports.help = {
  name: "cls"
}
