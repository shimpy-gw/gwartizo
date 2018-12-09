const Discord = require("discord.js");

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("> start singite.exe ")
    console.log("Ready");
});

bot.login(process.env.TOKEN);
