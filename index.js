const Discord = require("discord.js");

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setStatus("dnd");
    console.log("Ready");
});

bot.login(process.env.TOKEN);