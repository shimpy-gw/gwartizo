const Discord = require("discord.js");

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("Si tu lis cela, abonne toi à Fortnite *EN* France ")
    console.log("Ready");
});

bot.login(process.env.TOKEN);
