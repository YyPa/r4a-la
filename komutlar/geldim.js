const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("Hoşgeldin.")
  }
  else {
    msg.reply("Artık ismin değişti.")
     msg.member.setNickname(`${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan çıkmanı sağlar.',
  usage: '.geldim'
};
