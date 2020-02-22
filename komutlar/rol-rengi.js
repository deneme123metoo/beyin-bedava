const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  let prefix = ayarlar.prefix
   let rol = message.mentions.roles.first()
   if (!rol) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir Rol Belirt ${client.emoji.carpi}\n Örnek Kullanım ${prefix}rolrengi @rol rolkodu\n Rol Kodunun Başına # Koymayın`).setColor('black'));
   let renk = args.slice(1).join(' ')
   if (!renk) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Bir Renk Kodu belirtmelisin${client.emoji.carpi}\n Örnek Kullanım ${prefix}rolrengi @rol rolkodu\n Renk Kodunun başına # Koymayın`).setColor('black'));
   message.guild.roles.get(rol.id).setColor(renk)
  message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Başarıyla rol rengi #${renk} olarak ayarlandı${client.emoji.okey}`).setColor(renk));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rolrenk'],
    permLevel: 4,
    kategori: 'bot'
};

exports.help = {
    name: 'rolrengi',
    description: 'Rolun Rengini Değiştirir',
    usage: 'rolrengi @rol renkkodu'
}