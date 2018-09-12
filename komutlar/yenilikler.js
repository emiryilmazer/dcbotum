const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Yenilikler**", `!starwars Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \nf!şanslısayım Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \nf!report Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \n!fkahkaha Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \nf!fortnite Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \n!atatürk Komutu Eklendi Bakmak İçin *f!yardım* Yazınız. \n`)

 
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeni', 'new', 'news', 'yenilikler'],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bota eklenen Yeni Komutları Ve Düzeltilen Hatalar Hakkında Bilgi Verir.',
  usage: 'yenilikler'
};
