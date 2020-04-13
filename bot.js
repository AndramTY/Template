const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.login("SuperSecretBotTokenHere

client.login(config.token);

{
  "token": "insert-bot-token-here",
  "prefix": "!",
  "ownerID": "your-user-ID"
}

if(message.author.id !== config.ownerID) return;
