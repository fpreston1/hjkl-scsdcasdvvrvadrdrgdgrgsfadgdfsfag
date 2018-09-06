const Discord = require("discord.js");
const Client = require("fortnite");
const fortnite = new Client(process.env.APIKEY);

module.exports.run = async (bot, message, args) => {
const fortnite = require("fortnite");
const apikey = process.env.APIKEY;
  if(message.channel.id != "482044199504707584") return;
  
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
  
}

module.exports.help = {
  name: "rankme"
}
