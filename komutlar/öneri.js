const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let öneri = args.join("679778130654789729").slice(0)
  
    const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setThumbnail(message.author.avatarURL)
    .setTitle("Yeni bir öneri var!")
    .addField(`Öneri`, öneri)
    .setFooter(`${message.author.tag} tarafından önerildi. ID'si: ${message.author.id}`)
  if (öneri.length > 1024) return message.channel.send("API izin vermediği için mesajınızı gönderemiyorum.")
  if (öneri.length < 1) {
    message.channel.send("Lütfen önerinizi giriniz.")
  } else {
    const a = await db.fetch(`oneri_${message.guild.id}`)
    const b = client.channels.get(a)
      if (!a) {
        message.channel.send("Lütfen önce bir kanal ayarla.")
      } else {
        b.send(embed)
      }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "öneri",
  usage: "öneri"
};