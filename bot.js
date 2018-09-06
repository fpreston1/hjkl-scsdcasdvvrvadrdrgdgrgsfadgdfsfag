const Discord = require("discord.js");
const token = process.env.BOT_TOKEN;
const fs = require("fs");
const botconfig = require("./botconfig.json");
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
	
	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let commandfile = bot.commands.get(cmd.slice(prefix.length));
	if(commandfile) commandfile.run(bot,message,args);
	
});


bot.login(token);
