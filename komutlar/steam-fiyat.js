const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nNeyCQjayl_byZgOFEHZd3ORmnl01NB1AuUk2rQi3UdD5et1sg&s"
    if (!game) return message.reply('Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: `p!steamfiyat PUBG`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Store', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField(`Oyunun ID'sı`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyati', `Nolmal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
  .setColor("#36393F")
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply('Hata Olustu Yada `' + game + '` Adlı Oyun Bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'steamfiyat',
  description: 'Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar',
  usage: '!steamfiyat PUBG'
};