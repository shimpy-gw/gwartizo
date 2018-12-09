const Discord = require("discord.js");

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("je suis un gros pd sucez moi : mon id discord : TheProGameur78#7427")
    console.log("Ready");
});

bot.login(process.env.TOKEN);
