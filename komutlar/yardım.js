const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `f!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \nf!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \nf!banned = Dene ve Gör! \nf!kahkaha = Kahkaha Atarsınız \nf!herkesebendençay = Herkese Çay Alırsınız. \nf!koş = Koşarsınız.\nf!çayiç = Çay İçersiniz. \nf!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nf!çayaşekerat = Çaya Şeker Atarsınız. \nf!yumruk-at = Yumruk Atarsınız. \nf!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \nf!8ball = Sizin Kararınızı Bot Verir. \nf!stresçarkı = StresÇarkı Çevirirsiniz.`)
  .addField("**» Kullanıcı Komutları**", `f!report = İstediğiniz Kullanıcıyı Reportlarsınız. \nf!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \nf!yaz = Bota İsediğinizi Yazdırırsınız. \nf!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \nf!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \nf!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nf!avatarım = Avatarınınızı Gösterir. \nf!öneri = Önerinizi #öneri kanalına gönderir.  `)
  .addField("**» Oyun Komutları**", `f!fortnite = İstediğiniz Kullanıcının İstatistiklerine Bakarsınız.`)
  .addField("**» Sunucu Yetkilisi Komutları**", `f!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nf!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nf!unban = İstediğiniz Kişinin Yasağını Açar. \nf!sustur = İstediğiniz Kişiyi Susturur. \nf!sil = Belirtilen Miktarda Mesajı Silir. (MAX 100) \nf!oylama = Oylama Açar. \nf!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**» Botun Ana Komutları**", "f!yardım = BOT Komutlarını Atar. \nf!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nf!ping = BOT Gecikme Süresini Söyler. \nf!davet = BOT Davet Linkini Atar. \nf!istatistik = BOT İstatistiklerini Gösterir.")
  .setFooter('FreedyBot Güncel Sürüm [ BETA v0.1.3 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'f!yardım [komut]'
};
