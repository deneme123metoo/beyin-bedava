const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Gerekli yetkiye sahip değilsin. ");
  if(!args[0] || args[0 == "yardım"]) return message.reply("Kullanımı: `!prefix <Yeni prefix>`");

  let prefixes = JSON.parse(fs.readFileSync("./ayarlar/prefix.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./ayarlar/prefix.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  
  message.channel.send(`Prefix \`${args[0]}\` olarak ayarlandı!`)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix','prefixayarla','prefix-değiştir','prefixdeğiştir'],
  permLevel: 3
};

exports.help = {
  name: 'prefix-ayarla',
  description: 'prefix-ayarla',
  usage: 'prefix-ayarla'
};