require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.includes("among")) {
    msg.reply('Im Here');
    msg.channel.send('Exist');

  } 
  else if(msg.content.includes("gay") && msg.mentions.users.first().id == '570370084426612746'){
    msg.channel.send("Attention" + msg.mentions.users.first() );
  }
  else if (msg.content.includes("gay")) {
      msg.channel.send('btabi3t l7al ' +msg.mentions.users.first() +'Hello');
  }
  
  else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
