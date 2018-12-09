const Discord = require("discord.js");

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("pornhub.com | best free porn videos")
    console.log("Ready");
});

bot.login(process.env.TOKEN);
