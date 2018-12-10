const Discord = require('discord.js');
var prefix = "m!";

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Le bot est prêt");
});

bot.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['https://'] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
    }
});

bot.on('message', async message => {
    //1 blacklisted words
    let blacklisted = ['http://'] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
    }
});

var bannedwords = "enculer,pd,ntm,salope,fdp,pedale,nique,nike".split(",");

bot.on("message", msg => {
    if (msg.guild === null) return;
  
    for (i=0;i<bannedwords.length;i++) {
      if (msg.content.toLowerCase().includes(bannedwords[i])) {
        msg.delete();
        return;
      }
    }
  });

  var deletedwords = "fortnite france".split(",");

  bot.on("message", msg => {
      if (msg.guild === null) return;
    
      for (i=0;i<deletedwords.length;i++) {
        if (msg.content.toLowerCase().includes(deletedwords[i])) {
          msg.delete();
          return;
        }
      }
    });

bot.login(process.env.TOKEN);
