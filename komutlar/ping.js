const Discord = require("discord.js");

exports.run = function(client, message, args) {
  message.channel.send("**:timer: Ping Ölçülüyor..**").then(function(i) {
    i.edit("**:timer: Ping Yazılıyor..**");
    message.edit(2 * 2500);
    i.edit(
      new Discord.RichEmbed()
        .setDescription(
          `\n${client.emojis.get(
          "638675170659139584"
          )} **Dikkat!** Ping gecikmesi sürekli değişiklik gösterebilir.` +
            `\n${client.emojis.get("672441573090263060")} Ping: ` +
            client.ping
        )
        .setColor("GREEN")
    );
  });
};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "ping", //Komutun adı (Komutu girerken lazım olucak)
  description: "Botun gecikme süresini gösterir", //Komutun Açıklaması
  category: "bot", // Komutun olduğu kategori. kategoriler: bot-yetkili-ayar-kullanıcı-eğlence
  usage: "ping" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};
