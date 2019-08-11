const Discord = require('discord.js');
 const client = new Discord.Client();

require('dotenv').config()

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

 console.log(client)

client.on('message', msg => {
 if (msg.content === 'ping2') {
 msg.reply('pong');
 }
 });

client.login(process.env.WRITE_KEY);