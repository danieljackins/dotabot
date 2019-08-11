const Discord = require('discord.js');
 const client = new Discord.Client();

const dotaHelper = require('./lib/dota.js')

require('dotenv').config()

heroes = {}

client.on('ready', async() => {
  heroes = await dotaHelper.getHeroes()
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  const prefix = '!' //temp

  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 't5') {
    let reply = ""
    let result = await dotaHelper.getPlayerHeroes(args[0])
    for (let i = 0; i < 5; i++) {
      reply += 'hero: ' + heroes[result[i].hero_id].localized_name + '\n'
      reply += 'last played: ' + result[i].last_played + '\n'
      reply += 'games: ' + result[i].games + '\n'
      reply += 'wins: ' + result[i].win + '\n'
      reply += 'games with: ' + result[i].with_games + '\n'
      reply += 'wins with: ' + result[i].with_win + '\n'
      reply += 'games against: ' + result[i].against_games + '\n'
      reply += 'wins against: ' + result[i].against_win + '\n'
      reply += '\n\n\n'
    }
    msg.reply(reply)
  }
});

client.login(process.env.WRITE_KEY);