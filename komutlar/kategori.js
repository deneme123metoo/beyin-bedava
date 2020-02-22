const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(':x: Bu Komutu Kullanabilmek İçin `Kanalları Yönet` Yetkisine Sahip Olman Gerek');
    if (kanal.length < 1) return message.reply(':x:Oluşturmak İstediğin Kategorinin Adını Yazmalısın');
  message.delete();
  guild.createChannel(kanal, 'category');
  message.channel.send(":x: Kategori Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanal-aç'],
  permLevel: 3 // PermLevelini Kendi botuna göre ayarla
};

exports.help = {
  name: 'kategori-oluştur',
  description: 'Bir ses kanalı açar',
  usage: 'kategori-oluştur'
};