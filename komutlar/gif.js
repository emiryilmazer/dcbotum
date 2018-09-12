const Discord = require('discord.js');

exports.run = (client, message, args) => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('Kanala Girdim!');
        })
        .catch(console.log);
    } else {
      message.reply('İlk sen Gir!');
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanalagir',
  description: 'Bot İstediğiniz Kanala Giriş Yapar',
  usage: 'kanalagir'
};
